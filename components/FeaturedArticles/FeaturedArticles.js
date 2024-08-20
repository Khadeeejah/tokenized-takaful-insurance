import '../../styles/styles.css'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import { labelData, blogData } from './data'

import {
  Container,
  Heading,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  TabIndicator,
  Box,
  List,
  ListItem,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react'

const FeaturedArticles = () => {
  return (
    <Container
      id="blogs"
      as="section"
      bg="#fbf6f1"
      maxWidth="auto"
      pt="60px"
      pb="120px"
    >
      <Heading
        as="h2"
        textAlign="center"
        fontFamily="PT-serif"
        fontSize="40px"
        fontWeight="700"
        mb="20"
      >
        Our Features
      </Heading>
      <Tabs as="div" borderColor="#fbf6f1">
        <TabList fontFamily="Poppins" fontSize="16px" fontWeight="400">
          {labelData.map((label, i) => (
            <Tab key={i}>{label.label}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="1px"
          bg="#403e3e"
          borderRadius="1px"
        />
        <TabPanels>
          {/* Blog Tap Panel */}
          <TabPanel
            as="div"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="70px"
          >
            <Flex
              as="div"
              gap="70px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
              id="blogCard"
            >
              {blogData.map((blog, i) => (
                <Box
                  as="div"
                  key={i}
                  h={{ base: '467px', sm: '592px' }}
                  w={{ base: '247px', sm: '427px' }}
                >
                  <List spacing="3">
                    <ListItem as="li">
                      <Image src={blog.articleImg} alt="Article" />
                    </ListItem>
                    <Flex gap="8px">
                      <ListItem as="li" h="25px" w="25px">
                        
                      </ListItem>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="700"
                      >
                        
                      </Text>
                      
                    </Flex>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="20px"
                        fontWeight="700"
                      >
                        {blog.headline}
                      </Text>
                    </ListItem>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="16px"
                        fontWeight="400"
                      >
                        {blog.lead}
                      </Text>
                    </ListItem>
                    <Flex alignItems="center" gap="1">
                      <Box
                        as="button"
                        h="28px"
                        w={{ base: '76px', sm: '87px', md: '121px' }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: '#FFFFFF', color: '#1c1a1a' }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: '10px', sm: '12px', md: '16px' }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="https://celoafricadao.hashnode.dev/writing-for-celo-africa-dao">
                          {blog.button1}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/celo-africa-dao-at-ethsafari-2023-report">
                          {blog.button11}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/decentralized-intelligence-a-web3-ai-summit-report">
                          {blog.button12}
                        </Link>
                      </Box>
                      
                    </Flex>
                  </List>
                </Box>
              ))}
            </Flex>

      
          </TabPanel>


          <TabPanel
            as="div"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="70px"
          >
            <Flex
              as="div"
              gap="70px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
              id="blogCard"
            >
              {blogData.map((blog, i) => (
                <Box
                  as="div"
                  key={i}
                  h={{ base: '467px', sm: '592px' }}
                  w={{ base: '247px', sm: '427px' }}
                >
                  <List spacing="3">
                    <ListItem as="li">
                      <Image src={blog.articleImg} alt="Article" />
                    </ListItem>
                    <Flex gap="8px">
                      <ListItem as="li" h="25px" w="25px">
                        <Image
                          src={blog.authorAvatar}
                          alt="Author"
                          style={{ borderRadius: '50%' }}
                        />
                      </ListItem>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="700"
                      >
                        {blog.author}
                      </Text>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="200"
                      >
                        {blog.datePosted}
                      </Text>
                    </Flex>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="20px"
                        fontWeight="700"
                      >
                        {blog.headline}
                      </Text>
                    </ListItem>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="16px"
                        fontWeight="400"
                      >
                        {blog.lead}
                      </Text>
                    </ListItem>
                    <Flex alignItems="center" gap="1">
                      <Box
                        as="button"
                        h="28px"
                        w={{ base: '76px', sm: '87px', md: '121px' }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: '#FFFFFF', color: '#1c1a1a' }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: '10px', sm: '12px', md: '16px' }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="https://celoafricadao.hashnode.dev/writing-for-celo-africa-dao">
                          {blog.button1}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/celo-africa-dao-at-ethsafari-2023-report">
                          {blog.button11}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/decentralized-intelligence-a-web3-ai-summit-report">
                          {blog.button12}
                        </Link>
                      </Box>
                      
                    </Flex>
                  </List>
                </Box>
              ))}
            </Flex>

          </TabPanel>

        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default FeaturedArticles
