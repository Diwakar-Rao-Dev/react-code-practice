import { ChartNoAxesColumnIncreasing, Monitor, Settings, Smartphone } from "lucide-react"


const OurServices = () => {
  return (
    <>
    <h2 className="font-bold text-3xl ml-150 p-5">Our Services</h2>
    <p className="ml-100 pb-5">We provide complete digital solution to help your business grow online</p>

    <div className="flex justify-around p-10">
        <div className="h-50 w-60 shadow-2xl text-center pt-10 rounded-2xl">
            <div><Monitor className="bg-blue-600 h-10 w-10 rounded-4xl text-amber-50 ml-24"/></div>
            <b className="pt-2">Website Development</b>
            <p className="pt-2">Modern,responsive and <br /> SEO-friendly website</p>
        </div>
        <div className="h-50 w-60 shadow-2xl text-center pt-10 rounded-2xl">
            <div><Smartphone className="bg-green-500 rounded-4xl h-10 w-10 text-amber-50 ml-24"/></div>
            <b className="pt-5">App Devlopment</b>
            <p className="pt-2">Android & iOS app <br /> devlopment for your ideas.</p>
        </div>
        <div className="h-50 w-60 shadow-2xl text-center pt-10 rounded-2xl">
            <div><Settings className="bg-orange-500 rounded-4xl h-10 w-10 text-amber-50 ml-23"/></div>
            <b className="pt-5">Software Devlopment</b>
            <p className="pt-2">Coustom software to simplify <br /> your business.</p>
        </div>
        <div className="h-50 w-60 shadow-2xl text-center pt-10 rounded-2xl">
            <div><ChartNoAxesColumnIncreasing className="bg-purple-500 rounded-4xl h-10 w-10 text-amber-50 ml-24"/></div>
            <b className="pt-5">Digital Marketing</b>
            <p className="pt-2">Get more traffic, leads and <br /> grow your business online</p>
        </div>
    </div>

    </>
  )
}

export default OurServices