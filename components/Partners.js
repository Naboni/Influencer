import React from 'react';
import Image from 'next/image'
import { Card, Col, Row } from 'antd';

import image1 from '../public/images/farfetch-logo-1.png';
import image2 from '../public/images/universal-logo.png';
import image3 from '../public/images/asus-logo-2.png';
import image4 from '../public/images/zappos2.png';
import image5 from '../public/images/verizon-logo.png';
import image6 from '../public/images/asics-logo.png';
import image7 from '../public/images/amazon-logo.png';

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

function AppPartner() {
    return (
        <div className={styles.partners}>
            <div className={styles.partnersContainer}>
                <h2>1,600+ BRANDS TRUST US</h2>
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

export default AppPartner;