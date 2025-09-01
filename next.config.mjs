/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // replaces `next export`
	assetPrefix: "./",
	images: {
		unoptimized: true, // ✅ required for static export
	},
	trailingSlash: true,        // ensures folders end with /
};

export default nextConfig;
