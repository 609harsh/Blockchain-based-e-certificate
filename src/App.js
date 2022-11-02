import { Heading, useMediaQuery, VStack } from "@chakra-ui/react";
import Upload from "./component/Upload";
import Download from "./component/Download";

function App() {
  const [isNotSmallerScreen]=useMediaQuery("(min-width: 600px)")
  return (
    <VStack >
      <Heading as="h1" size="2xl" pt="5%" pb="2%" pl={isNotSmallerScreen?"1%":"5%"}>Welcome to BlockChain based Certification Verification</Heading>
      <Upload></Upload>
      <Download></Download>
    </VStack>
  );
}

export default App;
