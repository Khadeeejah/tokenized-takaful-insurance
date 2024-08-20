import { Heading, Text } from '@chakra-ui/react'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { authorData, readerData } from '../utils/authorData'
import HowItWorksCard from './How-it-works-card'

const tabNames = ['Authors', 'Readers']

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Heading
        fontFamily="'Clash Grotesk', sans-serif"
        fontSize="56px"
        fontWeight="700"
        mb={5}
        mt={30}
        textAlign="center"
      >
        Hedera Services used
      </Heading>
      <Tabs
        variant="soft-rounded"
        defaultIndex={0}
        paddingTop={'50px'}
        paddingBottom={'90px'}
      >
        <TabList
          width="fit-content"
          mx="auto"
          background="#F3F4F6"
          borderRadius="66px"
          marginBottom={'40px'}
        >
          {tabNames.map((tab, index) => (
            <Tab
              key={index}
              color="#000000"
              fontSize="0px"
              fontWeight="500"
              _selected={{
                color: '#FFC2A1',
                background: '#281C36',
                boxShadow: 'none',
              }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} gap={5}>
              {authorData.map(({ id, step,content }) => (
                <GridItem key={id} w="100%">
                  <HowItWorksCard stepNumber={step} stepText={content}/>
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} gap={5}>
              {readerData.map(({ id, step, content }) => (
                <GridItem key={id} w="100%">
                  <HowItWorksCard stepNumber={step} stepText={content} />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default HowItWorks