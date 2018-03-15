import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

const isSearched = (searchTerm) => (item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }

    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchSubmit(event) {
    event.preventDefault()
    const {searchTerm} = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  setSearchTopStories(result) {
    this.setState({result})
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  componentDidMount() {
    const {searchTerm} = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id
    const updatedHits = this.state.result.hits.filter(isNotId)
    this.setState({
      result: {...this.state.result, hits: updatedHits}
    })
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    const {result, searchTerm} = this.state
    const page = (result && result.page) || 0
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        { result &&
          <Table
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        }
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            More
          </Button>
        </div>
      </div>
    )
  }
}

const Search = ({
  value,
  onChange,
  children,
  onSubmit
}) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">{children}</button>
  </form>

const Table = ({ list, onDismiss }) => 
  <div className="table">
    {list.map(item =>
      <div className="table-row" key={item.objectID}>
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
          <Button className="button-inline" onClick={() => onDismiss(item.objectID)}>
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>
  
const Button = ({
  onClick,
  className='',
  children,
}) => 
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;