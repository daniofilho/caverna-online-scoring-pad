import { SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import { Container } from "./styles";

const Loader: React.FC = () => (
  <Container>
    <SkeletonCircle size="10" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" />
  </Container>
);
export default Loader;
