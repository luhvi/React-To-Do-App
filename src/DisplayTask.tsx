import { JSX } from 'react';
import { useState } from 'react';
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

const DisplayTask = ({ tasks, setTasks }: Props): JSX.Element => {
  const [editingTaskIds, setEditingTaskIds] = useState<Set<number>>(new Set());

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSubmit =
    (id: number) =>
    (formData: FormData): void => {
      const updatedTask: FormDataEntryValue | null = formData.get('editTask');
      if (updatedTask !== '' && typeof updatedTask === 'string') {
        if (updatedTask.length <= 25) {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.id === id
                ? {
                    ...task,
                    task: updatedTask,
                  }
                : task
            )
          );
          setEditingTaskIds((prevEditingTask) => {
            const newSet = new Set(prevEditingTask);
            newSet.delete(id);
            return newSet;
          });
        } else {
          console.log('Task exceeds 25 characters.');
        }
      } else {
        console.log("Task wasn't found.");
      }
    };

  const toggleEdit = (id: number) => {
    setEditingTaskIds((prevEditingTask) => {
      const newSet = new Set(prevEditingTask);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const tasksMap = tasks.map((task: Task) => (
    <div key={task.id}>
      <div className="flex items-center justify-center mt-[0.75rem]">
        {editingTaskIds.has(task.id) ? (
          <form action={handleSubmit(task.id)}>
            <input
              className="text-white bg-dark-gray focus:outline-hidden placeholder:text-gray mr-[0.75rem] w-[8rem] pl-[0.5rem] pt-[0.25rem] pb-[0.25rem] drop-shadow-md shadow-md rounded-xs"
              type="text"
              placeholder="edit task..."
              name="editTask"
            />
          </form>
        ) : (
          <p className="text-white bg-dark-gray mr-[0.75rem] pr-[1rem] pl-[1rem] pt-[0.25rem] pb-[0.25rem] drop-shadow-md shadow-md rounded-xs">
            {task.task}
          </p>
        )}
        <button
          className="bg-red-400 mr-[0.75rem] pt-2 pb-2 pl-[0.85rem] pr-[0.85rem] rounded-full shadow-md cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          <i className="fa-solid fa-xmark text-white drop-shadow-md"></i>
        </button>

        <button
          className="bg-red-400 pt-2 pb-2 pl-3 pr-3 rounded-full shadow-md cursor-pointer"
          onClick={() => toggleEdit(task.id)}
        >
          <i className="fa-solid fa-pencil text-white drop-shadow-md"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 place-items-center gap-[0.25rem]">
      {tasksMap}
    </div>
  );
};

export default DisplayTask;
