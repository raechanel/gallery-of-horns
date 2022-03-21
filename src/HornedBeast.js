import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import './HornedBeast.css';



class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hearts: 0
    }
  }

  handleHeart = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
    this.props.handleShow(this.props.animal);
  }



  render() {
    return (
      <>
        <Card style={{ width: '30%' }}
          className='card'>
          <Card.Img
            variant="top"
            onClick={this.handleShow}
            src={this.props.src}
            alt={this.props.name}
            title={this.props.name}
          />
          <Card.Body>
            <Card.Title>
              {this.props.name}
            </Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>
              <Button className="button" variant="primary" onClick={this.handleHeart}>👍</Button>
              {this.state.hearts}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
