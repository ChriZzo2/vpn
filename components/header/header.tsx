
import styles from './heaader.module.scss';
import {Logo} from "@/assets/icons/logo";
import {Button} from "@/components/button";
import {Typography} from "@/components/typography";

type Props = {
    scrollToHeroSection: () => void
    scrollToChooseName: () => void
}

export const Header = ({ scrollToHeroSection, scrollToChooseName }: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Button variant={'text'} onClick={scrollToHeroSection} >
                    <Logo style={{fill: 'blue'}}/>
                    <Typography variant={'Subtitle'} className={styles.logo} color={'black'}>VPN</Typography>
                </Button>
                <Button className={styles.getVPNButton} variant={'link'} onClick={scrollToChooseName}>
                    <Typography variant={'Text'} color={'white'}>Get VPN</Typography>
                </Button>
            </div>
        </header>
    );
};