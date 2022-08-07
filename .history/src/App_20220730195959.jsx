import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";

function App() {
    return (
        <Routes>
            <Route>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
