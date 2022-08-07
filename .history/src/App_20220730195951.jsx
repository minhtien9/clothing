import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";

function App() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
        </Routes>
    );
}

export default App;
