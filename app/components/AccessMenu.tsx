"use client";
import { useState, useContext } from "react";
import IconAccessibility from "./IconAccessibility";
import { ThemeContext } from '../layouts/MainLayout';

export default function AccessMenu() {
  const [fontSize, setFontSize] = useState(16);
  const [lineSize, setLineSize] = useState(1.15);
  const options = useContext(ThemeContext);

  function changeTheme(theme: string) {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    console.log(theme);
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
              <li><a className="font-sans">Sans serif</a></li>
              <li><a className="font-serif">Serif</a></li>
              <li><a className="font-mono">Monotyped</a></li>
            </ul>
          </details>
          <span className="text-md mt-4">Size</span>
          <div className="flex gap-2 items-center">
            <button onClick={() => setFontSize(fontSize - 1)} className="btn btn-ghost btn-sm">-</button>
            <span className="text-md">{fontSize}px</span>
            <button onClick={() => setFontSize(fontSize + 1)} className="btn btn-ghost btn-sm">+</button>
          </div>
          <span className="text-md mt-4">Line Spacing</span>
          <div className="flex gap-2 items-center">
            <button onClick={() => setLineSize( prev => prev - 0.05)} className="btn btn-ghost btn-sm">-</button>
            <span className="text-md">{lineSize.toFixed(2)}px</span>
            <button onClick={() => setLineSize(lineSize + 0.05)} className="btn btn-ghost btn-sm">+</button>
          </div>
          <div className="card-actions">
            <button onClick={() => { }} className="btn btn-primary btn-block">Activate Speech-to-Text</button>
          </div>
        </div>
      </div>
    </div>
  )
}