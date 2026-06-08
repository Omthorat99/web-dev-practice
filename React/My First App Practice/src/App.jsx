import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Student from './components/student'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  const students = [
    { id: 1, name: "Om", age: 18 },
    { id: 2, name: "Rahul", age: 19 },
    { id: 3, name: "Priya", age: 20 }
  ]

  const [darkMode, setDarkMode] = useState(false)
  const [showText, setShowText] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: darkMode ? '#111827' : '#f3f4f6',
        color: darkMode ? 'white' : 'black',
      }}
    >
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/profile" element={<Profile />} />
</Routes>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '30px',
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <button
          onClick={() => setLiked(!liked)}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginLeft: '10px',
            marginBottom: '30px',
          }}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>

        {liked && (
          <h3>You liked this page ❤️</h3>
        )}

        <h1>Student Directory</h1>

        <div
          style={{
              display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  marginTop: '30px',
  marginBottom: '50px',
  padding: '30px',
  borderRadius: '16px',
  backgroundColor: darkMode ? 'rgb(133, 121, 169)' : '#c1bfe8',
  boxShadow: '0 4px 12px rgba(206, 47, 47, 0.1)',
  //   background: 'rgba(255,255,255,0.1)',
  // backdropFilter: 'blur(10px)',
  // border: '1px solid rgba(255,255,255,0.2)',
  // borderRadius: '16px',
  // padding: '24px',
  // width: '280px',
  // textAlign: 'center',
  // color: 'white',
  
            
          }}
        >
          {students.map((student) => (
            <Student
              key={student.id}
              name={student.name}
              age={student.age}
              
            />
          ))}
        </div>
      </div>

      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>The First React App</h1>

          <p>
            Edit <code>src/App.jsx</code> and save to test{' '}
            <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Documentation</h2>

          <p>Your questions, answered</p>

          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img
                  className="logo"
                  src={viteLogo}
                  alt=""
                />
                Explore Vite
              </a>
            </li>

            <li>
              <a href="https://react.dev/" target="_blank">
                <img
                  className="button-icon"
                  src={reactLogo}
                  alt=""
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg
            className="icon"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with us</h2>

          <p>Join the Vite community</p>

          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                GitHub
              </a>
            </li>

            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                Discord
              </a>
            </li>

            <li>
              <a href="https://x.com/vite_js" target="_blank">
                X.com
              </a>
            </li>

            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </div>
  )
}

export default App