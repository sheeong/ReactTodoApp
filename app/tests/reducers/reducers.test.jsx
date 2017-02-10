var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOWCOMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc',
          text: 'skkld',
          completed: false,
          createdAt: 3253
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: 123,
        text: 'testing',
        completed: true,
        completedAt: 443,
        createdAt: 323
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should wipe out todos on logout', () => {
      var todos = [{
          id: 111,
          text: 'anything',
          completed: false,
          completedAt: undefined,
          createdAd: 123
      }];
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(0);

    });

  });

  describe('authReducer', () => {
    it('should store uid on login', () => {
      var action = {
        type: 'LOGIN',
        uid: '123'
      };
      const res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual({ uid: action.uid });
    });

    it('should wipe auth on logout', () => {
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer('135', df(action));
      expect(res).toEqual({});
    });
  });

});
