import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import SubmitTask from './SubmitTask';
import Header from './Header';
import DisplayTask from './DisplayTask';

type Task = {
  task: string;
  id: number;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div className="bg-white w-[25rem] h-[30rem] rounded-sm shadow-md">
      <Header />
      <SubmitTask tasks={tasks} setTasks={setTasks} />
      <DisplayTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
