import React from 'react'
import { connect } from 'react-redux'
import  toggleLight  from '../redux/action'
function Room(props) {
    
    const lightedness = props.isLightOn ? "lit" : "dark";
  return (
    <>
     <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={props.toggleLight}>flip</button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
    return {
        isLightOn: state.isLightOn
    }
}

const mapDispatchToProps = dispatch => {
    return{
        toggleLight: () => dispatch(toggleLight())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Room)