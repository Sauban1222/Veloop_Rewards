import {
	ArrowRight,
	Check,
	Copy,
	Gift,
	Infinity as InfinityIcon,
	Share2,
	ShieldCheck,
	UserRound,
	Users,
	Zap,
} from 'lucide-react';
import CtaButton from '../CtaButton/CtaButton';
import RewardBanner from '../RewardBanner/RewardBanner';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import useReducedMotion from '../../hooks/useReducedMotion';
import { referBannerData } from '../../data/bannerData';
import styles from './ReferEarnBanner.module.css';

const featureIcons = { share: Share2, instant: Zap, secure: ShieldCheck, unlimited: InfinityIcon };

function ReferralIllustration({ copyStatus, onCopy }) {
	return (
		<div className={styles.illustration} role="group" aria-label="Referral gift and code illustration">
			<div className={styles.codeBox}>
				<div className={styles.codeCopy}>
					<span className={styles.codeLabel}>YOUR REFERRAL CODE</span>
					<strong className={styles.codeValue}>{referBannerData.referralCode}</strong>
				</div>
				<button
					className={styles.copyButton}
					type="button"
					aria-label="Copy referral code"
					onClick={onCopy}
				>
					{copyStatus === 'copied' ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
					<span aria-live="polite">
						{copyStatus === 'copied' ? 'Copied' : copyStatus === 'error' ? 'Copy unavailable' : 'Copy'}
					</span>
				</button>
			</div>

			<div className={styles.giftScene}>
				<div className={`${styles.avatar} ${styles.avatarLeft}`} aria-hidden="true"><UserRound size={22} /></div>
				<ArrowRight className={styles.shareArrow} aria-hidden="true" size={22} />
				<div className={styles.giftBox} aria-hidden="true">
					<div className={styles.giftLid} />
					<div className={styles.giftBody}><Gift size={37} strokeWidth={1.5} /></div>
					<div className={styles.giftBow} />
				</div>
				<div className={`${styles.avatar} ${styles.avatarRight}`} aria-hidden="true"><UserRound size={22} /></div>
				<span className={`${styles.vCoin} ${styles.coinOne}`} aria-hidden="true">V</span>
				<span className={`${styles.vCoin} ${styles.coinTwo}`} aria-hidden="true">V</span>
				<span className={`${styles.vCoin} ${styles.coinThree}`} aria-hidden="true">V</span>
			</div>

			<div className={styles.rewardClaims}>
				{referBannerData.rewardClaims.map(({ key, label, amount }) => (
					<p className={styles.rewardClaim} key={key}>
						<span>{label}</span>
						<strong>{amount}</strong>
					</p>
				))}
			</div>
			<p className={styles.rewardDisclaimer}>{referBannerData.rewardDisclaimer}</p>
		</div>
	);
}

function FeatureStrip() {
	return (
		<ul className={styles.featureStrip} id="how-it-works" aria-label="Referral benefits">
			{referBannerData.features.map(({ key, title, description, icon }) => {
				const Icon = featureIcons[icon];
				return (
					<li className={styles.feature} key={key}>
						<Icon className={styles.featureIcon} aria-hidden="true" size={17} strokeWidth={1.8} />
						<span className={styles.featureTitle}>{title}</span>
						<span className={styles.featureDescription}>{description}</span>
					</li>
				);
			})}
		</ul>
	);
}

export default function ReferEarnBanner() {
	const { copyStatus, copyToClipboard } = useCopyToClipboard();
	const reducedMotion = useReducedMotion();
	const bannerClass = [styles.theme, reducedMotion ? styles.reducedMotion : ''].filter(Boolean).join(' ');

	return (
		<RewardBanner
			className={bannerClass}
			eyebrow={<><Users aria-hidden="true" size={14} />{referBannerData.eyebrow}</>}
			title={(
				<>
					<span>{referBannerData.heading[0]}</span>
					<br />
					<span className={styles.gradientHeading}>{referBannerData.heading[1]}</span>
				</>
			)}
			description={referBannerData.description}
			action={(
				<div className={styles.actions}>
					<CtaButton to={referBannerData.route}>{referBannerData.action}</CtaButton>
					<a className={styles.secondaryAction} href="#how-it-works">
						<Gift aria-hidden="true" size={16} />
						<span>{referBannerData.howItWorksLabel}</span>
					</a>
				</div>
			)}
			illustration={(
				<ReferralIllustration
					copyStatus={copyStatus}
					onCopy={() => copyToClipboard(referBannerData.referralCode)}
				/>
			)}
			footer={<FeatureStrip />}
		/>
	);
}
