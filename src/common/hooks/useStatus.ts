import { useEffect, useRef, useState } from "react";

const TIMEOUT = 5000

export default function useStatus() {
    const [status, setStatus] = useState("");
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
       if (status) {
        timer.current = setTimeout(() => {
            setStatus("")
        }, TIMEOUT)
       }
       return () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
       }
    }, [status])

    return {status, setStatus}
}