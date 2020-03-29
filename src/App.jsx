import React from 'react';
import origamiBird from './assets/origami-bird.png';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Username',
    }
  }

  

  render() {
    
      return (
        <main>
          <section className="header">
            <div className="jumbotron jumbotron-fluid header py-3">
              <div className="container text-center align-middle">
                <img className="bird" src={origamiBird} alt="geometric bird design" />
                <h1 className="display-4">Chirper</h1>
                <p className="lead">Tell them EVERYTHING</p>
              </div>
              <br />
            </div>
          </section>
          <section className="newChirp">
            <div className="container">
              <section className="row justify-content-center">
                <article className="col-md-7">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.user}</h5>
                      <textarea className="shadow form-control mb-3" aria-label="With textarea"></textarea>
                      <a href="#" className="btn">Chirp</a>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </section>
          <hr />
          <section className="timeline">
            <main className="container">
              <section className="row justify-content-center">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.user}</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn">Edit Chirp</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.user}</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn">Edit Chirp</a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </section>

        </main>
      )
    
  }
}

export default App;