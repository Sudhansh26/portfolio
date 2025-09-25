export const Contact = () => {
  return (
    <>
   
    <section id="contact" className="py-10 px-4 mb-8 md:px-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">
        Contact Me
      </h2>
      <h3 className="text-center text-2xl">  Fill this to reach out to me </h3>

      <form className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
       
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Sudhansh Tripathi"
            required
          />
        </div>

      
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@example.com"
            required
          />
        </div>

      
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Write your message here... "
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition"
        >
          Submit
        </button>
      </form>
    </section>
    </>
  );
};
