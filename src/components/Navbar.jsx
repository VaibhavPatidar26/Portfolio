import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Projects", "Skills", "Education", "Contact"];

export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menuOpen) return;

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);


  const handleNavigation = (section) => {
    scrollTo(section.toLowerCase());
    setMenuOpen(false);
  };


  return (
    <>
      {/* Navbar */}
      <header
        className={`
          fixed top-0 left-0 z-50 w-full

          flex items-center justify-between

          px-6 py-5
          md:px-12

          transition-all duration-300

          ${
            scrolled
              ? `
                bg-black/70
                backdrop-blur-xl
                border-b
                border-white/10
                shadow-xl
              `
              : "bg-transparent"
          }
        `}
      >

        {/* Logo */}
        <motion.button
          onClick={() => handleNavigation("Home")}
          className="
            text-3xl
            font-bold
            tracking-wide
          "
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span
            className="
              bg-linear-to-r
              from-blue-400
              via-purple-500
              to-pink-500

              bg-clip-text
              text-transparent
            "
          >
            VP.
          </span>
        </motion.button>


        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            md:flex

            items-center
            gap-10
          "
        >
          {navItems.map((item) => (
            <motion.button
              key={item}
              className="
                group
                relative

                uppercase
                tracking-[0.18em]

                text-sm
                font-medium

                text-gray-400

                transition-all
                duration-300

                hover:text-white
              "
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleNavigation(item)}
            >
              {item}


              <span
                className="
                  absolute
                  left-0

                  -bottom-2

                  h-0.5
                  w-0

                  bg-linear-to-r
                  from-blue-400
                  to-purple-500

                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />

            </motion.button>
          ))}
        </nav>



        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"

          className="
            hidden
            md:flex

            items-center
            justify-center

            px-7
            py-3

            rounded-full

            text-sm
            font-semibold

            uppercase
            tracking-wider

            text-white


            bg-linear-to-r
            from-blue-600
            via-purple-600
            to-pink-600


            shadow-lg
            shadow-purple-500/20

            hover:shadow-purple-500/50

            transition-all
            duration-300
          "

          whileHover={{
            scale:1.08,
            y:-2,
          }}

          whileTap={{
            scale:0.95,
          }}
        >
          View Resume
        </motion.a>




        {/* Mobile Menu Button */}
        <motion.button
          className="
            md:hidden
            text-white
          "

          onClick={() =>
            setMenuOpen((prev)=>!prev)
          }

          aria-label="Toggle navigation menu"

          whileTap={{
            scale:0.9,
          }}
        >

          <AnimatePresence mode="wait">

            {
              menuOpen ? (

                <motion.div
                  key="close"

                  initial={{
                    opacity:0,
                    rotate:-90,
                  }}

                  animate={{
                    opacity:1,
                    rotate:0,
                  }}

                  exit={{
                    opacity:0,
                    rotate:90,
                  }}
                >
                  <X size={28}/>
                </motion.div>

              ) : (

                <motion.div
                  key="menu"

                  initial={{
                    opacity:0,
                    rotate:90,
                  }}

                  animate={{
                    opacity:1,
                    rotate:0,
                  }}

                  exit={{
                    opacity:0,
                    rotate:-90,
                  }}
                >
                  <Menu size={28}/>
                </motion.div>

              )
            }


          </AnimatePresence>

        </motion.button>

      </header>





      {/* Mobile Menu */}
      <AnimatePresence>

        {
          menuOpen && (

            <>

              {/* Backdrop */}
              <motion.div
                className="
                  fixed
                  inset-0

                  z-40

                  bg-black/70

                  backdrop-blur-sm

                  md:hidden
                "

                initial={{
                  opacity:0,
                }}

                animate={{
                  opacity:1,
                }}

                exit={{
                  opacity:0,
                }}
              />



              {/* Side Menu */}
              <motion.div

                ref={menuRef}

                className="
                  fixed

                  right-0
                  top-0

                  z-50

                  h-screen
                  w-72

                  bg-black/90

                  backdrop-blur-xl

                  border-l
                  border-white/10


                  flex
                  flex-col

                  gap-7

                  px-8

                  pt-28

                  md:hidden
                "

                initial={{
                  opacity:0,
                  x:80,
                }}

                animate={{
                  opacity:1,
                  x:0,
                }}

                exit={{
                  opacity:0,
                  x:80,
                }}

                transition={{
                  type:"spring",
                  stiffness:260,
                  damping:24,
                }}
              >


                {
                  navItems.map((item,index)=>(

                    <motion.button

                      key={item}

                      className="
                        text-left

                        uppercase

                        tracking-wider

                        text-lg

                        text-gray-300

                        hover:text-blue-400

                        transition
                      "

                      initial={{
                        opacity:0,
                        x:20,
                      }}

                      animate={{
                        opacity:1,
                        x:0,
                      }}

                      transition={{
                        delay:index*0.07,
                      }}

                      whileTap={{
                        scale:0.95,
                      }}

                      onClick={()=>
                        handleNavigation(item)
                      }

                    >
                      {item}

                    </motion.button>

                  ))
                }



                <motion.a

                  href="/resume.pdf"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="
                    mt-4

                    w-fit

                    px-7
                    py-3

                    rounded-full

                    bg-linear-to-r
                    from-blue-600
                    via-purple-600
                    to-pink-600

                    text-white

                    font-semibold

                    uppercase

                    tracking-wider
                  "

                  initial={{
                    opacity:0,
                  }}

                  animate={{
                    opacity:1,
                  }}

                  transition={{
                    delay:0.35,
                  }}
                >
                  View Resume

                </motion.a>


              </motion.div>


            </>
          )
        }


      </AnimatePresence>

    </>
  );
}