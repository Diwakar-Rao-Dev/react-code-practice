import RecentImage1 from "../assets/fruit.jpg"
import RecentImage2 from "../assets/gym.jpg"
import RecentImage3 from "../assets/hero.png"

const OurRecentProject = () => {
  return (
    <>
    <h2 className="text-3xl font-bold p-5 ml-120">Our Recent Projects</h2>
    <p className="pb-4 ml-95 text-xl">Here are some of the websites and applications we have worked on</p>

    <div className="flex justify-around p-5">
        <div>
            <img className="h-50 w-100 rounded-xl" src={RecentImage1} alt="Project 1" />
            <p className="pl-30 font-bold">Restaurant Website</p>
        </div>    
        <div>
            <img className="h-50 w-100 rounded-xl" src={RecentImage2} alt="Project 2" />
            <p className="pl-25 font-bold">GYM Management Software</p>
        </div>    
        <div>
            <img className="h-50 w-100 rounded-xl" src={RecentImage3} alt="Project 3" />
            <p className="pl-30 font-bold">E-Commerce Website</p>
        </div>    
    </div>    
    </>
  )
}

export default OurRecentProject

