import React, { useEffect, useState } from "react";
import "./insertionsort.css";
let isTrue = false;

function waitforme(ms) {
  
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function getSwapDiv(firstDiv, secondDiv, isTrue = false) {
  let element = document.getElementById("log_tracer_is");
  let currentFirstDiv = firstDiv.style.transform.split("(")[1].split("px")[0];
  let currentSecondDiv = secondDiv.style.transform.split("(")[1].split("px")[0];

  await waitforme(1000);
  firstDiv.style.transform = `translateX(${parseInt(currentFirstDiv) + 50}px)`;
  secondDiv.style.transform = `translateX(${
    parseInt(currentSecondDiv) - 50
  }px)`;
  let firstSwap = firstDiv.innerText;
  let secondSwap = secondDiv.innerText;
  let divIs = document.createElement("div");
  console.log(divIs);
  element.appendChild(divIs);
  divIs.appendChild(
    document.createTextNode(
      `@Insertion Sort Swapping   ${firstSwap} and ${secondSwap}`
    )
  );
  isTrue = true;
  await waitforme(1000);
}

function InsertionSort(props) {
  let arr = [7,25,30,10,5,20,4,2];
  useEffect(() => {
    if(props.playState){
      insertionSortAlgo();
    }
      }, [props.playState])
  const insertionSortAlgo = async () => {
    let element = document.getElementById("log_tracer_is");
    let outerLoop = document.getElementById("p0");
    let innerLoopAndCheck = document.getElementById("p1");

    let swap = document.getElementById("p2");
    let i, key, j;
    let n = arr.length;

    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      outerLoop.classList.add("black_box");
      let divIs = document.createElement("div");
      console.log(divIs);
      element.appendChild(divIs);
      divIs.appendChild(
        document.createTextNode(
          `@Insertion Sort Comaparing ${arr[j]} and ${arr[i]}`
        )
      );
      let myFirstElement = document.getElementById(j);
      let mySecondElement = document.getElementById(i);
      myFirstElement.classList.add("current_div");
      mySecondElement.classList.add("current_div");
    
    
      innerLoopAndCheck.classList.remove("black_box");
      await waitforme(1000);
      innerLoopAndCheck.classList.add("black_box");
      await waitforme(1000);
      while (j >= 0 && arr[j] > key) {
        outerLoop.classList.remove("black_box");

        let startDiv = document.getElementById(j);
        let nextDiv = document.getElementById(j + 1);

        startDiv.classList.add("current_div");
        nextDiv.classList.add("current_div");
  
        element.scrollTo({top:element.scrollHeight, behavior:"smooth"})
        await waitforme(1000);
        swap.classList.add("black_box");
        getSwapDiv(startDiv, nextDiv);

        startDiv.setAttribute("id", j + 1);
        nextDiv.setAttribute("id", j);
        if (isTrue) {
          nextDiv.setAttribute("id", j + 1);
        }
        startDiv.classList.remove("current_div");
        nextDiv.classList.remove("current_div");

        await waitforme(1000);
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      swap.classList.remove("black_box");
      await waitforme(1000);
      arr[j + 1] = key;
      isTrue = false;
      myFirstElement.classList.remove("current_div");
      mySecondElement.classList.remove("current_div");
      
      if (divIs.offsetTop > "200") {
         
        element.style.transform = `translateY(${divIs.offsetTop - 100})px`;
      }
    }
    innerLoopAndCheck.classList.remove("black_box");
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
        <div className="log_tracer" id="log_tracer_is">
          <div>
            <span>@Insertion Sort &nbsp; </span> is mounted
          </div>
        </div>
      </div>
      <div className="bs_program">
        <div></div>
        <div
          id="p0"
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div id="p1" className="box">{` while (j >= 0 && arr[j] > key) {`}</div>

        <div id="p2" className="box">{`swapElement(arr[j],arr[j+1])`}</div>
        <div id="p3" className="box">{`}`}</div>
        <div id="p4" className="box">{`}`}</div>
      </div>
    </div>
  );
}

export default InsertionSort;
