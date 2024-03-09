import { useState } from 'react';

import "./App.css"

import {core_concept} from './data.js';
import Title from './components/Title/Title.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Profile from './components/Profile/Profile.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { EXAMPLES } from './data.js';


export function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <h2 id = "warningMessage">Please click a Button to understand me 😁</h2>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
      </div>
    ); 
  }

  return (
    <div className="App">
        <Title />
        <Profile />
        <section id = "core-concept">
          <ul id= "test_list_core_concept">
            <CoreConcept 
              title = {core_concept[0].title} //all here will be passed into "props" object which is set as parameter from above function, example: now props obj will have property named "title"
              description = {core_concept[0].description}
              image = {core_concept[0].image}
            />
            <CoreConcept 
              {...core_concept[1]}  //u can use this, much shorter, quicker
            />
            <CoreConcept {...core_concept[2]}/>
            <CoreConcept {...core_concept[3]}/>
            <CoreConcept {...core_concept[4]}/>
          </ul>
        </section>
        <menu>
          <TabButton onSelect = {() => handleSelect("Button1")}>Meine Bildung</TabButton>
          <TabButton onSelect = {() => handleSelect("Button2")}>Programmiersprachen</TabButton> 
          <TabButton onSelect = {() => handleSelect("Button3")}>Meine Hobbys</TabButton> 
          <TabButton onSelect = {() => handleSelect("Button4")}>Meine Erfahrung</TabButton> 
        </menu>
        {tabContent}
      </div>
  );
}



