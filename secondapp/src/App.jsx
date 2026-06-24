import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Homeclass from "./Classcomponents/Homeclass";
import Aboutclass from "./Classcomponents/Aboutclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greeting from "./Greeting";

function App() {
  let name = "MD AFFAN ANWAR";
  let profession = "Frontend Developer";
  return (
    <>
      <h1>Hello Everyone!</h1>
      <h3>Welcome to React!!!</h3>

      <Home />
      <Homeclass />
      <About />
      <Aboutclass />
      <Contact />
      <Contactclass />
      <Greeting fn={name} profession={profession} favcolor="Black , White"/>
    </>
  );
}

export default App;