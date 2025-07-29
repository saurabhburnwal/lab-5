function Gallery() {
    const places = [
        {
            id: 1,
            name: "New York City",
            description: "The city that never sleeps, where heroes protect millions from towering skyscrapers.",
            icon: "fa-solid fa-building",
            rating: 4.9,
            gradient: "from-blue-500/20 via-pink-500/20 to-purple-600/20",
            iconGradient: "from-blue-400 to-blue-600"
        },
        {
            id: 2,
            name: "Paris",
            description: "The city of lights and love, where elegance meets heroic adventures along the Seine.",
            icon: "fa-solid fa-tower-observation",
            rating: 4.8,
            gradient: "from-green-500/20 via-teal-500/20 to-blue-600/20",
            iconGradient: "from-green-400 to-teal-600"
        },
        {
            id: 3,
            name: "Tokyo",
            description: "Where ancient traditions meet futuristic technology, home to legendary warriors.",
            icon: "fa-solid fa-torii-gate",
            rating: 4.9,
            gradient: "from-red-500/20 via-orange-500/20 to-yellow-600/20",
            iconGradient: "from-red-400 to-orange-600"
        },
        {
            id: 4,
            name: "London",
            description: "Historic capital where royal guardians protect ancient secrets and modern mysteries.",
            icon: "fa-solid fa-landmark",
            rating: 4.7,
            gradient: "from-purple-500/20 via-pink-500/20 to-red-600/20",
            iconGradient: "from-purple-400 to-pink-600"
        },
        {
            id: 5,
            name: "Sydney",
            description: "Harbor city where oceanic heroes guard the southern hemisphere's crown jewel.",
            icon: "fa-solid fa-water",
            rating: 4.8,
            gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-600/20",
            iconGradient: "from-cyan-400 to-blue-600"
        },
        {
            id: 6,
            name: "Rio de Janeiro",
            description: "Vibrant beach metropolis where carnival spirits and mountain guardians unite.",
            icon: "fa-solid fa-mountain-sun",
            rating: 4.6,
            gradient: "from-amber-500/20 via-orange-500/20 to-red-600/20",
            iconGradient: "from-amber-400 to-red-600"
        }
    ];

    const PlaceCard = ({ place }) => {
        const renderStars = (rating) => {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            
            return (
                <>
                    {Array.from({ length: fullStars }, (_, index) => (
                        <i key={index} className="fa-solid fa-star mr-1"></i>
                    ))}
                    {hasHalfStar ? (
                        <i key="half" className="fa-regular fa-star mr-2"></i>
                    ) : (
                        fullStars < 5 && <i key="last" className="fa-solid fa-star mr-2"></i>
                    )}
                </>
            );
        };

        return (
            <article className={`bg-gradient-to-br ${place.gradient} backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 transform hover:scale-105 transition duration-300`}>
                <figure className={`h-48 bg-gradient-to-br ${place.iconGradient} flex items-center justify-center`}>
                    <i className={`${place.icon} text-6xl text-white`}></i>
                </figure>
                <section className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{place.name}</h3>
                    <p className="text-gray-200 text-sm mb-3">{place.description}</p>
                    <section className="flex items-center text-yellow-400 text-sm">
                        {renderStars(place.rating)}
                        <span className="text-gray-300">{place.rating}/5</span>
                    </section>
                </section>
            </article>
        );
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="text-center mb-8 bg-gradient-to-r from-blue-500/25 via-pink-500/25 to-purple-600/25 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                    <i className="fa-solid fa-camera mr-3"></i>
                    Discover Amazing Cities
                </h2>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                    Explore breathtaking destinations where heroes have left their mark. Each city tells a unique story of adventure, culture, and wonder.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map(place => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </section>

            <section className="text-center mt-12">
                <article className="bg-gradient-to-r from-blue-500/25 via-pink-500/25 to-purple-600/25 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Next Adventure?</h3>
                    <p className="text-gray-200 text-base mb-6">Join the ranks of heroes who have explored these magnificent cities. Each destination offers unique challenges and unforgettable experiences.</p>
                    <button className="bg-white/90 text-blue-600 hover:bg-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-base shadow-lg">
                        <i className="fa-solid fa-plane mr-2"></i>
                        Plan Your Journey
                    </button>
                </article>
            </section>
        </main>
    )
}

export default Gallery;
