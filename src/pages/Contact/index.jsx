import React from "react";
// Other imports
import {FontIcons} from "#constants/icons";

export const Contact = () => {
    return ( 
    	<React.Fragment>
        	
                <div className="row my-5">
                    <div className="col-12 col-sm-8 mx-auto">

                        <div className="ratio ratio-21x9 d-block" style={{"minHeight":"100vh"}}>
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSf5zTUO9z319bYbJoIIDk2082uacDrcst1Uq2vJNbZv52CG5g/viewform?embedded=true" 
                                title="Contact form"
                            >
                                Loading…
                            </iframe>
                        </div>

                        <p className="fw-light my-3">
                            I'll get back within 24 hours.
                        </p>

                        <p className="fw-light my-3">
                            <a href="https://forms.gle/zQtLSSFWdqByrtuNA" target="_blank" rel="noreferrer" className="text-dark">
                                Open form in new tab {FontIcons.externalLink}
                            </a>
                        </p>
                        

                    </div>
                </div>

		</React.Fragment>
    );
}

export default Contact;