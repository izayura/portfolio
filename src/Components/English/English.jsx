import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class English extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/aboutMe')}>
                        About Me
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/skills')}> 
                        Skills
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/projects')}>
                        Projects
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/english/contact')}>
                        Contact
                    </li>
                    <li className='MenuNav' onClick={() => this.props.history.push('/')}>
                        Change_Language
                    </li>
                </ul>
            </div>
        );
    }
}



export default withRouter(English);