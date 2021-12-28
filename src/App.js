
import NavBar from "./Components/NavBar/NavBar"
import Introduction from "./Components/Introduction/Introduction"
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import ContactMe from "./Components/ContactMe/ContactMe";
function App() {
  return (
    <div className="overflow-y-hidden">
        <NavBar />
        
        <Introduction/>
        <AboutMe/>
        <Resume/>
        <ContactMe/>
        
    </div>
  );
}

export default App;
