import { Container } from "./styles";

interface IAnimatorProps {
  children: React.ReactNode;
}

const Animator: React.FC<IAnimatorProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };

  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </Container>
  );
};
export default Animator;
