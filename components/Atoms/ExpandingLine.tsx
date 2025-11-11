
/* API */
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";

export default function ExpandingLine(
  props: HTMLMotionProps<"div"> & { reverse?: boolean },
) {
  const reducedMotion = useReducedMotion();
  const classes = ["bg-slate-800", "dark:bg-slate-300", "h-1", "w-full"];

  const { reverse, ...rest } = props;

  return (
    <motion.div
      className={classes.join(" ")}
      initial={{ maxWidth: reducedMotion ? "100%" : "0%" }}
      viewport={{ once: true }}
      whileInView={{ maxWidth: "100%" }}
      transition={{ duration: 0.5 }}
      {...rest}
      {...(reverse ? { style: { marginLeft: "auto" } } : {})}
    />
  );
}
