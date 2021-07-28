import React, { Component } from 'react';
import './App.css';
import Comment from './Components/Comment.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      hidden2: false,
    }
  }


  randomPic = () => {
    return ""
  }

  deleted = () => {
    console.log('clicked');
    this.setState({
      hidden: !this.state.hidden,
    })
  }
  render() {
    return (
      <div>
        <h1>Today's voice:</h1>
        <div className="App">

          <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"red"}
            fontSize={"20px"}
            fontWeight={"700"}
            headerJustify={"center"}
            contentJustify={"right"}
            deleted={this.deleted}
            hidden={this.state.hidden} />
          {/* <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"green"}
            fontSize={"14px"}
            fontWeight={"400"}
            headerJustify={"left"}
            contentJustify={"center"}
            deleted={this.deleted}
            hidden={this.state.hidden2} /> */}
          {/* <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"magenta"}
            fontSize={"10px"}
            fontWeight={"200"}
            headerJustify={"right"}
            contentJustify={"left"}
            deleted={this.deleted} /> */}
          {/* <Comment
            pic={this.randomPic}
            color={""}
            fontSize={""}
            fontWeight={""}
            headerJustify={""}
            contentJustify={""}
            deleted={this.deleted} /> */}
        </div >
      </div >
    );
  }
}




export default App;
