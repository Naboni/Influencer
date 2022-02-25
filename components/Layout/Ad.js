import React from 'react';
// import classes from '@/styles/Home.module.css';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function AppAd() {
    return (

        <div className="dsection">
            <p>New research: State of Influencer Marketing 2021.
                <a className="dsection-link" href=""> DOWNLOAD THE RESEARCH &nbsp;
                    <FontAwesomeIcon icon={faFilePdf} className="fas"></FontAwesomeIcon>
                </a>
            </p>
        </div>

    );
}

export default AppAd;