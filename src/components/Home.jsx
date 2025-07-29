import videoFile from '../assets/promotion_video.webm';
import audioFile from '../assets/Double-Rainbow-chosic.com_.mp3';
import subtitleFile from '../assets/subtitle.vtt';
import { useState } from 'react';

function Home() {
    const [missionText, setMissionText] = useState('Click the button below to discover your next heroic mission!');

    const generateResponse = () => {
        setMissionText(
            <>
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                Generating your heroic mission...
            </>
        );
        
        fetch("https://apis.scrimba.com/bored/api/activity")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMissionText(
                    <>
                        <i className="fa-solid fa-star mr-2 text-yellow-400"></i>
                        {data.activity}
                    </>
                );
            })
            .catch(error => {
                console.error('Error:', error);
                setMissionText(
                    <>
                        <i className="fa-solid fa-triangle-exclamation mr-2 text-red-400"></i>
                        Unable to fetch mission. Try again later!
                    </>
                );
            });
    };

    return (            
        <main className="container mx-auto px-4">
            <section className="mx-auto my-4 p-4 bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-purple-600/20 backdrop-blur-sm text-white rounded-lg shadow-md max-w-full border border-white/20">
                <h2 className="text-2xl font-bold text-center mb-4 text-shadow-lg">Welcome to Heroes</h2>
                <p className="text-base mb-4 text-center text-gray-100">Explore our range of products and services designed to empower you.</p>
                <section className="text-center">
                    <button className="bg-white/90 text-blue-600 hover:bg-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-base shadow-lg">
                        <i className="fa-solid fa-rocket mr-2"></i>
                        Explore Now
                    </button>
                </section>
            </section>

            <section className="grid grid-cols-1 gap-4 my-4">
                <article className="p-4 bg-gradient-to-r from-blue-400/25 via-pink-400/25 to-purple-500/25 backdrop-blur-sm text-white rounded-lg shadow-md border border-white/20">
                    <h2 className="text-xl font-bold text-center mb-4 text-shadow-lg">Watch Our Promotional Video</h2>
                    <figure className="flex justify-center">
                        <video controls controlsList="nodownload" className="w-full rounded-lg shadow-lg">
                            <source src={videoFile} type="video/webm" />
                            <track kind="subtitles" src={subtitleFile} srcLang="en" label="English" />
                            Your browser does not support the video tag.
                        </video>
                    </figure>
                    <p className="text-center mt-3 text-sm text-gray-100">Learn more about our heroes and their incredible journeys.</p>
                </article>
                
                <article className="p-4 bg-gradient-to-l from-blue-500/25 via-pink-500/25 to-purple-600/25 backdrop-blur-sm text-white rounded-lg shadow-md border border-white/20">
                    <h2 className="text-xl font-bold text-center mb-4 text-shadow-lg">Relaxing Background Music</h2>
                    <p className="text-center mb-4 text-base text-gray-100">Enjoy some soothing instrumental music while browsing our site</p>
                    <figure className="flex justify-center">
                        <audio controls controlsList="nodownload" className="w-full">
                            <source src={audioFile} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </figure>
                    <p className="text-center text-gray-100 text-xs mt-3">
                        <i className="fa-solid fa-music mr-2"></i>
                        Click play to enjoy relaxing background music
                    </p>
                </article>
                
                <article className="p-4 bg-gradient-to-br from-yellow-500/25 via-orange-500/25 to-red-600/25 backdrop-blur-sm text-white rounded-lg shadow-md border border-white/20">
                    <h2 className="text-xl font-bold text-center mb-4 text-shadow-lg">
                        <i className="fa-solid fa-lightbulb mr-2"></i>
                        Hero Activity Generator
                    </h2>
                    <p className="text-center mb-4 text-base text-gray-100">Need inspiration for your next heroic adventure? Get a random activity suggestion!</p>
                    
                    <section className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20">
                        <figure className="text-center">
                            <h3 className="text-lg font-semibold mb-3 text-white">{missionText}</h3>
                        </figure>
                    </section>
                    
                    <section className="text-center">
                        <button onClick={generateResponse} 
                            className="bg-white/90 text-orange-600 hover:bg-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-base shadow-lg">
                            <i className="fa-solid fa-dice mr-2"></i>
                            Generate Hero Mission
                        </button>
                    </section>
                    
                    <p className="text-center text-gray-100 text-xs mt-3">
                        <i className="fa-solid fa-shield-halved mr-2"></i>
                        Every hero needs a quest - discover yours!
                    </p>
                </article>
            </section>            
        </main>
    )
}

export default Home;
