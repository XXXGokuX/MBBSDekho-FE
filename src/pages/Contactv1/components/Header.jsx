import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section
      className={`w-[1170px] flex flex-col items-start justify-start gap-[28px] max-w-full text-center text-5xl text-colors-white font-buttons-middle ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <div className="flex flex-row items-start justify-start z-[1]">
          <div className="h-[19px] flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border">
            <b className="mt-[-6px] relative tracking-[-0.29px] inline-block min-w-[108px] mq450:text-lgi">
              Startup 3
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-11xl font-font-awesome mq750:flex-wrap mq750:justify-center">
        <div className="w-5 flex flex-col items-start justify-start pt-[28.2px] pb-0 pr-[9px] pl-0 box-border text-gray-200">
          
        </div>
        <h1 className="m-0 w-[649px] relative text-53xl tracking-[-1px] leading-[86px] font-bold font-buttons-middle flex items-center justify-center max-w-full z-[1] mq450:text-24xl mq450:leading-[52px] mq1050:text-39xl mq1050:leading-[69px]">
          Forget About Code
        </h1>
        <div className="w-[11px] flex flex-col items-start justify-start pt-[28.2px] px-0 pb-0 box-border">
          <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-lg mq1050:text-5xl">
            
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-3xl">
        <div className="w-[736px] flex flex-col items-start justify-start gap-[58px] max-w-full mq750:gap-[29px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] mq750:gap-[24px]">
            <div className="self-stretch relative leading-[32px] font-medium z-[1] mq450:text-lg mq450:leading-[26px]">{`Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. `}</div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-left text-xs text-gray-200 font-font-awesome">
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-px z-[1]">
                <div className="flex flex-row items-start justify-start gap-[9px]">
                  <div className="relative leading-[10px] text-colors-white inline-block min-w-[11px]">
                    
                  </div>
                  <div className="relative leading-[10px] inline-block min-w-[11px]">
                    
                  </div>
                  <div className="relative leading-[10px] inline-block min-w-[11px]">
                    
                  </div>
                  <div className="relative leading-[10px] inline-block min-w-[11px]">
                    
                  </div>
                  <div className="relative leading-[10px] inline-block min-w-[11px]">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] py-[17px] px-[35px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-action-secondary" />
              <div className="relative text-lg leading-[26px] font-medium font-buttons-middle text-colors-white text-center z-[1]">
                Create an Account
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
