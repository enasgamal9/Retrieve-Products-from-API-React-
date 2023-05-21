import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router = {Routes}/>
    </>
  );
}

export default App;