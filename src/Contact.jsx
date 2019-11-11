import React,{Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1> Aqui irán mis datos de contacto</h1>
           <ul>
               <li>Telefono</li>
               <li>Email</li>
               <li>GitHub</li>
               <li>LinkedIn</li>
           </ul>
            </div>

        )
    }
}
export default Contact;