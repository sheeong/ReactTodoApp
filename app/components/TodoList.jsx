var React = require('react');
var {connect} = require('react-redux');
//var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo(todo) {
    this.props.onAddTodo(todo);
  }

  render() {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to Do</p>
        );
      }

      return filteredTodos.map( (todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
