import './App.css'
import Page from './Layout/Page'
import Sidebar from './Layout/Sidebar'

function App() {

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      <Sidebar />
      <Page/>
    </div>
  )
}

export default App
