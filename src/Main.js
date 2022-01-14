import React from 'react';
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import data from './data.json';

import './Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data
    }
  }

  filter = (e) => {
    let numHorns = parseInt(e.target.value);
    let displayedBeast = data;
    if (numHorns) {
      displayedBeast = data.filter((creature) => creature.horns === numHorns);
    }
    this.setState({ beasts: displayedBeast });
  }

  render() {

    let animalArray = this.state.beasts.map((animal, index) => (
      <HornedBeast
        key={index}
        src={animal.image_url}
        handleShow={this.props.handleShow}
        animal={animal}
        description={animal.description}
        name={animal.title}
      />
    ));

    return (
      <main>
        <>
          <Form style={{width: '30%', marginLeft: '70%'}}>
            <Form.Group controlId="select">
              <Form.Label>Filter By Number of Horns</Form.Label>
              <Form.Control as="select" onChange={this.filter}>
                <option value="0">Show All Beasts</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">4+</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </>
        {animalArray}
      </main>
    )
  }
}

export default Main;
