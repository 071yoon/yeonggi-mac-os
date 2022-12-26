import { folderInterface } from "../interfaces/folder.interface";

export const folderData: folderInterface[] = [
  {
    type: "application",
    name: "Github",
    icon: "github.png",
    link: "https://github.com/071yoon",
  },
  {
    type: "application",
    name: "Blog",
    icon: "blog.png",
    link: "https://velog.io/@071yoon",
  },
  {
    type: "folder",
    name: "Projects",
    icon: "folder.png",
    children: [
      {
        type: "folder",
        name: "modoco",
        icon: "modoco.png",
        children: [
          {
            type: "application",
            name: "page",
            icon: "modoco.png",
            link: "https://modocode.com",
          },
          {
            type: "application",
            name: "repository",
            icon: "modoco.png",
            link: "https://github.com/SWM-FIRE",
          },
        ],
      },
      {
        type: "application",
        name: "decrypto",
        icon: "decrypto.png",
        link: "https://github.com/AndroidNetrunner/decrypto",
      },
    ],
  },
  {
    type: "application",
    name: "Source",
    icon: "github-desktop.png",
    link: "https://github.com/071yoon/about_yeonggi",
  },
  {
    type: "application",
    name: "modoco",
    icon: "modoco.png",
    link: "https://modocode.com",
  },
];
