import React from 'react';

class Timeline extends React.Component {
  render() {
    return (
      <main className="timeline">
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Edit Chirp</a>
          </div>
        </div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Edit Chirp</a>
          </div>
        </div>
      </main>

    );
  }
}

export default Timeline;