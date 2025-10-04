import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
// import { useState } from 'react'

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

  // const name = "Jessi Kristin";
  const [message, setMessage] = useState("Hello, React!");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Belajar React", "Belajar JSX"]);
  const addTodo = () => {
    setTodos([...todos, "Belajar State"]);
  }

  return (
    // menampilkan nama dengan menggunakan props
  //  <div>
  //   <h1>hello, {name}!</h1>
  //   <p>Aku lagi belajar react pertama kali</p>
  //  </div>
  // <div>
  //   <Welcome name="Jessi"/>
  //   <Welcome name="Karin"/>
  //   <Welcome name="Hinata"/>
  //   <Welcome name="Hirate"/>
  //   <UserCard name="Bambang" age={30}/>
  //   <UserCard name="Siti" age={28}/>
  //   <UserCard1 name="Bambang" age={30}/>
  //   <UserCard1 name="Siti" age={28}/>
  // </div>

  // mengubah data menggunakan usestate dan state
    <div>
      {/* mengubah data lewat klik button - state dasar */}
      <h1>{message}</h1>
      <button onClick={() => setMessage("State telah berubah!")}>Ubah Pesan</button> <br />

      {/* menghitung dan mengurangi angka - state dengan angka */}
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurangi</button> <br />

      {/* membuat todolist sederhana - state menyimpan array atau object*/}
      <h1>Daftar Todo:</h1>
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Tambah Todo</button>
    </div>
  );
}

export default App
