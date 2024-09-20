"use client"

import styles from './heroSection.module.scss';
import {Typography} from "@/components/typography";
import Image from "next/image";
import Picture from '@/public/images/Image.png'
import {Button} from "@/components/button";
import {Left, Location, Rigth, Square} from "@/assets";
import {Benefits} from "@/components/benefits/benefits";
import {useEffect, useState} from "react";
import axios from "axios";
import {Modal} from "@/components/modal/modal";
import {ChooseName, ResultProps} from "@/components/chooseName/chooseName";

const HeroSection = () => {

    const [users, setUsers] = useState<Array<ResultProps>>([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=3')
            .then(response => setUsers(response.data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleUserSelect = (user: string) => {
        setSelectedUser(user);
    };

    const handleGetVPN = () => {
        if (selectedUser) {
            setModalOpen(true);
        }
    };

    const closeModal = (isCloses: boolean) => {
        setModalOpen(isCloses);
    };

    return (
        <section className={styles.heroSection} id={'heroSection'}>
            <Typography as={'div'} className={styles.container}>
                <Typography as={'h1'} variant={'large'} className={styles.title} textAlign={'center'}>
                    <span>Access <span className={styles.highlight}>everything</span></span>
                    <span><span className={styles.highlight}>securely</span> with</span>
                    <span>VPN</span>
                </Typography>
                <Image src={Picture} alt={''} className={styles.images}/>
                <Button className={styles.getBtn}>Get VPN</Button>
            </Typography>
            <Typography as={'div'} className={styles.Text}>
                <Left/>
                <Typography as={'span'} >
                    <Typography variant={'Capture'}>
                        Trusted by
                    </Typography>
                    <Typography variant={'Text'} className={styles.TextRoboto}>
                        50M+ Users
                    </Typography>
                </Typography>
                <Rigth/>
            </Typography>
            <Typography as={'div'} className={styles.BorderContent}>
                <Typography as={'div'} className={styles.Content}>
                    <Location/>
                    <Typography as={'span'}>
                        <Typography variant={'title2'}>50+</Typography>
                        <Typography variant={'Capture'} style={{color: 'grey'}}>Locations</Typography>
                    </Typography>
                </Typography>
                <Typography as={'div'} className={styles.Stick}/>
                <Typography as={'div'} className={styles.Content}>
                    <Square/>
                    <Typography as={'span'}>
                        <Typography variant={'title2'}>1000+</Typography>
                        <Typography variant={'Capture'} style={{color: 'grey'}}>Servers</Typography>
                    </Typography>
                </Typography>
            </Typography>
            <Typography variant={'Body'} textAlign={'center'} className={styles.vpnText}>
                VPN-your
                <Typography as={'span'} variant={'Body'}> ultimate </Typography>
                solution for a private and secure online experience!
            </Typography>
            <Benefits/>

            <Typography as={'span'} variant={'title2'} textAlign={'center'} className={styles.trustTitle}>
                Millions of people trust us!
            </Typography>

            <ChooseName users={users} handleUserSelect={handleUserSelect} handleGetVPN={handleGetVPN}/>

            {modalOpen && <Modal setCloses={closeModal} selectedUser={selectedUser}/>}
        </section>
    );
};

export default HeroSection;