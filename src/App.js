import './App.css';
import Navbar from './Components/header/Navbar';
import Home from './Components/home/Home';
import Language from './Components/languages/Language';
import ComingSoon from './ComingSoon';
import ComingSoonInner from './ComingSoonInner';
import JavaPrograms from './Components/JavaPrograms/JavaPrograms';
import Program from './Components/JavaPrograms/Program';

export default function App() {
  return (
    <div className="App">
      <Navbar courses={true} course="Java"/>
      {/* <Home /> */}
      {/* <Language /> */}
      {/* <ComingSoon /> */}
      {/* <ComingSoonInner /> */}
      {/* <JavaPrograms /> */}
      <Program />
    </div>
  );
}