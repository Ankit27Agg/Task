import React from 'react'
import Grid from '../Components/Grid/Grid';

function Home() {


  //************************************Data stored in array form********************************
  const data = [
    {
      sentence:"He's not the sharpest knife in the drawer."
    },
    {
      sentence:"The big building was blazing with lights."
    },
    {
      sentence:"Now you must answer some big questions."
    },
    {
      sentence:"Get Your Act Together!."
    }
  ]
  return (
    //************************************Responsive GRID imported********************************
    <Grid data={data}/>  //data is passed as props to react component
  )
}

export default Home