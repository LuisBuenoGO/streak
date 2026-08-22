import ProjectCard from "./components/ProjectCard";

function App() {

  type Project = {
    id: number;
    name: string;
    description: string;
  };

  const projects: Project[] = [
    {
      id: 1,
      name: "SiloMusic",
      description: "App de musica propia"
    },
    {
      id: 2,
      name: "poke dnd",
      description: "sistema de pokemon en dnd"
    },
    {
      id: 3,
      name: "steak",
      description: "sistema de racha para proyectos"
    }
  ];

  return (
    <main>
      <h1>Streak</h1>
      <p>Mis proyectos, mi progreso.</p>

      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          name={project.name}
          description={project.description}
        />
      ))}

    </main>
  );
}

export default App;