import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="flex flex-col w-full min-h-screen font-sans bg-white">
      {/* Banner Section */}
      <section 
        className="relative w-full h-[600px] flex items-end justify-start bg-cover bg-right"
        style={{ backgroundImage: `url('https://emslindia.com/wp-content/uploads/2024/04/about-page-header.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        {/* The Dark Red Box at bottom left */}
        <div className="relative z-10 bg-primary/95 w-full md:w-[600px] md:ml-[10%] p-10 md:p-14 md:pb-16 flex flex-col justify-end">
          <p className="text-secondary font-bold mb-4 font-sans uppercase text-sm tracking-wide">About us</p>
          <h1 className="text-5xl md:text-[55px] font-bold text-white leading-tight">About EMSL</h1>
        </div>
      </section>

      {/* History Section */}
      <section className="relative py-24 md:py-32 px-4 w-full flex justify-center items-center overflow-hidden">
        {/* Placeholder for topographic background on the right */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 50%, transparent 0%, transparent 20%, #ccc 21%, transparent 22%, transparent 40%, #ccc 41%, transparent 42%, transparent 60%, #ccc 61%, transparent 62%, transparent 80%, #ccc 81%, transparent 82%)`,
            backgroundSize: `400px 400px`
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-10">History</h2>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-[1.8]">
            EMSL is a wholly owned subsidiary of IL&FS Transportation Networks Ltd. - a major player in the infrastructure development and financing in India for the past 25 years. Elsamex Maintenance Services Limited (EMSL) was incorporated on 12th September, 2013 under the Companies Act, 1956. Our registered office is in Mumbai at IL&FS Financial Centre. EMSL has been working together with the NHAI and various state governments to build and construct a better India.
          </p>
        </div>
      </section>

      {/* Short Brief Section */}
      <section className="py-20 px-4 md:px-[10%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images on Left */}
          <div className="relative w-full h-[600px]">
            {/* The primary circular badge */}
            <div className="absolute top-10 left-4 z-30 w-32 h-32 md:w-40 md:h-40 bg-primary/95 rounded-full flex items-center justify-center -rotate-12 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="curve" fill="transparent" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[10px] font-bold fill-white tracking-widest uppercase">
                  <textPath href="#curve" startOffset="0%">About Us - About Us - About Us -</textPath>
                </text>
              </svg>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Top landscape image */}
            <div className="absolute top-0 right-10 w-[80%] h-[70%] z-10 shadow-lg">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/aboutus1.png" 
                alt="Landscape" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Bottom right highway image */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[60%] z-20 shadow-[0_10px_40px_rgba(0,0,0,0.2)] bg-white p-2">
              <Image 
                src="https://emslindia.com/wp-content/uploads/2024/04/aboutus2.png" 
                alt="Highway" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Text on Right */}
          <div className="flex flex-col pr-0 md:pr-10">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">SHORT BRIEF ABOUT US</h4>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-primary leading-[1.1] mb-6">
              Elsamex - We are maintaining The Road to the Future!
            </h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">
              Elsamex Maintenance Service Limited (EMSL) is a major catalyst in the road operation and maintenance industry in India - which includes operation, maintenance and tolling of roads, highways and civil infrastructures, being a pioneer in Micro Surfacing – which is preventive maintenance technology.
            </p>
            <p className="text-gray-900 font-bold mb-4">It majorly provides seven essential services :</p>
            <ul className="text-gray-600 space-y-2 text-[15px] font-medium ml-4 list-[circle]">
              <li>Asset Maintenance</li>
              <li>Incident management</li>
              <li>Toll Operations</li>
              <li>IT & systems</li>
              <li>Project Management</li>
              <li>Process support - Contracts & Procurement</li>
              <li>Pavement upgradation – Microsurfacing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 md:px-[10%] w-full relative overflow-hidden">
        {/* Topographic map left background effect */}
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-[120%] opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 0% 100%, transparent 0%, transparent 20%, #ccc 21%, transparent 22%, transparent 40%, #ccc 41%, transparent 42%, transparent 60%, #ccc 61%, transparent 62%, transparent 80%, #ccc 81%, transparent 82%)`,
            backgroundSize: `500px 500px`,
            backgroundPosition: `bottom left`
          }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text on Left */}
          <div className="flex flex-col">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WHO WE ARE</h4>
            <h2 className="text-4xl md:text-[54px] font-extrabold text-primary leading-[1.1] mb-6">
              Leader in infrastructure O&M and intelligent transportation systems
            </h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">
              Elsamex Maintenance Services Limited is a wholly owned subsidiary of Infrastructure Leasing and Financial Services Limited(IL&FS) – An infrastructure development firm serving over a decade.
            </p>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              EMSL is a premier contractor specializing in the operations and maintenance of road infrastructure, proudly serving since 2013. With a rich legacy spanning over a decade, we have established ourselves as an industry leader, successfully executing projects across multiple sectors both nationally and internationally.
            </p>
          </div>
          
          {/* Image Grid on Right */}
          <div className="relative w-full h-[550px]">
            {/* Top left (small width, high height) */}
            <div className="absolute top-10 left-0 w-[45%] h-[45%] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-20">
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/who-we-are2.png" fill className="object-cover" alt="Ticket" />
            </div>
            {/* Top right (wide width) */}
            <div className="absolute top-10 right-0 w-[50%] h-[45%] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-10">
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/who-we-are1.png" fill className="object-cover" alt="Police" />
            </div>
            {/* Bottom center */}
            <div className="absolute bottom-10 right-10 w-[55%] h-[45%] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-30">
              <Image src="https://emslindia.com/wp-content/uploads/2024/04/who-we-are3.png" fill className="object-cover" alt="Camel" />
            </div>
          </div>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="py-24 w-full bg-white relative">
        <div className="text-center mb-16 px-4">
          <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">WORK WITH US / EXPLORE TENDERS</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight max-w-4xl mx-auto">
            EMSL’s Approach to Road Operations and Maintenance at a Glance
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Asset maintenance <br /> Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Routine Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Periodic Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Preventive Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Emergency Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Horticulture Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Structure Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Electrical Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Tunnel Maintenance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Process Consulting</li>
            </ul>
          </div>

          {/* Card 2 -> Incident with Hover state (Secondary Color Title) */}
          <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full border-t border-t-transparent hover:border-t-secondary transition-all group">
            <h3 className="text-xl font-bold text-secondary border-b pb-4 mb-6 leading-tight">Incident Management <br /> Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Road Patrolling and Surveillance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Ambulance Services</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Provision of Tow Away Cranes</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Basic Automobile Assistance</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Identification & Removal of Encroachment</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Road Safety Works</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Toll & Checkpost <br /> Operation Services</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Manpower Supply for Tolling and Checkpost Operations</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Management of Toll Collection, Verification, Deposition, Reconciliation etc.</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Business Analytics</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Traffic Surveys</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Process Consulting</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
            <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Intelligent Transportations <br /> Systems</h3>
            <ul className="text-gray-400 space-y-3 text-[15px]">
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Toll Management Systems</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Advanced Traffic Management Systems</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Toll Plaza Electrical Works and Highway Lighting</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Onsite and remote support for the TMS infrastructure on a 24 x 7 x 365 basis</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Tunnel monitoring and Control systems</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Communication and Surveillance systems</li>
              <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Process Consulting</li>
            </ul>
          </div>

          {/* Additional Cards Row 2 (Project Management and Contracts) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4 lg:ml-auto lg:-mt-0 mt-6 lg:justify-end">
             {/* Card 5 */}
            <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Project Management <br /> Services</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Preparation and tracking of Monthly Maintenance plans</li>
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Monitoring & Supervision of Major Maintenance works and overlay</li>
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>MIS</li>
              </ul>
            </div>

             {/* Card 6 */}
             <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Process support - <br /> Contracts & Procurement</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Managing / Administration of CA on behalf of Concessionaire</li>
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Contract Management & Contractual correspondence</li>
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Procurement of product and services meeting technical requirements</li>
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Assistance in Claim management</li>
              </ul>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded h-full">
              <h3 className="text-xl font-bold text-black border-b pb-4 mb-6 leading-tight">Pavement upgradation <br /> - Microsurfacing</h3>
              <ul className="text-gray-400 space-y-3 text-[15px]">
                <li><span className="mr-2 text-gray-300 pointer-events-none">•</span>Pioneer in country with cumulative experience of over 50 lakh sqm till date</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* The Commanders Section */}
      <section className="py-24 px-4 w-full bg-white relative overflow-hidden">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-16 relative z-10">The Commanders at the Wheel</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          
          {/* Commander 1 */}
          <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-6 rounded text-center">
            <div className="relative w-full aspect-[4/5] bg-gray-50 mb-6 overflow-hidden">
              <Image
                src="https://emslindia.com/wp-content/uploads/2024/04/commanders2.png"
                alt="Danny Samuel"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Danny Samuel</h3>
            <p className="text-gray-500 text-[15px]">Group CEO</p>
          </div>

          {/* Commander 2 */}
          <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-6 rounded text-center">
            <div className="relative w-full aspect-[4/5] bg-gray-50 mb-6 overflow-hidden">
              <Image
                src="https://emslindia.com/wp-content/uploads/2024/04/commanders1.png"
                alt="K R Khan"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">K R Khan</h3>
            <p className="text-gray-500 text-[15px]">Business Head</p>
          </div>

          {/* Commander 3 */}
          <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-6 rounded text-center">
            <div className="relative w-full aspect-[4/5] bg-gray-50 mb-6 overflow-hidden">
              <Image
                src="https://emslindia.com/wp-content/uploads/2025/12/Rajnish-Saxena-1.png"
                alt="Rajnish Saxena"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Rajnish Saxena</h3>
            <p className="text-gray-500 text-[15px]">Chief Operating Officer</p>
          </div>

        </div>
      </section>

    </main>
  );
}
