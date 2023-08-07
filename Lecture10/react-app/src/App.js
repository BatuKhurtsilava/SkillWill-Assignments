import logo from './logo.svg';
const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
 
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        <SkillList className="skill-list" />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={"batu.jpeg"} />;
}

function Intro() {
  return (
    <div>
      <h1 className="h1"> Batu Khurtsilava</h1>
      <p>
        Front-end web developer. When not coding or preparing a course, I like
        to play video games, to cook (and eat), or to just enjoy the Anaklian
        sun at the beach.
      </p>
      <p>Check out my React/Javascript solutions on: https://github.com/BatuKhurtsilava</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skills skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

function Skills({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill} </span>
      <span>
        {" "}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}{" "}
      </span>
    </div>
  );
}







export default App;
