import { Check, Gem } from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import StepStrip from '../StepStrip/StepStrip';
import useReducedMotion from '../../hooks/useReducedMotion';
import { captchaBannerData } from '../../data/bannerData';
import styles from './CaptchaTasksBanner.module.css';

function CaptchaIllustration({ reducedMotion }) {
	return (
		<div
			className={`${styles.illustration} ${reducedMotion ? styles.reducedMotion : ''}`.trim()}
			role="img"
			aria-label="Laptop showing captcha K7M4, a response field, a check control, and three purple gems"
		>
			<Gem className={`${styles.floatingGem} ${styles.gemOne}`} aria-hidden="true" />
			<Gem className={`${styles.floatingGem} ${styles.gemTwo}`} aria-hidden="true" />
			<Gem className={`${styles.floatingGem} ${styles.gemThree}`} aria-hidden="true" />
			<div className={styles.laptop}>
				<div className={styles.screenFrame}>
					<div className={styles.screen}>
						<div className={styles.screenHeader} aria-hidden="true">
							<span /><span /><span />
							<i />
						</div>
						<div className={styles.taskLabel}>{captchaBannerData.cardLabel}</div>
						<div className={styles.captchaCode}>{captchaBannerData.captchaCode}</div>
						<div className={styles.entryRow}>
							<div className={styles.inputField}>
								<span>{captchaBannerData.inputLabel}</span><i className={styles.caret} aria-hidden="true" />
							</div>
							<div className={styles.checkButton} aria-hidden="true"><Check size={18} /></div>
						</div>
					</div>
				</div>
				<div className={styles.laptopBase} aria-hidden="true"><span /></div>
			</div>
		</div>
	);
}

export default function CaptchaTasksBanner() {
	const reducedMotion = useReducedMotion();
	const { heading, description, action, route, steps } = captchaBannerData;

	return (
		<RewardBanner
			className={styles.theme}
			title={(
				<>
					<span>{heading[0]}</span>
					<br />
					<span className={styles.headingAccent}>{heading[1]}</span>
				</>
			)}
			description={description}
			action={<CtaButton to={route}>{action}</CtaButton>}
			illustration={<CaptchaIllustration reducedMotion={reducedMotion} />}
			footer={<StepStrip steps={steps} />}
		/>
	);
}