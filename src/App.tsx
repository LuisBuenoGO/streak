import ProjectCard from "./components/ProjectCard";

function App() {
  const projects = [
    {
      name: "SiloMusic",
      description: "App de musica propia"
    },
    {
      name: "poke dnd",
      description: "sistema de pokemon en dnd"
    },
    {
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
          name={project.name}
          description={project.description}
        />
      ))}

    </main>
  );
}

export default App;