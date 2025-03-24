import '@fortawesome/fontawesome-free/css/all.min.css';

const SubmitTask = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-sky-400 bg-[#262626] mr-4 pt-3 pb-3 pl-4 pr-4 rounded-full drop-shadow-md shadow-md cursor-pointer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <form action="">
        <input
          className="text-white placeholder:text-white bg-[#262626] focus:outline-hidden pt-3 pb-3 pl-4 pr-4 rounded-sm drop-shadow-md shadow-md"
          type="text"
          placeholder="E.g. Workout"
          name="task"
        />
      </form>
    </div>
  );
};

export default SubmitTask;
