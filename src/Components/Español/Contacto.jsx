import React,{Component} from 'react';
import '../CSS/Contact.css';
import Espanol from './Espanol';

class Contacto extends Component {
    render() {
        return (
            <div id='contact' className='content'>
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