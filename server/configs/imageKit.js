import ImageKit from "imagekit";

// Hardcoded ImageKit configuration to prevent environment variable issues
const IMAGEKIT_CONFIG = {
    publicKey: 'public_vuZGGK0ORUarw91U4jb/YG5WwgY=',
    privateKey: 'private_zAOA4qQcItZurGh9Fk+VMrzZMmM=',
    urlEndpoint: 'https://ik.imagekit.io/onfplk0io8'
};

// Try to use environment variables first, fallback to hardcoded values
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY || IMAGEKIT_CONFIG.publicKey;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || IMAGEKIT_CONFIG.privateKey;
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || IMAGEKIT_CONFIG.urlEndpoint;

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