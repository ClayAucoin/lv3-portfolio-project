// App.jsx
import "./App.css";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <>
      <HeroImage />
      {/* MAIN (Center website) */}
      <div className="main">
        <Header />

        {/* Portfolio Gallery Grid */}

        <ProjectGrid />

        {/* END MAIN */}
      </div>
    </>
  );
}

export default App;
