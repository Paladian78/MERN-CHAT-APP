import { Button, Divider } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chats" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;
