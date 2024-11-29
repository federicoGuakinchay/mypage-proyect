import '../styles/components/contact.css'
import {TranlateComponent} from './settings/language';

import { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { LuCopy } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";

function Contact () {
  const [messageCopied, setMessageCopied] = useState(false);

  // Function to handle copy
  const handleCopyClick = () => {
    const textToCopy = document.getElementById('email_copi').textContent;
    console.log(document.getElementById('email_copi')) 
    console.log(textToCopy)
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setMessageCopied(true); 
        setTimeout(() => setMessageCopied(false), 2000);
      })
      .catch(err => console.error('Error copying text:', err));
  };
  return (
    <div className="contact__info">
      <h2 className="contact__info__title" > Email <TfiEmail/> </h2>
      <div className="contact__info__content">
      <a href="mailto:notavail@example.com" id="email_copi">notavail@example.com</a>
        <button onClick={handleCopyClick} className="copy-button" title="Copy Email">
          <LuCopy />
        </button>
        {messageCopied && <span className="copied-confirmation">Copied!</span>}
      </div>

      <h2 className="contact__info__title" > <TranlateComponent   value={ "phone" } /> <FaPhone/> </h2>
      <span className='contact__info__content_phone' >Argentina <a href=''> not avail yet</a> </span>
      
      <h2 className="contact__info__title" > <TranlateComponent   value={ "address" } />  <FaRegAddressCard/> </h2> 
      <span> not avail yet </span>
    </div>

  )
}

export default Contact 
