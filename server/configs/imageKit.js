import ImageKit from "imagekit";

// Get ImageKit credentials from environment variables
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

// Validate required environment variables
if (!publicKey || !privateKey || !urlEndpoint) {
  throw new Error(
    "ImageKit environment variables are required: IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT"
  );
}

// Create ImageKit instance
const imagekit = new ImageKit({
  publicKey: publicKey,
  privateKey: privateKey,
  urlEndpoint: urlEndpoint,
});

export default imagekit;
