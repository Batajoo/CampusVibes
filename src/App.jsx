import { useState } from 'react'
import { Logo, Login } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
