import Moralis from "moralis";
  try {
    Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
  } catch (e) {}
export default Moralis;
