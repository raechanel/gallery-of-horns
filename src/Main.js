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
    console.log(this.state.beasts)


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
          <Form>
            <Form.Group controlId="select">
              <Form.Label>Filter By</Form.Label>
              <Form.Control as="select" onChange={this.filter}>
                <option value="0">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One Hundred</option>
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




