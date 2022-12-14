import {Flex,Box, Icon, SimpleGrid} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from './Header';
import SearchBar from "./SearchBar";
import Hero from './Hero';

const Blog =() =>{
    return(
        <div>
           <Header/>
            <SearchBar/>
            <Hero/>
            <SimpleGrid
                columns={{ sm: 1, md: 1 }}
                p={3}
                textAlign={"right"} mb={-50}
            >
                    <Box >
                        <Icon  as={ FaInstagram}  h={8} w={30}/>
                    </Box>
                    <Box>
                        <Icon  as={FaLinkedin} h={8} w={30}/>
                    </Box>
                    {/*<Box>*/}
                        {/*<Icon  as={ FaInstagram} h={8} w={30}/>*/}
                    {/*</Box>*/}
            </SimpleGrid>
        </div>
    )
}

export default Blog;