import {Flex,
    Heading,
    HStack,
    // Link,
    Icon,
    useMediaQuery
} from '@chakra-ui/react';
import {AiOutlineMenu} from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {

    return(
        <Flex px={"200px"} py={"20px"}
              width={{sm:'100%', md:'100%'}} bg={"blue.900"}
              alignItems={"center"}
              justifyContent={"space-between"}
              color={"white"}
        >
            <Flex   alignItems={"flex-start"}
                // fontSize={16}
                    fontSize={{base:'8', sm: '10', md:'16'}}
            >
                <Heading as='h4' size='md'mr={"100px"}>Myklub</Heading>
                <HStack spacing={"40px"}>
                    <Link href='/'>Home</Link>
                    <Link href="/Details">Blog</Link>
                    <Link href='#'>Card</Link>
                </HStack>
            </Flex>
            {/*<Flex></Flex>*/}
            {/*<Link color={"white"} >*/}
                {/*<Icon as={AiOutlineMenu} mt={"6px"} width={25} h={6}/>*/}
            {/*</Link>*/}
        </Flex>

    )
}

export default Header;