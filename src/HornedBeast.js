import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hearts: 0
    }
  }

  handleHeart = () => {
    this.setState({
     hearts: this.state.hearts + 1
    });
  }

  render() {
    return (
      <article>
        <Card style={{width: '80%'}} 
        className='animal-card'>
          <Card.Img 
            variant="top" 
            onClick={this.handleHeart}
            src={this.props.imageURL}
            alt={this.props.name}
            title={this.props.name}

          />
          <Card.Body>
            <Card.Title>
              {this.props.name}
            </Card.Title>
            <Card.Text>
              <p>💛: {this.state.hearts}</p>
              <p>{this.props.description}</p>
            </Card.Text>
          </Card.Body>
        </Card>








        {/* <h2>{this.props.title}</h2>
        <p>💛: {this.state.hearts}</p>
        <img onClick={this.handleHeart}
          src={this.props.imageURL}
          alt={this.props.name}
          title={this.props.name}
        />
        <p>{this.props.description}</p> */}
      </article>
    )
  }
}

export default HornedBeast;
