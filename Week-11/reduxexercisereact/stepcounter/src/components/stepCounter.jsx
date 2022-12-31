import React from 'react'
import {addStep,resetStep} from '../redux/action'
import { connect } from 'react-redux'
function StepCounter(props) {
  return (
   <>
     <div style={Styled.wrapper}>
        <p style={Styled.text}>You've walked {props.steps} today!</p>
        <button style={{...Styled.btn,...Styled['button-primary']}} onClick={props.addStep}>Add Step</button>
        <button style={{...Styled.btn,...Styled['button-gray']}} onClick={props.resetStep}>Reset Steps</button>
    </div>
   </>
  )
}

const mapStateToProps = state =>{
    return {
        steps: state.steps
    }
}

const mapsDispatchToProps = dispatch =>{
    return{
        addStep: () => dispatch(addStep()),
        resetStep: () => dispatch(resetStep())
    }
}
const Styled = {
    wrapper: {
        width: '22%',
        margin: '0 auto'
    },
    text:{
        'text-align': 'center',
        'font-size': '23px',
        'font-weight': 'bold'
    }
    ,
    btn: {
        display: 'inline-block',
        'font-weight': '400',
        'text-align': 'center',
        'white-space': 'nowrap',
        'vertical-align': 'middle',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
        border: '1px solid transparent',
        padding: '20px',
        'font-size': '1rem',
        'line-height': 1.5,
        'border-radius': '0.25rem',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
        width: '100%',
        marginBottom: '5px'
    },
    'button-primary':{
        color: '#fff',
        'background-color': '#007bff',
        'border-color': '#007bff'
    },
    'button-gray':{
        color: '#fff',
        'background-color': '#5a6268',
        'border-color': '#545b62'
    }

}
export default connect(mapStateToProps,mapsDispatchToProps)(StepCounter)