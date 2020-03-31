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

  // allows state.value to change to whatever is typed in the textarea
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  // makes copy of state.chirps array and adds new chirp to front of the array
  addChirp = (event) => {
    event.preventDefault();
    const newChirp = this.state.chirps.slice()
    newChirp.unshift(this.state.value);
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
                        onClick={this.addChirp}  //adds new chirp when "Chirp" is clicked
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
              {/* modifies and styles each new chirp */}
                {this.state.chirps.map(chirp => {
                  return (
                    <div className="col-md-7">   
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{this.state.user}</h5>
                          <p className="card-text">{chirp}</p>
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
                    <p className="card-text">This coronavirus, tho <br /> #quarantine </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.user}</h5>
                    <p className="card-text">Tiger King on Netflix....geeeez <br /> #JoeExotic #ISawATiger</p>
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


