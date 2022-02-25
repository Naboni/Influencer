import React from 'react';
// import classes from '@/styles/Home.module.css';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChartPie, faDesktop, faDatabase, faCheck } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Button } from 'antd';
import AnalyticalReport from './Analytical_Report';
const items = [
    {
        key: '1',
        icon: <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>,
        title: 'Discover Influencers',
        content: 'Discover influencers with the audiences you need within a 50+ database',
        list: [
            "50+ database",
            "Demographic search",
            "Audience Quality filters"
        ]
    },
    {
        key: '2',
        icon: <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>,
        title: 'Analyze Accounts',
        content: 'Multiple metrics to analyse Instagram, YouTube, and TikTok influencers',
        list: [
            "Audience Demographics",
            "Fraud Detection",
            "Brand Affinity"
        ]
    },
    {
        key: '3',
        icon: <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>,
        title: 'Manage Campaigns',
        content: 'Manage and monitor your influencer marketing campaigns',
        list: [
            "Create a media plan for your campaign",
            "Get estimates for key campaign KPIs",
            "Understand how your campaign performs"
        ]
    },
]

function AppAbout() {
    return (
        <div id="about" className="aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Every phase of the influencer marketing workflow is covered by a comprehensive suite of solutions:</h2>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div>
                                        <div className="sectionHolder">
                                            <div className="card_text">
                                                {item.title}
                                            </div>
                                            <div className="icon">
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{item.content}</p>
                                    </div>
                                    <div className="aboutList">
                                        <Row>
                                            <Col span={3}>
                                                <FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon>
                                            </Col>
                                            <Col span={21}>
                                                {item.list[0]}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={3}>
                                                <FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon>
                                            </Col>
                                            <Col span={21}>
                                                {item.list[1]}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={3}>
                                                <FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon>
                                            </Col>
                                            <Col span={21}>
                                                {item.list[2]}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "60%", margin: "10px auto" }} size="large">GET STARTED</Button>
                                        <Button style={{ backgroundColor: "white", borderRadius: "5px", border: "1px solid white", color: "grey", fontWeight: "600", width: "60%", margin: "0 auto" }} size="large">LEARN MORE</Button>
                                    </div>


                                </div>
                            </Col>
                        );
                    })}
                </Row >
            </div >

        </div >
    );
}

export default AppAbout;