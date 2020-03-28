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
      <main className="container">
        <section className="row justify-content-center">
          <article className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.state.user}</h5>
                <textarea className="form-control mb-3" aria-label="With textarea"></textarea>
                <a href="#" className="btn btn-primary">Chirp</a>
              </div>
            </div>
          </article>
        </section>
      </main>


    )
  }
}

export default NewChirp;