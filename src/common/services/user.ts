import { MOCK_API_DATA } from "../constants/mock";
import { UserProfileResp } from "../types/UserProfile";

const AUTH_HEADER = { "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjZjdmODcyNzA5MWU0Yzc3YWE5OTVkYjYwNzQzYjdkZDJiYjcwYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWR0ZXN0LTk2YWJlIiwiYXVkIjoiYWR0ZXN0LTk2YWJlIiwiYXV0aF90aW1lIjoxNzA1NjA2NDE1LCJ1c2VyX2lkIjoiczFINTJ6OTNFcmJPaGV0SGhIMEE3ZUxCOElqMiIsInN1YiI6InMxSDUyejkzRXJiT2hldEhoSDBBN2VMQjhJajIiLCJpYXQiOjE3MDU2MDY0MTUsImV4cCI6MTcwNTYxMDAxNSwiZW1haWwiOiJucG1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5wbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jT9vIRl9yLgOcEvGfenfTygx1bOG4DYvhgJkbXFabQ6soDjlWRVUW2yWN_BmRlwMN8zoG04EMNrDKA18EB_5fFFjnKfl5VryibI4R3_K6afXYLQr-35EzVuU1LtjgmwAQ3xIQA1nkW58KVIE7mJiI9XS3lZjTGJ66XLyZHmOsvqreZiU32p6LxoujGRmLnl2Ha8Kwkb9CM_uOzPNkgQiPQG5wDnn_P9BJUx0DGljdA60D3_2JPuMuFYBMlD7o1SnVMKdomqlF2NeQf9wysp5uUklAfBblPURLf0bZ0Ohi7nGKr6iQUvq8rUjFdCSfcGuRmWFWDUj_yE0vVeXenZa5A" }

const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export async function getUserInfo(): Promise<UserProfileResp> {
    // comment the 2 lines below to fetch from API
    await sleep(3000);
    return MOCK_API_DATA;

    const response = await fetch("https://api-staging-0.gotartifact.com/v2/users/me",
        { headers: AUTH_HEADER }
    );
    return response.json();
}