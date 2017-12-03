import React, { Component } from 'react';

import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div class="ui small menu">
                    <a class=" item" href='/'>Home</a>
                    <a  class="item" href='/news'>News</a>
                    <a  class="item" href='/sender'>Sender</a>
                    <a  class="item" href='/receiver'>Receiver</a>
                    <div class="right menu">
                        <div class="item">
                            <button class="ui  button" role="button"><a href="/login">Sign In</a></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;