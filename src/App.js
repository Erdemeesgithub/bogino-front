import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div>
      {/* <UserProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
