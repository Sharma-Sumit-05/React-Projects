export const BestServices = () => {
  return <section className="min-h-screen w-screen overflow-hidden">
<div className="relative w-full h-screen overflow-hidden">
  <img 
    src="/Logo/background.jpg" 
    alt="Background" 
    className="w-full h-full object-cover object-center brightness-75"
  /> 
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
    <h1 className="text-6xl md:text-7xl font-black mb-8">
      | Best Services |
    </h1>
    <p className="text-2xl md:text-3xl font-semibold  max-w-2xl mx-auto pt-5">
      DO YOU HAVE ANY QUESTIONS? FEEL FREE TO CONTACT US
    </p>
     <button className="mt-12 px-12 py-6 text-xl font-bold bg-blue-100 hover:bg-blue-400 text-gray-900 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border-2 border-white/50">
    Contact Us
  </button>
  </div>
</div>
  </section>
}