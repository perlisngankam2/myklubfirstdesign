import {Flex, Stack, Heading,Grid, Image, Box} from '@chakra-ui/react';
// import Image from "next/image";
const Hero = () => {
    return(
        <Flex mt={15}  >
            <Stack
                flex={"0"}
                // padding={40}
                // align={"center"}
                justify={"center"} mt={-70}
            >
                <Stack  width={"348px"} ml={40} mr={"120px"}>
                    <Heading > Welcome in my blog</Heading>
                    <Heading size={{base:"200px", sm:"300px", lg:"1000px"}}
                    >
                        Je m'appelle perlis et je suis formateur de la plateforme myklub
                    </Heading>
                </Stack>
            </Stack>
            <Stack
                // flex={"8"}
                borderRadius={"100px"}
            >
                <Grid placeItems={"center"}
                      // position={"fixed"}
                >
                    <Image
                           src="/images/imageBlog.jpeg"
                           alt="Profile image"
                           height={{base:'200', sm:'200', md:'300'}}
                           width={{base:'200', sm:'200', md:'300'}}
                           borderRadius='full'
                    />
                </Grid>
            </Stack>
        </Flex>
    )
}
export default Hero;