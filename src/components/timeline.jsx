import React from 'react';
// import App from './App.jsx';
import NewChirp from './NewChirp';


class Timeline extends React.Component {
  render() {
    return (
      <main className="container">
        <section className="row justify-content-center">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Edit Chirp</a>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Edit Chirp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

    );
  }
}

export default Timeline;