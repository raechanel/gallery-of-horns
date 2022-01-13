import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      animal: {},
    }
  }

  handleShow = (animal) => {
    this.setState({
      show: true,
      animal: animal
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <>
        <Header />
        <SelectedBeast 
          show={this.state.show}
          handleClose={this.handleClose}
          animal={this.state.animal}
        />
        <Main
          data={data}
          handleShow={this.handleShow}
        />
        <Footer />
      </>
    );
  }
}

export default App;
