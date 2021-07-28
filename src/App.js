import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Comment from './Components/Comment.js';

class App extends Component {


  randomPic = () => {
    return ""
  }
  render() {
    return (
      <div>
        <h1>Today's voice:</h1>
        <div className="App">
          {/* muszę ręcznie przeładować hosta bo inaczej nie widać zmian w propsach. w reszcie rzeczy widać 
        
        Jak chcę teraz zmienić nazwy propsów np z color na colorHeader i colorContent to ręcznie musze wszystko zmienić w każdym komponencie?

        Czy mogę funkcją wbudowaną z poziomu App.js zmieniać state w componencie np. "Component.setState" 

        nie mogłem przekazać w ogóle funkcji delete do propsa bez zamiany App na klasowy więcprzeniosłem do Comment'a
        
        */}

          <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"red"}
            fontSize={"20px"}
            fontWeight={"700"}
            headerJustify={"center"}
            contentJustify={"right"} />
          <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"green"}
            fontSize={"14px"}
            fontWeight={"400"}
            headerJustify={"left"}
            contentJustify={"center"} />
          <Comment
            pic={"https://www.usedairsoft.co.uk/oc-content/uploads/264/57119.jpg"}
            color={"magenta"}
            fontSize={"10px"}
            fontWeight={"200"}
            headerJustify={"right"}
            contentJustify={"left"} />
          <Comment
            pic={this.randomPic}
            color={""}
            fontSize={""}
            fontWeight={""}
            headerJustify={""}
            contentJustify={""} />
        </div >
      </div >
    );
  }
}




export default App;
