import {
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />

    </Flex>
  );
};

export default Page404;
