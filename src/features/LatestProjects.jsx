import { ProjectsAPI } from "@/api/projects";
import { Badge } from "@/components/Badge";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { Box, Flex, Heading, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LatestProjects = () => {
  const [projects, setProjects] = useState();
  const { t } = useTranslation("home");

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      setProjects(projectsResponse);
    })();
  }, []);

  const renderProject = ({ id, images, title, description, technologies }) => {
    return (
      <WrapItem
        key={id}
        flexDir={"column"}
        justifyContent={"space-evenly"}
        mt={5}
      >
        <Box height={220}>
          <ImageSlider imageList={images.map((img) => img.downloadURL)} />
        </Box>
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {title}
        </Heading>
        <Text width={400}>{description}</Text>
        <Wrap mt={2} width={350}>
          {technologies.map((tech) => (
            <WrapItem key={tech}>
              <Badge bg={tech}>{tech}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading> {t("latestProjects")} </Heading>
      <Flex
        mt={5}
        spacing={16}
        justifyContent={"center"}
        // alignItems={"center"}
        flexWrap={"wrap"}
      >
        {projects?.map(renderProject)}
      </Flex>
    </Flex>
  );
};
