import "./Hero.css";

const Hero = ({ hero }) => {
  console.log(hero.aboutMe[0].info)
  return (
    <div id="hero" className="hero">
      <div className="d-flex">
        <div>
          <h2 className="title">{hero.name}</h2>
          <h2>{hero.description}</h2>
          <p>{hero.adress}</p>
          <p>{hero.city} </p>
          <p>{hero.birthDate}</p>
          <p><a href={hero.gitHub}>GitHub</a></p>
          <p className="about">{hero.aboutMe[0].info}</p>
        </div>
        <div>
         <img src={hero.image} alt="Foto personal" />
        </div>

      </div>
    </div>
  );
};

export default Hero;