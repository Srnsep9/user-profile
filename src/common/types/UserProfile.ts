
export interface UserProfileResp {
    success: boolean;
    profile: Profile;
}

export interface Profile {
    user_uuid:    string;
    email:        string;
    username:     string;
    display_name: string;
    location:     string;
    biography:    string;
    avatar_uri:   string;
    banner_uri:   string;
    badge:        string;
    socials:      null;
    created_at:   string;
}
