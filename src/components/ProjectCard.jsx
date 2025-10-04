// ./components/ProjectCard.jsx

// import ProjectImage from "./ProjectImage";
// import ProjectTitle from "./ProjectTitle";
// import ProjectDescription from "./ProjectDescription";

export default function ProjectCard({ children, highlight }) {
  return (
    <>
      <div className={highlight ? "highlight" : "column"}>
        <div className="content">{children}</div>
      </div>
    </>
  );
}
