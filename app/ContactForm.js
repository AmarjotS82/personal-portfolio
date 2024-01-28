
'use client';
import { useState } from 'react';
import { useEffect  } from 'react';
import axios from 'axios';


export default function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [sentStatus, setsentStatus] = useState("typing");
    const [formSubmitted, setformSubmitted] = useState(false);
    function handleFormSubmission(e) {
        
        console.log("Error Msg: " + errorMessage)
        e.preventDefault();

        setName(e.target.elements.name.value)
        setEmail(e.target.elements.email.value)
        setMessage(e.target.elements.message.value)
        // setsentStatus("sending");
        setformSubmitted(true)
        // Your form submission logic here
       
        
        // Now you can do something with the form data
        console.log('Form submitted with:', { name, email, message });
       
    };

    useEffect(() => {
        if (email == "" && formSubmitted) {
            setErrorMessage("Email is blank! Please fill it in");
            setformSubmitted(false)
        } else if(message == "" && formSubmitted){
            setErrorMessage("Message is blank! Please fill it in");
            setformSubmitted(false)
        } else if (formSubmitted){
            setsentStatus("sending");
            setformSubmitted(false)
        }
        if (sentStatus == "sending"){
            axios.post('https://getform.io/f/95a75398-dca9-4f05-9aa8-12b6c397c41d', { userName: name, email: email, userMessage: message })
            .then(response => {
                console.log('Form submitted successfully!', response);
                setsentStatus("sent");
                setErrorMessage("");
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                setErrorMessage('Failed to submit the form. Please try again.');
                setsentStatus("typing");
            });
        }
    }, [email,message,formSubmitted, sentStatus]);
    console.log("sent status: " + sentStatus)
    if (sentStatus == "sent"){
        setTimeout(function() {
            setsentStatus("typing");
            console.log('End after 10 seconds');   
          }, 10000);
          return(
            <>
                <div className='container-fluid'>
                    <div className='row col-8 justify-content-center' >
                        <h2 style={{marginLeft:"50%"}}>Message Sent, Thanks!</h2>
                        <h5 style={{marginLeft:"50%"}}>Want to send another message? Dont worry the form will be back shortly! </h5>
                    </div>
                </div>

            </>)
        
    }else if(sentStatus == "sending"){
        setTimeout(() => {
            // Your code to be executed after the delay
            setsentStatus("sent");
        }, 10000);
            return(<>
            
            <div className='container-fluid'>
                <div className='row col-8 justify-content-center' >
                    <h2 style={{marginLeft:"50%"}}>Sending...</h2>
                </div>
            </div>
            </>)
    }
    else{
        console.log("Error msg: " + errorMessage);
        console.log("Email incl: " + errorMessage.includes("Email"))
        return(<>
           
            {/* <h3>Contact</h3> */}
        
            <form className="row g-3" onSubmit={handleFormSubmission} action='https://getform.io/f/95a75398-dca9-4f05-9aa8-12b6c397c41d' method="POST">
                <div className="col-md-6">
                    <label className="form-label">Name (Optional)</label>
                    <input type="text" name="userName" className="form-control" id="name"/>
                </div>
        
                <div className="col-md-6">
                    <label className="form-label">Email (Required)</label>
                    <input type="email" name="email" className="form-control" id="email"/>
                    <div className="text-danger mt-2">{errorMessage && errorMessage.includes("Email") && <b>{errorMessage}</b>}</div>
                </div>
        
                <div className="col-12">
                    <label className="form-label">Message</label>
                    <input type="text" name="userMessage" className="form-control" id="message" placeholder="Message..."/>
                    <div className="text-danger mt-2">{errorMessage && errorMessage.includes("Message") && <b>{errorMessage}</b>}</div>
                </div>
        
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send</button>
                    
                </div>
            </form>
            </>)

    }
    
};