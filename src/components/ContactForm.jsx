import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    return (
        <section className="max-w-lg mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        <i className="fa-solid fa-envelope mr-2 text-blue-500"></i>
                        Contact Us
                    </h2>
                    <p className="text-gray-600">
                        Send us a message and we'll get back to you soon!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            placeholder="Tell us how we can help you..."
                        ></textarea>
                    </div>

                    {submitStatus && (
                        <div className={`p-3 rounded-md text-center text-sm ${
                            submitStatus === 'success' 
                                ? 'bg-green-100 text-green-700 border border-green-300' 
                                : 'bg-red-100 text-red-700 border border-red-300'
                        }`}>
                            {submitStatus === 'success' ? (
                                <>
                                    <i className="fa-solid fa-check-circle mr-1"></i>
                                    Message sent successfully!
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-exclamation-triangle mr-1"></i>
                                    Something went wrong. Please try again.
                                </>
                            )}
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed text-white' 
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                                Sending...
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-paper-plane mr-2"></i>
                                Send Message
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs text-gray-500">
                        <div>
                            <i className="fa-solid fa-clock text-blue-500"></i>
                            <p>24h Response</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-shield text-green-500"></i>
                            <p>Secure & Private</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-headset text-purple-500"></i>
                            <p>Expert Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;
