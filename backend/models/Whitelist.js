import mongoose from "mongoose";

const whitelistSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      required: [true, "Wallet address is required"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Whitelist = mongoose.model("Whitelist", whitelistSchema);

export default Whitelist;