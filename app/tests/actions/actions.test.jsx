var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
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
      text: 'thing to do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  })

  it('should generate toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOWCOMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  })

  it('should generate toggle todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 123
    };
    var res = actions.toggleTodo(123);

    expect(res).toEqual(action);
  })

});
