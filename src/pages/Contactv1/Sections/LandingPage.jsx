import Header from "../components/Header";
import img1 from "../Images/h-img1.jpeg"

const LandingPage = () => {
  return (
    <div className="w-full relative bg-background-dark overflow-hidden flex flex-col items-center justify-start pt-[85px] px-5 pb-[163px] box-border gap-[142px] leading-[normal] tracking-[normal] text-left text-lg text-colors-white font-buttons-middle lg:gap-[71px] mq450:gap-[18px] mq750:gap-[35px]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={img1}
      />
      
      <Header />
    </div>
  );
};

export default LandingPage;
