import './CoreConcept.css'
export default function CoreConcept (props) {  //react function accept only 1 parameter 
  return (
    <li class = "coreconcept_list_element">
      <img src = {props.image} class = "concept_img" alt = {props.title}></img>
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </li>
  );
}