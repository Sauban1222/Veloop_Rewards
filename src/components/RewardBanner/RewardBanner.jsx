import styles from './RewardBanner.module.css';

export default function RewardBanner({ className = '', illustration, eyebrow, title, description, action, footer }) {
	return (
		<section className={`${styles.banner} ${className}`.trim()}>
			<div className={styles.illustration}>{illustration}</div>
			<div className={styles.content}>
				{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				{action}
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</section>
	);
}
