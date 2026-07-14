import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const API_URL = import.meta.env.VITE_API_URL ;


const WhitelistForm = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!walletAddress) {
      return toast.error("Wallet address is required");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${API_URL}/api/whitelist`,
        {
          walletAddress,
        }
      );

      toast.success(data.message);
      setWalletAddress("");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-6 py-24">

      <div className="w-full max-w-xl bg-[#161B22] rounded-3xl p-10 border border-gray-700">

        <h1 className="text-4xl font-bold text-white text-center">
          Join KAPPYIES
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Complete the steps below to join the whitelist.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">

          {/* Follow X */}
          <div>
            <label className="block text-white font-semibold mb-3">
              1. Follow on X
            </label>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-center py-3 rounded-xl font-semibold text-white"
            >
              Follow on X
            </a>
          </div>

          {/* Like & RT */}
          <div>
            <label className="block text-white font-semibold mb-3">
              2. RT & Like Post
            </label>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-pink-500 hover:bg-pink-600 text-center py-3 rounded-xl font-semibold text-white"
            >
              Open Post
            </a>
          </div>

          {/* Wallet */}
          <div>
            <label className="block text-white font-semibold mb-3">
              3. EVM Wallet Address
            </label>

            <input
              type="text"
              placeholder="0x..."
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#0D1117] border border-gray-700 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
          >
            {loading ? "Submitting..." : "Join Whitelist"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default WhitelistForm;