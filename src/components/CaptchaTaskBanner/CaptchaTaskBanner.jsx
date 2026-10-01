import { Gem, Sparkles } from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import StepStrip from '../StepStrip/StepStrip';
import { captchaBannerData } from '../../data/bannerData';
import styles from './CaptchaTaskBanner.module.css';

function CaptchaIllustration() {
	return (
		<div className={styles.art}>
			<div className={styles.orbit} aria-hidden="true" />
			<div className={styles.sparkle} aria-hidden="true"><Sparkles size={19} /></div>
			<div className={styles.gemFloat} aria-hidden="true"><Gem size={25} /></div>
			<div className={styles.captchaCard}>
				<div className={styles.cardTop}>
					  <span className={styles.cardLabel}>{captchaBannerData.cardLabel}</span>
					<span className={styles.statusDot} aria-hidden="true" />
				</div>
				<div className={styles.code}>{captchaBannerData.captchaCode}</div>
				<div className={styles.cardFoot}>
					<span>Task #{captchaBannerData.taskNumber}</span>
					<span>{captchaBannerData.taskStatus}</span>
				</div>
			</div>
			<div className={styles.rewardGem} aria-hidden="true"><Gem size={42} strokeWidth={1.5} /></div>
			<StepStrip steps={captchaBannerData.steps} />
		</div>
	);
}

export default function CaptchaTaskBanner() {
	const { eyebrow, title, description, action, route } = captchaBannerData;
	return (
		<RewardBanner
			className={styles.theme}
			illustration={<CaptchaIllustration />}
			eyebrow={eyebrow}
			title={title}
			description={description}
			action={<CtaButton to={route}>{action}</CtaButton>}
		/>
	);
}
