import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Signin from "./routes/Signin/Signin";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='/sign-in' element={<Signin />} />
            </Route>
        </Routes>
    );
}

export default App;
