import { Mail, MapPin, PhoneIncoming, Truck } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className="bg-black text-white">
    <header className="flex justify-around p-5">
        <div>
            <h1 className=" text-3xl">💫TechNova</h1>
        </div>
    <nav>
        <ul className="flex gap-5">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>  

    </nav>  
        <div className="flex gap-5">
            <PhoneIncoming/>
            <Truck/>
        </div>
    </header>
    <div className="flex justify-around p-4">
        <div className="flex gap-2">
            <Mail/>
            <p>info@yourwebsite.com</p>
        </div>
        <div className="flex gap-2">
            <PhoneIncoming/>
            <p>+91 1234567890</p>
        </div>
        <div className="flex gap-2">
            <MapPin/>
            <p>123 Your Street, Your City</p>
        </div>
    </div>
    </div> 
    </>
  )
}

export default Footer