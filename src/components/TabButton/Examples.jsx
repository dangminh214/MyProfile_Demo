import { useState } from "react";
import { EXAMPLES } from '../../data.js';
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'
import './TabButton.css'

import TabButton from './TabButton.jsx';

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState();
      function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
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
        ) 
      }
  return (
    <Section title="Some more details about me" id = "title" className = "">
      <Tabs
        buttonsContainer = "menu"
        buttons = {
          <>
            <TabButton 
              isSelected = {selectedTopic === 'Button1'} 
              onClick = {() => handleSelect("Button1")}>
                Meine Bildung
            </TabButton>
            <TabButton 
              isSelected = {selectedTopic === 'Button2'} 
              onClick = {() => handleSelect("Button2")}>
                Programmiersprachen
            </TabButton> 
            <TabButton 
              isSelected = {selectedTopic === 'Button3'} 
              onClick = {() => handleSelect("Button3")}>
                Meine Hobbys
            </TabButton> 
            <TabButton 
              isSelected = {selectedTopic === 'Button4'} 
              onClick = {() => handleSelect("Button4")}>
                Meine Erfahrung
            </TabButton>
          </>
        } 
      />
      {tabContent}
    </Section>  
  );
}