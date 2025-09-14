import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import { RouterProvider } from 'react-router'
// import App from './App'
import router from './router'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // <App />
)
