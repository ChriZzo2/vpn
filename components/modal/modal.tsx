"use client"

import styles from './modal.module.scss'
import {Typography} from "@/components/typography";
import {ChangeEvent, useState} from "react";
import {Button} from "@/components/button";

type Props = {
    setCloses: (isCloses: boolean) => void
    selectedUser: string
}

export const Modal = ({setCloses, selectedUser}: Props) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const closeModal = () => {
        setCloses(false);
        setEmail('');
        setEmailError('');
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setEmailError('');
    };

    const validateEmail = (email: string): boolean=> {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleContinue = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }
        console.log('Email:', email);
        closeModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <Typography variant={'title1'} color={'black'}>YOUR NAME</Typography>
                    <button className={styles.closeButton} onClick={closeModal}>×</button>
                </div>
                <div className={styles.modalBody}>
                    <Typography variant={'Body'} color={'black'}>{selectedUser}</Typography>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError ? (
                            <Typography className={styles.error} variant={'Footnote'}>{emailError}</Typography>
                        ) : (
                            <Typography className={styles.info} variant={'Footnote'}>Your information is 100% secure. We don’t share your personal information.</Typography>)}
                    <Button  onClick={handleContinue}>Continue</Button>
                </div>
            </div>
        </div>
    );
};

