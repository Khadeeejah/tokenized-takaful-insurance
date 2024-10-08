import { FaGithub, FaSlack, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

import { Heading, Box, Text, Link, Container, Flex } from '@chakra-ui/react'

const resources = [
  { title: 'WhitePaper', url: '#' },
  { title: 'FAQs', url: '#' },
]

const foundation = [
  { title: 'Contact', url: '#' },
  { title: 'Job Opportunity', url: '#' },
]

const developers = [
  { title: 'Documentation', url: '#' },
  { title: 'Developer Guides', url: '#' },
]

const community = [
  {
    icon: <FaSlack />,
    url:
      '',
  },
  { icon: <FaTelegramPlane />, url: '' },
  { icon: <FaTwitter />, url: '' },
  { icon: <FaGithub />, url: '' },
]

const date = new Date()
const currentYear = date.getFullYear()

const Footer = () => {
  return (
    <Container as="footer" maxW="auto" bg="#1A0329" py="20px">
      <Flex gap="4" wrap="wrap" alignItems="center">
        <Link href="/">
        </Link>
      </Flex>

      <Flex w="90%" mt="10" justifyContent="space-between" wrap="wrap" gap="5">
        <Box>
          <Heading
            as="h5"
            fontSize="xl"
            fontWeight="400"
            fontFamily="PT-sherif"
             color="#fff"
          >
            Resources
          </Heading>

          {resources.map((item, i) => (
            <Text fontSize="lg" fontWeight="200" color="#fff" key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box>
          <Heading
            as="h5"
            fontSize="xl"
            fontWeight="400"
            fontFamily="PT-sherif"
            color="#fff"
          >
            Foundation
          </Heading>

          {foundation.map((item, i) => (
            <Text fontSize="lg" fontWeight="200" color="#fff"key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box>
          <Heading
            as="h5"
            fontSize="xl"
            fontWeight="400"
            fontFamily="PT-sherif"
            color="#fff"
          >
            Developer
          </Heading>

          {developers.map((item, i) => (
            <Text fontSize="lg" fontWeight="200"color="#fff" key={i}>
              <Link>{item.title}</Link>
            </Text>
          ))}
        </Box>

        <Box
          display={{ base: 'flex', sm: 'none', md: 'flex' }}
          flexDir="column"
        >
          <Heading
            as="h5"
            fontSize="xl"
            fontWeight="400"
            fontFamily="PT-sherif"
            textAlign={{ base: 'left', md: 'center' }}
            color="#fff"
          >
            Join the community
          </Heading>

          <Box width="100%" display="flex" color="#fff">
            {community.map((item, i) => (
              <Text margin={2} fontSize="4xl" key={i}>
                <Link display="inline" href={item.url} isExternal>
                  {item.icon}
                </Link>
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>

      {/* For Tablet */}
      <Box
        display={{ base: 'none', sm: 'flex', md: 'none' }}
        flexDir="column"
        mt="20"
        mr="8"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Heading
          as="h5"
          fontSize="xl"
          fontWeight="400"
          fontFamily="PT-sherif"
          textAlign="center"
        >
          Join the community
        </Heading>

        <Box width="100%" display="flex" justifyContent="flex-end">
          {community.map((item, i) => (
            <Text margin={2} fontSize="4xl" key={i}>
              <Link display="inline-flex" href={item.url} isExternal>
                {item.icon}
              </Link>
            </Text>
          ))}
        </Box>
      </Box>
      <Flex
        display={{ base: 'none', sm: 'flex' }}
        justifyContent="space-between"
        wrap="wrap"
        mt="20"
        gap="5"
        fontSize="lg"
        fontFamily="sofia-san"
        fontWeight="400"
        color="#fff"
      >
        <Text>
          <Link href="#">Privacy Policy</Link>
        </Text>
        <Text>&copy; {currentYear} Aqara Inc.</Text>
        <Text>
          <Link href="#">Terms of Service</Link>
        </Text>
      </Flex>

      {/* For Mobile Phones and small screen */}
      <Box
        display={{ base: 'flex', sm: 'none' }}
        flexDir="column"
        justifyContent="center"
        wrap="wrap"
        mt="20"
        gap="5"
        fontWeight="400"
        fontSize="lg"
        fontFamily="sofia-san"
      >
        <Text textAlign="center">&copy; {currentYear} Celo Inc.</Text>
        <Flex justifyContent="space-between">
          <Text>
            <Link href="#">Privacy Policy</Link>
          </Text>

          <Text>
            <Link href="#">Terms of Service</Link>
          </Text>
        </Flex>
      </Box>
    </Container>
  )
}

export default Footer
