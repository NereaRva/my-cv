import "./Skills.css";

const Skills = ({ skills }) => {
  return (
    <div id="skills" className="container">
      {skills.map((item, index) => (
        <div key={index}>
          <ul>
            {item.skills.map((skill, skillIndex) => (
              <li key={skillIndex}><img src={skill} alt={`Skill ${skillIndex}`} /></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
