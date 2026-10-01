import { ArrowLeft, ArrowLeftRight, ArrowRight } from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import useReducedMotion from '../../hooks/useReducedMotion';
import { swapBannerData } from '../../data/bannerData';
import styles from './SwapCenterBanner.module.css';

function CurrencyCard({ currency, label, className }) {
	return (
		<div className={`${styles.currencyCard} ${className}`}>
			<span className={styles.cardEyebrow}>REWARD ASSET</span>
			<span className={styles.cardCurrency}>{currency}</span>
			<span className={styles.cardLabel}>{label}</span>
			<span className={styles.cardMark} aria-hidden="true" />
		</div>
	);
}

function SwapIllustration() {
	return (
		<div
			className={styles.illustration}
			role="img"
			aria-label="VE reward balance card and SVE staked balance card connected by a swap icon"
		>
			<div className={styles.walletBackdrop} aria-hidden="true">
				<span /><span /><span />
			</div>
			<div className={styles.cardStage}>
				<CurrencyCard
					currency="VE"
					label={swapBannerData.veCardLabel}
					className={styles.veCard}
				/>
				<div className={styles.swapBetween} aria-hidden="true">
					<ArrowRight className={styles.inboundArrow} size={18} />
					<span className={styles.swapCircle}><ArrowLeftRight size={23} strokeWidth={1.8} /></span>
					<ArrowLeft className={styles.outboundArrow} size={18} />
				</div>
				<CurrencyCard
					currency="SVE"
					label={swapBannerData.sveCardLabel}
					className={styles.sveCard}
				/>
			</div>
		</div>
	);
}

export default function SwapCenterBanner() {
	const reducedMotion = useReducedMotion();
	const bannerClass = [styles.theme, reducedMotion ? styles.reducedMotion : ''].filter(Boolean).join(' ');

	return (
		<RewardBanner
			className={bannerClass}
			title={(
				<>
					<span className={styles.goldHeading}>{swapBannerData.heading[0]}</span>{' '}
					<span>{swapBannerData.heading[1]}</span>
				</>
			)}
			description={swapBannerData.description}
			action={<CtaButton to={swapBannerData.route}>{swapBannerData.action}</CtaButton>}
			illustration={<SwapIllustration />}
		/>
	);
}
