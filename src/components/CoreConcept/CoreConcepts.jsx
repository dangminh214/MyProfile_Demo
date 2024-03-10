import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from '../../data.js'
export default function CoreConcepts () {
  return (
    <section id = "core-concept">
      <ul id= "test_list_core_concept">
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key = {conceptItem.title} {...conceptItem} /> )}
      </ul>
    </section>
  );
}