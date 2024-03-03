import {
  Image,
  Link,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagFRImg from "@/assets/images/flag-fr.png";
import flagFAImg from "@/assets/images/ir.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("home");
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
          {t("hireMe")}
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Image
              src={
                i18n.language === "en"
                  ? flagENImg
                  : i18n.language === "fr"
                  ? flagFRImg
                  : flagFAImg
              }
              borderRadius={"50%"}
              h={8}
              w={8}
              cursor={"pointer"}
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => switchLanguage("en")}>
              <Box display="flex" w={"90%"} justifyContent={"space-between"}>
                <Image src={flagENImg} h={8} />
                <Text>English</Text>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => switchLanguage("fa")}>
              <Box display="flex" w={"90%"} justifyContent={"space-between"}>
                <Image src={flagFAImg} h={9} w={9} borderRadius={"50%"} />
                <Text>فارسی</Text>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => switchLanguage("fr")}>
              <Box display="flex" w={"90%"} justifyContent={"space-between"}>
                <Image src={flagFRImg} h={8} />
                <Text>Français</Text>
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
