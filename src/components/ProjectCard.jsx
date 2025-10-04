// ./components/ProjectCard.jsx

export default function ProjectCard({ children, highlight }) {
  return (
    <>
      <div className={highlight ? "highlight" : "column"}>
        <div className="content">{children}</div>
      </div>
    </>
  );
}
