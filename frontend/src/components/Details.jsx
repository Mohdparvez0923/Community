

const Details = () => {
    return (
        <div>
            {/* -----------------------------------------About me ------------------------------------------------ */}
            <div className=" max-w-[80%] mx-auto border-2 border-gray-600  rounded-2xl p-3  text-white text-lg shadow-2xl">
                <h1>About me</h1>
                <div className="border-2 rounded-lg p-2 my-2 bg-gray-700/70 border-gray-500">
                    <p className="text-medium m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quos voluptate hic iure esse pariatur nihil natus, eos, eum corporis voluptatum a maxime?</p>
                </div>
            </div>

            {/* -----------------------------------------Skills ---------------------------------------------------- */}
            <div className=" max-w-[80%] mx-auto border-2 border-gray-600  rounded-2xl p-3 mt-5 text-white text-2xl shadow-2xl">
                <h1>Skills</h1>
                <div className="border-2 gap-2 flex items-center rounded-lg p-2 my-2 bg-gray-700/70 border-gray-500">
                    <h1 className="text-lg m-2">Node js</h1>
                    <h1 className="text-sm">3yrs</h1>
                </div>
                <div className="border-2 gap-2 flex items-center rounded-lg p-2 my-2 bg-gray-700/70 border-gray-500">
                    <h1 className="text-lg m-2">React js</h1>
                    <h1 className="text-sm">2yrs</h1>
                </div>
            </div>

            {/* -------------------------------------------Exeprience ------------------------------------------- */}
            <div className=" max-w-[80%] mx-auto border-2 border-gray-600  rounded-2xl p-3  mt-5 text-white text-2xl shadow-2xl">
                <h1>Experience</h1>
                <div className="border-2 rounded-lg p-2 my-2 bg-gray-700/70 border-gray-500">
                    <h1 className="text-lg mx-2">Senior frontend developer at Microsoft</h1>
                    <h1 className="text-sm mx-2">developing user-friendly websites with efficient and clean code </h1>
                </div>
            </div>

            {/* -------------------------------------------Education -------------------------------------------- */}
            <div className=" max-w-[80%] mx-auto border-2  border-gray-600  rounded-2xl p-3  mt-5 text-white text-2xl shadow-2xl">
                <h1>Education</h1>
                <div className="flex my-2 items-center gap-5">
                    <img src="https://i.pinimg.com/736x/44/bd/28/44bd283ec63956d10ff8fbe4859ba3b6.jpg" alt="EDU"
                        className="w-20 h-20 object-center" />
                    <div>
                        <h1 className="text-xl font-medium">Delhi university</h1>
                        <h2 className="text-lg">Bachlor's of computer application</h2>
                        <h3 className="text-sm">2021-2024</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Details