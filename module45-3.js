// similar in loop similar in data

import logo from './logo.svg';
import './App.css';
//my create
const number = 55555;
const singer = {name: 'Manna', job: 'singer'}
const singer2 = {name:'Eva Rahman', job:'Singer2'}

// custom css
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '10px'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      
      
    </div>
  );
}
function Person(){
  return (
    <div className='persongrid'>
      <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    <div className='person'>
        <h1>Sakib Al Hasan</h1>
        <p>Profession: Cricket</p>
    </div>
    </div>
  )
}

function Friend () {
  return (
    <div className='persongrid'>
    <div className='container'>
      <h1>Name: Hazrat Mohammud (S)</h1>
      <p>Person: Nobi </p>
    </div>
    <div className='container'>
      <h1>Name: Hazrat Mohammud (S)</h1>
      <p>Person: Nobi </p>
    </div>
    <div className='container'>
      <h1>Name: Hazrat Mohammud (S)</h1>
      <p>Person: Nobi </p>
    </div>
    </div>
  ) 
}
export default App;
