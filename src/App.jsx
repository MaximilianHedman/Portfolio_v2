import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import About from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />

                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<ProjectDetails />} />
                </Routes>

                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App