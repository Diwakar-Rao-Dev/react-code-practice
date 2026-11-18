import ClientImage from "../assets/dk.jpeg"

const OurClient = () => {
  return (
    <>
    <div className="p-5 bg-blue-200">
    <h2 className="text-3xl font-bold ml-115 pb-2">What Our Clients Say</h2>
        <div className="flex h-25 w-200 bg-amber-50 p-2 ml-65 rounded-xl">
            <img className="h-20 w-20 rounded-4xl" src={ClientImage} alt="Client" />
            <div className="p-4 pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta repudiandae ab nulla maiores sit nemo cum facilis placeat. Temporibus itaque hic labore natus sunt expedita quae quasi praesentium quam!</div>
        </div>
    </div>    
    </>
  )
}

export default OurClient