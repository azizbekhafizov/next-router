import '@fortawesome/fontawesome-free/css/all.min.css'
export default function servicesPage() {
  return (
<div id="about" className="bg-black py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-white text-4xl md:text-5xl font-bold font-dm">About</h2>
    <p className="text-white text-base md:text-lg mt-6 font-dm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident
    </p>
  </div>

  <div className="flex flex-wrap justify-evenly items-start text-center text-white font-dm mt-16 gap-8">
    {[
      { title: "Full name", desc: "Azizbek Hafizov" },
      { title: "Email Address", desc: "azizbekhafizov678@gmail.com" },
      { title: "Phone Number", desc: "+998 99 917 14 11" },
      { title: "Location", desc: "Samarkand, Uzbekistan" },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center w-60">
        <div className="p-6 bg-[#212121] rounded-full text-green-500 text-xl">
          <i className="fa-solid fa-circle"></i>
        </div>
        <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

  )
}
