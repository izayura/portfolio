import React,{Component} from 'react';
import './Contact.css';
import English from './English';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <English />
                <h1> Here will be differents ways to contact me</h1>
           <ul>
               <li>Phone</li>
               <li>Email</li>
               <li>GitHub</li>
               <li>LinkedIn</li>
           </ul>
            </div>

        )
    }
}
export default Contact;