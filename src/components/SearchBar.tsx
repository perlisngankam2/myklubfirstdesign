import {Flex, Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {CiSearch} from 'react-icons/ci'

const SearchBar = () => {
    return(
        <Flex  mt={10} ml={200} >
            <Box  width={"400px"}  >
                <InputGroup>
                    <InputLeftElement>
                    <Icon  as={ CiSearch} h={8} w={30}/>
                    </InputLeftElement>
                    <Input type="text" placeholder="Search..."/>
                </InputGroup>
            </Box>

            <Stack 
                // // display={{base:'0', md:"flex"}}
                ml={"90px"} 
                // gap='20'
                mt={5} 
                alignItems='center'
                // gab={{sm:"50px", md:"100px"}}
                spacing={"20"}
                direction={{base:"column", md:"row"}}
            >
                <Box     
                position="relative" 
                >
                    <Card width={"380px"}>
                        <CardBody p={0}>
                            <Image
                                width={"100%"}
                                src="/images/blogTree.jpg"
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
                                            alt='hiiiii'
                                        />
                                    </Box>
                                    <Box mr={10}>
                                        <Text>By Pearl</Text>
                                    </Box>
                                </Box>
                                <Box 
                                    position={"relative"} 
                                    top={"8px"} 
                                    // bottom={"5px"}
                                >
                                    <Box>
                                        <Heading as='h4' size='sm'>
                                            View a szdfhg fsdgfh sv FZV
                                        </Heading>
                                    </Box>
                                </Box>
                                <Divider 
                                    orientation='horizontal' 
                                    position ="relative" 
                                    top={"15px"} 
                                    bottom={"15px"}
                                />
                            {/*  jjfcjgvkbjhlnkm ,. */}
                                <Box 
                                    display={"flex"} 
                                    position={"relative"} 
                                    top={5} 
                                >
                                    <Box >
                                        <Text>$5000</Text>
                                    </Box>
                                    <Box 
                                        display={"flex"} 
                                        color={"yellow"} 
                                        position={"relative"} 
                                        left={"172px"}
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
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
                <Box>
                <Card width={"380px"}>
                        <CardBody p={0}>
                            <Image
                                width={"100%"}
                                src="/images/blogTree.jpg"
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
                                    <Box>
                                        <Heading as='h4' size='sm'>
                                            View a szdfhg fsdgfh sv FZV
                                        </Heading>
                                    </Box>
                                </Box>
                                <Divider 
                                    orientation='horizontal' 
                                    position ="relative" 
                                    top={"15px"} 
                                    bottom={"15px"}
                                />
                            {/*  jjfcjgvkbjhlnkm ,. */}
                                <Box display={"flex"} 
                                    position={"relative"} 
                                >
                                    <Box >
                                        <Text>$5000</Text>
                                    </Box>
                                    <Box 
                                        display={"flex"} 
                                        color={"yellow"} 
                                        position={"relative"} 
                                        left={"172px"}
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
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
                <Box >
                <Card width={"380px"}>
                        <CardBody p={0}>
                            <Image
                                width={"100%"}
                                src="/images/blogTree.jpg"
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
                                    <Box>
                                        <Heading as='h4' size='sm'>
                                            View a szdfhg fsdgfh sv FZV
                                        </Heading>
                                    </Box>
                                </Box>
                                <Divider 
                                    orientation='horizontal' 
                                    position ="relative" 
                                    top={"15px"} 
                                    bottom={"15px"}
                                />
                                        {/*  jjfcjgvkbjhlnkm ,. */}
                                <Box display={"flex"} 
                                    position={"relative"} 
                                >
                                    <Box >
                                        <Text>$5000</Text>
                                    </Box>
                                    <Box 
                                        display={"flex"} 
                                        color={"yellow"} 
                                        position={"relative"} 
                                        left={"172px"}
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
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Stack>
        </Flex>
    )
}
export default SearchBar;