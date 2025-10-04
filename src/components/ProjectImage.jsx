// ./components/ProjectImage.jsx

export default function ProjectImage({ src, alt }) {
  return (
    <>
      <img src={src} alt={alt} className="project-image" />
    </>
  );
}
