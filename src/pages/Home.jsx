import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner';

export default function Home() {
	return (
		<main className="container py-4 d-grid gap-4">
			<h1 className="visually-hidden">VELOOP Rewards</h1>
			<CaptchaTasksBanner />
			{/* Bonus VEs, Swap Center, Exchange Center, and Refer & Earn banners go here. */}
		</main>
	);
}
