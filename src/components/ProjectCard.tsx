type ProjectCardProps = {
  name: string;
};

function ProjectCard({ name }: ProjectCardProps) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Mi proyecto de música</p>
    </section>
  );
}

export default ProjectCard;