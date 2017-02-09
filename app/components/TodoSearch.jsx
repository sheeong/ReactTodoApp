var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  handleSearch: function() {
    var {dispatch} = this.props;
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    //this.props.onSearch(showCompleted, searchText);
    dispatch(actions.setSearchText(searchText));
    dispatch(actions.toggleShowCompleted());
  },
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input onChange={() => dispatch(actions.setSearchText(this.refs.searchText.value))} type="search" ref="searchText" placeholder="Search todos" value={searchText}/>
        </div>
        <div>
          <label>
            <input onChange={() => dispatch(actions.toggleShowCompleted())} type="checkbox" ref="showCompleted" checked={showCompleted}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.completed,
      searchText: state.searchText
    }
  }
)(TodoSearch);
