//import CoreConcept from '../../components/CoreConcept/CoreConcept.jsx';
import "./TabButton.css"
export default function TabButton({children}) {
  function handleClick() {
    console.log("Hello")
  }
  return (
  <div class = "tab_button">
    <li class = "tab_li"><button onClick={handleClick}>{children}</button></li>
  </div>
  );
}