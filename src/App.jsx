import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function Welcome(){
  return <h1>Hallo, ini adalah component Welcome!</h1>
}

function App() {

  const name = "Jessi Kristin";

  return (
  //  <div>
  //   <h1>hello, {name}!</h1>
  //   <p>Aku lagi belajar react pertama kali</p>
  //  </div>
  <div>
    <Welcome/>
    <Welcome/>
    <Welcome/>
    <Welcome/>
  </div>
  );
}

export default App
