import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Contact from '../../Component/Contact/contact';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Footer/>
       
        <button class="ui button"><a href='/sender'>Sender</a></button>
        <button class="ui button"><a href='/news'>News</a></button>
        <button class="ui button"><a href='/receiver'>Receiver</a></button>
        
        <Contact/>
      </div>
    );
  }

  

}



export default App;
