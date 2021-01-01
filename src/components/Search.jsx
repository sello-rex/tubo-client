
import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import querystring from 'query-string';
import loader from '../loader.gif';
const API = 'http://localhost:3001';
const initialState = {
  url: '',
  downloadable: false,
  downloadLink: null,
  loading: false
};

class SearchBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      format: 'mp3',
      ...initialState
    }
  }

  onChange = event => {
    this.setState( { format: event.target.value });
  }
  
  changeUrl = event => {
    this.setState( { url: event.target.value });
  }

  download = event => {
    event.preventDefault();

    const query = {
      format: this.state.format,
      filename: this.state.downloadLink
    };

    window.open(querystring.stringifyUrl({
      url: `${API}/download`,
      query
    }),'_blank');
  }

  convertAnother = event => {
    event.preventDefault();
    this.setState(initialState);
  }

  convert = event =>{
    event.preventDefault();
    const data = {
      url: this.state.url,
      format: this.state.format
    };

    this.setState({loading: true })

    axios.get(querystring.stringifyUrl({
      url: `${API}/fromyoutube`,
      query: data
    })).then( ({data}) => {
      this.setState( prevState => ({ downloadable: true, downloadLink: data.file.fileName, loading: false }))
    }).catch( error => {

      Swal.fire({
        toast: true,
        title: error.message,
        icon: 'error',
        position: 'bottom-end',
        showConfirmButton: false,
      });

      this.setState( prevState => ({ loading: false }))
    })
  }

  render() {
    return (
      <div className="row" id="form-container">
        <form onSubmit={this.convert} name="search-form" >
          <div className="form-group">
            <div className="labels-container">
              <label id="url-label" htmlFor="url">Enter youtube url</label>
              <div id="formats-container">
                <label htmlFor="mp3-format" className="paper-radio">
                  <input disabled={this.state.loading} checked={this.state.format === 'mp3'} type="radio" name="format_input" id="mp3-format" value="mp3" onChange={this.onChange} /> <span>Mp3</span>
                </label>
                <label htmlFor="mp4-format" className="paper-radio">
                  <input disabled={this.state.loading} checked={this.state.format === 'mp4'} type="radio" name="format_input" id="mp4-format" value="mp4" onChange={this.onChange}/> <span>Mp4</span>
                </label>
              </div>
            </div>
            <input disabled={this.state.loading} required pattern="^https://www.youtube.com/watch\?v=.+" type="text" className='input-block' placeholder="e.g https://www.youtube.com/watch?v=_uQL3hs765" id="url" name="url" value={this.state.url} onChange={this.changeUrl}
            title="You must provide a valid youtube video url"
            />
          </div>
          <div id="submit-btn">
            <input disabled={this.state.loading} type={this.state.downloadable ? 'hidden':'submit'} className="paper-btn btn-secondary-outline" value="Covert"/>
            <input type={this.state.downloadable ? 'button':'hidden'} onClick={this.convertAnother} className='paper-btn btn-primary-outline' value="Convert Another"/>
            <input type={this.state.downloadable ? 'button':'hidden'} onClick={this.download} className="paper-btn btn-danger-outline" value="Download"/>
            <div className={this.state.loading ? 'loader-container':'loader-container hidden'}>
              <img src={loader} alt="loader gif"/>
              <span>converting...</span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar;