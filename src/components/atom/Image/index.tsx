import Image, { ImageProps } from "next/image";

import { Container } from "./styles";

const MyImage: React.FC<ImageProps> = (props) => {
  const { className, src, alt, width = 200, height = 200 } = props;

  return (
    <Container>
      <Image
        alt={alt || ""}
        {...props}
        src={src}
        width={width}
        height={height}
        className={`img ${className || ""}`}
      />
    </Container>
  );
};

export default MyImage;
