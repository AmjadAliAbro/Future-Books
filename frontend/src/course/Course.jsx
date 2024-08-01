import PropTypes from "prop-types";

const Course = ({ filteredData }) => {
  console.log(filteredData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-32 items-cener justify-center text-center">
          <h1 className="text-2xl md:text-3xl">
            We&apos;re delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            magni a, laudantium totam adipisci libero molestiae ipsum ab dolore
            aspernatur necessitatibus amet at facere quae suscipit harum atque.
            Praesentium alias, cum deserunt porro tempore, iusto sit delectus
            nemo, dicta reprehenderit facere hic accusamus? Impedit voluptatibus
            quisquam distinctio atque quam assumenda.
          </p>
          <button
            onClick={() => window.history.go(-1)}
            className="bg-pink-500 text-white hover:bg-pink-400 mt-6 px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {
  filteredData: PropTypes.array.isRequired,
};
export default Course;
