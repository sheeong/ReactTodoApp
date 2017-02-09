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

    it('should toggle todo completed status', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var todos = [{
        id: 123,
        text: 'testing',
        completed: false
      }];
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();

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
  });

});
