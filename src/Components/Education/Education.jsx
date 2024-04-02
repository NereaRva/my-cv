import "./Education.css";

const Education = ({ education }) => {
    console.log(education);
    return (
        <div>
            <div id="education" className="education">
                {education.map((item, index) => (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        
                        <p>Where: {item.where}</p>
                        <p>Date: {item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
