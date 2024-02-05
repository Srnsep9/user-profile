import { SearchIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, HStack, IconButton, Input, InputProps } from '@chakra-ui/react'

import React, { useEffect } from 'react'
import useLocation from '../common/hooks/useLocation'

export default function LocationInput({ label, type, value, onChange, ...rest }: { label: string, type: string, value: string | number, onChange: (val: string | number) => void } & InputProps) {

    const { location, isLoading, fetchIpLocation } = useLocation()

    function fillLocation() {
        fetchIpLocation();
    }

    useEffect(() => {
        if (location) {
            onChange(location);
        }
    }, [location])
    
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <HStack spacing={0}>
                <Input isDisabled={isLoading} bg="white" roundedRight="0" type={type} value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
                <IconButton isLoading={isLoading} size="md" h="38px" roundedLeft="0" aria-label='Search database' icon={<SearchIcon />} onClick={fillLocation} />
            </HStack>
        </FormControl>
    )
}
