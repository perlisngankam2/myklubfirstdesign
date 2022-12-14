import {
    Flex,
    Stack,
    Heading, Grid,
    Image,
    Box,
    Text,
    Icon,
    HStack,
    List,
    ListItem,
    UnorderedList,
    Card,
    CardBody,
    CardFooter,
    Button,
    ButtonGroup,
    InputGroup,
    InputLeftElement,
    Badge,
    GridItem,
    StackDivider,
    Divider,
    extendTheme,
    MenuButton,
    Menu,
    Center
} from '@chakra-ui/react';
import {AiOutlineStar, AiFillAppstore, AiOutlineTwitter, AiOutlineSafetyCertificate, AiOutlineBell} from 'react-icons/ai'
import  {FiFacebook} from 'react-icons/fi';
import {RiLinkedinFill} from 'react-icons/ri';
import {CiSearch} from 'react-icons/ci';
import {ImYoutube} from 'react-icons/im';
import{AiFillAndroid, AiFillBell} from 'react-icons/ai';
import {BsPercent} from 'react-icons/bs'
// import {HiLanguage} from 'react-icons/hi'
import {GiDuration} from 'react-icons/gi'
import Link from 'next/link';
import  {MdOutlineQuiz} from 'react-icons/md'

const Details = () => {


    return(

        // <Box w={"100%"}>
        <Box>

                <Stack width={['600px','1000px', '1400px', '1500px']} 
                >
                    <Stack>
                        <Image
                            src="/images/imageFour.jpg"
                            alt="Profile image"
                            height={{base:'200', sm:'200', md:'350'}}
                            // width={{base:'200', sm:'200', lg:'1000000'}}
                        />
                    </Stack>
                </Stack>
            <Box display={{md:"flex"}} >
                <Box>
                    <Box display={"flex"}  mt={8} ml={"90px"}>
                        <Box mr={2}>
                            <Image
                                width={{base:'5', sm:'5', md:'5' }}
                                borderRadius={"full"}
                                   src="/images/imageBlog.jpeg"
                                   alt='small full border image'
                            />
                        </Box>
                        <Box mr={10}>
                            <Text>By Pearl</Text>
                        </Box>
                        <Box display={"flex"} mt={1} mr={2} color={"yellow"}  >
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                        </Box>
                        <Box>
                            <Text>vos avis s'il vous plait</Text>
                        </Box>
                    </Box>
                    <Box ml={"90px"} mt={25} >
                        <Box maxW={500} textAlign={{sm:'center', md:'center', lg:'justify'}} >
                            <Heading as='h2'  fontSize={['sm','lg','md','3xl']} 
                            >Machine Learning A-Z hands-On python jhbjollk
                            </Heading>
                        </Box>
                        <   Stack 
                            display={"flex"} 
                            mt={10} 
                            bg={"gray.200"} 
                            p={"6px"}
                            alignItems='center'
                        >
                            <HStack
                            spacing={{sm:"50px", md:"70px", lg:"100px"}}
                            >
                                <Link href='/'>Home</Link>
                                <Link href="/Details">Blog</Link>
                                <Link href='#'>Card</Link>
                                <Link href='#'>Card</Link>
                            </HStack>
                        </Stack>
                    </Box>
                    <Box
                      ml={"90px"}
                     mt={10}
                     maxW={700}
                     >
                        <Box>
                            <Heading
                                as='h4'
                                size='md'
                                fontSize={['xl','xl','2xl']}
                            >Machine Learning A-Z
                            </Heading>
                        </Box>
                        <Box
                             mt={5} 
                             textAlign={['left','left','justify']}
                        >
                           <Text 
                                fontSize={['sm','md','lg','xl']}
                            >
                                Profitez des fonctionnalités intelligentes de Google dans Chrome
                                Synchroniser et personnaliser Chrome sur vos appareils
                           </Text>
                            <Text 
                                mt={5} 
                                fontSize={['sm','md','lg','xl']}
                            >
                                Profitez des fonctionnalités intelligentes de Google dans Chrome
                                Synchroniser et personnaliser Chrome sur vos appareils.
                                Profitez des fonctionnalités intelligentes de Google dans Chrome
                                    Synchroniser et personnaliser Chrome sur vos appareils
                            </Text>
                        </Box>
                    </Box>
                    <Box 
                        ml={"90px"} 
                        mt={5} 
                        fontSize={['sm', 'md', 'md','xl']}
                    >
                        <Box><Heading  fontSize={['sm','md','lg','2xl']}>Machine Learning A-Z</Heading></Box>
                        <Box mt={3}>
                            <UnorderedList>
                                <ListItem fontSize={['sm','sm','md','xl']}>Lorem ipsum dolor sit amet sfadv</ListItem>
                                <ListItem fontSize={['sm','sm','md','xl']}>Consectetur adipiscing elit WSF </ListItem>
                                <ListItem fontSize={['sm','sm','md','xl']}>Integer molestie lorem at massa SF</ListItem>
                                <ListItem fontSize={['sm','sm','md','xl']}>Facilisis in pretium nisl aliquet AFWV FWdc</ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box  ml={"90px"} mt={5} maxW={700}>
                        <Box>
                            <Heading 
                                fontSize={['sm','sm','md','2xl']}
                            >
                                Machine Learning A-Z
                            </Heading>
                        </Box>
                        <Box mt={5} >
                            <Text 
                                fontSize={['sm','md','lg','xl']}
                            >
                                Profitez des fonctionnalités intelligentes de Google dans Chrome
                                Synchroniser et personnaliser Chrome sur vos appareils
                            </Text>
                        </Box>
                    </Box>
                </Box>

                    {/* bloc a droite */}
                    <Center>
                <Box  
                    // alignItems={[sm:'center', md:, 'center',]}
                    position={"relative"} 
                    top={['30px', '25px', '0px', '-50px']} 
                    left={{base:'center', sm:'center', md:'200'}}
                // left={200} 
                    maxW={['sm', 'sm', 'md']}
                    ml={{sm:'150px', md:'100px', lg:'0'}}
                >
                    <Card width={"380px"} bg={"white"}>
                        <CardBody >
                            <Image 
                                width={330}
                                src="/images/imageBlog.jpeg"
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                //  alignItems={['center', 'center', '0']}

                            />
                                <Stack
                                    divider={<StackDivider />}
                                    ml={4} mt={5} mr={7}
                                >
                                    <Box display={"flex"}>
                                        <Box>
                                          <Icon  as={ GiDuration} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                           <Text>aSAF</Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text>aSAFds</Text>
                                        </Box>
                                    </Box>
                                    <Box display={"flex"}>
                                        <Box>
                                            <Icon as={ AiOutlineBell} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                            <Text>
                                                View abb
                                            </Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text >
                                                Check 
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Flex>
                                        <Box>
                                            <Icon  as={ BsPercent} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                            <Text>
                                                Viewbhjn
                                            </Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text>
                                                Checkh
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Flex>
                                        <Box>
                                            <Icon  as={ MdOutlineQuiz} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                            <Text>
                                                Check out
                                            </Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text>
                                                Check
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Flex>
                                        <Box>
                                            <Icon  as={ AiOutlineSafetyCertificate} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                            <Text>
                                                See a
                                            </Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text>
                                                Check
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Flex>
                                        <Box>
                                            <Icon  as={ AiFillAndroid} w={12} color={"blue"}/>
                                        </Box>
                                        <Box>
                                            <Text>
                                                See a detailed
                                            </Text>
                                        </Box>
                                        <Box position={"relative"} left={"110px"}>
                                            <Text>
                                                Check 
                                            </Text>
                                        </Box>
                                    </Flex>
                                 </Stack>
                                <Stack mt={8} ml={4}>
                                    <Button  
                                    colorScheme='blue' 
                                    variant='outline' 
                                    bg={"blue.50"} 
                                    border={"2px"}>
                                     Price 50000000
                                    </Button>
                                    <Button variant='solid' colorScheme='blue'>
                                      Buy now
                                    </Button>
                                </Stack>
                                <Grid
                                    mt={5}
                                   display={"flex"} justifyContent={"center"}
                                >
                                   <GridItem>
                                     <Heading as='h5' size='sm'>Share</Heading>
                                    </GridItem>
                                   <GridItem>
                                     <Icon  as={RiLinkedinFill} w={5}/>
                                   </GridItem>
                                   <GridItem>
                                     <Icon  as={FiFacebook} w={5}/>
                                   </GridItem>
                                   <GridItem >
                                     <Icon  as={ AiOutlineTwitter} w={5}/>
                                   </GridItem>
                                    <GridItem >
                                      <Icon  as={ ImYoutube} w={5}/>
                                    </GridItem>
                                </Grid>
                        </CardBody>
                    </Card>
                </Box>
                </Center>
            </Box>
            <Box 
                mt={50} 
                ml={'90px'}
                textAlign={['center', 'center', 'justify', 'justify']}
            >
                <Text 
                    pt='2' 
                    fontSize='md' 
                    color={"blue"}
                    // ml={['249px', '80px','110px','90px']} 
                >
                      Related courses
                </Text>
                    <Heading as='h4'
                        //  ml={['180px', '80px','110px','90px']} 
                        // alignItems={['center', 'center', 'justify']}
                    >
                        Courses you may like
                    </Heading>
            </Box>
        <Box
            ml={{md:'90px'}} 

            display={{md:'flex'}} 
            // display={'flex'}
            // flex-direction={'column'}
            gap='40'
            mt={5}
            // direction={['column', 'row']}
        > 
            <Box >  
                <Card mt={7}
                     width={"300px"}
                    //  ml={{sm:'10px', md:'50px'}}
                 >
                    <CardBody p={0}>
                        <Image
                        width={'100%'}
                        src="/images/imageBlog.jpeg"
                        alt='Green double couch with wooden legs'
                        borderTopRadius="lg"
                        />
                        <Stack
                            direction='row'
                            position={"relative"}
                            top={-5}
                            left={5}
                            textAlign={"center"}  
                        >
                            <Badge
                                // textAlign='center'
                                variant='solid'
                                colorScheme='green'
                                width={"100px"}
                                p={"5px"}
                            >
                                Success
                            </Badge>
                        </Stack>
                        {/* j'ai ajoute la marge a gauche */}
                        <Stack ml={3} mr={3}>
                            <Box 
                                display={"flex"} 
                                position={"relative"} 
                            >
                                <Box mr={2}>
                                    <Image
                                        width={{base:'5', sm:'5', md:'5' }}
                                        borderRadius={"full"}
                                        src="/images/imageBlog.jpeg"
                                        alt="dfcgbjnk"
                                    />
                                </Box>
                                <Box mr={10}>
                                    <Text>By Pearl</Text>
                                </Box>
                            </Box>
                                <Box 
                                    position={"relative"} 
                                    top={"8px"} 
                                    bottom={"5px"}
                                >

                            </Box>
                        </Stack>
                        <Stack> </Stack>
                        <Stack mt='4' mb='6' ml='3'>
                            <Heading fontSize={['sm','sm', 'md','md']}
                            >
                                Living room Sofa xfhgn fbgn sdfghn hnmg ghhm hnmj
                            </Heading>
                            {/* <Text color='blue.600' fontSize='2xl'>
                                $450
                        </Text> */}
                        </Stack>
                    </CardBody>
                    <Divider />
                    <Box display='flex' mb='5' mt='5' ml='3' width={'50px'}>
                        <Box>
                            <Text>$5000</Text>
                        </Box>
                        <Box 
                            display={"flex"} 
                            color={"yellow"} 
                            position={"relative"} 
                            left={"120px"}
                        >
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box color={"black"}>
                                <Text>(2.5) </Text>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>

            <Box>  
                <Card mt={7}
                     width={"300px"}
                    //  ml={{sm:'10px', md:'50px'}}
                 >
                    <CardBody p={0}>
                        <Image
                        width={'100%'}
                        src="/images/imageBlog.jpeg"
                        alt='Green double couch with wooden legs'
                        borderTopRadius="lg"
                        />
                        <Stack
                            direction='row'
                            position={"relative"}
                            top={-5}
                            left={5}
                            textAlign={"center"}  
                        >
                            <Badge
                                // textAlign='center'
                                variant='solid'
                                colorScheme='green'
                                width={"100px"}
                                p={"5px"}
                            >
                                Success
                            </Badge>
                        </Stack>
                        {/* j'ai ajoute la marge a gauche */}
                        <Stack ml={3} mr={3}>
                            <Box 
                                display={"flex"} 
                                position={"relative"} 
                            >
                                <Box mr={2}>
                                    <Image
                                        width={{base:'5', sm:'5', md:'5' }}
                                        borderRadius={"full"}
                                        src="/images/imageBlog.jpeg"
                                        alt="dfcgbjnk"
                                    />
                                </Box>
                                <Box mr={10}>
                                    <Text>By Pearl</Text>
                                </Box>
                            </Box>
                                <Box 
                                    position={"relative"} 
                                    top={"8px"} 
                                    bottom={"5px"}
                                >

                            </Box>
                        </Stack>
                        <Stack> </Stack>
                        <Stack mt='4' mb='6' ml='3'>
                            <Heading fontSize={['sm','sm', 'md','md']}
                            >
                                Living room Sofa xfhgn fbgn sdfghn hnmg ghhm hnmj
                            </Heading>
                            {/* <Text color='blue.600' fontSize='2xl'>
                                $450
                        </Text> */}
                        </Stack>
                    </CardBody>
                    <Divider />
                    <Box display='flex' mb='5' mt='5' ml='3' width={'50px'}>
                        <Box>
                            <Text>$5000</Text>
                        </Box>
                        <Box 
                            display={"flex"} 
                            color={"yellow"} 
                            position={"relative"} 
                            left={"120px"}
                        >
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box color={"black"}>
                                <Text>(2.5) </Text>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>


            <Box>  
                <Card mt={7}
                     width={"300px"}
                    //  ml={{sm:'10px', md:'50px'}}
                 >
                    <CardBody p={0}>
                        <Image
                        width={'100%'}
                        src="/images/imageBlog.jpeg"
                        alt='Green double couch with wooden legs'
                        borderTopRadius="lg"
                        />
                        <Stack
                            direction='row'
                            position={"relative"}
                            top={-5}
                            left={5}
                            textAlign={"center"}  
                        >
                            <Badge
                                // textAlign='center'
                                variant='solid'
                                colorScheme='green'
                                width={"100px"}
                                p={"5px"}
                            >
                                Success
                            </Badge>
                        </Stack>
                        {/* j'ai ajoute la marge a gauche */}
                        <Stack ml={3} mr={3}>
                            <Box 
                                display={"flex"} 
                                position={"relative"} 
                            >
                                <Box mr={2}>
                                    <Image
                                        width={{base:'5', sm:'5', md:'5' }}
                                        borderRadius={"full"}
                                        src="/images/imageBlog.jpeg"
                                        alt="dfcgbjnk"
                                    />
                                </Box>
                                <Box mr={10}>
                                    <Text>By Pearl</Text>
                                </Box>
                            </Box>
                                <Box 
                                    position={"relative"} 
                                    top={"8px"} 
                                    bottom={"5px"}
                                >

                            </Box>
                        </Stack>
                        <Stack> </Stack>
                        <Stack mt='4' mb='6' ml='3'>
                            <Heading fontSize={['sm','sm', 'md','md']}
                            >
                                Living room Sofa xfhgn fbgn sdfghn hnmg ghhm hnmj
                            </Heading>
                            {/* <Text color='blue.600' fontSize='2xl'>
                                $450
                        </Text> */}
                        </Stack>
                    </CardBody>
                    <Divider />
                    <Box display='flex' mb='5' mt='5' ml='3' width={'50px'}>
                        <Box>
                            <Text>$5000</Text>
                        </Box>
                        <Box 
                            display={"flex"} 
                            color={"yellow"} 
                            position={"relative"} 
                            left={"120px"}
                        >
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box>
                                <Icon as={AiOutlineStar}/>
                            </Box>
                            <Box color={"black"}>
                                <Text>(2.5) </Text>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>

        </Box>
    </Box> 

    )
}
export default Details;

