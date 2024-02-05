import { Button, Container, VStack, Text, HStack, Box, Center, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CardWithAvatar } from '../components/CardWithAvatar';
import { UserInfo } from '../components/UserInfo';
import { FormControlInput } from '../components/FormControlInput';
import useUserInfo from '../common/hooks/useUserInfo';
import useStatus from '../common/hooks/useStatus';
import localJsonFile from "../resources/data.json"
import LocationInput from '../components/LocationInput';
import { CardWithAvatarSkeleton } from '../components/CardWithAvatarSkeleton';
import UserProfileFormSkeleton from '../components/UserProfileFormSkeleton';

const INIT = {
    email: "",
    displayName: "",
    avatar: "",
    name: "",
    age: "",
    gender: "",
    location: "",
    interest1: "",
    interest2: "",
}

export default function UserProfile() {

    const { userInfo, setUserInfo, fetchUserInfo: fetchUserInfoApi } = useUserInfo();

    const [formData, setFormData] = useState(INIT);

    const { status, setStatus } = useStatus()

    useEffect(() => {
        const data = localStorage.getItem("formData");
        const userInfo = localStorage.getItem("userInfo");

        if (data) {
            setFormData(JSON.parse(data))
        }

        if (userInfo) {
            setUserInfo(JSON.parse(userInfo))
        }

        if (data || userInfo) {
            setStatus("Form data loaded from local storage 🎉")

        } else if (!data && !userInfo) {
            // if no cache fetch data from API
            fetchUserInfoApi()
        }
    }, [])


    useEffect(() => {
        if (userInfo) {
            setFormData({ ...formData, email: userInfo.email, name: "hhelo" })
        }
    }, [userInfo])

    function save() {
        localStorage.setItem("formData", JSON.stringify(formData));
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setStatus("Saved to local storage 🎉")
    }

    function clear() {
        setFormData(INIT);
        if (userInfo) {
            setFormData({ ...INIT })
            setUserInfo(null)
            fetchUserInfoApi()
        }
        localStorage.clear();
        setStatus("Cleared form and local storage 🎉")
    }

    function loadJson() {
        const data = localJsonFile;
        setFormData(data.data);
        setUserInfo(data.profile);
        setStatus("Data loaded from json 🎉")
    }

    return (
        <Container h="100%" maxW="3xl">
            <HStack alignItems="flex-start">
                <VStack w="400px">
                    {userInfo ?
                        <CardWithAvatar avatarProps={{ src: userInfo?.avatar_uri, name: userInfo?.display_name }}>
                            <UserInfo name={userInfo?.display_name} bio={userInfo?.username} />
                        </CardWithAvatar> :
                        <CardWithAvatarSkeleton />
                    }
                </VStack>

                {userInfo ?
                    <VStack w="100%" bg="gray.200" p="5" rounded="md">
                        <>
                            <FormControlInput isDisabled label="Email address" type="email" value={formData.email} onChange={(data) => setFormData({ ...formData, email: data as string })} />
                            <FormControlInput label="Name" type="text" value={formData.name} onChange={(data) => setFormData({ ...formData, name: data as string })} />
                            <FormControlInput label="Age" type="number" value={formData.age} onChange={(data) => setFormData({ ...formData, age: data as string })} />
                            <FormControlInput label="Gender" type="text" value={formData.gender} onChange={(data) => setFormData({ ...formData, gender: data as string })} />
                            <LocationInput label="Location" type="text" value={formData.location} onChange={(data) => setFormData({ ...formData, location: data as string })} />
                            <FormControlInput label="Interest 1" type="text" value={formData.interest1} onChange={(data) => setFormData({ ...formData, interest1: data as string })} />
                            <FormControlInput label="Interest 2" type="text" value={formData.interest2} onChange={(data) => setFormData({ ...formData, interest2: data as string })} />

                            <HStack w="100%" justifyContent="flex-end" mt="2">
                                <Button colorScheme="blue" variant="ghost" onClick={() => window.location.reload()}>Refresh</Button>
                                <Button colorScheme="blue" variant="ghost" onClick={loadJson}>Load JSON</Button>
                                <Button colorScheme="blue" variant="ghost" onClick={clear}>Clear</Button>
                                <Button colorScheme="blue" onClick={save}>Save</Button>
                            </HStack>

                            {status ? <Text color="green.500" fontSize="sm">{status}</Text> : <Box h="20px"></Box>}
                        </>
                    </VStack>
                    :
                    <UserProfileFormSkeleton />
                }

            </HStack>
        </Container>
    )
}
