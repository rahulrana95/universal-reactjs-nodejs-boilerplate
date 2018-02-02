import React from 'react';
import './App.css';
class App extends React.Component {
  	data = () => {
  		return (<div>Hi</div>);
  	}
  render(){


    return (
      <div className="bgColorGreen">Hi from rahul 
      	<button>Fetch</button>
      	{this.data()}
      </div>
    );
  }
}
export default App;
