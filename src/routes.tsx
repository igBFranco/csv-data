import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./common/context/DataContext";
import Home from "./pages/Home";

export default function AppRouter() {
    return(
        <Router>
            <DataProvider>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </DataProvider>
        </Router>
    );
}