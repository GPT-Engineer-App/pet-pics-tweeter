// Twitter clone UI for displaying top pet pictures of the day
import { Box, Flex, IconButton, Image, Stack, Text, VStack, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure } from "@chakra-ui/react";
import { FaHeart, FaRetweet, FaComment, FaBell, FaEnvelope, FaUser, FaCog, FaHome } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Dummy data for tweets
  const tweets = [
    {
      id: 1,
      user: "PetLover",
      content: "Look at this cute puppy!",
      image: "https://images.unsplash.com/photo-1582456891925-a53965520520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHl8ZW58MHx8fHwxNzEzODg2OTg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 12,
      retweets: 4,
      comments: 3,
    },
    {
      id: 2,
      user: "CatFanatic",
      content: "Isn't this kitten adorable?",
      image: "https://images.unsplash.com/photo-1692901573513-41cda579d689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZG9yYWJsZSUyMGtpdHRlbnxlbnwwfHx8fDE3MTM4ODY5ODl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 20,
      retweets: 10,
      comments: 8,
    },
  ];

  return (
    <VStack>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <FaHome />
          </Tab>
          <Tab>
            <FaBell />
          </Tab>
          <Tab>
            <FaEnvelope />
          </Tab>
          <Tab>
            <FaUser />
          </Tab>
          <Tab>
            <FaCog />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4}>
              {tweets.map((tweet) => (
                <Box key={tweet.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" w="full">
                  <Text fontWeight="bold">{tweet.user}</Text>
                  <Text mt={2}>{tweet.content}</Text>
                  <Image src={tweet.image} alt="Pet image" />
                  <Flex justify="space-between" mt={3}>
                    <IconButton aria-label="Like tweet" icon={<FaHeart />} />
                    <Text>{tweet.likes}</Text>
                    <IconButton aria-label="Retweet" icon={<FaRetweet />} />
                    <Text>{tweet.retweets}</Text>
                    <IconButton aria-label="Comment" icon={<FaComment />} />
                    <Text>{tweet.comments}</Text>
                  </Flex>
                </Box>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <p>Notifications</p>
          </TabPanel>
          <TabPanel>
            <p>Messages</p>
          </TabPanel>
          <TabPanel>
            <p>Profile</p>
          </TabPanel>
          <TabPanel>
            <p>Settings</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Index;
