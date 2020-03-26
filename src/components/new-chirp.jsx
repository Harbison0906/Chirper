import React, { Component } from 'react';


class NewChirp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "User"
    }
  }
  render() {
    return (
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">{this.props.user}</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Chirp</a>
        </div>
      </div>
    )
  }
}

export default NewChirp;