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
      <Person name='Rahman' class= '6' ></Person>
      <Person name='Karim' class= '7' ></Person>
      <Person name='Maruf' class= '8' ></Person>
      <Person name='Mim' class= '9' ></Person>
      <Person name='Rahman' class= '10' ></Person>
      <Friend name= 'Hazrat Mohammud (S)' person='shes nobi'></Friend>
      <Friend name= 'Mohammud(s)' person='piyo nobi'></Friend>
      <Friend name= 'Adum (a)' person='First nobi'></Friend>
      
      
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='persongrid'>
      <div className='person'>
        <h1>{props.name}</h1>
        <p>Class: {props.class}</p>
    </div>
   
    </div>
  )
}

function Friend (props) {

  return (
    <div className='persongrid'>
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Person:{props.person} </p>
    </div>
   
    </div>
  ) 
}
export default App;
