import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input';
import Comments from './Components/Comments';
import $ from 'jquery';
import axios from 'axios';




class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      tweeds: [],
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.deleteRequest = this.deleteRequest.bind(this)
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {

    const url = 'https://soccer-arts-blog.firebaseio.com/posts/.json';
    axios.get(url)
      .then((response) => {
        console.log(response);

        const data = response.data;
        let tweeds = [];

          if (data) {
            tweeds = Object.keys(data).map((id) => {
              const tweed = data[id];
              return {
                post: tweed.post
              };
            });
          }


          tweeds.reverse();

        this.setState({ tweeds })
      })

      .catch((error) => {
        console.log(error);
      })
  }
  postRequest() {
    const url = 'https://soccer-arts-blog.firebaseio.com/posts.json';

    axios.post(url, {
          post: this.state.value
          })
          .then(() => {
            this.getRequest();
            this.setState({ value: '' })
          })
          .catch((error) => {
            console.log(error);
          })
  }

  deleteRequest(tweeds) {
    const url = 'https://soccer-arts-blog.firebaseio.com/posts/${tweeds}/.json';

    axios.delete(url)
    .then((res) => {
      let posts = this.state.posts;
      delete posts[tweeds];
      this.setState({ posts: posts});
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.postRequest();
  }


  render() {
    return (
      <div className="App">
        <header>SOCCER ARTS BLOG</header>
        <h1 className="marquee-container"><span className="marquee marqueeScroll">
        Welcome to Soccer Arts Blog. Please enter text to join the discussion board below.</span></h1>
        <div className="TwitList">
        <Input
          inputValue={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="Tweets">
        <Comments
          id="test"
          tweeds={this.state.tweeds}
        />
          </div>
        </div>
      </div>
    );
  }
}

export default App;













































