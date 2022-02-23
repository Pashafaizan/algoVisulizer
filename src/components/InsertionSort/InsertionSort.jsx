import React, { useEffect, useRef } from "react";
import "./insertionsort.css";
let isTrue = false;
let speed = 500;
function waitforme(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function InsertionSort(props) {
  let arr = [7, 25, 30, 10, 5, 20, 4, 2];
  const logTracerRef = useRef();
  const outerLoopRef = useRef();
  const innerLoopAndCheckRef = useRef();
  const checkRef = useRef();
  const swapRef = useRef();
  const insertionDivRef = useRef(
    [...new Array(arr.length)].map(() => React.createRef())
  );
  useEffect(() => {
    if (props.playState) {
      insertionSortAlgo();
    }
  }, [props.playState]);
  const insertionSortAlgo = async () => {
    async function getSwapDiv(firstDiv, secondDiv, isTrue = false) {
      let currentFirstDiv = firstDiv.current.style.transform
        .split("(")[1]
        .split("px")[0];
      let currentSecondDiv = secondDiv.current.style.transform
        .split("(")[1]
        .split("px")[0];

      await waitforme(speed);
      firstDiv.current.style.transform = `translateX(${
        parseInt(currentFirstDiv) + 50
      }px)`;
      secondDiv.current.style.transform = `translateX(${
        parseInt(currentSecondDiv) - 50
      }px)`;
      let firstSwap = firstDiv.current.innerText;
      let secondSwap = secondDiv.current.innerText;
      let divIs = document.createElement("div");
      console.log(logTracerRef,"log");
      logTracerRef.current.appendChild(divIs);
      //
      
      divIs.appendChild(
        document.createTextNode(
          `@Insertion Sort Swapping   ${firstSwap} and ${secondSwap}`
          )
          );
          console.log(divIs,'');
      isTrue = true;
      await waitforme(speed);
    }

    let i, key, j;
    let n = arr.length;

    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;

      outerLoopRef.current.classList.add("black_box");

      await waitforme(speed);
      let divIs = document.createElement("div");
      console.log(divIs, "dvis");
      console.log(logTracerRef, "logreacerref");
      logTracerRef.current.appendChild(divIs);
      divIs.appendChild(
        document.createTextNode(
          `@Insertion Sort Comaparing ${arr[j]} and ${arr[i]}`
        )
      );

      let myFirstElement = insertionDivRef.current[j];
      let mySecondElement = insertionDivRef.current[i];
      console.log(myFirstElement);
      myFirstElement.current.classList.add("current_div");
      mySecondElement.current.classList.add("current_div");

      innerLoopAndCheckRef.current.classList.remove("black_box");
      await waitforme(speed);
      innerLoopAndCheckRef.current.classList.add("black_box");
      await waitforme(speed);
      while (j >= 0 && arr[j] > key) {
        outerLoopRef.current.classList.remove("black_box");

        let startDiv = insertionDivRef.current[j];
        let nextDiv = insertionDivRef.current[j + 1];

        startDiv.current.classList.add("current_div");
        nextDiv.current.classList.add("current_div");

        logTracerRef.current.scrollTo({
          top: logTracerRef.current.scrollHeight,
          behavior: "smooth",
        });
        await waitforme(speed);
        swapRef.current.classList.add("black_box");
        getSwapDiv(startDiv, nextDiv);

        let temp1 = insertionDivRef.current[j + 1];
        insertionDivRef.current[j + 1] = insertionDivRef.current[j];
        insertionDivRef.current[j] = temp1;

        if (isTrue) {
          insertionDivRef.current[j] = insertionDivRef.current[j + 1];
        }
        startDiv.current.classList.remove("current_div");
        nextDiv.current.classList.remove("current_div");

        await waitforme(speed);
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      swapRef.current.classList.remove("black_box");
      await waitforme(speed);
      arr[j + 1] = key;
      isTrue = false;
      myFirstElement.current.classList.remove("current_div");
      mySecondElement.current.classList.remove("current_div");

      if (divIs.offsetTop > "200") {
        logTracerRef.current.style.transform = `translateY(${
          divIs.offsetTop - 100
        })px`;
      }
    }
    innerLoopAndCheckRef.current.classList.remove("black_box");
  };

  return (
    <div style={{ marginTop: 120 }}>
      <div className="main_section_bs">
        <div className="section_bs">
          {arr.map((value, index) => {
            return (
              <>
                <div
                  key={index}
                  ref={insertionDivRef.current[index]}
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
            <span>@Insertion Sort &nbsp; </span> is mounted
          </div>
        </div>
      </div>
      <div className="bs_program">
        <div></div>
        <div
          ref={outerLoopRef}
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div
          ref={innerLoopAndCheckRef}
          className="box"
        >{` while (j >= 0 && arr[j] > key) {`}</div>

        <div
          ref={swapRef}
          className="box"
        >{`swapElement(arr[j],arr[j+1])`}</div>
        <div id="p3" className="box">{`}`}</div>
        <div id="p4" className="box">{`}`}</div>
      </div>
    </div>
  );
}

export default InsertionSort;
