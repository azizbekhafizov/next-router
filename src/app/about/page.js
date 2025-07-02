export const metadata = {
  title: 'About qism',
  description: 'About qismga hush kelibsiz',
};

export default function AboutPage() {
  return (
    <div className="px-32 py-[300px] flex justify-between items-center">
      <div>
        <h1 className="font-['DM_Sans'] font-bold text-[48px] leading-[62px] text-white mb-4">
          Hi, I am <br /> Khafizov Azizbek
        </h1>
        <p className="font-['DM_Sans'] font-medium text-[18px] leading-[23px] text-[#828282] mb-9">
          Frontend Developer
        </p>
        <div>
          <button
            className="bg-[#27ae60] text-white px-7 py-3 rounded-sm border-2 border-[#27ae60] transition-all duration-300 hover:bg-transparent"
            type="button"
          >
            Download CV
          </button>
          <button
            className="ml-3 px-7 py-3 border border-white text-white transition-all duration-300 hover:bg-[#27ae60] hover:border-none"
            type="button"
          >
            Learn more
          </button>
        </div>
      </div>

      <div className="">
        <img
          src="/image.png"
          alt="About"
          className="w-[650px] rounded-full"
        />
      </div>
    </div>
  );
}
