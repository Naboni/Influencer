import React from 'react';
import Image from 'next/image'
import { Card, Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faDatabase, faChartBar, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import image1 from '../public/images/hero.png';


import styles from '@/styles/Hero.module.css'

function AppHero() {
    return (
        <div className={styles.hero}>
            <div className='container-fluid' style={{ padding: "7rem 0" }}>
                <div className={styles.heroCont}>

                    <Row gutter={[20, 20]} align="middle">
                        <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 12 }}>
                            <div className={styles.leftContainer}>
                                <h2>Power your business with influencer marketing</h2>
                                <h6>Find creators for your brand, nurture influencer relationships, manage your affiliate network, and drive more sales with the leading influencer marketing platform.</h6>
                                <div className={styles.searchContainer}>
                                    <form action="" className={styles.searchForm}>
                                        <input type="text" placeholder="Work Email" name="search" />
                                        <button type="submit">CHECK</button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 12 }}>
                            <div className={styles.imgHolder}>
                                <Image src={image1} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
}

export default AppHero;