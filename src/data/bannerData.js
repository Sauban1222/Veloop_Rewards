export const captchaBannerData = {
	heading: ['Solve Captchas.', 'Earn Gems.'],
	description: 'Complete simple captcha tasks accurately and earn eligible Gem rewards.',
	action: 'Start Task',
	route: '/captcha',
	captchaCode: 'K7M4',
	cardLabel: 'IMAGE CHECK',
	inputLabel: 'Enter captcha',
	steps: [
		{ label: 'K7M4', icon: 'captcha' },
		{ label: 'Verified', icon: 'check' },
		{ label: 'Gem', icon: 'gem' },
	],
};

export const bonusBannerData = {
	heading: ['Boost Your', 'VE Balance'],
	description: 'Complete eligible activities and unlock additional VEs through special bonus opportunities.',
	action: 'Explore Bonuses',
	route: '/bonus',
	tasks: [
		{ key: 'daily-check-in', title: 'Daily Check-in', subtitle: 'Stay active', icon: 'calendar' },
		{ key: 'invite-friends', title: 'Invite Friends', subtitle: 'Grow together', icon: 'friends' },
		{ key: 'complete-tasks', title: 'Complete Tasks', subtitle: 'Earn more', icon: 'tasks' },
	],
};

export const swapBannerData = {
	heading: ['Swap', 'Center'],
	description: 'Convert eligible reward balances between supported currencies.',
	action: 'Open Swap Center',
	route: '/swap',
	veCardLabel: 'Veloop reward balance',
	sveCardLabel: 'Staked Veloop balance',
};

export const exchangeBannerData = {
	heading: ['Convert', 'Gems', 'to', 'VEs'],
	description: 'Exchange eligible Gems into VEs and grow your VE balance.',
	action: 'Open Exchange Center',
	route: '/exchange',
	exchangeRateLabel: 'Exchange Rate',
	exchangeRateFrom: '1 Gem',
	exchangeRateTo: '10 VEs',
	exchangeRateNote: 'Placeholder value',
	steps: [
		{ key: 'gem', label: 'Gem', icon: 'gem' },
		{ key: 'convert', label: 'Convert', icon: 'check' },
		{ key: 've', label: 'VE', icon: 'gem' },
	],
};

export const referBannerData = {
	eyebrow: 'REFER & EARN',
	heading: ['Refer Friends,', 'Earn Rewards'],
	description: 'Invite your friends to VELOOP Rewards and earn exciting rewards together.',
	action: 'Invite Now',
	route: '/refer',
	howItWorksLabel: 'How It Works',
	referralCode: 'VELOOP123',
	rewardClaims: [
		{ key: 'you-earn', label: 'You Earn', amount: '500 VEs' },
		{ key: 'friend-earns', label: 'Your Friend Gets', amount: '200 VEs' },
	],
	rewardDisclaimer: 'Placeholder values only. Not official reward terms.',
	features: [
		{ key: 'share', title: 'Easy to Share', description: 'Send your link in a tap.', icon: 'share' },
		{ key: 'instant', title: 'Instant Rewards', description: 'Rewards after eligibility.', icon: 'instant' },
		{ key: 'secure', title: '100% Secure', description: 'Referral details stay private.', icon: 'secure' },
		{ key: 'unlimited', title: 'Unlimited Earning', description: 'Invite at your own pace.', icon: 'unlimited' },
	],
};
