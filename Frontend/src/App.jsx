import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const url = "http://127.0.0.1:3000/bicycles";
// const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loadData, setLoadData] = useState(true);

  const fetchBikes = async () => {
    setLoadData(true);
    try {
    const response = await fetch(url);
    const bikes = await response.json();
    // to see the data fetched in the console
    console.log(bikes);

    } catch (error) {
      setLoadData(false);
    }
  }

  useEffect(() => {
    fetchBikes();
  }, []);

  // if there's an error while fetching the data
  if (!loadData){
    return (
      <>
        <h1>Error occurred while fetching data</h1>
      </>
    )
  }

  // data was fetched correctly
  return (
    <>
      <h1>data -bikes- fetched correctly</h1>
    </>
  )
}

export default App