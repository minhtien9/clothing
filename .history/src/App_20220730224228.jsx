import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index path='/home' element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
