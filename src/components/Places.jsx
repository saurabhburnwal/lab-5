const continents = [
    {
        id: 1,
        name: "North America",
        icon: "fa-solid fa-flag-usa",
        headerIcon: "fa-solid fa-mountain",
        description: "From the Arctic wilderness of Canada to the tropical paradises of the Caribbean, North America offers diverse landscapes where modern heroes protect bustling cities and pristine wilderness.",
        countries: ["USA", "Canada", "Mexico", "+20 more"],
        countryColors: ["bg-blue-500/30 text-blue-200", "bg-red-500/30 text-red-200", "bg-green-500/30 text-green-200", "bg-yellow-500/30 text-yellow-200"],
        population: "579M People",
        totalCountries: "23 Countries",
        gradient: "from-blue-500/25 via-indigo-500/25 to-purple-600/25",
        headerGradient: "from-blue-500 to-indigo-700"
    },
    {
        id: 2,
        name: "South America",
        icon: "fa-solid fa-leaf",
        headerIcon: "fa-solid fa-tree",
        description: "Home to the Amazon rainforest and Andes mountains, South America is where nature's guardians protect Earth's lungs and ancient civilizations reveal their secrets to worthy heroes.",
        countries: ["Brazil", "Argentina", "Peru", "+9 more"],
        countryColors: ["bg-yellow-500/30 text-yellow-200", "bg-blue-500/30 text-blue-200", "bg-red-500/30 text-red-200", "bg-green-500/30 text-green-200"],
        population: "434M People",
        totalCountries: "12 Countries",
        gradient: "from-green-500/25 via-emerald-500/25 to-teal-600/25",
        headerGradient: "from-green-500 to-emerald-700"
    },
    {
        id: 3,
        name: "Europe",
        icon: "fa-solid fa-crown",
        headerIcon: "fa-solid fa-chess-rook",
        description: "A continent rich in history and culture, where medieval castles meet cutting-edge technology. European heroes defend both ancient traditions and modern innovations.",
        countries: ["Germany", "France", "Italy", "+41 more"],
        countryColors: ["bg-red-500/30 text-red-200", "bg-blue-500/30 text-blue-200", "bg-green-500/30 text-green-200", "bg-purple-500/30 text-purple-200"],
        population: "748M People",
        totalCountries: "44 Countries",
        gradient: "from-purple-500/25 via-violet-500/25 to-indigo-600/25",
        headerGradient: "from-purple-500 to-indigo-700"
    },
    {
        id: 4,
        name: "Asia",
        icon: "fa-solid fa-yin-yang",
        headerIcon: "fa-solid fa-pagoda",
        description: "The world's largest continent, where ancient wisdom meets futuristic innovation. Home to legendary warriors, spiritual masters, and technological pioneers.",
        countries: ["China", "India", "Japan", "+45 more"],
        countryColors: ["bg-red-500/30 text-red-200", "bg-orange-500/30 text-orange-200", "bg-yellow-500/30 text-yellow-200", "bg-pink-500/30 text-pink-200"],
        population: "4.6B People",
        totalCountries: "48 Countries",
        gradient: "from-red-500/25 via-orange-500/25 to-yellow-600/25",
        headerGradient: "from-red-500 to-orange-700"
    },
    {
        id: 5,
        name: "Africa",
        icon: "fa-solid fa-elephant",
        headerIcon: "fa-solid fa-sun",
        description: "The cradle of humanity, where wildlife protectors guard vast savannas and ancient guardians protect humanity's origins. A continent of incredible diversity and untold stories.",
        countries: ["Nigeria", "South Africa", "Egypt", "+51 more"],
        countryColors: ["bg-green-500/30 text-green-200", "bg-yellow-500/30 text-yellow-200", "bg-red-500/30 text-red-200", "bg-orange-500/30 text-orange-200"],
        population: "1.4B People",
        totalCountries: "54 Countries",
        gradient: "from-amber-500/25 via-yellow-500/25 to-orange-600/25",
        headerGradient: "from-amber-500 to-orange-700"
    },
    {
        id: 6,
        name: "Oceania",
        icon: "fa-solid fa-island-tropical",
        headerIcon: "fa-solid fa-water",
        description: "A realm of islands and oceanic wonders, where marine guardians protect coral reefs and island heroes preserve unique ecosystems across the vast Pacific.",
        countries: ["Australia", "New Zealand", "Fiji", "+11 more"],
        countryColors: ["bg-blue-500/30 text-blue-200", "bg-cyan-500/30 text-cyan-200", "bg-teal-500/30 text-teal-200", "bg-indigo-500/30 text-indigo-200"],
        population: "45M People",
        totalCountries: "14 Countries",
        gradient: "from-cyan-500/25 via-teal-500/25 to-blue-600/25",
        headerGradient: "from-cyan-500 to-blue-700"
    }
];

