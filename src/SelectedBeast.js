import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            width='100%'
            src={this.props.animal.image_url}
            alt={this.props.animal.description}
            title={this.props.animal.title}
          />
          {this.props.animal.description}
        </Modal.Body>
      </Modal>

    )
  }
}
export default SelectedBeast;
