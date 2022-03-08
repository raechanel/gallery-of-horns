import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import { Col } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
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
        {/* <Row xs={2} md={3} className="card">
          <Col> */}
        <Card style={{ width: '30%' }}
          className='animal-card'>
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
        {/* </Col>
        </Row> */}
      </>
    )
  }
}

export default HornedBeast;
