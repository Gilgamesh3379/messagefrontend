import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<ChatRoom/>}/>
        </Routes>
      <button className={"btn btn-danger"}>
        Submit</button>
    </div>
  );
}

export default App;
