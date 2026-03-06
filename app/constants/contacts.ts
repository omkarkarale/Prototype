export interface ContactLink {
   label: string;
   url: string;
   icon: string;
   type: "github" | "email" | "instagram" | "spotify";
}

export const contacts: ContactLink[] = [
   {
      label: "GitHub",
      url: "https://github.com/omkarkarale",
      icon: "github",
      type: "github",
   },
   {
      label: "Email",
      url: "mailto:omi.rkarale@gmail.com",
      icon: "email",
      type: "email",
   },
   {
      label: "Instagram",
      url: "https://www.instagram.com/rakmo.666/",
      icon: "instagram",
      type: "instagram",
   },
   {
      label: "Spotify",
      url: "https://open.spotify.com/user/31b6amdi7i7nokm6r5kid5iitsnm",
      icon: "spotify",
      type: "spotify",
   },
];
