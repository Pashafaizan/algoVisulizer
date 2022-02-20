import React, { useEffect, useState, useRef } from "react";
import "./BubbleSort.css";

function waitforme(ms) {
  console.log("this is await for me");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let speed = 500;
async function getSwapDiv(firstDiv, secondDiv, j) {
  let currentFirstDiv = firstDiv.current.style.transform
    .split("(")[1]
    .split("px")[0];
  let currentSecondDiv = secondDiv.current.style.transform
    .split("(")[1]
    .split("px")[0];
  firstDiv.current.style.transform = `translateX(${
    parseInt(currentFirstDiv) + 50
  }px)`;
  secondDiv.current.style.transform = `translateX(${
    parseInt(currentSecondDiv) - 50
  }px)`;
  await waitforme(speed);
}

function BubbleSort(props) {
  const [openBtn, setOpenBtn] = useState(true);
  let arr = [3, 13, 18, 2, 17, 19, 15];
  const logTracerRef = useRef();
  const outerLoopRef = useRef();
  const innerLoopRef = useRef();
  const checkRef = useRef();
  const swapRef = useRef();
  const bubbleDivRef = useRef(
    [...new Array(arr.length)].map(() => React.createRef())
  );
  useEffect(() => {
    if (props.playState) {
      console.log("start bubble sort algo");
      bubbleSortAlgo();
    }
  }, [props.playState]);

  const bubbleSortAlgo = async () => {
    console.log("call bubble sort funtion");
    setOpenBtn(false);

    bubbleDivRef.current[0].current.classList.remove("current_value");
    let value = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      outerLoopRef.current.classList.add("black_box");

      await waitforme(speed);

      for (let j = 0; j < arr.length - i - 1; j++) {
        outerLoopRef.current.classList.remove("black_box");
        innerLoopRef.current.classList.add("black_box");
        checkRef.current.classList.remove("black_box");
        swapRef.current.classList.remove("black_box");
        await waitforme(speed);
        logTracerRef.current.scrollTo({
          top: logTracerRef.current.scrollHeight,
          behavior: "smooth",
        });
        let notSwap = true;
        let para = document.createElement("div");
        logTracerRef.current.appendChild(para);
        para.appendChild(
          document.createTextNode(
            `@Bubble Sort Comaparing ${arr[j]} and ${arr[j + 1]}`
          )
        );

        let myFirstElement = bubbleDivRef.current[j];
        let mySecondElement = bubbleDivRef.current[j + 1];

        bubbleDivRef.current[j].current.classList.add("swap_div");
        bubbleDivRef.current[j + 1].current.classList.add("swap_div");
        innerLoopRef.current.classList.remove("black_box");
        checkRef.current.classList.add("black_box");
        await waitforme(speed);

        if (arr[j] > arr[j + 1]) {
          checkRef.current.classList.remove("black_box");

          swapRef.current.classList.add("black_box");
          await waitforme(speed);

          let para2 = document.createElement("div");
          logTracerRef.current.appendChild(para2);
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

          let temp1 = bubbleDivRef.current[j + 1];
          bubbleDivRef.current[j + 1] = bubbleDivRef.current[j];
          bubbleDivRef.current[j] = temp1;
        }
        if (para.offsetTop > "200") {
          logTracerRef.current.style.transform = `translateY(${
            para.offsetTop - 100
          })px`;
        }
        if (notSwap) {
          let para1 = document.createElement("div");
          logTracerRef.current.appendChild(para1);
          para1.appendChild(
            document.createTextNode(
              `@Bubble Sort  ${arr[j]}  and ${arr[j + 1]}  continuing...`
            )
          );
        }
        value = j + 1;
        await waitforme(speed);
        myFirstElement.current.classList.remove("swap_div");
        mySecondElement.current.classList.remove("swap_div");
      }
      checkRef.current.classList.remove("black_box");
      bubbleDivRef.current[value].current.classList.add("final_value");
    }
    bubbleDivRef.current[0].current.classList.add("final_value");
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
                  ref={bubbleDivRef.current[index]}
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

        <div className="log_tracer" ref={logTracerRef}>
          <div>
            <span>@Bubble Sort &nbsp; </span> is mounted
          </div>
        </div>
      </div>
      <div className="bs_program">
        <div
          ref={outerLoopRef}
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div
          ref={innerLoopRef}
          className="box"
        >{` for (let j = 0; j < arr.length - i - 1; j++) {`}</div>
        <div
          ref={checkRef}
          className="box"
        
        >{`if (arr[j] > arr[j + 1]) {`}</div>
        <div
          ref={swapRef}
          className="box"
        >{`swapElement(arr[j],arr[j+1])`}</div>
        <div id="p4" className="box">{`}`}</div>
        <div id="p5" className="box">{`}`}</div>
      </div>
    </div>
  );
}

export default BubbleSort;
