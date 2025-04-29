export default function RequestCta() {
  return (
    <section className="flex flex-col justify-center items-center bg-orange-strong text-white p-10">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="font-title text-3xl md:text-5xl">
          Ready for your next project?
        </h1>
        <p className="text-xl md:text-2xl">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>
      </div>
      <form className="w-full md:w-2/4 mt-10">
        <div className="flex flex-col">
          <label className="text-white text-lg my-4" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="bg-white text-black rounded-lg p-4"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg my-4" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="What are you say ?"
            className="bg-white text-black rounded-lg p-4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex justify-self-center btn bg-dark-blue hover:bg-dark-blue/90 rounded-lg text-lg my-5 py-7 px-10"
        >
          Request Demo
        </button>
      </form>
    </section>
  );
}
