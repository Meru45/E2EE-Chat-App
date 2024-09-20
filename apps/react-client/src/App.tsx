import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/login"} element={<LoginForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
