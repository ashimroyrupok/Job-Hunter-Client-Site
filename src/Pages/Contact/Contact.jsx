import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ef2qyjm', 'template_zl4ukes', form.current, 'FpVPxDJASgM34jOll')
            .then((result) => {
                console.log(result.text);
                toast.success("Email send successful!");
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });
    };

    return (
        <div>
            <section className=" dark:text-white  p-4  text-gray-600 body-font dark:bg-black bg-gray-100">
                <div
                    className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
                    id="contact-form"
                >
                    <div className="md:w-1/3 w-full">
                        <h1 className="text-4xl dark:text-white text-gray-800 sm:text-4xl font-bold title-font mb-4">
                            Contact Us
                        </h1>

                        <p className="leading-relaxed text-xl dark:text-white text-gray-900 mt-8">
                            Connect with us on social media:
                        </p>
                        <span className="inline-flex mt-6 justify-center sm:justify-start">
                            <a
                                className="text-gray-500 dark:text-white hover:text-gray-900"
                                target="_blank"
                                href=""
                            >
                                <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a
                                className="ml-3 text-gray-500 dark:text-white hover:text-gray-900"
                                // href="https://www.instagram.com/example/"
                                target="_blank"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                        <h1 className="text-4xl dark:text-white text-gray-800 sm:text-4xl font-bold title-font mb-4">
                            Contact Form
                        </h1>
                        <form ref={form} onSubmit={sendEmail} method="post">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="name"
                                        className="leading-7 py-4 text-lg dark:text-white text-gray-900"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        required=""
                                        className="w-full dark:text-white bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 dark:text-white py-4 text-lg text-gray-900"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email_id"
                                        required=""
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 py-4 dark:text-white text-lg text-gray-900"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required=""
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                                >
                                    Send Message ✉
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Contact;