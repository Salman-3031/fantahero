import React, { act } from "react";
import Fanta1 from "../../assets/Images/fanta1.png"
import Fanta2 from "../../assets/Images/fanta2.png";
import Fanta3 from "../../assets/Images/fanta3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { animate, AnimatePresence, delay, easeInOut, motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const parentVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const childVar = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const heroData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(heroData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}>

        <Navbar />
       
        {/* hero section  */}
        <div className="min-h-[calc(100vh - 86.89px)]  text-white">
          <div className="container pb-1 pt-[10px] grid grid-cols-1 lg:grid-cols-2 gap-10 ">

            {/* left div info  */}
            <div className="flex flex-col space-y-4 place-content-end lg:max-w-xl order-2 lg:order-1 ">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference"
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-4xl sm:text-5xl md:text-6xl font-handWritten text-shadow">{activeData.title}</motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-white/80 leading-loose text-xs">{activeData.subtitle}</motion.p>
              </AnimatePresence>

              <div className="flex justify-start">
                <AnimatePresence mode="wait">
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 10,
                      followSpeed: 0.5,
                      scale: 5,
                      rotate: -720,
                      // round: 5,
                      backgroundElement: (
                        <div className="p-1">
                          <img src={activeData.image} alt="" />
                        </div>
                      )
                    }}
                  >
                    <motion.button
                      key={activeData.id}
                      variants={SlideRight(0.6)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="px-3 py-2 bg-white text-black" style={{ color: activeData.bgColor }}>order now</motion.button>
                  </UpdateFollower>
                </AnimatePresence>
              </div>

              {/* top recomendations  */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
                className="flex gap-5 items-center justify-center md:justify-start broder-2 w-full">
                <div className="h-px w-10 md:w-20 bg-white"></div>
                <p className="uppercase">Top recomendation</p>
                <div className="h-px w-10 md:w-20 bg-white"></div>
              </motion.div>

              {/* switch cane  */}
              <motion.div
                variants={parentVar}
                initial="hidden"
                animate="show"
                className="cane-container  grid grid-cols-3 gap-8 py-2 overflow-hidden px-8 lg:px-0">

                {heroData.map((item) => (
                  <UpdateFollower
                  key={item.id}
                  mouseOptions={{
                    backgroundColor: "white",
                    scale: 3,
                    zIndex: 10,
                    followSpeed: 0.5,
                    text: 'View Details',
                    textFontSize: '3px',
                    textFontFamily: 'fantasy',
                    textColor: item.bgColor,
                    radius: 6
                  }}
                  >
                  <motion.div
                    // key={item.id}
                    variants={childVar}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleActiveData(item)}
                    className="flex flex-col items-center space-y-3 cursor-pointer">
                    <div className="img">
                      <img key={activeData.id} src={item.image} alt="" className={`max-w-[70px] sm:max-w-24 img-shadow ${activeData.image === item.image ? "opacity-100 scale-105" : "opacity-50"}`} />
                    </div>
                    <div className="text-center">
                      <p className="text-white/50">{item.price}</p>
                      <p className="text-xl font-semibold">{item.price}</p>
                    </div>
                  </motion.div>
                  </UpdateFollower>
                ))}
              </motion.div>
            </div>
            {/* left div hero end */}
         

            {/* right div start  */}
            <div className=" overflow-hidden place-content-end place-items-center order-1 lg:order-2 ">
              <motion.img
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
                key={activeData.id}
                src={activeData.image} alt="" className="md:h-[30rem] h-[15rem] img-shadow" />
            </div>
            {/* right div end  */}
          </div>

          <div className="text-4xl text-white fixed z-[999] bottom-10 right-10 hover:rotate-[360deg] mix-blend-difference  transition-transform duration-500">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>

         


        </div>
      </motion.section>
     
    </>
  );
};

export default Hero;
