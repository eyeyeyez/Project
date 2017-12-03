import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import '../../styles/semantic.min.css'
import './receiver.css';

class Receiver extends Component {
  render() {
    return (
      <div className="Receiver">
        <Navbar/>
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