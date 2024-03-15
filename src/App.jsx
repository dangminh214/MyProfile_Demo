import "./App.css"

import Title from './components/Title/Title.jsx';
import Profile from './components/Profile/Profile.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/TabButton/Examples.jsx';

export function App() {
  return (
    <>
      <section id = "main">
        <Title />
        <Profile />
        <CoreConcepts />
        <Examples />
            {/* <CoreConcept 
              title = {core_concept[0].title} //all here will be passed into "props" object which is set as parameter from above function, example: now props obj will have property named "title"
              description = {core_concept[0].description}
              image = {core_concept[0].image}
            />
            <CoreConcept 
              {...core_concept[1]}  //u can use this, much shorter, quicker
            />
            <CoreConcept {...core_concept[2]}/>
            <CoreConcept {...core_concept[3]}/>
            <CoreConcept {...core_concept[4]}/> */}
      </section>
    </>
  );
}
