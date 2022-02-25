import React from 'react';

import { Collapse, Button, Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Image from 'next/image'

import image1 from '../public/images/burrow.png';
import image2 from '../public/images/BlueFocus-1.jpg';
import image3 from '../public/images/Capture-d.webp';

import styles from "@/styles/Testimonials.module.css"
import Slider from 'react-slick';

const items = [
    {
        key: '0',
        client: 'Abiy Merkebu',
        position: 'Founder',
        content: 'Their platform is just amazing. We were able to target our influencers accurately, simply and efficiently. Upfluence team guides us anytime we need and makes our progress easier. I definitely recommend this incredible technology.',
        image: image1,
    },
    {
        key: '1',
        client: 'Yonatan Menberu',
        position: 'Director of Marketing',
        content: 'The way we worked with influencers before Upfluence was not a pretty experience. It took forever. With Upfluence, we\'ve been able to grow by 56% from what we were doing previously.',
        image: image2,
    },
    {
        key: '2',
        client: 'Tewodros Awoke',
        position: 'International Content & Creative Head',
        content: 'Switching to Upfluence has been a game changer for my team. Advanced options that allow you to fine-tune your searches, detailed breakdowns of all of the most relevant creator metrics, an intuitive project management system, and easy to use campaign monitoring tools all combine to create a one-stop solution for all of our project needs.',
        image: image3,
    },
]

function AppTestimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div id="faq" className="joinBlock">
            <div className={styles.testimonialsContainer}>
                <div className={styles.testimonialsTitle} >
                    <h2>What our clients say about us
                    </h2>
                    {/* <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p> */}
                </div>

                <div>
                    <Slider {...settings}>
                        {items.map(item => {
                            return (
                                <div className={styles.testimonialItem} key={item.key}>
                                    <Card className={styles.testimonialCard}>
                                        <Row gutter={[20, 20]} justify="space-between">
                                            <Col span={8}>
                                                <div className={styles.testimonialImgHolder}>
                                                    <Image src={item.image} alt="" />
                                                </div>
                                            </Col>
                                            <Col span={16}>
                                                <p>{item.content}</p>
                                                <div>
                                                    <h4>{item.client}</h4>
                                                    <h5>{item.position}</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>,
                                </div>
                            );

                        })}
                    </Slider>
                </div>

            </div>
        </div>
    );
}

export default AppTestimonials;