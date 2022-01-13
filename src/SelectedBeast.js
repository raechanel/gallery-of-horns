import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            width='100%'
            src={this.state.animal.image_url}
            alt={this.state.animal.description}
            title={this.state.animal.title}
          />
          {this.state.animal.description}
        </Modal.Body>
      </Modal>
      
      )
    }
  }
  
  export default SelectedBeast;


