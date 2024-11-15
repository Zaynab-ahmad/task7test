import './Contact.css'
import AboutHero from '../../components/Hero/AboutHero/AboutHero'
import { FaChevronRight } from "react-icons/fa";
import FormSec from '../../components/FormSec/FormSec';

export default function Contact() {
  return (
    <div>
      <AboutHero title="Contact" sec={<span>Home <FaChevronRight /> Contact</span>} />    
      <FormSec/>
      </div>
      
  )
}
