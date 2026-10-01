import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './CtaButton.module.css';

export default function CtaButton({ children, to, className = '' }) {
	return (
		<Link className={`${styles.button} ${className}`.trim()} to={to}>
			<span>{children}</span>
			<FiArrowRight aria-hidden="true" size={17} />
		</Link>
	);
}
