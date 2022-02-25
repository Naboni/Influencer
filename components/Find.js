import React from 'react';
import Image from 'next/image'
import { Card, Col, Row } from 'antd';

import image1 from '../public/images/instagram_blue_2.png';
import image2 from '../public/images/youtube_blue.png';
import image3 from '../public/images/wordpress_blue.png';
import image4 from '../public/images/twitter_blue.png';
import image5 from '../public/images/twitch_blue.png';
import image6 from '../public/images/pinterest_blue.png';
import image7 from '../public/images/tiktok_blue.png';

import styles from '@/styles/Partners.module.css'

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
    },
    {
        key: '6',
        image: image6,
    },
    {
        key: '7',
        image: image7,
    },
]

function AppFind() {
    return (


        <div className={styles.partners}>
            <div className={styles.partnersContainer}>
                <h2>FIND INFLUENCERS ACROSS ALL SOCIAL NETWORKS,</h2>
                <h2>FROM YOUR OWN CUSTOMERS OR IN OUR COMMUNITY OF INFLUENCERS</h2>
                <div className={styles.socialsHolder}>

                    {items.map(item => {
                        return (
                            <div className={styles.items} key={item.key}>
                                <Image src={item.image} alt="" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>

    );
}

export default AppFind;