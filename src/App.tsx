import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <main>
      <h1>Streak</h1>
      <p>Mis proyectos, mi progreso.</p>

      <ProjectCard name="SiloMusic" />
      <ProjectCard name="EvenOS" />
      <ProjectCard name="poke" />

    </main>
  );
}

export default App;