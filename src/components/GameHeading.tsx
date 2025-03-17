import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenere";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platFormId = useGameQueryStore((state) => state.gameQuery.platformId);
  const platform = usePlatform(platFormId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
