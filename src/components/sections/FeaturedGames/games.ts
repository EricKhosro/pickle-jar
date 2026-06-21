import { Game } from "../types";

const appShot = (path: string) =>
  `https://is1-ssl.mzstatic.com/image/thumb/${path}/1176x2088bb.png`;

const mv3Shot = (path: string) =>
  `https://is1-ssl.mzstatic.com/image/thumb/${path}/1176x2544bb.png`;

const MV1_SHOTS = [
  appShot(
    "Purple114/v4/d7/8e/67/d78e67cf-399f-ef9d-9da9-c673af363773/mzl.xhkwkvnd.png",
  ),
  appShot(
    "Purple114/v4/19/1e/5a/191e5abf-6f8a-b882-8a10-c7f289819470/mzl.xsjsgbpi.png",
  ),
  appShot(
    "Purple114/v4/9c/3d/9b/9c3d9bb0-6ae5-f0dd-4349-32aba7f268ec/mzl.sbjggnvt.png",
  ),
];

const MV2_SHOTS = [
  appShot(
    "Purple113/v4/2b/04/cd/2b04cdd4-23fd-ea6d-242f-412bf2133b62/mzl.jlehdvtb.png",
  ),
  appShot(
    "Purple123/v4/3e/0b/28/3e0b28d8-fd8f-0c1e-ee12-ff9475cbcf67/mzl.anpxljma.png",
  ),
  appShot(
    "Purple123/v4/2b/55/52/2b5552ed-8234-50cf-9feb-60a695e9d2dd/mzl.afvgtstf.png",
  ),
  appShot(
    "Purple113/v4/9a/45/d1/9a45d1dc-3d26-b274-fa1f-87f7d46ea33c/mzl.lahsahln.png",
  ),
];

const MV3_SHOTS = [
  mv3Shot(
    "PurpleSource221/v4/d8/8c/63/d88c6316-35ae-eb4e-90dc-6dfdf2cff8b6/1_Screenshots_1284x2778_Belltower.png",
  ),
  mv3Shot(
    "PurpleSource221/v4/70/36/77/70367792-78df-a2a2-b6e4-9dc25fb958e5/2_Screenshots_1284x2778_Wheat.png",
  ),
  mv3Shot(
    "PurpleSource211/v4/aa/fc/a6/aafca68e-076b-bc6b-af70-a579f2c6c2a8/3_Screenshots_1284x2778_BoatemSailing.png",
  ),
  mv3Shot(
    "PurpleSource221/v4/46/f5/2e/46f52e05-5f27-96bc-b350-9457e5db0ae0/4_Screenshots_1284x2778_Portals.png",
  ),
];

export const GAMES: Game[] = [
  {
    id: "monument-valley",
    name: "Monument Valley",
    tagline: "Guide Ida through impossible monuments",
    description:
      "Guide the silent princess Ida through mazes of optical illusions and impossible objects in the beloved, award-winning puzzle classic that started it all.",
    icon: "/assets/icons/star.svg",
    accent: "primary",
    stats: [
      { label: "Chapters", value: "10" },
      { label: "Pace", value: "Chill" },
    ],
    cover: MV1_SHOTS[0],
    screenshots: MV1_SHOTS,
    trailer: "https://www.youtube.com/watch?v=mh_4JJNULZ0",
    links: {
      steam: "https://store.steampowered.com/app/1927720/Monument_Valley/",
      appstore: "https://apps.apple.com/us/app/monument-valley/id728293409",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley",
    },
  },
  {
    id: "monument-valley-2",
    name: "Monument Valley 2",
    tagline: "Impossible architecture, gentle puzzles",
    description:
      "Guide Ro and her child through illusionary pathways and delightful puzzles. A serene, hand-crafted journey through surreal, impossible architecture.",
    icon: "/assets/icons/lamp.svg",
    accent: "surfaceRaised",
    stats: [
      { label: "Chapters", value: "14" },
      { label: "Pace", value: "Chill" },
    ],
    cover: MV2_SHOTS[0],
    screenshots: MV2_SHOTS,
    trailer: "https://www.youtube.com/watch?v=tW2KUxyq8Vg",
    links: {
      steam: "https://store.steampowered.com/app/1927740/Monument_Valley_2/",
      appstore: "https://apps.apple.com/us/app/monument-valley-2/id1187265767",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ustwo.monumentvalley2",
    },
  },
  {
    id: "monument-valley-3",
    name: "Monument Valley 3",
    tagline: "Set sail through impossible worlds",
    description:
      "Guide Noor across luminous seas and mind-bending landscapes that unfold like origami in the third chapter of the award-winning Monument Valley series.",
    icon: "/assets/icons/controller.svg",
    accent: "accent",
    stats: [
      { label: "Chapters", value: "8" },
      { label: "Pace", value: "Chill" },
    ],
    cover: MV3_SHOTS[0],
    screenshots: MV3_SHOTS,
    trailer: "https://www.youtube.com/watch?v=h1IgIQE3Pzk",
    links: {
      steam: "https://store.steampowered.com/app/3132930/Monument_Valley_3/",
      appstore: "https://apps.apple.com/us/app/monument-valley-3/id6443563379",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ustwogames.mv3",
    },
  },
];
