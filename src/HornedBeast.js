import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageURL}
          alt={this.props.name}
          title={this.props.name}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
