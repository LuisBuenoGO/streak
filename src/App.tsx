import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <main>
      <h1>Streak</h1>
      <p>Mis proyectos, mi progreso.</p>

      <ProjectCard
        name="SiloMusic" 
        description="App de musica"  
      />

      <ProjectCard
        name="Poke DnD" 
        description="Sistema de pokemon para dnd"  
      />

    </main>
  );
}

export default App;