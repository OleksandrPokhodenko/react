import './App.css'
import Calculator from './components/task-1/Calculator'
import DataGrid from './components/task-2/DataGrid'
import WindowSize from './components/task-3/WindowSize'
import Debounce from './components/task-4/Debounce'

function App() {

  return (
    <div className='cnt'>
      <Calculator />
      <DataGrid />
      <WindowSize />
      <Debounce />
    </div>
  )
}

export default App
