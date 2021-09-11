import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CrossSvg } from "../../resources/icons/cross.svg";
import { ReactComponent as SimpleMenuSvg } from "../../resources/icons/Menu.svg";
import { useHistory } from "react-router-dom";
import "./header.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
export default function Header(props) {
  let history = useHistory();
  const menuRef = useRef(null);

  const sideBarRef = useRef(null);

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    if (menuState) {
      sideBarRef.current.style.transform = "translateX(0px)";
      sideBarRef.current.style.opacity = "1";
      document.body.style.touchAction = "none";
    } else {
      sideBarRef.current.style.transform = "translateX(-100%)";
      sideBarRef.current.style.opacity = "0";
      document.body.style.touchAction = "auto";
    }
  }, [menuState]);

  return (
    <>
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          backgroundColor: "white",
          borderBottom: "solid 1px #E5E5E5",
          transition: "0.5s",
          height: 53,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            marginLeft: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="hide-logo" onClick={() => setMenuState(!menuState)}>
            <SimpleMenuSvg />{" "}
          </span>
          <h2>Algo  Visualizer</h2>
          <PlayArrowIcon
            onClick={props.play}
            style={{
              fontSize: 25,
              backgroundColor: "red",
              color: "orange",
             cursor:"pointer",
              marginRight: "70px",
              
            }}
          />
        </div>
      </div>
      <div>
        <div ref={sideBarRef} className="sub-header">
          <span
            className="hide-logo"
            style={{ marginLeft: 10 }}
            onClick={() => setMenuState(false)}
          >
            <CrossSvg />
          </span>
          <div className="sub-header-item">
            <div
              className="btn"
              onClick={() => {
                history.push("/");
                window.location.reload();
              }}
            >
              {" "}
              BubbleSort{" "}
            </div>
            <div
              className="btn"
              onClick={() => {
                history.push("/insertion");
                window.location.reload();
              }}
            >
              {" "}
              InsertionSort{" "}
            </div>
            <div
              className="btn"
              onClick={() => {
                history.push("/selection");
                window.location.reload();
              }}
            >
              {" "}
              SelectionSort
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
