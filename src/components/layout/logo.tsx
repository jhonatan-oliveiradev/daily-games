import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<p className="font-bold text-2xl">
				Daily<span className="text-primary">Games</span>
			</p>
		</Link>
	);
};

export default Logo;
