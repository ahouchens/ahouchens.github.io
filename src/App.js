import React, { Component } from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';
import resume from './resume.md';
import Header from './header/Header.js';

// surprise, it's a div instead!
const MyParagraph = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { md: '' };
  }

  componentWillMount() {
    fetch(resume)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {
    let { md } = this.state;

    return (
      <div className="App">
        <Markdown 
          children={md} 
          options= {{
            overrides: {
                h1: Header,
                className: 'chrome'
            },
        }}
        />
      </div>
    );
  }
}

export default App;
