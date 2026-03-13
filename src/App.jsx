import './App.css'
import Main from './Layout/Main'
import Sidebar from './Layout/Sidebar'

function App() {

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      <Sidebar />
      <Main/>
    </div>
  )
}

export default App
