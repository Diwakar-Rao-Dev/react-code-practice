import AboutImage from "../assets/laptop.jpg"

const AboutUs = () => {
    return (
        <>
        <div className=" flex p-14 bg-gray-300 h-100">
            <div classNmae="mt-20">
                <img className="rounded-xl h-70 w-180" src={AboutImage} alt="" />
            </div>
            <div className="pl-10 pb-10">
                <h2 className="text-4xl font-bold">About Us</h2>
                <p className="p-2 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis error voluptate, dolore, delectus omnis illo natus, ad dignissimos ab libero velit quos aperiam. Officiis reiciendis hic eius, voluptatem harum animi.</p>
                <div className="flex justify-around p-5 mt-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex p-3">
                        <svg aria-hidden="true" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="10" cy="7" r="4" />
                            <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <div>
                            <b>Client Focused</b>
                            <p>Your Goals, Our Priority</p>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex p-3">
                        <svg aria-hidden="true" className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18h6M10 22h4M8 14.5a7 7 0 1 1 8 0c-.9.6-1.5 1.5-1.5 2.5h-5c0-1-.6-1.9-1.5-2.5Z" />
                            <path d="M12 2v2M4.93 4.93l1.42 1.42M19.07 4.93l-1.42 1.42" />
                        </svg>
                        <div>
                        <b>Creative Ideas</b>
                        <p>Fresh ideas for Growth</p>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex p-3">
                        <svg aria-hidden="true" className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 13v-2a9 9 0 0 1 18 0v2" />
                            <path d="M5 13h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-2a2 2 0 0 1 2-2ZM19 13h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <div>
                        <b>Reliable Support</b>
                        <p>Long-Term Partnership</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs