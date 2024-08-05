const Contact = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-pink-500 ml-1">Touch</span>
          </h1>
          <p className="text-lg md:text-xl">
            We would love to hear from you! Whether you have a question about
            features, pricing, need a demo, or anything else, our team is ready
            to answer all your questions.
          </p>
          <form className="space-y-6">
            <label className="flex flex-col gap-2 text-black dark:text-white">
              Name:
              <input
                type="text"
                className="rounded-md text-black focus:outline-none p-2 border border-gray-300"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col gap-2 text-black dark:text-white">
              Email:
              <input
                type="email"
                className="rounded-md text-black focus:outline-none p-2 border border-gray-300"
                placeholder="Your Email"
              />
            </label>
            <label className="flex flex-col gap-2 text-black dark:text-white">
              Message:
              <textarea
                className="rounded-md text-black focus:outline-none p-2 border border-gray-300"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </label>
            <button type="submit" className="btn btn-secondary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="order-1 mt-8 md:mt-0 md:order-2 w-full md:w-1/2 flex justify-center items-center">
        <img src="/Contact.png" alt="" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Contact;
