import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

//import '../../styles/semantic.min.css'
import 'semantic-ui-css/semantic.min.css';
import './News.css';

class News extends Component {
  render() {
    return (
      <div className="News">
        <Navbar />
        <div class="ui centered top banner test ad" data-text="Sharing Hearts"></div>
        <div class='body'>
          <div class="ui celled grid">
            <div class="row">
              <div class="three wide column">
                <img class="ui image" src="/assets/images/wireframe/image.png" />
              </div>
              <div class="thirteen wide column">
              <p>Paragraphs are the building blocks of papers. 
                  For instance, in some styles of writing, 
                  particularly journalistic styles, a paragraph can be just one sentence long. 
                  Ultimately, a paragraph is a sentence or group of sentences that support one 
                  main idea. In this handout, we will refer to this as the “controlling idea,” 
                  because it controls what happens in the rest of the paragraph.</p>
              </div>
            </div>
            <div class="row">
              <div class="three wide column">
                <img class="ui image" src="/assets/images/wireframe/image.png" />
              </div>
              <div class="ten wide column">
              <p>Paragraphs are the building blocks of papers. Many students define paragraphs in
                 terms of length: a paragraph is a group of at least five sentences, 
                 a paragraph is half a page long, etc. In reality, though, the unity a
                 nd coherence of ideas among sentences is what constitutes a paragraph. 
                 A paragraph is defined as “a group of sentences or a single sentence that
                  forms a unit” (Lunsford and Connors 116). Length and appearance do not 
                  determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
              </div>
              <div class="three wide column">
                <img class="ui image" src="/assets/images/wireframe/image.png" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default News;