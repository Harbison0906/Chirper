import React from 'react';
import origamiBird from './assets/origami-bird.png';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Username',
      value: ' ',
      chirps: []
    };

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  addChirp = (event) => {
    event.preventDefault();
    const newChirp = this.state.chirps.slice()
    newChirp.push(this.state.value);
    this.setState({ value: '', chirps: newChirp });
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
                    <form className="form-group">
                      <textarea
                        className="shadow form-control mb-3"
                        aria-label="With textarea"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                      <button
                        className="btn"
                        onClick={this.addChirp}
                      >Chirp</button>
                    </form>
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
              <>
                {this.state.chirps.map(chirp => {
                  return (
                    <div className="col-md-7">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{this.state.user}</h5>
                          <p className="card-text">{this.state.chirps}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.user}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda officia necessitatibus tempore nemo voluptatibus similique rem molestias incidunt quia itaque exercitationem dolor laborum explicabo nostrum, qui repudiandae natus. Necessitatibus.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.user}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda officia necessitatibus tempore nemo voluptatibus similique rem molestias incidunt quia itaque exercitationem dolor laborum explicabo nostrum, qui repudiandae natus. Necessitatibus.</p>
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


