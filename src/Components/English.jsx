import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class English extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul>
                    <li onClick={() => this.props.history.push('/')}>
                        Change Language
                    </li>
                    <li onClick={() => this.props.history.push('/english')}>
                        Home
                    </li>
                    <li onClick={() => this.props.history.push('/english/aboutMe')}>
                        About Me
                    </li>
                    <li onClick={() => this.props.history.push('/english/projects')}>
                        Projects
                    </li>
                    <li onClick={() => this.props.history.push('/english/contact')}>
                        Contact
                    </li>
                </ul>
                <hr className="line" />
                </div>
                );
            }
            }
            
            
            
export default withRouter (English);