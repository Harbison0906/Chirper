import React from 'react';
import origamiBird from '../assets/origami-bird.png';

class Header extends React.Component {
  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid header py-3">
          <div className="container text-center align-middle">
            <img className="bird" src={origamiBird} alt="geometric bird design" />
            <h1 className="display-4">Chirper</h1>
            <p className="lead">Tell them EVERYTHING</p>
          </div>
          <br />
        </div>
      </main>



    )
  }
}

export default Header;