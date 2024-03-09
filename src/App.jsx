import React from 'react';

import "./App.css"

import {core_concept} from './data.js';
import Title from './components/Title/Title.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Profile from './components/Profile/Profile.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

export function App() {
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
        <section id = "example">
            <TabButton>Meine Bildung</TabButton>
            <TabButton>Programmiersprachen</TabButton>
        </section>
      </div>
  );
}



