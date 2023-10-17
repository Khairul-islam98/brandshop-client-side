import React from 'react';

const Contact = () => {
    return (
        <div className="">
            <div className="p-2">
                <form>
                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className=" p-1  border rounded-md w-full"
                            placeholder="Name"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className=" p-1  border rounded-md w-full"
                            placeholder="Email"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className=" p-1  border rounded-md h-24 w-full resize-none"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className=" border-[red] border  text-white py-2 px-4 rounded-2xl"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;