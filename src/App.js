import logo from "./logo.svg";
import Header from "./header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg-white min-h-[80vh]">
        <h1 className="text-center text-4xl text-black">Body Text</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
