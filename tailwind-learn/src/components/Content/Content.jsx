import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../../src/assets/mobile/checkpoint.svg";

const Content = () => {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold  flex items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] flex-col">
        <div className="gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px] text-white" />
          <p className="text-26">
            <p className="text-13 font-semibold">Customers</p>
            10245
          </p>
        </div>
        <div className="gap-8 flex items-start">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px] text-white" />
          <p className="text-26">
            <p className="text-13 font-semibold">Card Issused</p>
            392002
          </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold">
        {/* index.css to decoratte the same "check-content"*/}
        <p className="check-content">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">No Fee</p>
        </p>
        <p className="check-content">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Card report sent to your phone every weeks</p>
        </p>
        <p className="flex gap-8 ml-[70px] mr-[29px] items-center">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Set spending limits and restrictions</p>
        </p>
      </div>
    </section>
  );
};

export default Content;