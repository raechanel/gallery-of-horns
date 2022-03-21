import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { Howl, Howler } from "howler";
import A from './audio/a.mp3';
import B from './audio/b.mp3';


const audioClips = [
  { sound: A, label: 'The Letter A' },
  { sound: B, label: 'The Letter B' }
]

class SelectedBeast extends React.Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }

  RenderButtonAndSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
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
            alt={this.props.animal.title}
            title={this.props.animal.title}
          />
          {this.props.animal.audio}
          {this.RenderButtonAndSound()}
        </Modal.Body>
      </Modal>

    )
  }
}
export default SelectedBeast;
