import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../HOC/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_Link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full
      rounded-2xl
      bg-tertiary
      p-5 sm:w-[360px]
       "
      >
        <div
          className="
        relative
        h-[230px]
        w-full
        "
        >
          <img
            src={image}
            alt={name}
            className="
          h-full
          w-full
          rounded-2xl
          object-cover
          "
          />
          <div
            className="
        card-img_hover 
        absolute
        inset-0
        m-3
        flex
        justify-end
        "
          >
            <div
              onClick={() => window.open(source_code_Link, "_blank")}
              className="
          black-gradient 
          flex 
          h-10 
          w-10 
          cursor-pointer 
          items-center 
          justify-center 
          rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain "
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
        </div>
        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
        mt-3 
        max-w-3xl 
        text-[17px] 
        leading-[30px] 
        text-secondary
        "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          accusamus, doloremque explicabo unde possimus ipsum dolore consequatur
          minima, quasi ab modi similique dolor iste animi. Maxime vitae vel
          eaque omnis.
        </motion.p>
      </div>
      <div
        className="
        mt-20
        flex
        flex-wrap
        gap-7
      "
      >
        {projects.map((project, index) => (
          <ProjectCard index={index} key={`project ${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
