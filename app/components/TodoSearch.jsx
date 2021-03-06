import React, { PropTypes } from 'react'

const TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render () {
    return (
      <div lassName="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
})

export default TodoSearch
