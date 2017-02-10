var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    var {dispatch} = this.props;
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    //this.props.onSearch(showCompleted, searchText);
    dispatch(actions.setSearchText(searchText));
    dispatch(actions.toggleShowCompleted());
  }
  
  render() {
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
};

export default connect(
  (state) => {
    return {
      showCompleted: state.completed,
      searchText: state.searchText
    }
  }
)(TodoSearch);
