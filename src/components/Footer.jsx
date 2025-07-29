function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <section className="max-w-6xl mx-auto px-4">
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <article className="text-center">
                        <i className="fa-solid fa-location-dot text-4xl mb-3 text-blue-400 block"></i>
                        <h3 className="text-base font-semibold mb-1">Our Location</h3>
                        <p className="text-gray-300 text-sm">Find us anywhere in the world</p>
                    </article>
                    
                    <article className="text-center">
                        <i className="fa-solid fa-globe text-4xl mb-3 text-green-400 block"></i>
                        <h3 className="text-base font-semibold mb-1">Global Reach</h3>
                        <p className="text-gray-300 text-sm">Heroes across the globe</p>
                    </article>
                    
                    <article className="text-center">
                        <i className="fa-solid fa-star text-4xl mb-3 text-yellow-400 block"></i>
                        <h3 className="text-base font-semibold mb-1">Heroes Badge</h3>
                        <p className="text-gray-300 text-sm">Recognize true heroes</p>
                    </article>
                </section>
                
                <aside className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-gray-400 text-xs">&copy; 2025 Heroes. All rights reserved. | Empowering heroes worldwide</p>
                </aside>
            </section>
        </footer>
    );
}

export default Footer;