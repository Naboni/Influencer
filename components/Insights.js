import React from 'react';

import { Collapse, Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Image from 'next/image'

import image1 from '../public/images/ultimate-influencer-guide-min.jpg';
import image2 from '../public/images/trends.jpg';
import image3 from '../public/images/KEEN_Upfluence_2021.jpeg';

import styles from "@/styles/Insight.module.css"


const items = [
    {
        key: '0',
        section: 'EBOOK',
        title: 'The Ultimate Influencer Marketing Guide',
        image: image1,
    },
    {
        key: '1',
        section: 'BLOG',
        title: '5 Influencer Marketing Trends For 2022 That You Should Know',
        image: image2,
    },
    {
        key: '2',
        section: 'CUSTOMER STORY',
        title: 'Discover How KEEN Footwear generated over 187,000 Instagram Story Views in 1 Month',
        image: image3,
    },
]

function AppInsights() {
    return (
        <div id="faq" className="joinBlock joinInsight">
            <div className={styles.insightContainer}>
                <div className={styles.insightTitle} >
                    <h2>Get the latest insights
                    </h2>
                    {/* <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p> */}
                </div>

                <div className={styles.insightsHolder}>
                    <Row gutter={[20, 20]} justify="space-around">
                        {items.map(item => {
                            return (
                                <Col xs={{ span: 8 }} sm={{ span: 24 }} md={{ span: 8 }} key={item.key}>
                                    <Card className={styles.insightCard}>
                                        <div >
                                            <Image src={item.image} alt="" />
                                        </div>
                                        <h4>{item.section}</h4>
                                        <p>{item.title}</p>
                                        <a href='#'>Read it now</a>
                                    </Card>,
                                </Col>


                            );

                        })}
                    </Row>
                </div>

            </div>
        </div>
    );
}

export default AppInsights;