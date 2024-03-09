import React from 'react';

import "./App.css"

import profilePic from './assets/profile_picture.jpg'
import {core_concept} from './data.js';


const reactDescription = ['gutaussehend', 'bereit zu lernen' , 'Neu Idee', 'Viel Energie', 'Voller Inspiration für die Arbeit'];

let lastRandomNumber = -1;

function getRandomInt (max) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max + 1));
  }
  while (randomNumber === lastRandomNumber);
  lastRandomNumber = randomNumber;
  console.log(lastRandomNumber)
  return randomNumber;
}

export function Title() {
  const adj = reactDescription[getRandomInt(reactDescription.length - 1)]
  return (
    <div id="open">
      <h1 id = "title">Hallo alle, ich heiße Minh, vielen Dank an alle für den Besuch meines Profils </h1>
      <h2>Wie fühle ich mich heute ? Heute fühle ich mich {adj}"</h2>
      <h3> *ändert sich jedes Mal, wenn die Seite neu geladen wird, probieren Sie bitten F5 😁*</h3>
    </div>
  );
}

export function Profile() {
  const profileInfo = {
    name: "Dang Minh Nguyen",
    alter: 24,
    ort: "Darmstadt",
    bio: "Ein Informatik Student an der HDa, interssiere mich an FrontEnd und Webentwicklung"
  };

  return (
      <section className="profile">
        <img src={profilePic} alt="Profile" id="profile_image" />
        <div className="profile-info">
          <h2>{profileInfo.name}</h2>
          <p>Age: {profileInfo.alter}</p>
          <p>Location: {profileInfo.ort}</p>
          <p>Bio: {profileInfo.bio}</p>
        </div>
      </section>
    );
}

function CoreConcept (props) {  //react function accept only 1 parameter 
  return (
    <li class = "coreconcept_list_element">
      <img src = {props.image} class = "concept_img" alt = {props.title}></img>
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </li>
  );
}

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
      </div>
  );
}



