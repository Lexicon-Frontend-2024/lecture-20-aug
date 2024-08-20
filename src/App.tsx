import { useState } from 'react'
import './App.css'
import Name from './Components/Name';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <article className={mode}>
      <h1>{mode}</h1>
      <button onClick={() => { setMode('light') }}>Go Light</button>
      <button onClick={() => { setMode('dark') }}>Go Dark</button>
      <Name />
    </article>
  )
}

export default App
