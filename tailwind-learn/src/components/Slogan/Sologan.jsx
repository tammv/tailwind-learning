import Cards from "../../../src/assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold relative md:my-28 md:grid md grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-pan-1 md:col-start-2">
        <p className="">
          Earn <span className=" text-purple-300">More</span>
        </p>
        <p className="">
          Pay <span className=" text-purple-200">Less</span>
        </p>
        <button className="">
          <span className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-purple-400 transition-all duration-300 md:text-25 md:px-8 md:py-[8px]">
            Start
          </span>
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[5rem]">
        <img src={Cards} alt="the card in desktop" />
      </div>
    </section>
  );
};

export default Slogan;
