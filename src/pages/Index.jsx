import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, StackDivider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
              World
            </Link>
            <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Business
            </Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Tech
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Opinion
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured News Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>
            Featured News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">
                Article Title 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">
                Article Title 2
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar Section */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>
            Trending Topics
          </Heading>
          <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
            <Box>
              <Text fontWeight="bold">Trending Topic 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Trending Topic 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Trending Topic 3</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;