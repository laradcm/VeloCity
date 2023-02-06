import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

fetch("http://127.0.0.1:3000/bicycles ")
.then((res) => {

  console.log('got here');
  return res.json();

})
.then((result) => {
  console.log(result);
}); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
