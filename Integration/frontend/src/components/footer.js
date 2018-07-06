import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
// import Main from './components/main';


var Footer = React.createClass({

    render: function() {
        return(
            <div className="footerDiv">
                {/* <!-- Footer --> */}
                <footer className="page-footer font-small cyan darken-3 mt-4">
                    {/* <!-- Footer Elements --> */}
                    <div className="container">
                        {/* <!-- Grid row--> */}
                        <div className="row">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-12 py-5">
                                <div className="mb-5 flex-center">
                                    {/* <!-- Github --> */}
                                    <a className="github-ic">
                                        <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    {/* <!-- Bitbucket --> */}
                                    <a className="bitb-ic">
                                        <i className="fa fa-bitbucket fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    {/* <!--Linkedin --> */}
                                    <a className="li-ic">
                                        <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row--> */}
                    </div>
                    {/* <!-- Footer Elements --> */}
                    {/* <!-- Copyright --> */}
                    <div className="footer-copyright text-center py-3">© 2018 Copyright: AMS
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}
            </div>
        )
    }

});

export default Footer;