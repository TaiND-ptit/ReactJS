import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           <footer>
                <div className="container">
                    <p>© Your Website 2020. All Rights Reserved.</p>. Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;