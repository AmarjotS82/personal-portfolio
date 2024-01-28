export default function ProjectCards({projectInfo}){

    const projectCard = projectInfo.map(project => (
        <div key={project.Name} className="col-md-6 mb-4">
                <div  className="card h-100">
                <div className="card-body ">
                    <h5 className="card-title">{project.name}</h5>
                    {project.status.includes("Group") && 
                    <>
                    <div className="row justify-content-end">
                    <div className="col-3" style={{marginTop: "-5%"}}>
                    <span className="material-symbols-outlined" style={{marginLeft: "20%"}}>
                        groups
                        </span> 
                        <p>{project.status}</p>
                        </div>
                        </div>
                        </>
                    }
                    
                    {project.status.includes("Individual") && 
                    <>
                    <div className="row justify-content-end">
                    <div className="col-3" style={{marginTop: "-5%"}}>
                    <span className="material-symbols-outlined" style={{marginLeft: "20%"}}>
                     person
                     </span>
                     <p>{project.status}</p>
                     </div>
                     </div>
                     </>}    
                       
                    
                    <p className="card-text">{project.description}</p>
                    <ul>
                    {project.languages.map((language, i) => (
                        <li key = {i}>{language}</li>
                    ))}
                    </ul>
                    <div className='row justify-content-center'>
                        <div className="col-4">
                        
                        {project.githubLink && (
                        <a href={project.githubLink} target="_blank" className="btn btn-primary">
                            <div className="row justify-content-center">
                            <img className="pe-1" id="ghLogo" src="/images/github-mark.svg" alt="ghLogo" />
                            Github
                            </div>
                        </a>
                        )}
                        </div>

                        <div className="col-4 d-flex">
                        {project.liveLink && (
                            <div className="col-6 d-flex">
                        <a href={project.liveLink} target="_blank" className="btn btn-success d-flex">
                            <span className="material-symbols-outlined">
                            play_arrow
                            </span>
                            Live
                        </a>
                        </div>
                        )}
                         </div>
                    </div>
                </div>
            </div>
        </div>
      ))

      return (projectCard)
}