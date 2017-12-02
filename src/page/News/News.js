import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import '../../styles/semantic.min.css'


class News extends Component {
  render() {
    return (
      <div className="News">
      
        <button  class="ui button"><a href="/">back</a></button>

        <br/>
        <Footer/>
      </div>
    );
  }
}

export default News;