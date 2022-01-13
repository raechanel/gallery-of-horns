import React from 'react';
import HornedBeast from './HornedBeast.js';

import './Main.css'
class Main extends React.Component {
  render() {

    let animalArray = this.props.data.map((animal, index) => (
      <HornedBeast
        key={index}
        src={animal.image_url}
        handleShowModal={this.props.handleShow}
        animal={animal}
        description={animal.description}
        name={animal.title}
      />
    ));

    return (
      <main>
        {animalArray}
      </main>
    )
  }
}

export default Main;
