import componentImg from './assets/testImg1.jpg';
import componentImg2 from './assets/testImg2.jpg';
import myselfImageAtGermany from './assets/meAtGermany.jpg';
import pizzaShopWebEWA from './assets/pizzaShopWebEWA.jpg';
import htv_image from './assets/htvgmbh.jpg';

export const CORE_CONCEPTS = [
  {
    title: "Wow... Grundschule",
    description: "Ich habe Schachspiel viel gelernt und einen großeen Wettbewerb teilgenommen",
    image: componentImg
  },
  {
    title: "Dann... Oberschule", 
    description: "Ich bin auf Mathematik spezialisiert und an der Chu Van An Oberschule gelernt, (Chu Van Highschool for gifted Student) An der Oberschule habe ich viel Rubik selbst gelernt und spielen",
    image: componentImg2
  },
  {
    title: "Studieren in Deutschland",
    description: "Ab 19 Jahre alt studiere ich in Deutschland (nach 3 Jahren habe ich Deutsch gelernt)",
    image: myselfImageAtGermany
  },
  {
    title: "Wie und was studiere ich ?",
    description: "Ich habe Studienkolleg in einem Jahr studiert und danach habe ich an der HDa im Fachbereich Informatik studiert",
    image: pizzaShopWebEWA
  },
  {
    title: "Ich arbeite im Bereich FrontEnd und Datenbank",
    description: "Seit dem 2023 habe ich Werkstudent im HTV Gmbh, ein Halbleiter und Vertriebs-Gmbh, auch ein Teil von der TÜV Gruppe gearbeitet. Ich habe im Frontend und Datenbank gesorgt",
    image: htv_image
  }
]

export const EXAMPLES = {
  Button1: {
    title: 'Meine Bildung',
    description:
      'Fachbereich Informatik an der Hochschule Darmstadt',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Button2: {
    title: 'Programmiersprachen',
    description:
      'C++/Java/Pyton/Javascript/HTML/CSS mit Node.js, React.js, OpenCV2, Numpy',
    code: `
function Programmieren(props) {
  let programmiersprachen = ['C++', 'Python', 'Java', 'Javascript', 'HTML', 'React.js', 'Node.js]
  return programmiersprachen.push('OpenCV2');
}`,
  },
  Button3: {
    title: 'Meine Hobbys',
    description:
      'Programmieren, studieren sowie lernen, Film sehen, Billard spielen, Frenden unterhalten',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
  Button4: {
    title: 'Meine Erfahrung',
    description:
      'Ich habe über FrontEnd und Datenbank an der HTV Gmbh (ein Teil von TÜV Gruppe) gearbeitet, da benutzte ich Javascript mit JQuerry und SQL',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
}