const ContinentCard = ({ continent }) => {
    return (
        <article className={`bg-gradient-to-br ${continent.gradient} backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 transform hover:scale-105 transition duration-300`}>
            <figure className={`h-48 sm:h-56 bg-gradient-to-br ${continent.headerGradient} flex items-center justify-center relative`}>
                <i className={`${continent.headerIcon} text-6xl text-white`}></i>
                <section className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">{continent.totalCountries}</span>
                </section>
            </figure>
            <section className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    <i className={`${continent.icon} mr-2`}></i>{continent.name}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mb-4">{continent.description}</p>
                <section className="flex flex-wrap gap-2 mb-4">
                    {continent.countries.map((country, index) => (
                        <span key={index} className={`${continent.countryColors[index]} px-2 py-1 rounded-full text-xs`}>
                            {country}
                        </span>
                    ))}
                </section>
                <section className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                        <i className="fa-solid fa-users mr-1"></i>{continent.population}
                    </span>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition duration-300 text-sm">
                        Explore <i className="fa-solid fa-arrow-right ml-1"></i>
                    </button>
                </section>
            </section>
        </article>
    );
};

const AntarcticaCard = () => {
    return (
        <section className="mb-12">
            <article className="bg-gradient-to-br from-gray-400/25 via-blue-400/25 to-white/25 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 max-w-4xl mx-auto">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <figure className="h-48 lg:h-full bg-gradient-to-br from-gray-300 to-blue-500 flex items-center justify-center relative">
                        <i className="fa-solid fa-snowflake text-6xl text-white"></i>
                        <section className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-white text-sm font-semibold">Research Stations</span>
                        </section>
                    </figure>
                    <section className="p-6 lg:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            <i className="fa-solid fa-icicles mr-2"></i>Antarctica
                        </h3>
                        <p className="text-gray-200 text-base mb-4">The frozen frontier where climate guardians and researchers protect Earth's climate secrets. A continent dedicated to peace and scientific discovery, where international heroes collaborate against extreme conditions.</p>
                        <section className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs">Scientific Research</span>
                            <span className="bg-white/30 text-white px-2 py-1 rounded-full text-xs">Climate Monitoring</span>
                            <span className="bg-gray-500/30 text-gray-200 px-2 py-1 rounded-full text-xs">Conservation</span>
                        </section>
                        <section className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">
                                <i className="fa-solid fa-thermometer-empty mr-1"></i>-89°C Record
                            </span>
                            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition duration-300 text-sm">
                                Discover <i className="fa-solid fa-arrow-right ml-1"></i>
                            </button>
                        </section>
                    </section>
                </section>
            </article>
        </section>
    );
};

function Places() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <section className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    <i className="fa-solid fa-globe mr-3"></i>
                    Explore the Seven Continents
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto">
                    Embark on heroic journeys across all seven continents. From ancient mysteries to modern marvels, discover where legends are born and heroes rise to meet extraordinary challenges.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                {continents.map((continent) => (
                    <ContinentCard key={continent.id} continent={continent} />
                ))}
            </section>

            <AntarcticaCard />

            <section className="text-center">
                <article className="bg-gradient-to-r from-blue-500/25 via-pink-500/25 to-purple-600/25 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 max-w-4xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Begin Your Global Adventure?</h3>
                    <p className="text-gray-200 text-base sm:text-lg mb-6">Choose your continent and discover where your heroic journey will take you. Each destination offers unique challenges, breathtaking landscapes, and opportunities to make a difference.</p>
                    <section className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white/90 text-blue-600 hover:bg-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg">
                            <i className="fa-solid fa-compass mr-2"></i>
                            Start Exploring
                        </button>
                        <button className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition duration-300 text-sm sm:text-base">
                            <i className="fa-solid fa-map mr-2"></i>
                            View World Map
                        </button>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default Places;
