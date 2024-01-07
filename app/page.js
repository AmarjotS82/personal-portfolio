import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar.js";
import Section from './Section.js';
import ContactForm from './ContactForm.js';

export default function HomePage() {
  const aboutInfo = "I am currently in my last term in my computer systems technology diploma."
  const pantryPalDesc = "Mobile/Web application - to create and save recipes using the ChatGPT API.\n Users make an account and are able to get recipes based on a list of ingredients they give. There are also other features like saving reipes, editing their account, calorie tracker, shopping list, and searchable recipe list"
  const ProjectsList = [
    {name: "PantryPal", status:"Group", description: pantryPalDesc, languages: ["HTML5", "CSS", "JavaScript"],  githubLink: "https://github.com/AmarjotS82/2800-202310-BBY16", liveLink: "http://woquclyvse.eu09.qoddiapp.com/" },
    {name: "Wave Assault",status:"Group", description: "A wave shooter where you try to survive for as long as possible", languages: ["Java"],  githubLink: "https://github.com/COMP2522/project-bombpers", liveLink: "" },
    {name: "CampusCrave",status:"Group", description: "Web application to find places to eat on the BCIT campus", languages: ["HTML5", "CSS", "JavaScript"],  githubLink: "https://github.com/AmarjotS82/1800_202230_BBY10", liveLink: "" },
    {name: "Disney Character App",status:"Indivdual", description: "Mobile App that display API data with a clean UI\n\n.	Using data gotten from an API I was able to display the forms of media each character was in and other characters in those works ", languages: ["HTML5", "CSS", "JavaScript"],  githubLink: "", liveLink: "" },
  ]
  return (
    <>
    <Navbar />
    <div className="px-4 py-5 my-5 text-center">

      <h1 className="display-5 fw-bold " style={{color:"white"}}>Welcome!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4"></p>
      </div>
    </div>

    <div className='Container-fluid'>
       <div  id="About" className= "row p-5">
      <Section title={"About"} info={aboutInfo}/>
      </div>

      <div id="Projects" className = "row p-5">
      <Section title={"Projects"} info={ProjectsList}/>
      </div>

      <div id="Contact" className = "row p-5">
      <ContactForm/>
      </div>
    </div>
    </>
    
    
  )
}
