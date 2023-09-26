import { UserIcon } from "../../../../icons/User";
import { Roles } from "../../../../icons/Roles";
import { Policies } from "../../../../icons/Policies";
import { Game } from "../../../../icons/Game";
import { Resources } from "../../../../icons/Resources";

export const userData = [
  {
    icon: <UserIcon stroke="#3CDC86" />,
    id: 1,
    text: "IAM Users",
    info:14,
    bg: "rgba(66, 204, 88, 0.15)",
  },
  {
    icon: <Roles />,
    id: 2,
    text: "IAM Roles",
    info:91,
    bg: "rgba(73, 152, 238, 0.15)",
  },
  {
    icon: <Policies />,
    id: 3,
    text: "IAM Policies",
    info:72,
    bg: "rgba(242, 93, 93, 0.15)",
  },
  {
    icon: <Resources />,
    id: 4,
    text: "Compute Resources",
    info:35,
    bg: "rgba(244, 167, 50, 0.15)",
  },
  {
    icon: <Game stroke="#9B53F8" fill="#9B53F8" />,
    id: 5,
    text: "Games",
    info:21,
    bg: "rgba(155, 83, 248, 0.15)",
  },
];
