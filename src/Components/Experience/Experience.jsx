import "./Experience.css";

const Experience = ({experience}) => {

  return (
    <div>
      <div id="experience" className="experience">
        {experience.map((item) => {
          return(
            <div className="cardExperience" key={JSON.stringify(item)}>
            <img src={item.image} alt={item.name} />
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
