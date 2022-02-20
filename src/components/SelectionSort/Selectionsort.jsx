import React, { useEffect, useRef } from "react";
function waitforme(ms) {
  console.log("this is await for me");
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let speed = 500;

function Selectionsort(props) {
  let arr = [3, 13, 18, 2, 17, 19, 15];
  const logTracerRef = useRef();
  const firstLoopRef = useRef();
  const secondLoopRef = useRef();
  const checkMinRef = useRef();
  const swapRef = useRef();
  const selectionDivRef = useRef(
    [...new Array(arr.length)].map(() => React.createRef())
  );
  useEffect(() => {
    if (props.playState) {
      selectionsortAlgo();
    }
  }, [props.playState]);
  const selectionsortAlgo = async () => {
    let n = arr.length;

    let para = document.createElement("div");
    async function getSwapDiv(firstDiv, secondDiv, i, j) {
      let currentFirstDiv = firstDiv.current.style.transform
        .split("(")[1]
        .split("px")[0];
      let currentSecondDiv = secondDiv.current.style.transform
        .split("(")[1]
        .split("px")[0];

      firstDiv.current.style.transform = `translateX(${
        (j - i) * 50 + parseInt(currentFirstDiv)
      }px)`;
      let offset = (j - i) * 50;

      secondDiv.current.style.transform = `translateX(${
        -(j - i) * 50 + parseInt(currentSecondDiv)
      }px)`;

      await waitforme(speed);
    }

    for (let i = 0; i < n; i++) {
      let cond = true;
      firstLoopRef.current.classList.add("black_box");
      await waitforme(speed);
      secondLoopRef.current.classList.remove("black_box");
      swapRef.current.classList.remove("black_box");
      let mySecondElement;
      let myFirstElement;

      let min = i;

      let div1 = document.createElement("div");
      logTracerRef.current.appendChild(div1);
      div1.appendChild(
        document.createTextNode(`@Selection Sort let min =  ${arr[min]}`)
      );
      console.log(div1);

      myFirstElement = selectionDivRef.current[i];
      myFirstElement.current.classList.add("current_div");
      for (let j = i + 1; j < n; j++) {
        firstLoopRef.current.classList.remove("black_box");
        secondLoopRef.current.classList.add("black_box");

        mySecondElement = selectionDivRef.current[j];

        logTracerRef.current.scrollTo({
          top: logTracerRef.current.scrollHeight,
          behavior: "smooth",
        });

        mySecondElement.current.classList.add("current_div");
        let minElement = selectionDivRef.current[min];
        minElement.current.classList.remove("current_div");
        minElement.current.classList.add("min_element");

        let div2 = document.createElement("div");
        div2.appendChild(
          document.createTextNode(
            `@Selection Sort compare ${arr[min]} and ${arr[j]}`
          )
        );
        logTracerRef.current.appendChild(div2);
        if (arr[j] < arr[min]) {
          cond = false;

          let div3 = document.createElement("div");
          div3.appendChild(
            document.createTextNode(
              `@Selection Sort compare${arr[min]} < ${arr[j]} so min=${arr[j]}`
            )
          );
          logTracerRef.current.appendChild(div3);
          secondLoopRef.current.classList.remove("black_box");
          checkMinRef.current.classList.add("black_box");
          await waitforme(speed);

          minElement.current.classList.remove("min_element");
          min = j;
          myFirstElement.current.classList.remove("current_div");
          minElement = selectionDivRef.current[min];
          console.log(min);
          console.log(minElement);
          minElement.current.classList.remove("current_div");
          minElement.current.classList.add("min_element");
          mySecondElement.current.classList.add("current_div");
          if (para.offsetTop > "200") {
            logTracerRef.current.style.transform = `translateY(${
              para.offsetTop - 100
            })px`;
          }
        }
        checkMinRef.current.classList.remove("black_box");
        await waitforme(speed);
        mySecondElement.current.classList.remove("current_div");
        if (cond) {
          let div4 = document.createElement("div");
          div4.appendChild(
            document.createTextNode(
              `@Selection Sort compare ${arr[min]} > ${arr[j]}  continue`
            )
          );
          logTracerRef.current.appendChild(div4);
        }
      }

      if (min != i) {
        checkMinRef.current.classList.remove("black_box");
        swapRef.current.classList.add("black_box");

        myFirstElement = selectionDivRef.current[i];
        mySecondElement = selectionDivRef.current[min];
        getSwapDiv(myFirstElement, mySecondElement, i, min);

        await waitforme(speed);

        let temp1 = selectionDivRef.current[min];
        selectionDivRef.current[min] = selectionDivRef.current[i];
        selectionDivRef.current[i] = temp1;

        myFirstElement.current.classList.remove("min_element");

        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      myFirstElement = selectionDivRef.current[i];
      myFirstElement.current.classList.add("final_pos");
    }
    firstLoopRef.current.classList.remove("black_box");
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
                  ref={selectionDivRef.current[index]}
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
            <span>@Selection Sort &nbsp; </span> is mounted
          </div>
        </div>
      </div>
      <div className="bs_program">
        <div></div>
        <div
          ref={firstLoopRef}
          className="box"
        >{`for (let i = 0; i < length; i++) {`}</div>
        <div id="p1" className="box">{`let min = i`}</div>
        <div
          ref={secondLoopRef}
          className="box"
        >{` for (let j = i+1; j < arr.length - i - 1; j++) {`}</div>
        <div
          ref={checkMinRef}
          className="box"
        >{`if (arr[j] < arr[min]) {`}</div>
        <div id="p4" className="box">{`min=j }`}</div>
        <div
          ref={swapRef}
          className="box"
        >{`swapElement(arr[i],arr[min])`}</div>
        <div id="p6" className="box">{`} }`}</div>
      </div>
    </div>
  );
}

export default Selectionsort;
