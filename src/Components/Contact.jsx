import React,{useEffect} from 'react'
import "../Style/Contact.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
    const [state, handleSubmit] = useForm("xpzvgzva");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    }
    useEffect(() => {
      document.title="AniArpit | Contact"
     },[])
  return (
    <div className='Contact-wrapper'>
        <form id='myForm' onSubmit={handleSubmit}  className="contact-box">
            <div className="cont-inputs">
            <input className='inputs' type="text" name='Name' placeholder='Enter Your Name'autoComplete='off' required />
            <input className='inputs' type="text" name='Phoneno' placeholder='Enter Your Phone no.' autoComplete='off' required />
            <input className='inputs' type="text" name='Email' placeholder='Enter Your E-mail' autoComplete='off' required />
            <input className='inputs' type="text" name='Message' placeholder='Enter The Message' autoComplete='off' required />
                <button>Submit</button>
            </div>
        </form>
        <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  )
}

export default Contact
