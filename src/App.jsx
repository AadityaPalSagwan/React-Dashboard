// import About from './Components/About';
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
import Home from './Components/Home';
import Over from './Components/Over';
import Country from './Components/Country';
import Region from './Components/Region';
import Topic from './Components/Topic';
import City from './Components/City';
import Year from './Components/Year';
import Intensity from './Components/Intensity';
import Likelehood from './Components/Likelehood';
import Relevance from './Components/Relevance';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

const App = () => {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Overall' element={<Over />} />
          <Route path='/country' element={<Country />} />
          <Route path='/region' element={<Region />} />
          <Route path='/topic' element={<Topic />} />
          <Route path='/city' element={<City />} />
          <Route path='/year' element={<Year />} />
          <Route path='/intensity' element={<Intensity />} />
          <Route path='/likelihood' element={<Likelehood />} />
          <Route path='/relevance' element={<Relevance />} />
        </Routes>
      </BrowserRouter>
      {/* <About/> */}
    </>


  );
};

export default App;

// {data.map((item, index) => (
//   <div key={index}>
//       {item}
//   </div>
// ))}


// const [data, setData] = useState([]);

// useEffect(() => {
//     axios.get('/api/data')  // Backend ka URL
//          .then(response => {
//              setData(response.data);
//          })
//          .catch(error => {
//              console.error('Error fetching data:', error);
//          });
// }, []); 

