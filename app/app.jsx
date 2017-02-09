var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');
import firebase from 'app/firebase/';
var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/';

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

//var TodoApp = require('TodoApp');
//import TodoApp from 'TodoApp';
//var TodoAPI = require('TodoAPI');
//import Login from 'Login';

//import './../playground/firebase/index';

// store.subscribe( () => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//store.dispatch(actions.addTodo('clean the yard'));
//store.dispatch(actions.setSearchText('yard'));
//store.dispatch(actions.toggleShowCompleted());

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
