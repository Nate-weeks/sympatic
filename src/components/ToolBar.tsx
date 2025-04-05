"use client";
import { FiChevronsDown } from "react-icons/fi";
import MusicButton from "./MusicButton";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Dispatch, useState } from "react";
import gsap,{Power1} from "gsap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAudio } from "react-use-audio";


type Props = {
  setIsPositionChanged: Dispatch<boolean>;
  setIsScrollDisabled: Dispatch<boolean>;
  setShowPortfolio: Dispatch<boolean>;
  setAnimating: Dispatch<boolean>;
};

function ToolBar({
  setIsPositionChanged,
  setIsScrollDisabled,
  setShowPortfolio,
  setAnimating
}: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const { t, i18n } = useTranslation();

  const redirectedPathName = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const scroll = useScroll();

  useFrame(() => {
    const scrollVal = scroll.offset;
    if (scrollVal >= 0.01) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const three = useThree();

  const { play, stop } = useAudio("/assets/audio.mp3");
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const HorizontalChangeHandler = () => {
    const Hill = three.scene.getObjectByName("hill");
    const Flag = three.scene.getObjectByName("flag");



    if (Hill && Flag) {
      gsap.to(Hill.position, {
        x: Hill.position.x - 3.5,
        duration: 1,
      });
      gsap.to(Flag.position, {
        x: Flag.position.x - 3.5,
        duration: 1,
      });

      setIsPositionChanged(true);
      setIsScrollDisabled(true);
    }
  };

  const AtricalesChangeHandler = () => {
    stop()
    changeMuted(false)
    const Hill = three.scene.getObjectByName("hill");
    const Flag = three.scene.getObjectByName("flag");
    

    var canvas:any = document.querySelector("canvas")
    var bg = document.querySelector("#bg")
    var video:any = document.querySelector("#animationVideo")
    setAnimating(true)

    if (Hill && Flag) {
      gsap.to(Hill.position, {
        y: Hill.position.y + 1.5,
        z:Hill.position.z + 1.4,
        ease:Power1.easeIn,
        duration: 2,
      });
      gsap.to(Flag.position, {
        y: Flag.position.y + 1.5,
        z:Flag.position.z + 1.4,
        ease:Power1.easeIn,
        duration: 2,
      });
setTimeout(() => {
  gsap.to(canvas,{webkitFilter:"brightness(0)",duration:1.5  ,ease:Power1.easeIn})
  gsap.to(bg,{webkitFilter:"brightness(0)",duration:1.5,ease:Power1.easeIn,onComplete:()=>{
    video.play()
    video.onended = function(){
      gsap.to(video,{opacity:0,duration:0.5,ease:Power1.easeIn})
      setAnimating(false)
    }
    window.location.href = 'https://globalcaredevelopment.com/';
  }})
}, 500);
     

    
      setIsScrollDisabled(true);
    }
  };

  const changeMuted=(value:boolean)=>{
setIsMuted(value)
  }

  // if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
      className="absolute -translate-y-full top-[100vh] w-full"
    >
      <div className="px-8 md:px-14 mx-auto mb-24 md:mb-10 flex w-full">
        <div className="flex-1 max-lg:hidden"></div>

        {/* <div className="scrolldown max-md:hidden">
          <FiChevronsDown />
        </div> */}
        <div className="moving-mouse-holder border-solid border-2 border-black rounded-full max-md:hidden">
          <div className="mouse bor border-black">
            <div className="mouse-button flex justify-center py-2">
              <FiChevronsDown />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 items-end w-full">
          <div className="flex gap-5 md:hidden">
            <a
              onClick={() => redirectedPathName("no")}
              className="rounded-full hover:scale-110 transition-all cursor-pointer"
            >
              <img
                width={50}
                height={50}
                className="object-cover"
                src="/assets/flag-1.png"
                alt="flag"
              />
            </a>
            <a
              onClick={() => redirectedPathName("en")}
              className="rounded-full hover:scale-110 transition-all cursor-pointer"
            >
              <img
                width={50}
                height={50}
                className="object-cover"
                src="/assets/flag-2.png"
                alt="flag"
              />
            </a>
          </div>
          <div className="flex justify-end gap-5">
            <MusicButton play={play} stop={stop} isMuted={isMuted} changeMuted={changeMuted}/>

            <Button onClick={AtricalesChangeHandler} className="py-2">
              {t("GlobalCare")}{" "}
            </Button>

            <Button onClick={HorizontalChangeHandler}>
              {t("About")}{" "}
            </Button>

            <div className="flex gap-5 max-md:hidden">
              <a
                onClick={() => redirectedPathName("no")}
                className="rounded-full hover:scale-110 transition-all cursor-pointer"
              >
                <img
                  width={50}
                  height={50}
                  className="object-cover"
                  src="/assets/flag-1.png"
                  alt="flag"
                />
              </a>
              <a
                onClick={() => redirectedPathName("en")}
                className="rounded-full hover:scale-110 transition-all cursor-pointer"
              >
                <img
                  width={50}
                  height={50}
                  className="object-cover"
                  src="/assets/flag-2.png"
                  alt="flag"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ToolBar;

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      className={`flex items-center justify-center w-fit text-white bg-black rounded-lg cursor-pointer transition-all text-lg relative z-20 px-5 transition-all hover:scale-110 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
