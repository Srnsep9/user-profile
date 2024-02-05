import { useState } from "react";
import { getUserInfo } from "../services/user";
import { Profile } from "../types/UserProfile";

export default function useUserInfo() {
    const [userInfo, setUserInfo] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    function fetchUserInfo() {
        setIsLoading(true)
        getUserInfo().then((data) => {
            setUserInfo(data.profile)
            setIsLoading(false)
        });
    }

    return { userInfo, isLoading, setUserInfo, fetchUserInfo }
}