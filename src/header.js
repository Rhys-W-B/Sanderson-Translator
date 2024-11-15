import logo from "./logo.svg";
import Wscript from "./WScript";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 min-h-[10vh]">
        <div className="container mx-auto flex justify-center items-center">
          <button className="btn btn-active btn-neutral">Neutral</button>
          <h1 className="text-center text-4xl">Sanderson Translator</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
