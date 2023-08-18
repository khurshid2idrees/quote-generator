import logo from './logo.svg';
import './App.css';
import data from './data.json';

import { useState } from 'react';


function App() {

const mydata = data.Allqoutes;
console.log(mydata)


function getRandomIdFromJsonData(dataArray) {
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  return dataArray[randomIndex].text;
}
const randomId = getRandomIdFromJsonData(mydata);


const [quote,setQuote] = useState('click here on Below button to Generate some codes for yourself');



  return (
    <div className="App">

      <h1 className='text-2xl mt-4'> Quote Generator  </h1>

      <div id='maindiv' className='p-32 bg-red-400 mt-4 mx-12 rounded-lg'>

        <div id="thebox">
          <div id="dynamicqoute" className='mt-3'>
            <p className='row-auto'>
             {quote}
            </p>
          </div>

        </div>

      </div>

      <button className='font-light text-xl rounded-lg p-2 mt-20 bg-red-500 text-center' onClick={()=>setQuote(randomId)}>Generate Quote</button>

    </div>
  );
}

export default App;

