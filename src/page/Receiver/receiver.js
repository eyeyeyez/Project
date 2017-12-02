import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import '../../styles/semantic.min.css'


class Receiver extends Component {
  render() {
    return (
      <div className="receiver">
         receiver
        <br/><br/><br/><br/><br/><br/><br/>
      
        <button  class="ui button"><a href="/">back</a></button>

        <br/>
        <Footer/>
      </div>
    );
  }
}

export default Receiver;