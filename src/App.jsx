// App.jsx
import "./App.css";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import ProjectCard from "./components/ProjectCard";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <>
      <HeroImage />
      {/* MAIN (Center website) */}
      <div className="main">
        <Header />
        <hr />

        <h2>PORTFOLIO</h2>
        <p>Resize the browser window to see the responsive effect.</p>

        {/* Portfolio Gallery Grid */}

        <ProjectGrid />

        {/* END MAIN */}
      </div>
    </>
  );
}

export default App;
