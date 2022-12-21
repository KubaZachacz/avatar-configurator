import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
// import useSwr from "swr";

import { supabase } from "utils/supabaseClient";

const Home = () => {
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetchGenders = async () => {
      const { data, error } = await supabase.from("genders").select("*");

      console.log("data", data);
    };

    fetchGenders();
  });

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
    </Flex>
  );
};

export default Home;
