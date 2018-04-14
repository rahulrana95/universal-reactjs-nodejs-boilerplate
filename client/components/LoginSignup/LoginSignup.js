import React from 'react';
import {connect} from 'react-redux';

function loginUserAction (data){

    return (dispatch) => {
        dispatch({
          type: 'rana',
          payload:data
        })
      }
  }

class LoginSignup extends React.Component {
  render(){
    let props = this.props

    return (
      <div className="bgColorGreen">
      	{props.red.status}
        <h1 className="heading" onClick={this.props.loginUserAction}> Level 2</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        red:state.loginSignupReducer
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      loginUserAction:()=>{dispatch(loginUserAction())}
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginSignup);
