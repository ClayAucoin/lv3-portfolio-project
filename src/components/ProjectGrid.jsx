// ./components/ProjectGrid.jsx

import ProjectCard from "./ProjectCard";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";

export default function ProjectGrid() {
  return (
    <>
      <div className="row">
        <ProjectCard highlight={false}>
          <ProjectImage src="/mountains.jpg" alt="Mountains" />
          <ProjectTitle pTitle="Road on Hill Above River" />
          <ProjectDescription content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis nec orci euismod pulvinar. Aliquam malesuada, arcu ornare iaculis dictum, est nibh bibendum odio, in auctor enim sapien vehicula ex." />
        </ProjectCard>
        <ProjectCard highlight={false}>
          <ProjectImage src="/lights.jpg" alt="Lights" />
          <ProjectTitle pTitle="Northern Lights" />
          <ProjectDescription content="Sed luctus cursus est id aliquam. Cras eget sem id augue aliquam luctus vitae sit amet libero. Fusce consequat euismod purus, vel sodales sapien egestas at." />
        </ProjectCard>
        <ProjectCard highlight={false}>
          <ProjectImage src="/nature.jpg" alt="Nature" />
          <ProjectTitle pTitle="Rolling Hills" />
          <ProjectDescription content="Duis lorem tortor, mollis eget elit et, vulputate laoreet eros. In tristique id neque at varius. Etiam rutrum efficitur mi sed consequat." />
        </ProjectCard>
        <ProjectCard highlight={false}>
          <ProjectImage src="/mountains.jpg" alt="Mountains" />
          <ProjectTitle pTitle="Northern Lights" />
          <ProjectDescription content="Etiam finibus sapien vitae libero tristique, quis euismod est gravida. Nullam at purus imperdiet, placerat velit nec, tempus odio. Nunc consequat eget sapien vel euismod." />
        </ProjectCard>
        <ProjectCard highlight={true}>
          <ProjectImage src="/bear.jpg" alt="Bear" />
          <ProjectTitle pTitle="Work can be a bear!" />
          <ProjectDescription content="Mauris vitae aliquam diam, vel ornare odio. Nunc in iaculis ipsum, eu accumsan magna. Praesent vitae malesuada nisl. Ut facilisis, quam ac porttitor euismod, ex velit posuere turpis, sit amet ullamcorper risus diam at enim. Duis ut enim at mi vulputate venenatis in sit amet risus. Morbi et ex consequat, tincidunt arcu et, auctor tellus. Ut sed orci libero. Aenean sed nulla vitae nulla vestibulum ornare et eleifend arcu. Nulla facilisi. Etiam molestie eleifend orci, ac sodales mi eleifend id. Fusce eleifend imperdiet est, quis iaculis dolor tincidunt a. Sed gravida justo id urna suscipit convallis nec sed nulla." />
        </ProjectCard>
      </div>
    </>
  );
}
