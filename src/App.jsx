import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import Page from "./Layout/Page";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <Page />
      </div>
    </TaskProvider>
  );
}

export default App;
