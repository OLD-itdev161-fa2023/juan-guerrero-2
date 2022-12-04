import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

class App extends React.Component {
=======
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {

>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
  state = {
    data: null,
    token: null,
    user: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })

<<<<<<< HEAD
      this.authenticateUser();
=======
    this.authenticateUser();
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
  }

  authenticateUser = () => {
    const token = localStorage.getItem('token');

<<<<<<< HEAD
    if(!token) {
      localStorage.removeItem('user')
=======
    if (!token) {
      localStorage.removeItem('user');
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
      this.setState({ user: null });
    }

    if (token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      }
      axios.get('http://localhost:5000/api/auth', config)
        .then((response) => {
          localStorage.setItem('user', response.data.name)
          this.setState({ user: response.data.name })
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({ user: null });
          console.error(`Error logging in: ${error}`);
        })
    }
  }

  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ user: null, token: null });
  }

  render() {
    let { team, data } = this.state;
    const authProps = {
      authenticateUser: this.authenticateUser
    }
<<<<<<< HEAD

=======
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
    return (
      <Router>
        <div className="App">
          <header className="App-header">
<<<<<<< HEAD
            <h1>Soccer Team Registration</h1>
=======
            <h1>Soccer Team Registration</h1>
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link to="/register">Register</Link>
              </li>
              <li>
                {user ? 
                  <Link to="" onClick={this.logOut}>Log out</Link> :
                  <Link to="/team">Log in</Link> 
                }
                
=======
                <Link to="/Register">Register</Link>
              </li>
              <li>
                {user ?
                  <Link to="" onClick={this.logOut}>Log out</Link> :
                  <Link to="/Team">Log in</Link>
                }
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/">
<<<<<<< HEAD
              {user ? 
=======
              {user ?
>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
                <React.Fragment>
                  <div>Hello {user}!</div>
                  <div>{data}</div>
                </React.Fragment> :
                <React.Fragment>
                  Please Register or Login
                </React.Fragment>
              }
<<<<<<< HEAD
              
            </Route>
            <Switch>
              <Route 
                exact path="/Register" 
                render={() => <Register {...authProps} />} />
              <Route 
                exact path="/Team" 
                render={() => <team {...authProps} />} />
            </Switch>
          </main>
=======

            </Route>
            <Switch>
              <Route
                exact path="/Register"
                render={() => <Register {...authProps} />} />
              <Route
                exact path="/Team"
                render={() => <Login {...authProps} />} />
            </Switch>
          </main>

>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
        </div>
      </Router>
    );
  }
<<<<<<< HEAD
=======

>>>>>>> 5eb85bbcc2e8cfca167f20140bbab19bb5114c5a
}

export default App;