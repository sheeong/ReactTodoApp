var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  onAddTodo: function(todo) {
    this.props.onAddTodo(todo);
  },
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map( (todo) => {
        return (
          <Todo key={todo.id} {...todo} onAddTodo={this.onAddTodo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
