import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      animal: {
        title: 'proof of life'
      }
    }
  }

  handleShowModal = (animal) => {
    this.setState({
      show: true,
      animal: animal
    })
  }

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Header />

        <Modal show={this.state.show} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              width = '100%'
              src={this.state.animal.image_url}
              alt={this.state.animal.description}
              title={this.state.animal.title}
            />
            {this.state.animal.description}
          </Modal.Body>
        </Modal>

        <Main 
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
