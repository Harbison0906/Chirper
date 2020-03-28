import React from 'react';
import Header from './components/Header.jsx';
import Timeline from './components/Timeline.jsx';
import NewChirp from './components/NewChirp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ' ',
      loggedIn: false
    }
  }

  handleInputChange = ( value ) =>{
    this.setState({ user: value });
}

  toggleLoggedIn() {
    this.setState({ loggedIn: true });
  }

  loggedInPage() {
    return (
      <main>
        <Header />
        <NewChirp user={this.props.user} />
        <hr />
        <Timeline />
      </main>
    );
  }
  render() {
    if (this.state.loggedIn) {
      return <div>{this.loggedInPage()}</div>;
    } else {
      return (
        <article>
          <Header />
          <div className="input-group w-50 mx-auto">
            <input type="text" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn logInButton" type="button" 
              onClick={() => this.toggleLoggedIn()}>Log In</button>
            </div>
          </div>
        </article>
      )
    }
  }
}

  export default App;