import { Scroll } from "@react-three/drei";
import {
  Dispatch,
  PropsWithChildren,
  forwardRef,
  useEffect,
} from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import ToolBar from "./ToolBar";
import { motion } from "framer-motion";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

type Props = {
  setIsScrollDisabled: Dispatch<boolean>;
  setShowPortfolio: Dispatch<boolean>;
  isScrollDisabled: boolean;
  showPortfolio: boolean;
  triggerMoving: boolean;
  setIsPositionChanged: Dispatch<boolean>;
  setAnimating:Dispatch<boolean>;
  isPositionChanged: boolean;
  backFromGaming:boolean;
};

function ScrollTexts({
  setIsScrollDisabled,
  showPortfolio,
  setShowPortfolio,
  triggerMoving,
  isPositionChanged,
  setIsPositionChanged,
  backFromGaming,
  setAnimating
}: Props) {
  const three = useThree();

  useEffect(() => {
    if (triggerMoving) {
      const Hill = three.scene.getObjectByName("hill");
      const Flag = three.scene.getObjectByName("flag");
      if (Hill && Flag) {
        gsap.to(Hill.position, {
          x: Hill.position.x + 3.5,
          duration: 1,
        });
        gsap.to(Flag.position, {
          x: Flag.position.x + 3.5,
          duration: 1,
        });
      }
    }
  }, [triggerMoving, three.scene]);


  useEffect(()=>{
    if(backFromGaming){
      const Hill = three.scene.getObjectByName("hill");
      const Flag = three.scene.getObjectByName("flag");

     
      if (Hill && Flag) {
        var HillY = innerWidth < 600 ? -4.2 : -3.6
        var HillZ = 6.8

        var FlagY = innerWidth < 600 ? -0.5 : 0
        var FlagZ = 2.1
        gsap.to(Hill.position, {
          y:HillY,
          z:HillZ,
          duration: 1,
        });
        gsap.to(Flag.position, {
          y:FlagY,
          z:FlagZ,
          duration: 1,
        });
      }
    }
  },[backFromGaming])

  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5 },
    },
  };

  const cloudvariants = {
    scaled: {
      scale: 12, // Change the scale factor as needed
      transition: { duration: 0.5 },
    },
    notScaled: {
      scale: 0, // Return to the original scale
      transition: { duration: 0.5 },
    },
  };

  return (
    <Scroll html>
      {/* <div className="bg-[url('/assets/snow.gif')] h-full w-screen fixed inset-0 max-md:hidden"></div> */}

      <div className="">
        <motion.img
          height={500}
          width={500}
          className="absolute left-0 bottom-1/2 -z-10 w-[500px] h-[500px]"
          src="/assets/cloud.png"
          alt="cloud"
          initial="notScaled"
          animate={isPositionChanged || showPortfolio ? "scaled" : "notScaled"}
          variants={cloudvariants}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial="closed"
          animate={!isPositionChanged && !showPortfolio ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <SectionOne />
          <SectionTwo />
          <SectionFour />
          <SectionThree />
          <SectionFive />
          <ToolBar
            setIsPositionChanged={setIsPositionChanged}
            setIsScrollDisabled={setIsScrollDisabled}
            setShowPortfolio={setShowPortfolio}
            setAnimating={setAnimating}
          />
        </motion.div>

        {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
      </div>
    </Scroll>
  );
}

export default ScrollTexts;

type SectionProps = PropsWithChildren<{ className?: string }>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={`h-screen w-screen p-8 md:p-14 max-w-screen-lg flex justify-center flex-col ${className}`}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
