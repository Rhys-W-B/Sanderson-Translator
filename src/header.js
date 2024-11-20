import logo from "./logo.svg";
import Wscript from "./WScript";
import steelAlphabet from "./steelAlphabet";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 min-h-[10vh]">
        <div className="container mx-auto flex justify-center items-center">
          <button className="btn btn-active btn-primary m-5">
            Women's Script
          </button>
          <h1 className="text-center text-4xl m-5">Sanderson Translator</h1>
          <button className="btn btn-active btn-primary m-5">
            Steel Alphabet
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
