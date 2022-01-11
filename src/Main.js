import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component{
  render(){
    return(
      <main>
        <HornedBeast 
          title="Bull" 
          imageURL="https://images.unsplash.com/photo-1593046584078-ddc9dc530ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          description="Bull in the mountains"
        />
        <HornedBeast 
        title="BigHorned Sheep"
        imageURL="https://images.unsplash.com/photo-1517217759187-c28c5cbb51e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
        description="Big Horned Sheep in the snow"
        />
      </main>
    )
  }
}

export default Main;
