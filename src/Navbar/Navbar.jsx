import LogoImage from "../assets/amd.png"

const Navbar = () => {
  return (
    <>
    <header className="flex justify-around p-5">
        <div>
            <h1 className="flex gap-2 font-bold text-3xl"> <img src={LogoImage} alt="Logo" className="h-8 w-8" /> <div> TechNova</div>
            </h1>
        </div>
    <nav>
        <ul className="flex gap-5 font-bold">
            <li><a href="../HeroSection.jsx">Home</a></li>
            <li><a href="../OurServices.jsx">Services</a></li>
            <li><a href="../About.jsx">About</a></li>
            <li><a href="../Project.jsx">Project</a></li>
            <li><a href="../Contact.jsx">Contact</a></li>
        </ul>  

    </nav>  
        <button className="bg-blue-700 text-amber-50 rounded-2xl p-2"><a href="#">Get a Quote</a></button>
    </header> 
    </>
  )
}

export default Navbar