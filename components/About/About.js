import {
  Flex,
  Heading,
  Text,
  Container,
  chakra,
  shouldForwardProp,
  Box,
  Button,
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import Image from 'next/image'
import Coin from '../../img/coin.svg'
import Friend from '../../img/friend.svg'
import Feed from '../../img/feedback.svg'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const About = () => {
  return (
    <>
      <Container
        id="about"
        as="section"
        maxW="auto"
        bg="#FBF6F1"
        pt="119px"
        pl={{ md: '75px', base: '22px' }}
      >
        <Flex columnGap="222px" alignItems="center" pb="100px">
          <ChakraBox
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            display={['none', 'none', 'none', 'flex']}
          >
            <Image src={Coin} alt="coin icon" />
          </ChakraBox>

          <Box as="div" width={{ base: '700px', '2xl': '100%' }}>
            <Heading
              as="h2"
              fontSize={{ md: '40px', base: '22px' }}
              fontWeight={{ md: '700px', base: '700px' }}
              fontFamily="PT Serif"
              mb="12px"
            >
              What is Aqara?
            </Heading>

            <Text
              fontSize={{ md: '22px', base: '18px' }}
              fontFamily="Sofia Sans"
              fontWeight="200px"
              mb="15px"
            >
              Aqara is a decentralized insurance platform built on the Hedera network,
               offering ethical and transparent takaful coverage. It allows users to pool contributions, 
               tokenize ownership, and engage in gamified rewards, all while ensuring security and community-driven participation.
            </Text>

            <Text
              fontSize={{ md: '22px', base: '18px' }}
              fontFamily="Sofia Sans"
              fontWeight="200px"
            >
            </Text>
          </Box>
        </Flex>

        <Flex columnGap="72px" alignItems="center" pb="100px">
          <Box as="div" width={{ base: '700px', '2xl': '100%' }}>
            <Heading
              as="h2"
              fontSize={{ md: '40px', base: '22px' }}
              fontWeight={{ md: '700px', base: '700px' }}
              fontFamily="PT Serif"
              mb="12px"
            >
              How It Works
            </Heading>

            <Text
              fontSize={{ md: '22px', base: '18px' }}
              fontFamily="Sofia Sans"
              fontWeight="200px"
              mb="15px"
            >
    Aqara operates by allowing users to contribute to a collective insurance pool,
  where each members contribution is tokenized into fractional ownership.
  When needed, claims can be easily submitted 
  for review and processing through the platform. 
  Additionally, users can engage with the platform to earn rewards, 
  making the insurance experience both secure and rewarding.
            </Text>
          </Box>

          <ChakraBox display={['none', 'none', 'flex', 'flex']}>
            <Image src={Friend} alt="friend-icon" />
          </ChakraBox>
        </Flex>

        <Flex columnGap="72px" alignItems="center" pb="191px">
          <ChakraBox display={['none', 'none', 'flex', 'flex']}>
            <Image src={Feed} alt="feed-icon" />
          </ChakraBox>

          <Box as="div" width={{ base: '700px', '2xl': '100%' }}>
            <Heading
              as="h2"
              fontSize={{ md: '40px', base: '22px' }}
              fontWeight={{ md: '700px', base: '700px' }}
              fontFamily="PT Serif"
              mb="12px"
            >
              How to Start
            </Heading>

            <Text
              fontSize={{ md: '22px', base: '18px' }}
              fontFamily="Sofia Sans"
              fontWeight="200px"
              mb="15px"
            >
             Getting started with Hedera Takaful is simple. Create your account, choose your coverage plan, 
             and make your initial contribution. Upon joining, you’ll receive tokenized ownership in the insurance pool. 
             From there, you can explore the platform’s features, including claim submissions and earning rewards through 
             active participation.
            </Text>
            <Text
              fontSize={{ md: '22px', base: '18px' }}
              fontFamily="Sofia Sans"
              fontWeight="200px"
            >
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              bg="#FCF951"
              borderRadius={{ lg: '60px', md: '60px', base: '60px' }}
              width={{ lg: '311px', md: '246px', base: '193px' }}
              height={{ lg: '90px', md: '48px', base: '48px' }}
              gap="10px"
              mt="72px"
              pl="10px"
              border="1px solid rgba(103, 103, 103, 0.75)"
              fontSize={{ lg: '24px', md: '18px', sm: '16px' }}
              fontFamily="Sofia Sans"
              fontWeight="400px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="https://join.slack.com/t/celoafricadao/shared_invite/zt-281ldsznn-2ConLaV739tICqklwsg3Tw">
                Join The community
              </Link>
            </Button>
          </Box>
        </Flex>
        {}
      </Container>
    </>
  )
}

export default About
