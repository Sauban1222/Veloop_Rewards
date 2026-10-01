import { ArrowRight, Check, Gem, RefreshCw } from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import StepStrip from '../StepStrip/StepStrip';
import useReducedMotion from '../../hooks/useReducedMotion';
import { exchangeBannerData } from '../../data/bannerData';
import styles from './ExchangeCenterBanner.module.css';

function ExchangeIllustration() {
	return (
		<div
			className={styles.illustration}
			role="img"
			aria-label="Purple Gem card flows through a conversion symbol into a gold VE coin with a check mark"
		>
			<div className={styles.exchangeFlow}>
				<div className={styles.gemCard} aria-hidden="true">
					<span className={styles.cardEyebrow}>REWARD ASSET</span>
					<Gem className={styles.gemIcon} size={54} strokeWidth={1.35} />
					<span className={styles.cardCurrency}>GEM</span>
				</div>
				<div className={styles.convertBridge} aria-hidden="true">
					<ArrowRight className={styles.flowArrow} size={45} strokeWidth={1.4} />
					<span className={styles.convertCircle}><RefreshCw size={22} strokeWidth={1.8} /></span>
				</div>
				<div className={styles.veCard} aria-hidden="true">
					<span className={styles.cardEyebrow}>REWARD BALANCE</span>
					<div className={styles.veCoin}><span>VE</span><Check className={styles.checkBadge} size={15} /></div>
					<span className={styles.cardCurrency}>VELOOP</span>
				</div>
			</div>
			<div className={styles.rateChip}>
				<span className={styles.rateLabel}>{exchangeBannerData.exchangeRateLabel}</span>
				<strong>{exchangeBannerData.exchangeRateFrom} <span aria-hidden="true">=</span> {exchangeBannerData.exchangeRateTo}</strong>
				<span className={styles.rateNote}>{exchangeBannerData.exchangeRateNote}</span>
			</div>
		</div>
	);
}

export default function ExchangeCenterBanner() {
	const reducedMotion = useReducedMotion();
	const bannerClass = [styles.theme, reducedMotion ? styles.reducedMotion : ''].filter(Boolean).join(' ');

	return (
		<RewardBanner
			className={bannerClass}
			title={(
				<>
					<span>{exchangeBannerData.heading[0]}</span>{' '}
					<span className={styles.purpleHeading}>{exchangeBannerData.heading[1]}</span>{' '}
					<span>{exchangeBannerData.heading[2]}</span>{' '}
					<span className={styles.goldHeading}>{exchangeBannerData.heading[3]}</span>
				</>
			)}
			description={exchangeBannerData.description}
			action={<CtaButton to={exchangeBannerData.route}>{exchangeBannerData.action}</CtaButton>}
			illustration={<ExchangeIllustration />}
			footer={<StepStrip steps={exchangeBannerData.steps} />}
		/>
	);
}
