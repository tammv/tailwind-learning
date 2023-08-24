import Cards from "../../../src/assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p className="">
          Earn <span className=" text-purple-300">More</span>
        </p>
        <p className="">
          Pay <span className=" text-purple-200">Less</span>
        </p>
        <button className="">
          <span className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-purple-400 transition-all duration-300">
            Start
          </span>
        </button>
      </div>
      <div className="mt-[69px]">
        <img src={Cards} alt="the card in desktop" />
      </div>
    </section>
  );
};

export default Slogan;
