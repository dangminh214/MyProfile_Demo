//import CoreConcept from '../../components/CoreConcept/CoreConcept.jsx';
import "./TabButton.css"
export default function TabButton({children, onSelect}) {
  return (
  <div className = "tab_button">
    <li className = "tab_li"><button onClick={onSelect}>{children}</button></li>
  </div>
  );
}