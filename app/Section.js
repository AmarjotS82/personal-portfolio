import styles from '/public/styles/section.module.css'
import ContactForm from './ContactForm';
import Logo from './Logo';
import ProjectCards from './ProjectCards';

export default function Section({title, info}) {

    if(title == "Projects"){
        console.log("Projects if statemenet")
        return( <>
            <div className={styles.section}>
                <h3 id={styles.title}>{title}</h3>
                <div className="container-fluid">
                    <div className="row">
                        <ProjectCards projectInfo = {info}/>
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
    } else if(title == "Contact"){
        return(<>
         <div className={styles.section}>
                <h3 id={styles.title}>{title}</h3>
                <h5>{info}</h5>
                <ContactForm />
                <Logo />
            </div>
        </>)

    }else{

        return( <>
            <div className={styles.section}>
                <h3 id={styles.title}>{title}</h3>
                <p>{info}</p>
            </div>
            
    </>)
    }

    
}