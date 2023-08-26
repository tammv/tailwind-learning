import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../../src/assets/mobile/checkpoint.svg";

const Content = () => {
  const customer = useSpring({ customer: 10245, from: { customer: 0 } });
  const issused = useSpring({ issused: 392002, from: { issused: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px]  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] flex-col md:w-[20%]">
        <div className="gap-8 flex items-start ">
          <FaUser size={"22px"} className="mt-[12px] text-white md:mt-[36px]" />
          <div className="text-26 md:mt-[36px]">
            <p className="text-13 font-semibold  md:text-16 ">Customers</p>
            <animated.div className="md:mb-[36px]">{customer.customer.to((val) => Math.floor(val))}</animated.div>
          </div>
        </div>
        <div className="gap-8 flex items-start">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px] text-white " />
          <div className="text-26">
            <p className="text-13 font-semibold  md:text-16">Card Issused</p>
            <animated.div className="md:mb-[36px]">{issused.issused.to((val) => Math.floor(val))}</animated.div>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:text-16 md:ml-[20%]">
        {/* index.css to decoratte the same "check-content"*/}
        <div className="check-content  ">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">No Fee</p>
        </div>
        <div className="check-content  ">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Card report sent to your phone every weeks</p>
        </div>
        <div className="flex gap-8 ml-[70px] mr-[29px] items-center md:mx-0">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
