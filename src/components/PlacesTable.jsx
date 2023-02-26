import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';

const PlacesTable = () => {

  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    try {
      const res = await axios.get(`https://open-api.myhelsinki.fi/v2/places/`);
      setPlaces(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Place ID",
      selector: row => row.id,
    },
    {
      name: "Place Name",
      selector: row => row.name.en,
    },
    {
      name: "Address",
      selector: row => row.location.address.street_address,
    },   
    {
      name: "Status",
      selector: row => row.isOpen ? "Open" : "Opened",
    },   
  ];
  
  useEffect(() => {
     getPlaces();
  },[]);
  return <DataTable columns={columns} data={places}/>;
};

export default PlacesTable;