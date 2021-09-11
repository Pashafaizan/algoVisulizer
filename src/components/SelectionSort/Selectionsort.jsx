import React, { useEffect, useState } from "react";
function waitforme(ms) {
  console.log("this is await for me");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getSwapDiv(firstDiv, secondDiv, i, j) {

  let currentFirstDiv = firstDiv.style.transform.split("(")[1].split("px")[0];
  let currentSecondDiv = secondDiv.style.transform.split("(")[1].split("px")[0];


  firstDiv.style.transform = `translateX(${
    (j - i) * 50 + parseInt(currentFirstDiv)
  }px)`;
  let offset = (j - i) * 50;
 
  secondDiv.style.transform = `translateX(${
    -(j - i) * 50 + parseInt(currentSecondDiv)
  }px)`;

  await waitforme(1000);
}
function Selectionsort(props) {
  let arr = [3, 13, 18, 2, 17, 20, 19,2];
  useEffect(() => {
    if(props.playState){
      selectionsortAlgo();
    }
      }, [props.playState])
  const selectionsortAlgo = async () => {
    let element = document.getElementById('log_tracer');
    let n = arr.length;
    let firstLoop = document.getElementById("p0");
    let secondLoop = document.getElementById("p2")
    let checkMin = document.getElementById("p3");
    let swapElement = document.getElementById("p5");
    let para = document.createElement("div");
    
   
    for (let i = 0; i < n; i++) {
      let cond=true;
      firstLoop.classList.add('black_box');
      await waitforme(1000);
      secondLoop.classList.remove('black_box');
      swapElement.classList.remove("black_box");
      let mySecondElement;
      let myFirstElement;
     
      let min = i;
      
       let div1 = document.createElement("div");

       div1.appendChild(
        document.createTextNode(
          `@Insertion Sort let  ${arr[min]}`
        )
        
        
        
        
      );
      element.appendChild(div1);
    

      myFirstElement = document.getElementById(i);
      myFirstElement.classList.add("current_div");
      for (let j = i + 1; j < n; j++) {

        firstLoop.classList.remove('black_box');
        secondLoop.classList.add('black_box');
        
        mySecondElement = document.getElementById(j);
    
        element.scrollTo({top:element.scrollHeight, behavior:"smooth"})

        mySecondElement.classList.add("current_div");
        let minElement = document.getElementById(min);
        minElement.classList.remove("current_div")
        minElement.classList.add("min_element")
       
         let div2 = document.createElement("div");
         div2.appendChild(
          document.createTextNode(
            `@Insertion Sort compare ${arr[min]} and ${arr[j]}`
          )
          
          
          
          
        );
        element.appendChild(div2);
        if (arr[j] < arr[min]) {
          cond =false;
          
           let div3 = document.createElement("div");
           div3.appendChild(
            document.createTextNode(
              `@Insertion Sort compare${arr[min]} < ${arr[j]} so min=${arr[j]}`
            ))
            element.appendChild(div3);
         secondLoop.classList.remove('black_box');
          checkMin.classList.add('black_box');
          await waitforme(1000);
       
          minElement.classList.remove("min_element")
          min = j;
          myFirstElement.classList.remove('current_div');
           minElement = document.getElementById(min);
          console.log(min);
          console.log(minElement);
          minElement.classList.remove("current_div")
          minElement.classList.add("min_element")
          mySecondElement.classList.add("current_div");
          if (para.offsetTop > "200") {
         
            element.style.transform = `translateY(${para.offsetTop - 100})px`;
          }
          
      }
      checkMin.classList.remove('black_box');
        await waitforme(1000);
        mySecondElement.classList.remove("current_div");
         if(cond){
        
           let div4 = document.createElement("div");
           div4.appendChild(
          document.createTextNode(
            `@Insertion Sort compare ${arr[min]} > ${arr[j]}  continue`
          ))
          element.appendChild(div4);
        }
      }
  
      if (min != i) {
        checkMin.classList.remove('black_box');
        swapElement.classList.add("black_box");

        myFirstElement = document.getElementById(i);
        mySecondElement = document.getElementById(min);
         getSwapDiv(myFirstElement, mySecondElement,i,min);
       
         await waitforme(1000);

         
        myFirstElement.setAttribute("id", min);
          mySecondElement.setAttribute("id", i);
          
          myFirstElement.classList.remove('min_element');
        
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      myFirstElement= document.getElementById(i);
      myFirstElement.classList.add('final_pos');
    }
  };
  return (
    <div style={{marginTop:120}}>
      <div className="main_section_bs">
        <div className="section_bs">
          {arr.map((value, index) => {
            return (
              <>
                <div
                  key={index}
                  id={index}
                  className="default_div"
                  style={{
                    height: value * 10,
                    transform: "translateX(0px)",
                  }}
                >
                  {" "}
                  {value}
                </div>
              </>
            );
          })}
        </div>

        <div className="log_tracer" id="log_tracer">
          <div>
            <span>@Selection Sort &nbsp; </span> is mounted
          </div>
        </div>

      </div>
      <div className="bs_program">
        <div></div>
        <div
          id="p0"
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div id="p1"  className="box">{`let min = i`}</div>
        <div
          id="p2"
          className="box"
        >{` for (let j = i+1; j < arr.length - i - 1; j++) {`}</div>
        <div
          id="p3"
          className="box"
          // id="check_swap"
        >{`if (arr[j] < arr[min]) {`}</div>
        <div id="p4"  className="box">{`min=j }`}</div>
        <div id="p5" className="box">{`swapElement(arr[i],arr[min])`}</div>
        <div id="p6" className="box">{`} }`}</div>
       
      </div>
    </div>
  );
}

export default Selectionsort;
