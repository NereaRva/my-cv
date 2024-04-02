import "./Experience.css";

const Experience = ({experience}) => {

  return (
    <div>
      <div id="experience" className="experience">
        {experience.map((item) => {
          return(
            <div key={JSON.stringify(item)}>
              <p id="name">{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Experience
