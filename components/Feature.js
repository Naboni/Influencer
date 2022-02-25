import React from 'react';
import Image from 'next/image'

import image1 from '../public/images/Index_01.png';
import image2 from '../public/images/Index_02.png';
import image3 from '../public/images/Index_03.png';
import image4 from '../public/images/Index_04.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faDesktop, faDatabase, faChartBar, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import { Row, Col } from 'antd';
import { Card } from 'antd';

const items = [
    {
        key: '0',
        icon: <FontAwesomeIcon icon={faChartBar} color="#0d9fe6"></FontAwesomeIcon>,
        section: 'DISCOVERY HUB',
        title: 'Find the best influencers with Influencer Discovery, the largest in the market',
        content: "Discover precisely matched Instagram, YouTube, and TikTok influencers across 50+ accounts by utilizing a series of criteria to narrow the results down to high-quality profiles.",
        image: image1,
        color: "#0d9fe6"
    },
    {
        key: '1',
        icon: <FontAwesomeIcon icon={faDatabase} color="#ff6436"></FontAwesomeIcon>,
        section: 'REPORT HUB',
        title: 'Industry standard in advanced Instagram, YouTube and TikTok analytical reports',
        content: "Multiple comprehensive metrics for analyzing Instagram, YouTube and TikTok influencers. Location of the audience, age-gender split, authenticity and reachability, and overall audience quality",
        image: image2,
        color: "#ff6436"
    },
    {
        key: '2',
        icon: <FontAwesomeIcon icon={faDesktop} color="#8455d0"></FontAwesomeIcon>,
        section: 'CAMPAIGN MANAGEMENT',
        title: 'Manage and monitor your influencer marketing campaigns',
        content: "From influencer lists to a final campaign report, manage and automate your campaign at every stage. Keep an eye on the efficacy of your campaign and make any required changes.",
        image: image3,
        color: "#8455d0"
    },
    {
        key: '3',
        icon: <FontAwesomeIcon icon={faDatabase} color="#8455d0"></FontAwesomeIcon>,
        section: 'MARKET ANALYSIS',
        title: 'Get an overview of the influencer marketing landscape.',
        content: "Investigate the competitive environment and analyze your competitors' influencer marketing performance. Compare various brands side by side to identify the top market players in a certain nation or specialty.",
        image: image4,
        color: "#8455d0"
    },
]

function AppFeature() {
    return (
        <div id="feature" className="featureBlock">
            <div className="container-fluid">

                <div className="featureTitle">
                    <h2>
                        We provide data and insights to help you succeed in Influencer marketing:
                    </h2>

                </div>
                <Row gutter={[20, 20]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>60+</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Total accounts in database</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>5+</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>New Influencers discovered daily</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>8+</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Total report requests processed</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>95.5%</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Of all known fraud activity detected</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="container-fluid">

                <div className="featureTitle">
                    <h2>Tell a better brand story & drive more revenue from influencers</h2>
                    <p>Your customers and fans look to creators to discover new products and make their purchase decisions. Upfluence provides you with all the tools to build and nurture meaningful creator partnerships that drive revenue.</p>
                </div>
                {items.map(item => {
                    if (item.key % 2 == 0) {
                        return <div key={item.key} className="featureStep">
                            <Row gutter={[20, 20]} align="middle">
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>
                                    <Card className="analyticsCard">
                                        <div className="analyticsSection">
                                            <div> {item.icon}

                                            </div>
                                            <h4 style={{ color: `${item.color}` }}>{item.section}</h4>
                                        </div>
                                        <div className="analyticsTitle">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="analyticsDetail">
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="analyticsLink">
                                            <a href="">LEARN MORE ABOUT {item.section}</a>
                                            <FontAwesomeIcon icon={faArrowRight} className="linkIcon"></FontAwesomeIcon>
                                        </div>
                                    </Card>
                                </Col>
                                {/* <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 2 }}>
                                <div className="feature_hor_divider">
                                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                                </div>
                            </Col> */}
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>

                                    <div className="featureStepImage">
                                        <Image src={item.image} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    } else {

                        return (
                            <div key={item.key} className="featureStep">
                                <Row gutter={[20, 20]} align="middle">
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>

                                        <div className="featureStepImage">
                                            <Image src={item.image} alt="" />
                                        </div>
                                    </Col>
                                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>
                                        <Card className="analyticsCard">
                                            <div className="analyticsSection">
                                                <div> {item.icon}

                                                </div>
                                                <h4 style={{ color: `${item.color}` }}>{item.section}</h4>
                                            </div>
                                            <div className="analyticsTitle">
                                                <h2>{item.title}</h2>
                                            </div>
                                            <div className="analyticsDetail">
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="analyticsLink">
                                                <a href="">LEARN MORE ABOUT {item.section}</a>
                                                <FontAwesomeIcon icon={faArrowRight} className="linkIcon"></FontAwesomeIcon>
                                            </div>
                                        </Card>
                                    </Col>
                                    {/* <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 2 }}>
                                        <div className="feature_hor_divider">
                                            <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                                        </div>
                                    </Col> */}

                                </Row>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default AppFeature;