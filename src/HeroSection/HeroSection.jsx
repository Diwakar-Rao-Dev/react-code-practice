import HeroImage from "../assets/laptop edit.png"
import { Rocket, ShieldCheck, UserRoundGroup } from "lucide-react"


const HeroSection = () => {
    return (
        <>
            <div className="bg-green-100 pl-10 pt-5">
                <div className="flex justify-around">
                    <div>
                        <p className="font-bold text-mauve-500 p-1">YOUR DIGITAL PARTNER</p>
                        <h1 className="font-bold text-6xl p-1">We Create <br /> <span className="text-blue-600"> Websites & Apps </span> </h1>
                        <h2 className="font-bold text-4xl p-1">That Grow Your Business</h2>
                        <p className="w-130 text-xl p-1">We help businesses with modern website, mobile apps, software solutions and digital marketing to build a stornger online presence.</p>
                        <div className="flex gap-7 p-5">
                            <button className="bg-blue-700 text-amber-50 h-10 w-35 rounded-xl">Get Started</button>
                            <button className="text-blue-700 border-2 h-10 w-35 rounded-xl ">Our Services</button>
                        </div>
                    </div>

                    <div>
                        <img className="w-80 h-80 pt-15" src={HeroImage} alt="Hero" />
                    </div>
                </div>

                <div className="flex justify-around w-200 p-5">

                    <div className="flex">
                        <Rocket className="pt-2 text-blue-600"/>
                        <div>
                        <b>Fast Delivery</b>
                        <p>On-Time Project Delivery</p>
                        </div>
                    </div>

                    <div className="flex">
                        <ShieldCheck className="pt-2 text-blue-600"/>
                        <div>
                        <b>Quality Work</b>
                        <p>Clean & Modern Solutions</p>
                        </div>
                    </div>

                    <div className="flex">
                        <UserRoundGroup className="pt-2 text-blue-600"/>
                        <div>
                        <b>Ongoning Support</b>
                        <p>We're Always Here</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection