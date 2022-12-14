import {Flex, Wrap, WrapItem, Avatar, AvatarBadge, AvatarGroup } from  '@chakra-ui/react';

const TeacherDesign = () => {
    return(
            <Flex
                background={"gray.300"}
            >
                <Wrap>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Wrap>
            </Flex>
    )
}

export default TeacherDesign;