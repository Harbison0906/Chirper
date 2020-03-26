import React from 'react';
import Header from './components/header.jsx';
import Timeline from './components/timeline.jsx';
import NewChirp from './components/new-chirp.jsx';

class App extends React.Component {
  render () {
    return (
      <main>
      <Header />
      <NewChirp />
      <Timeline />
      </main>
    )
  }
}


export default App;