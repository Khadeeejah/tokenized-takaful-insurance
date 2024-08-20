import { Heading, Text, Container, Box, Button } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import '../../styles/styles.css'

const VisionMission = () => {
  return (
    <>
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="50px"
        display={{ base: 'none', lg: 'flex' }}
        gap={{ md: '128px', lg: '0px' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        background="#1A0329"
      >
        <Box
          display="flex"
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          pt="200px"
        >
          <Heading
            as="h2"
            fontSize="40px"
            color="#fff"
            fontFamily="PT-Serif"
            mb="15px"
          >
            Our Vision
          </Heading>

          <Text fontSize="24px" color="#fff" fontFamily="sofia-sans">
          We envision a world where decentralized and ethical insurance models provide equitable access 
          to financial protection for all, harnessing the power of blockchain to create a trusted, transparent, 
          and participatory ecosystem that serves diverse communities globally.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            textAlign="center"
            gap={18}
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="331px"
            height="90px"
            borderRadius="60px"
            mt="101px"
          >
            <Link href="https://khadijahsresume.notion.site/Taka-Sure-or-Insuredera-68df5f18b4eb49a4936e2512d5837fdc?pvs=4">
              Read Whitepaper
            </Link>
          </Button>
        </Box>

        <Box as="div" id="mission">
          <Box as="div" mr="62px" mt="678px">
            <Heading
              as="h2"
              fontSize="40px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
            >
              Our Mission
            </Heading>

            <Text fontSize="24px" color="#fff" fontFamily="Sofia Sans">
            Our mission is to revolutionize the insurance industry by leveraging blockchain technology 
            to create a transparent, accessible, and ethical takaful insurance platform that empowers individuals
             to collectively share risk while promoting financial inclusion and community-driven participation.
            </Text>
          </Box>
        </Box>
      </Container>

      {/* For Tablet */}
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="30px"
        display={{ base: 'none', sm: 'inline-block', lg: 'none' }}
        background="#1A0329"
      >
        <Box>
          <Heading
            as="h2"
            fontSize="28px"
            color="#fff"
            fontFamily="PT-Serif"
            mt="61px"
            mb="15px"
          >
            Our Vision
          </Heading>

          <Text
            fontSize="22px"
            color="#fff"
            fontFamily="sofia-sans"
            mb="46px"
            mr="120px"
          >
            We envision a world where decentralized and ethical insurance models provide
             equitable access to financial protection for all, harnessing the power of blockchain to
             create a trusted, transparent, and participatory ecosystem that serves diverse communities globally.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={15}
            fontSize="16px"
            lineHeight="24px"
            fontFamily="sofia-sans"
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="246px"
            height="48px"
            mt="46px"
            borderRadius="60px"
          >
            <Link href="/">Read Whitepaper</Link>
          </Button>
        </Box>

        <Box as="div" id="mission2" mt="46px" mr="30px">
          <Box as="div">
            <Heading
              as="h2"
              fontSize="28px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
              textAlign="right"
            >
              Our Mission
            </Heading>

            <Text
              fontSize="24px"
              color="#fff"
              fontFamily="Sofia Sans"
              ml="128px"
            >
              Fostering blockchain adoption in Africa by building a
              community-driven platform that promotes financial inclusivity,
              facilitates sustainable development, and harnesses the power of
              decentralized technologies to uplift individuals and communities.
              Through collaboration, education, and innovation, we aim to create
              a more equitable and connected future for Africa.
            </Text>
          </Box>
        </Box>
      </Container>

      {/* For Mobile */}
      <Container
        as="section"
        maxW="auto"
        pb="144px"
        pl="22px"
        display={{ base: 'inline-block', sm: 'none', lg: 'none' }}
        background="#1A0329"
      >
        <Box as="div">
          <Heading
            as="h2"
            fontSize="22px"
            color="#fff"
            fontFamily="PT-Serif"
            mb="15px"
            pt="46px"
          >
            Our Vision
          </Heading>

          <Text fontSize="18px" color="#fff" fontFamily="sofia-sans" mb="46px">
            Empowering individuals across Africa through decentralized
            technologies, Celo Africa DAO envisions a future where financial
            inclusion, economic empowerment, and technological innovation thrive
            in a borderless, accessible digital ecosystem.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon color="#1F2223" />}
            background="#1A0329"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={15}
            fontSize="16px"
            lineHeight="24px"
            fontFamily="sofia-sans"
            flexShrink="0"
            color="#878787"
            border="1px solid rgba(103, 103, 103, 0.75)"
            width="246px"
            height="48px"
            mt="46px"
            borderRadius="60px"
          >
            <Link href="/">Read Whitepaper</Link>
          </Button>
        </Box>

        <Box as="div" id="mission3" mt="46px" mr="30px">
          <Box as="div">
            <Heading
              as="h2"
              fontSize="22px"
              color="#fff"
              fontFamily="PT Serif"
              mb="15px"
              textAlign="right"
            >
              Our Mission
            </Heading>

            <Text fontSize="18px" color="#fff" fontFamily="Sofia Sans">
              Fostering blockchain adoption in Africa by building a
              community-driven platform that promotes financial inclusivity,
              facilitates sustainable development, and harnesses the power of
              decentralized technologies to uplift individuals and communities.
              Through collaboration, education, and innovation, we aim to create
              a more equitable and connected future for Africa.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default VisionMission
