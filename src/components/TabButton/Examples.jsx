import { useState } from "react";
import { EXAMPLES } from '../../data.js';
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
    <section>
      <menu>
        <TabButton 
          isSelected = {selectedTopic === 'Button1'} 
          onSelect = {() => handleSelect("Button1")}>
            Meine Bildung
        </TabButton>
        <TabButton 
          isSelected = {selectedTopic === 'Button2'} 
          onSelect = {() => handleSelect("Button2")}>
            Programmiersprachen
        </TabButton> 
        <TabButton 
          isSelected = {selectedTopic === 'Button3'} 
          onSelect = {() => handleSelect("Button3")}>
            Meine Hobbys
        </TabButton> 
        <TabButton 
          isSelected = {selectedTopic === 'Button4'} 
          onSelect = {() => handleSelect("Button4")}>
            Meine Erfahrung
        </TabButton> 
      </menu>
      {tabContent}
    </section>  
  );
}