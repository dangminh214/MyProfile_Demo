import './Title.css';
const reactDescription = ['gutaussehend', 'bereit zu lernen' , 'Neu Idee', 'Viel Energie', 'Voller Inspiration für die Arbeit'];

let lastRandomNumber = -1;

function getRandomInt (max) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max + 1));
  }
  while (randomNumber === lastRandomNumber);
  lastRandomNumber = randomNumber;
  return randomNumber;
}

export default function Title() {
  const adj = reactDescription[getRandomInt(reactDescription.length - 1)]
  return (
    <div id="open">
      <h1 id = "title">Hallo alle, ich heiße Minh, vielen Dank an alle für den Besuch meines Profils </h1>
      <h2>Wie fühle ich mich heute ? Heute fühle ich mich {adj}"</h2>
      <h3> *ändert sich jedes Mal, wenn die Seite neu geladen wird, probieren Sie bitten F5 😁*</h3>
    </div>
  );
}