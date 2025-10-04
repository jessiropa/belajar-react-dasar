import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function Welcome(props){
  return <h1>Hallo, {props.name}</h1>
}

function UserCard(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Umur : {props.age}</p>
    </div>
  );
}

function UserCard1({name, age}){
  return (
    <div>
      <h2>{name}</h2>
      <p>Umur : {age}</p>
    </div>
  );
}

function App() {

  const name = "Jessi Kristin";

  return (
  //  <div>
  //   <h1>hello, {name}!</h1>
  //   <p>Aku lagi belajar react pertama kali</p>
  //  </div>
  <div>
    <Welcome name="Jessi"/>
    <Welcome name="Karin"/>
    <Welcome name="Hinata"/>
    <Welcome name="Hirate"/>
    <UserCard name="Bambang" age={30}/>
    <UserCard name="Siti" age={28}/>
  </div>
  );
}

export default App
