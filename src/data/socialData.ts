interface SocialAccount {
  platform: string;
  url: string;
  handle?: string;
  hidden?: boolean;
}

export const Socials: SocialAccount[] = [
  {
    platform: "Email",
    url: "mailto:elliottschmechel@gmail.com"
  },
  {
    platform: "GitHub",
    url: "https://github.com/eschmechel",
    handle: "@eschmechel"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/eschmechel",
    handle: "@eschmechel"
  },

  {
    platform: "Itch.io",
    url: "https://eragondev.itch.io",
    handle: "@eragondev"
  },
  {
    platform: "Discord",
    url: "https://discordapp.com/users/204092624456384513",
    hidden: true
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/eragondev",
    handle: "@eragondev"
  },
  {
    platform: "Bluesky",
    url: "https://bsky.app/profile/eschmechel.bsky.social",
    handle: "@eschmechel.bsky.social"
  }
];

export default Socials;