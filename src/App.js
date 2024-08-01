import './App.css';
import { useState } from 'react';
import List from './List';
import { data } from './data';

function App() {
  const [people, setPeople] = useState(data);
  function toggleList(){
    if(people.length > 0){setPeople([])} else setPeople(data);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => toggleList()}>{people.length > 0 ? 'Clear All' : 'Retrive Data'}</button>
      </section>
    </main>
  );
}

export default App;
