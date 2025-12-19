import type { Social } from "./types";

export const SiteConfig = {
    siteTitle: "NAME",
    siteDescription: "DESCRIPTION",
}

export const UserConfig = {
    name: "USER NAME",
    avatar: "AVATAR URL",
    bio: "BIO",
    socials: [
        { link: "https://github.com/USERNAME", icon: "mdi:github" },
        { link: "https://linkedin.com/in/USERNAME", icon: "mdi:linkedin" },
        { link: "https://mastodon.social/@USERNAME", icon: "mdi:mastodon" }
    ] as Social[],
}