var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered medium-6 small-10 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with Github account below.</p>
              <button onClick={this.onLogin} className="button">Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Login);
