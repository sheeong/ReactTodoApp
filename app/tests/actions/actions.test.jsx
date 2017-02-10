var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);

  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '132',
        text: 'dkls',
        completed: false,
        completedAt: 323
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  })

  it('should generate add todos action', () => {
    var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAd: 123
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  })

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOWCOMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  })

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 123,
      updates: {completed: false}
    };
    var res = actions.updateTodo(123, action.updates);

    expect(res).toEqual(action);
  })
  it('should generate login action', () => {
    var action = {
      type: 'LOGIN',
      uid: 123

    };
    var res = actions.login(123);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    var action = {
      type: 'LOGOUT'
    };
    var res = actions.logout();

    expect(res).toEqual(action);
  });
/*
  describe('Tests with firebase todos', () => {
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach( (done) => {
      var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

      firebase.auth().signInWithCredential(credential).then( (user) => {
        console.log(user);
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.remove();
      }).then( () => {
          testTodoRef = todosRef.push();
          return testTodoRef.set({
            text: 'something to do',
            completed: false,
            createdAt: 2424
          });
      })
      .then( () => done())
      .catch( (e) => {
        console.log(e);
        done();
      });
    });

    afterEach( (done) => {
      if (todosRef) {
        todosRef.remove().then( () => done());
      } else {
        done();
      }
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then( () => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    });

    it('should populate todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();
      store.dispatch(action).then( () => {
        const mockActions = store.getActions();
        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos[0]).toInclude({
          id: testTodoRef.key
        });
        expect(mockActions[0].completedAt).toNotExist();
        expect(mockActions[0].todos.length).toEqual(1);
        done();
      }, done);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
      const todoText = 'my todo item';
      store.dispatch(actions.startAddTodo(todoText)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch (done);
    });
  });
  */
});
