import create from '../images/create.jpg'
import discover from '../images/discover.jpg'
import connect from '../images/connect.jpg'
import build from '../images/build.jpg'

const Highlights = () => {
    return (
        <div className="text-center bg-gray-600 text-white p-1">
            <div className="my-3">
                <h1 className="text-3xl">Highlights</h1>
                <p className="p-2 text-xl w-3xl  mx-auto">Create your community, explore what excites you, connect with people who share your passion, and build something amazing together.</p>
            </div>
            <div className="flex  flex-wrap justify-center items-center gap-8 w-full min-h-[50vh] border-2 border-white rounded-3xl my-2 p-8 transition-all duration-500 ease-in-out">

                <div className="w-full sm:w-[40%] lg:w-[20%]">
                    <img
                        src={create}
                        alt="Create"
                        className="w-full h-full object-center  rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className='text-xl font-medium tracking-wider mt-2 '>Create</h1>
                </div>

                <div className="w-full sm:w-[40%] lg:w-[20%]">
                    <img
                        src={discover}
                        alt="Discover"
                        className="w-full h-full object-center rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className='text-xl font-medium tracking-wider mt-2'>Explore</h1>
                </div>

                <div className="w-full sm:w-[40%] lg:w-[20%] ">
                    <img
                        src={connect}
                        alt="Connect"
                        className="w-full h-full object-center rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className='text-xl font-medium tracking-wider mt-2'>Connect</h1>
                </div>

                <div className="w-full sm:w-[40%] lg:w-[20%]">
                    <img
                        src={build}
                        alt="Build"
                        className="w-full h-full object-center rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <h1 className='text-xl font-medium tracking-wider mt-2'>build</h1>
                </div>

            </div>  


        </div>
    )
}
export default Highlights