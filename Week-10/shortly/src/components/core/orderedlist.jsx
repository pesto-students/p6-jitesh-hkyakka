import React from 'react'
import '../css/orderedlist.css'
const OrderedList = ({shorturls}) => {
  return (
    <div style={Styled.listwrapper}>
        <div>
        <h4 style={{marginTop:"10px"}}>List of Short Urls</h4>
        <ol>
            {/* {<li class=""><a href="#">Grilled Flatfish With Pistachio-Herb Sauce</a></li>
            <li class=""><a href="#">Coconut Cod Chowder With Seasoned Oyster Crackers</a></li>
            <li class=""><a href="#">Tamarind-Glazed Black Bass With Coconut-Herb Salad</a></li>
            <li class=""><a href="#">Spicy Sweet-and-Sour Salmon With Dates</a></li>} */}
            {shorturls && shorturls.length > 0? shorturls.map((url,index)=>{
              return <li key={index}><a href={url}>{url}</a></li>
            }) :""}
        </ol>
        </div>
    </div>
  )
}
const Styled = {
  listwrapper: {
    "display": "flex",
    "justify-content": "center"
  }
}
export default OrderedList