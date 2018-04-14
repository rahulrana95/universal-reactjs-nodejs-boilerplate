import React from 'react';
import LoginSignup from './LoginSignup/LoginSignup';
class App extends React.Component {
  render(){


    return (
      <div className="bgColorGreen">
      	<button>Hello Rana</button>
        <h1 className="heading"> Rana</h1>
        <LoginSignup/>
      </div>
    );
  }
}
export default App;
