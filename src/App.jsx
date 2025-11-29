import { useState } from "react";

import MainView from "./sections/mainView/MainView";

import "./App.scss";
import MobileNav from "./sections/mobileNav/MobileNav";

function App() {
  return (
    <>
      <MobileNav />
      <MainView />
    </>
  );
}

export default App;
