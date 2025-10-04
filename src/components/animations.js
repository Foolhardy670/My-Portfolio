// Slow & elegant stagger (0.4s), replay on scroll
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, when: "beforeChildren" },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// For progress bars (width grows in view)
export const widthVariants = (finalWidth = "100%") => ({
  hidden: { width: 0 },
  visible: {
    width: finalWidth,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});
