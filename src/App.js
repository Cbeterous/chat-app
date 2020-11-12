import React from 'react';
import './App.css';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact online={true} name='Jessie Alexander' avatar='https://randomuser.me/api/portraits/men/0.jpg'></Contact>
      <Contact online={false} name='Lynn Stevens' avatar='https://randomuser.me/api/portraits/women/81.jpg'></Contact>
      <Contact online={false} name='Jim Sutton' avatar='https://randomuser.me/api/portraits/men/48.jpg'></Contact>
    </div>
  );
}

export default App;
