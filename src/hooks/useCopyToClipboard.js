import { useEffect, useRef, useState } from 'react';

export default function useCopyToClipboard() {
	const [copyStatus, setCopyStatus] = useState('idle');
	const resetTimer = useRef(null);

	useEffect(() => () => window.clearTimeout(resetTimer.current), []);

	const copyToClipboard = async (value) => {
		window.clearTimeout(resetTimer.current);

		try {
			if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
			await navigator.clipboard.writeText(value);
			setCopyStatus('copied');
		} catch {
			setCopyStatus('error');
		}

		resetTimer.current = window.setTimeout(() => setCopyStatus('idle'), 1800);
	};

	return { copyStatus, copyToClipboard };
}
