
function Home({path}) {
    return (            
        <main className="container mx-auto px-4">
        <section className="mx-auto my-4 sm:my-6 lg:my-8 p-4 sm:p-6 bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-purple-600/20 backdrop-blur-sm text-white rounded-lg shadow-md max-w-full sm:max-w-2xl lg:max-w-4xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-shadow-lg">Welcome to Heroes</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center sm:text-left text-gray-100">Explore our range of products and services designed to empower you.</p>
            <section className="text-center">
                <button className="bg-white/90 text-blue-600 hover:bg-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg">
                    <i className="fa-solid fa-rocket mr-2"></i>
                    Explore Now
                </button>
            </section>
        </section>
        <section className="mx-auto my-4 p-4 bg-cyan-600 rounded-lg shadow-lg max-w-full border border-white">
            <article>
                <h2 className="text-white text-2xl mb-4 font-bold">
                    Watch Our Promotional Video
                </h2>
                <figure className="w-full">
                    <video src={path} controls>
                        Your browser does not support the video tag.
                    </video>
                </figure>
            </article>
        </section>
        </main>
    )
}

export default Home;