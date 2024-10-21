import '../../styles/froms/contactform.css'
import { LuFileStack } from "react-icons/lu";
import { BiSend } from "react-icons/bi";

function ContactForm() {
  return (
    <div className="contact__form">
      <h2 className="contact__title">Contact Me</h2>
      <form className="contact__form--container">
          <label className="contact__form--label" htmlFor="name">Name:</label>
          <input className="contact__form--input" type="text" id="name" name="name" />

          <label className="contact__form--label" htmlFor="email">Email:</label>
          <input className="contact__form--input" type="email" name="email" id="email" />

          <label className="contact__form--label" htmlFor="know">How did you hear about me?</label>
          <select className="contact__form--input" id="know" name="know">
            <option value="search engine">Search Engine</option>
            <option value="social media">Social Media</option>
            <option value="others">Others</option>
          </select>

          <label className="contact__form--label" htmlFor="intentions">Intentions:</label>
          <select className="contact__form--input" id="intentions" name="intentions">
            <option value="estimate">Estimate a Project</option>
            <option value="hire">Hire</option>
            <option value="others">Others</option>
          </select>

          <label className="contact__form--label" htmlFor="message">Message:</label>
          <textarea className="contact__form--textarea" id="message" name="message" />
          <div className='contact__form--button-content'>
            <label 
            className="contact__form--label" 
            htmlFor="file"
            tabIndex="0" 
            role='button'
            onKeyDown={(e) => e.key === 'Enter' && document.getElementById('file').click()} // Trigger click on Enter
            >
              <LuFileStack/>
              Attach file </label>
            <input type="file" name="" id="file"  style={{display:"none"}}/>

            <button type="submit" className="contact__form--submit">
            Send
            <BiSend />
            </button>
          </div>
      </form>
    </div>
  )
}

export default ContactForm;
