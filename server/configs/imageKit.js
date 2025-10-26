import ImageKit from "imagekit";

// Get ImageKit credentials from environment variables
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

// Validate required environment variables
if (!publicKey || !privateKey || !urlEndpoint) {
    throw new Error("ImageKit environment variables are required: IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT");
}

console.log("ImageKit Configuration:");
console.log("PUBLIC_KEY:", publicKey ? "✓ Configured" : "✗ Missing");
console.log("PRIVATE_KEY:", privateKey ? "✓ Configured" : "✗ Missing");
console.log("URL_ENDPOINT:", urlEndpoint ? "✓ Configured" : "✗ Missing");

// Always create ImageKit instance with fallback values
const imagekit = new ImageKit({
    publicKey: publicKey,
    privateKey: privateKey,
    urlEndpoint: urlEndpoint
});

console.log("✓ ImageKit initialized successfully");

export default imagekit;