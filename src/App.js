import MainSec from "./pages/MainSec";
import SideBar from "./pages/Sidebar";

function App() {
  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>
      <div className="flex-auto ml-10">
        <MainSec />
      </div>
    </div>
  );
}

export default App;
