import { CalendarDays, Check, ClipboardCheck, Coins, Gem, UsersRound } from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import useReducedMotion from '../../hooks/useReducedMotion';
import { bonusBannerData } from '../../data/bannerData';
import styles from './BonusVEsBanner.module.css';

const taskIcons = { calendar: CalendarDays, friends: UsersRound, tasks: ClipboardCheck };

function BonusIllustration() {
	return (
		<div
			className={styles.illustration}
			role="img"
			aria-label="Large gold VE bonus coin inside a BONUS VE ring, surrounded by four smaller coins"
		>
			<div className={styles.coinRing} aria-hidden="true" />
			<span className={styles.ringLabel} aria-hidden="true">BONUS VE</span>
			<div className={styles.mainCoin} aria-hidden="true">
				<div className={styles.coinFace}>
					<span>VE</span>
					<small>VELOOP</small>
				</div>
			</div>
			<div className={`${styles.smallCoin} ${styles.coinOne}`} aria-hidden="true"><Coins size={21} /></div>
			<div className={`${styles.smallCoin} ${styles.coinTwo}`} aria-hidden="true"><Gem size={17} /></div>
			<div className={`${styles.smallCoin} ${styles.coinThree}`} aria-hidden="true"><Coins size={17} /></div>
			<div className={`${styles.smallCoin} ${styles.coinFour}`} aria-hidden="true"><Coins size={15} /></div>
		</div>
	);
}

function BonusTaskList() {
	return (
		<ul className={styles.taskList} aria-label="Bonus activities">
			{bonusBannerData.tasks.map(({ key, title, subtitle, icon }) => {
				const Icon = taskIcons[icon];
				return (
					<li className={styles.taskRow} key={key}>
					<Icon className={styles.taskIcon} aria-hidden="true" size={18} strokeWidth={1.8} />
					<div className={styles.taskCopy}>
						<span className={styles.taskTitle}>{title}</span>
						<span className={styles.taskSubtitle}>{subtitle}</span>
					</div>
					<Check className={styles.taskCheck} aria-hidden="true" size={17} />
					</li>
				);
			})}
		</ul>
	);
}

export default function BonusVEsBanner() {
	const reducedMotion = useReducedMotion();
	const bannerClass = [styles.theme, reducedMotion ? styles.reducedMotion : ''].filter(Boolean).join(' ');

	return (
		<RewardBanner
			className={bannerClass}
			title={(
				<>
					<span>{bonusBannerData.heading[0]}</span>
					<br />
					<span className={styles.goldHeading}>{bonusBannerData.heading[1]}</span>
				</>
			)}
			description={bonusBannerData.description}
			action={<CtaButton to={bonusBannerData.route}>{bonusBannerData.action}</CtaButton>}
			illustration={<BonusIllustration />}
			footer={<BonusTaskList />}
		/>
	);
}
