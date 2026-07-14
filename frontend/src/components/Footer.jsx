const Footer = () => {
  return (
    <footer className="bg-[#05070D] border-t border-cyan-500/20 py-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="font-uncial text-3xl font-black text-white">
              🐹 KAPPYIES
            </h2>

            <p className="text-gray-400 font-merienda mt-2">
              The Chillest NFT Collection
            </p>
          </div>

          <div className="flex gap-8">

          </div>
           {/* <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} KAPPYIES. All rights reserved.
        </div> */}
        © {new Date().getFullYear()} KAPPYIES. All rights reserved.
        
        </div>

      </div>

    </footer>
  );
};

export default Footer;