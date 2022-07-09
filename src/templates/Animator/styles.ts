import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > article {
    & > div,
    & > header,
    & > footer {
      width: 100%;
    }
  }
`;
