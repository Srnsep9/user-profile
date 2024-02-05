import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

export function FormControlInput({ label, type, value, onChange, ...rest }: { label: string, type: string, value: string, onChange: (val: string) => void } & InputProps) {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input bg="white" type={type} value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
        </FormControl>
    )
}