import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {

  const [color] = useState ("#a37bcc")
  document.body.style.backgroundColor = color
  
  return (
    <Routes>
      <Route path="/" />
    </Routes>
  )
}

export default App