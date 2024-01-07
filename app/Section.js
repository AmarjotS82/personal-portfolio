import styles from '/public/styles/section.module.css'

export default function Section({title, info}) {

    if(title == "Projects"){
        console.log("Projects if statemenet")
        
        const projectCards = info.map(project => (
            <div key={project.Name} className="col-md-6 mb-4">
                    <div  className="card h-100">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body ">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <ul>
                            <li>{project.languages}</li> 
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
                            <a href={project.liveLink} target="_blank" className="btn btn-primary d-flex">
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
          ));
        return( <>
            <div className={styles.section}>
                <h3 id={styles.title}>{title}</h3>
                <div className="container-fluid">
                    <div className="row">
                        {projectCards}
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-5 ">
                            <h5>Want to know more? Download my resume below</h5>
                            <div className="col-3 d-flex">
                            <a style={{marginLeft:"150%"}}className="btn btn-info d-flex" role="button" href="/files/Amarjot_Sangha_Resume.pdf" download="Amarjot_Sangha_Resume.pdf">
                                <span className="material-symbols-outlined">
                                download
                                </span>
                                Resume
                            </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            
    </>)
    } else{

        return( <>
            <div className={styles.section}>
                <h3 id={styles.title}>{title}</h3>
                <p>{info}</p>
            </div>
            
    </>)
    }

    
}