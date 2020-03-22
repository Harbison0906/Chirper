import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid header py-3">
        <div className="container text-center align-middle">
        <img className="bird" src="/sethharbison/Downloads/origami-bird.png" alt="geometric bird design"/>
          <h1 className="display-4">Chirper</h1>
          <p className="lead">Tell them EVERYTHING</p>
        </div>
      </div>
    )
  }
}

export default Header;