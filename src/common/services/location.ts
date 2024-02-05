import { LocationResp } from "../types/Location";

const API_KEY = process.env.REACT_APP_ABSTRACT_API_KEY;
const API_URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`

export async function getIpLocation(): Promise<LocationResp> {
    const response = await fetch(API_URL);
    return response.json()
}