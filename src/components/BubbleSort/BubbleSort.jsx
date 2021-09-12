import React, { useEffect, useState } from "react";
import "./BubbleSort.css";

function waitforme(ms) {
  console.log("this is await for me");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let speed = 500;
async function getSwapDiv(firstDiv, secondDiv, j) {
  let currentFirstDiv = firstDiv.style.transform.split("(")[1].split("px")[0];
  let currentSecondDiv = secondDiv.style.transform.split("(")[1].split("px")[0];
  firstDiv.style.transform = `translateX(${parseInt(currentFirstDiv) + 50}px)`;
  secondDiv.style.transform = `translateX(${
    parseInt(currentSecondDiv) - 50
  }px)`;
  await waitforme(speed);
}

function BubbleSort(props) {
  const [openBtn, setOpenBtn] = useState(true);
  let arr = [3, 13, 18, 2, 17, 19,15];
  useEffect(() => {
if(props.playState){
  bubbleSortAlgo();
}
  }, [props.playState])

  const bubbleSortAlgo = async () => {
    setOpenBtn(false);
    // this id use for bubble sort program
    let element = document.getElementById("log_tracer");
    
    let outerLoop = document.getElementById("p0");
    let innerLoop = document.getElementById("p1");
    let check = document.getElementById("p2");
    let swap = document.getElementById("p3");
    /********************************** */
    document.getElementById(0).classList.remove("current_value");
    let value = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      outerLoop.classList.add("black_box");

      await waitforme(speed);

      for (let j = 0; j < arr.length - i - 1; j++) {
        outerLoop.classList.remove("black_box");
        innerLoop.classList.add("black_box");
        check.classList.remove("black_box");
        swap.classList.remove("black_box");
        await waitforme(speed);
        element.scrollTo({top:element.scrollHeight, behavior:"smooth"})
        let notSwap = true;
        let para = document.createElement("div");
        element.appendChild(para);
        para.appendChild(
          document.createTextNode(
            `@Bubble Sort Comaparing ${arr[j]} and ${arr[j + 1]}`
          )
          
        );
       

        let myFirstElement = document.getElementById(j);
        let mySecondElement = document.getElementById(j + 1);
        myFirstElement.classList.add("swap_div");
        mySecondElement.classList.add("swap_div");
        innerLoop.classList.remove("black_box");
        check.classList.add("black_box");
        await waitforme(speed);

        if (arr[j] > arr[j + 1]) {
          check.classList.remove("black_box");
          console.log(swap);
          swap.classList.add("black_box");
          await waitforme(speed);

          let para2 = document.createElement("div");
          element.appendChild(para2);
          console.log(para2.offsetTop);

          para2.appendChild(
            document.createTextNode(
              `@Bubble Sort ${arr[j]} > ${arr[j + 1]}  swapping...`
            )
          );
        
          notSwap = false;
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          await getSwapDiv(myFirstElement, mySecondElement);
          let firstId = document.getElementById(j);
          let secondId = document.getElementById(j + 1);
          firstId.setAttribute("id", j + 1);
          secondId.setAttribute("id", j);
        }
        if (para.offsetTop > "200") {
         
          element.style.transform = `translateY(${para.offsetTop - 100})px`;
        }
        if (notSwap) {
          let para1 = document.createElement("div");
          element.appendChild(para1);
          para1.appendChild(
            document.createTextNode(
              `@Bubble Sort  ${arr[j]}  and ${arr[j + 1]}  continuing...`
            )
          );
        }
        value = j + 1;
        await waitforme(speed);
        myFirstElement.classList.remove("swap_div");
        mySecondElement.classList.remove("swap_div");
      }
      check.classList.remove("black_box");
      document.getElementById(value).classList.add("final_value");
    
    }
    document.getElementById("0").classList.add("final_value");
  };

  return (
    <div className="bubble">
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
            <span>@Bubble Sort &nbsp; </span> is mounted
          </div>
        </div>
     
      </div>
      <div className="bs_program">
        
        <div
          id="p0"
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div
          id="p1"
          className="box"
        >{` for (let j = 0; j < arr.length - i - 1; j++) {`}</div>
        <div
          id="p2"
          className="box"
          // id="check_swap"
        >{`if (arr[j] > arr[j + 1]) {`}</div>
        <div id="p3" className="box">{`swapElement(arr[j],arr[j+1])`}</div>
        <div id="p4" className="box">{`}`}</div>
        <div id="p5" className="box">{`}`}</div>
      </div>
       
    </div>
  );
}

export default BubbleSort;
