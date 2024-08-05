const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            About <span className="text-pink-500 ml-1">Us</span>
          </h1>
          <p className="text-lg md:text-xl">
            Welcome to our platform! We are dedicated to providing high-quality
            content and resources to help you learn something new every day. Our
            team is passionate about education and strives to bring you the best
            learning experience possible.
          </p>
          <p className="text-lg md:text-xl">
            Our mission is to empower individuals with knowledge and skills that
            can help them succeed in their personal and professional lives. We
            believe that continuous learning is the key to growth and
            development.
          </p>
          <p className="text-lg md:text-xl">
            Thank you for being a part of our community. We hope you enjoy your
            journey with us!
          </p>
        </div>
      </div>
      <div className="order-1 mt-8 md:mt-0 md:order-2 w-full md:w-1/2 flex justify-center items-center">
        <img src="/AboutUs.png" alt="About Us" className="w-[80%]" />
      </div>
    </div>
  );
};

export default About;
