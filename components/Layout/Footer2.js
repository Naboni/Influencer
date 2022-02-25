import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Footer2.module.css'
import styles2 from '@/styles/Hero.module.css'

import { BackTop, Row, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import image1 from '../../public/images/instagram_blue_2.png';
import image2 from '../../public/images/youtube_blue.png';
import image3 from '../../public/images/twitter_blue.png';
import image4 from '../../public/images/twitch_blue.png';
import image5 from '../../public/images/tiktok_blue.png';

const items = [
    {
        key: '1',
        image: image1,
    },
    {
        key: '2',
        image: image2,
    },
    {
        key: '3',
        image: image3,
    },
    {
        key: '4',
        image: image4,
    },
    {
        key: '5',
        image: image5,
    }
]

function AppFooter2() {
    return (
        <div className={styles.footerContainer}>
            <Row justify="start" gutter={[16, 16]} className={styles.footerHolder}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 5 }} >
                    <div className={styles.footerHeader}>
                        <h2>Betopia Digital</h2>
                    </div>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                    <h3 className={styles.footerTitle}> Features </h3>
                    <ul className={styles.footerList}>
                        <li>Ecommerce Tools</li>
                        <li>Influencer Discovery</li>
                        <li>Influencer Analysis</li>
                        <li>Influencer Management</li>
                        <li>Influencer Product Seeding</li>
                        <li>Influencer payments</li>
                        <li>Campaign Management</li>
                        <li>Campaign Analysis</li>
                        <li>Find Instagram Influencers</li>
                        <li>Find Youtube Influencers</li>
                        <li>Find Tiktok Influencers</li>
                        <li>Find Twitch Influencers</li>
                    </ul>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                    <h3 className={styles.footerTitle}> Resources </h3>
                    <ul className={styles.footerList}>
                        <li>Blog</li>
                        <li>Case Studies</li>
                        <li>Industry reports</li>
                        <li>Brand influence reports</li>
                        <li>Alternatives</li>
                        <li>Integrations</li>
                        <li>Creators</li>
                    </ul>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                    <h3 className={styles.footerTitle}> About </h3>
                    <ul className={styles.footerList}>
                        <li>Meet The Upfluence Team</li>
                        <li>Press & media</li>
                        <li>Partnerships</li>
                        <li>Contact us</li>
                        <li>Careers</li>
                        <li>Pricing</li>
                        <li>Privacy Policy</li>
                        <li>Live Capture Privacy Policy</li>
                    </ul>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 7 }} className={styles.newsletter}>
                    <h3 className={styles.footerTitle}> Newsletter </h3>
                    <div className={styles2.searchContainer}>
                        <form action="" className={styles2.searchForm}>
                            <input type="text" placeholder="Email*" name="search" />
                            <button type="submit">SIGN UP</button>
                        </form>
                        <p>By using this form you agree with the storage and handling of your data by Upfluence. &nbsp;
                            <a href="" style={{ color: "blue" }}>
                                <u>
                                    Read our privacy policy.
                                </u>
                            </a>
                        </p>
                        <div>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="start" >
                                {items.map(item => {
                                    return (
                                        <Col className="gutter-row" span={3} key={item.key}>
                                            <div className={styles.items}>
                                                <Image src={item.image} alt="" />
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </div>
                </Col>

            </Row>

            <BackTop>
                <div className="goTop"><FontAwesomeIcon icon={faArrowCircleUp} className="fas"></FontAwesomeIcon></div>
            </BackTop>
        </div>
    );
}

export default AppFooter2;