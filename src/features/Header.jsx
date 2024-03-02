import { Image, Link, Flex, HStack } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
export const Header = () => {
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image src={bubbleImg} h={10} />
        <Link
          href="mailto:cs.amirhossein@gmail.com?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight="bold"
        >
          Hire me
        </Link>
        <Image pl={20} src={flagENImg} h={8} />
      </HStack>
    </Flex>
  );
};
