import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="ui centered billboard test ad" data-text="Sharing Hearts"></div>
        <div class='body'>
          <div>
            <div class="ui top attached tabular menu">
              <a class="active item">Tab 1</a>
              <a class="item">Tab 2</a>
            </div>
            <div class="ui bottom attached segment"><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#x27;t look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&#x27;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            words etc.</p></div>
          </div>
          <div class="ui segment">
            <img class="ui small left floated image" src="/assets/images/wireframe/image-text.png" />
            <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in.
              Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
            <img class="ui small right floated image" src="/assets/images/wireframe/image-text.png" />
            <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
            <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera
            utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}



export default App;
