import Whitelist from "../models/Whitelist.js";

// Ethereum wallet validation
const isValidWallet = (wallet) => {
  return /^0x[a-fA-F0-9]{40}$/.test(wallet);
};

export const joinWhitelist = async (req, res) => {
  try {
    const { walletAddress } = req.body;

    // Check if wallet is empty
    if (!walletAddress) {
      return res.status(400).json({
        success: false,
        message: "Wallet address is required",
      });
    }

    // Validate wallet
    if (!isValidWallet(walletAddress)) {
      return res.status(400).json({
        success: false,
        message: "Invalid EVM wallet address",
      });
    }

    // Check duplicate
    const existingWallet = await Whitelist.findOne({ walletAddress });

    if (existingWallet) {
      return res.status(409).json({
        success: false,
        message: "Wallet already registered",
      });
    }

    // Save wallet
    const whitelist = await Whitelist.create({
      walletAddress,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully joined KAPPYIES whitelist!",
      data: whitelist,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};