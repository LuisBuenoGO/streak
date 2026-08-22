type ProjectCardProps = {
  name: string;
  description: string;
};

function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
}

export default ProjectCard;