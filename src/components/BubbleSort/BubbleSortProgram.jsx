import React from 'react'
import './BubbleSort.css'
function BubbleSortProgram({check_swap}) {
    
    console.log(document.getElementById('check_swap'))
    // document.getElementById(check_swap).style.backgroundColor='green'




    return (
       
      <div className='bs_program'>
      <div  className="box">{`for (let i = 0; i < length; i++) {`}</div>
      <div className="box">{` for (let j = 0; j < arr.length - i - 1; j++) {`}</div>
      <div className="box" id="check_swap">{`if (arr[j] > arr[j + 1]) {`}</div>
      <div className="box" id = "swap_truw">{`swapElement(arr[j],arr[j+1])`}</div>
      <div className="box">{`}`}</div>
      <div className="box">{`}`}</div>
    </div>
      
    )
}

export default BubbleSortProgram
