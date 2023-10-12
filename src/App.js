import './App.css';
import Navbar from './Components/header/Navbar';
import Intro from './Components/main/Intro';
import Courses from './Components/main/Courses';
import Footer from './Components/main/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar courses={false} />
      <Intro />
      <Courses />
      <Footer />
    </div>
  );
}