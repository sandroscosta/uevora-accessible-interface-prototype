"use client";
import { useState } from "react";
import IconAccessibility from "./IconAccessibility";

export default function AccessMenu() {
  const [fontType, setFontType] = useState("font-sans"); // ["font-sans", "font-serif", "font-mono"
  const [fontSize, setFontSize] = useState("text-base");
  const [lineSize, setLineSize] = useState("leading-normal");

  function changeTheme(theme: string) {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };

  function changeFont(font: string) {
    const element = document.getElementById("main-content");
    element?.classList.remove(fontType);
    element?.classList.add(font);
    setFontType(font);
  };

  function changeFontSize(size: string) {
    const element = document.getElementById("main-content");
    element?.classList.remove(fontSize);
    element?.classList.add(size);
    setFontSize(size);
  };

  function changeSpacing(size: string) {
    const element = document.getElementById("main-content");
    element?.classList.remove(lineSize);
    element?.classList.add(size);
    setLineSize(size);
  };


  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <IconAccessibility />
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">Color scheme</span>
          <ul className="flex gap-2">
            <li><button onClick={() => changeTheme("bumblebee")} className="btn btn-default btn-sm" title="Change to the light theme">Light</button></li>
            <li><button onClick={() => changeTheme("dark")} className="btn btn-primary btn-sm">Dark</button></li>
            <li><button onClick={() => changeTheme("retro")} className="btn btn-secondary btn-sm">Reader</button></li>
          </ul>
          <span className="font-bold text-lg mt-4">Font</span>
          <details className="dropdown">
            <summary className="m-1 btn btn-block">Choose font type</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a className="font-sans" onClick={() => changeFont("font-sans")}>Sans serif</a></li>
              <li><a className="font-serif" onClick={() => changeFont("font-serif")}>Serif</a></li>
              <li><a className="font-mono" onClick={() => changeFont("font-mono")}>Monotyped</a></li>
            </ul>
          </details>
          <span className="text-md mt-4">Size</span>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><a onClick={() => changeFontSize("text-sm")}>sm</a></li>
            <li><a onClick={() => changeFontSize("text-base")}>md</a></li>
            <li><a onClick={() => changeFontSize("text-lg")}>lg</a></li>
            <li><a onClick={() => changeFontSize("text-2xl")}>2xl</a></li>
          </ul>

          <span className="text-md mt-4">Line Spacing</span>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><a onClick={() => changeSpacing("leading-normal")}>1</a></li>
            <li><a onClick={() => changeSpacing("leading-relaxed")}>1.5</a></li>
            <li><a onClick={() => changeSpacing("leading-loose")}>2</a></li>
            <li><a onClick={() => changeSpacing("leading-10")}>2.5</a></li>
          </ul>
          <div className="card-actions">
            <button onClick={() => { }} className="btn btn-primary btn-block">Activate Speech-to-Text</button>
          </div>
        </div>
      </div>
    </div>
  )
}