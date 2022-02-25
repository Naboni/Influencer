import React from 'react';

import { Button, Modal } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';

import Image from 'next/image'

import image1 from '../public/images/socialmediatoday.jpg';
import image2 from '../public/images/forbes.jpg';
import image3 from '../public/images/tc.jpg';
import image4 from '../public/images/the_ashington.jpg';
import image5 from '../public/images/entrepreneur.jpg';
import image6 from '../public/images/adage.jpg';
import image7 from '../public/images/insider.jpg';
import image8 from '../public/images/fr_eek.jpg';



const items = [
    {
        key: '1',
        image: image1,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '2',
        image: image2,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '3',
        image: image3,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '4',
        image: image4,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '5',
        image: image5,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '6',
        image: image6,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '7',
        image: image7,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },
    {
        key: '8',
        image: image8,
        date: 'August, 2020',
        content: '"A new study by Betopia Digital reported by Social Media Today found that influencers across tiers of follower counts almost unanimously saw their Like counts fall in countries where the hidden Like count test was active. Likes fell 3% to 15% in all the countries for influencers with 5,000 to 20,000 followers."',
    },


]

function AppWorks() {
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="worksTitle">
                    <h2>We set a standard in Instagram, YouTube and TikTok account analytics to make influencer marketing transparent, fair, and effective  </h2>
                </div>
                <div className="contentHolder">
                    <div className="contentTitle">
                        <h5>PRESS ABOUT BETOPIA DIGITAL</h5>
                    </div>
                    <div>
                        <Row gutter={[20, 20]}>
                            {items.map(item => {
                                return (
                                    <Col key={item.key} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                        <Card className="pressCard">
                                            <div className="pressCardTitle">
                                                <Image src={item.image} alt="" className="pressCardImg" />
                                            </div>
                                            <div className="pressCardDetail">
                                                <p className="pressCardDate">{item.date}</p>
                                                <p className="pressCardContent">{item.content}</p>
                                            </div>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default AppWorks;