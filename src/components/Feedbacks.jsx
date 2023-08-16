import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../HOC/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <p className="text-[48px] font-black text-white">"</p>
    <div className="mt-1">
      <p className="
      text-white
      tracking-wider
      text-[18px]
      ">{testimonial}</p>
      <div className="
      mt-7 
      flex 
      justify-between 
      items-center 
      gap-1
      ">
        <div className="
        flex-1 flex flex-col
        ">
          <p className="
          text-white
          font-medium
          text-[16px]
          ">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{designation} of {company} </p>
        </div>

        <img src={image} alt={`feedback by ${name}`}
        className="w-10 h-10 rounded-full object-cover"
         />
        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
