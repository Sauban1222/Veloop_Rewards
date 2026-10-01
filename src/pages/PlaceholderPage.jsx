import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title }) {
	return (
		<main className="container py-5">
			<h1>{title}</h1>
			<p>Coming soon</p>
			<Link className="btn btn-outline-light" to="/">Back to rewards</Link>
		</main>
	);
}
