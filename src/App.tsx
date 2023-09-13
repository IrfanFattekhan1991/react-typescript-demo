
import './App.css';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import Demo from './components/Demo';

function App() {
  const person={
    firstName:"Irfan",
    LastName:"Fattekhan"
  }
  const personList=[{
    first:"Irfan",
    last:"Fattekhan"
  },
  {
    first:"Ziya",
    last:"Fattekhan"
  }]
  return (
    <div className="App">
      {/* <Greet name='Ziya' age={3} isLoggedIn={true}/>
      <Person name={person}/>
      <PersonList names={personList}/> */}
      {/* <Status status='error'/> */}
      <Heading>PlaceHolder text</Heading>
    </div>
  );
}

export default App;
