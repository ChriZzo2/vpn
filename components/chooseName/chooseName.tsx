import styles from "./chooseName.module.scss";
import {Typography} from "@/components/typography";
import * as RadioRadix from "@radix-ui/react-radio-group";
import {Radio} from "@/components/radio";
import {Button} from "@/components/button";

type UsersProps = {
    first: string;
    last: string;
}

export type ResultProps = {
    name: UsersProps
}

type Props = {
    users: Array<ResultProps>
    handleUserSelect: (user: string) => void
    handleGetVPN: () => void
}

export const ChooseName = ({users, handleUserSelect, handleGetVPN}: Props) => {
    return (
        <Typography as={'div'} className={styles.vpnText} id={'chooseName'}>
            <Typography as={'div'} style={{display: 'flex', gap: '5px', marginBottom: '16px'}}>
                <Typography variant={'title1'} color={'black'}>CHOOSE</Typography>
                <Typography as={'span'} variant={'title1'} color={'blue'}>YOUR NAME</Typography>
            </Typography>
            <RadioRadix.Root onValueChange={handleUserSelect}>
                {users.map((user: ResultProps, index: number) => (
                    <div key={index} className={styles.checkboxContent}>
                        <Radio
                            label={`${user.name.first} ${user.name.last}`}
                            value={`${user.name.first} ${user.name.last}`}
                        />
                    </div>
                ))}
            </RadioRadix.Root>
            <Button className={styles.getBtn} onClick={handleGetVPN} fullWidth>Get VPN</Button>
        </Typography>
    );
};

