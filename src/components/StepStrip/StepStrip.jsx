import { Check, Gem, ScanLine } from 'lucide-react';
import styles from './StepStrip.module.css';

const stepIcons = { captcha: ScanLine, check: Check, gem: Gem };

export default function StepStrip({ steps }) {
	return (
		<ol className={styles.strip} aria-label="Captcha task steps">
			{steps.map((step, index) => {
				const Icon = stepIcons[step.icon];
				return (
					<li className={styles.step} key={step.label}>
						{index > 0 && <span className={styles.connector} aria-hidden="true" />}
						<span className={styles.iconBox}><Icon aria-hidden="true" size={19} strokeWidth={1.8} /></span>
						<span className={styles.label}>{step.label}</span>
					</li>
				);
			})}
		</ol>
	);
}
