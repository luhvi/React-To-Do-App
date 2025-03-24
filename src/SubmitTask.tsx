import { JSX } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

type Task = {
  task: string;
  id: number;
};

const SubmitTask = ({ tasks, setTasks }: Props): JSX.Element => {
  const handleSubmit = (formData: FormData): void => {
    const task: FormDataEntryValue | null = formData.get('task');
    if (task !== '' && typeof task === 'string') {
      if (task.length <= 25) {
        if (tasks.length <= 5) {
          addTask(task);
        } else {
          console.log('Max of 5 tasks has been exceeded.');
        }
      } else {
        console.log('Task exceeds 25 characters.');
      }
    } else {
      console.log("Task wasn't found.");
    }
  };

  const addTask = (task: string): void => {
    setTasks((prevTasks) => [...prevTasks, { task: task, id: tasks.length }]);
  };

  return (
    <div className="flex items-center justify-center mb-[0.25rem]">
      <form action={handleSubmit}>
        <button className="bg-red-400 mr-4 pt-3 pb-3 pl-4 pr-4 rounded-full shadow-md cursor-pointer">
          <i className="fa-solid fa-magnifying-glass text-white drop-shadow-md"></i>
        </button>
        <input
          className="text-white placeholder:text-gray bg-dark-gray focus:outline-hidden pt-3 pb-3 pl-4 pr-4 rounded-sm drop-shadow-md shadow-md"
          type="text"
          placeholder="enter task..."
          name="task"
        />
      </form>
    </div>
  );
};

export default SubmitTask;
