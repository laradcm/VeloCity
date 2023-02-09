import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


///-----------------ex fetch GET
// fetch("http://127.0.0.1:3000/bicycles ")
// .then((res) => {

//   console.log('got here');
//   return res.json();

// })
// .then((result) => {
//   console.log(result);
// }); 


///-----------------ex fetch POST
// fetch("http://127.0.0.1:3000/bicycles",{

//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     stationid: 20,
//     status: "Available",
//     condition: "Good"
// })
// })
// .then((res) => {

//   console.log('sent the post');
//   return res.json();

// })
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//     console.log(err)
// }); 


///-----------------ex fetch PUT
// const options = {
//   method: 'PUT',
//   headers: {'Content-Type': 'application/json'},
//   body: '{"id":203,"stationid":"11","status":"Available","condition":"Good"}'
// };

// fetch('http://localhost:3000/bicycles', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


///-----------------ex fetch DELETE
// fetch('http://localhost:3000/bicycles/202', {method: 'DELETE'})
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
