import './App.css'
import store from './redux/store'
import { RouterProvider } from 'react-router'
import router from './routes/router'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
