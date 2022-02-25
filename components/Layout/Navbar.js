import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'antd';

import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push("https://next-ts-fe.vercel.app/auth/signup")
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 25) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <div className={styles.navbar} style={{ backgroundColor: `${scrolled ? 'white' : 'transparent'}` }}>
            <Link href='/'>
                <a className={styles.navlogo}>BETOPIA DIGITAL</a>
            </Link>
            <ul className={isOpen === false ?
                styles.navmenu : styles.navmenu + ' ' + styles.active}>
                {/* <input className={styles.search__input} type="text" placeholder="Analyze any influencer..." /> */}

                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={isOpen === false ?
                            styles.navlink : styles.navlink + ' ' + styles.active}
                            onClick={openMenu}>Platform</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href=''>
                        <a className={isOpen === false ?
                            styles.navlink : styles.navlink + ' ' + styles.active}
                            onClick={openMenu}>Services</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href=''>
                        <a className={isOpen === false ?
                            styles.navlink : styles.navlink + ' ' + styles.active}
                            onClick={openMenu}>Pricing</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href=''>
                        <a className={isOpen === false ?
                            styles.navlink : styles.navlink + ' ' + styles.active}
                            onClick={openMenu}>Why Upfluence</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='https://next-ts-fe.vercel.app/auth/signin'>
                        <a className={isOpen === false ?
                            styles.navlink : styles.navlink + ' ' + styles.active}
                            onClick={openMenu}>Resources</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.navrightmenu}>
                <button className={styles.navbarButton} onClick={handleClick}>Get Started</button>
                <ul className={styles.navrightmenu}>
                    <li className={styles.navitem}>
                        <Link href='https://next-ts-fe.vercel.app/auth/signin'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Or Log in</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='https://next-ts-fe.vercel.app/auth/signin'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                            >EN</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <button className={isOpen === false ?
                styles.hamburger : styles.hamburger + ' ' + styles.active}
                onClick={openMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </div>
    )
}
