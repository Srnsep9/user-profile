import { useState } from "react";
import { getIpLocation } from "../services/location";

export default function useLocation() {
    const [location, setLocation] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    function fetchIpLocation() {
        setIsLoading(true)
        getIpLocation().then((data) => {
            if (data.city && data.region)
            setLocation(`${data.city}, ${data.region}`)
            setIsLoading(false)
        });
    }

    return { location, isLoading, fetchIpLocation }
}