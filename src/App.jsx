import MainView from "./sections/mainView/MainView";

import "./App.scss";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <>
      <Loader />
      <MainView />
    </>
  );
}

export default App;
