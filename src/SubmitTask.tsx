import { JSX } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SubmitTask = (): JSX.Element => {
  const handleSubmit = (formData: FormData): void => {
    const task: FormDataEntryValue | null = formData.get('task');
    console.log(task);
  };

  return (
    <div className="flex items-center justify-center">
      <form action={handleSubmit}>
        <button className="text-white bg-dark-gray mr-4 pt-3 pb-3 pl-4 pr-4 rounded-full drop-shadow-md shadow-md cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          className="text-white placeholder:text-white bg-dark-gray focus:outline-hidden pt-3 pb-3 pl-4 pr-4 rounded-sm drop-shadow-md shadow-md"
          type="text"
          placeholder="E.g. Workout"
          name="task"
        />
      </form>
    </div>
  );
};

export default SubmitTask;
