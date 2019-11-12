import React,{Component} from 'react';
import './Contact.css';
import Espanol from './Espanol';

class Contacto extends Component {
    render() {
        return (
            <div className="contact">
                <Espanol />
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
export default Contacto;