import Directory from "./components/directory/Directory";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home />/>
        </Routes>
    );
}

export default App;
