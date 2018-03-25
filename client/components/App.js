import React from 'react';
import './App.css';
class App extends React.Component {
  	data = () => {
  		return (<div>Hi Hello</div>);
  	}
  render(){


    return (
      <div className="bgColorGreen"><br/>
          Rana
      	<button>Fetch</button>
      	{this.data()}
      </div>
    );
  }
}
export default App;
