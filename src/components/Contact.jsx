import React from "react";

function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
      <h1 className="mb-4 text-5xl font-bold">Contact Me</h1>
      <p className="mb-6 text-lg">Feel free to reach out!</p>

      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <label className="block mb-2 font-bold text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-bold text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label className="block mb-2 font-bold text-gray-700">Message</label>
        <textarea
          placeholder="Your Message"
          className="w-full h-32 p-2 mb-4 border border-gray-300 rounded"
        ></textarea>

        <button className="w-full p-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
