import {Typography} from "@/components/typography";
import {Content, BlockedSites, UnLocation, Speed} from "@/assets"
import styles from "./benefits.module.scss"

const services = [
    {
        icon: <Content/>,
        title1: "Unlimited\n",
        title2: "access to content",
        description: "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!"
    },
    {
        icon: <Speed/>,
        title1: "Flashing",
        title2: "connecting speed",
        description: "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!"
    },
    {
        icon: <UnLocation/>,
        title1: "Hide",
        title2: "your location",
        description: "Get your own unique IP for added security and access to restricted sites, apps, and services!"
    },
    {
        icon: <BlockedSites/>,
        title1: "Bypass",
        title2: "blocked sites",
        description: "Access any website safely and anonymously!"
    },
]

export const Benefits = () => {
    return (
        <Typography as={'div'} className={styles.wrapper}>
        {services.map((item, index) => {
                return (
                    <div key={index} className={styles.container}>
                        <div className="border-b border-white/20 w-full"></div>
                        {item.icon}
                        <Typography as={'div'} textAlign={'center'} className={styles.title}>
                           <Typography variant={'title1'} textAlign={'center'} className={styles.title1}>{item.title1}</Typography>
                           <Typography variant={'title1'} textAlign={'center'} className={styles.title2}>{item.title2}</Typography>
                        </Typography>
                        <Typography variant={'Subtitle'} textAlign={'center'} className={styles.subtitle}>{item.description}</Typography>
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                )
        })}
        </Typography>
    );
};

