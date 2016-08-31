import React from 'react';
import { IndexLink, Link } from 'react-router';
import $ from "jquery";
import { APIsource } from '../API/index.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null,
    };
  }

  componentWillMount() {
    console.log('GET triggered')
    this.serverRequest = $.get("https://demo2697834.mockable.io/movies", data => {
      this.setState({
        videos: data.entries,
      });
    });
  }


  render() {
    console.log('111',this.state.videos)
    const $avideo = $("a.video");
    let avideoSelected;
    const rightKey = 39;
    const leftKey = 37;
    $(window).on("keydown", (e) => {
      if(e.keyCode === rightKey) {
        if(avideoSelected) {
          avideoSelected.removeClass('selected');
          let next = avideoSelected.next();
          if(next.length > 0) {
            avideoSelected = next.addClass('selected');
            avideoSelected.focus();
          } else {
            avideoSelected = $avideo.eq(0).addClass('selected');
            avideoSelected.focus();
          }
        } else {
          avideoSelected = $avideo.eq(0).addClass('selected');
          avideoSelected.focus();
        }
      } else if (e.keyCode === leftKey) {
        if(avideoSelected) {
          avideoSelected.removeClass('selected');
          let next = avideoSelected.prev();
          if(next.length > 0) {
            avideoSelected = next.addClass('selected');
            avideoSelected.focus();
          } else {
            avideoSelected = $avideo.last().addClass('selected');
            avideoSelected.focus();
          }
        } else {
          avideoSelected = $avideo.last().addClass('selected');
          avideoSelected.focus();
        }
      }
    })
    return (
      <div>
      <ul className="nav nav-tabs nav-justified">
      <li><IndexLink className="nav" to={{ 
            pathname: '/', 
            state: { videos: this.state.videos, test: "test" } 
          }}>Home</IndexLink></li>
      <li><Link className="nav" to={{ 
            pathname: '/history', 
            state: { videos: this.state.history } 
          }}>History</Link></li>
      </ul>
        
        
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

