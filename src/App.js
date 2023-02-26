import axios from "axios";
import React, { useState, useEffect } from "react";
import PlacesTable from "./components/PlacesTable";


function App() {
  const [places, setPlaces] = useState([]);

  const getPlaces = async () => {
    try {
      const res = await axios.get(`https://open-api.myhelsinki.fi/v2/places/`);
      setPlaces(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
     getPlaces();
  },[]);
  
  return (
      <>
          <div className="d-flex flex-column align-items-center">
            <h1>Helsinki Places Table</h1>
          </div>
          <PlacesTable />
      </>
  );
};
export default App;
