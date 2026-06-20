import { Grid } from "./FeatureCards.styles";
import FeatureCard from "./FeatureCard";
import { Feature } from "../types";

const PICKLE = "/assets/illustrations/pickle.svg";
const JAR = "/assets/illustrations/jar.svg";
const STAR = "/assets/illustrations/star.svg";

const RATIO = {
  pickle: 106 / 164,
  jar: 702 / 790,
  star: 1,
};

const FEATURES: Feature[] = [
  {
    title: "Made to be played",
    aspect: "523 / 248",
    art: [
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "4%",
        left: "37%",
        w: "13%",
        color: "surfaceRaised",
        rotate: -160,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "26%",
        left: "55%",
        w: "19%",
        color: "surfaceRaised",
        rotate: 0,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "34%",
        left: "31%",
        w: "16%",
        color: "surfaceRaised",
        rotate: 90,
      },
      {
        src: STAR,
        ratio: RATIO.star,
        top: "35%",
        left: "50%",
        w: "8%",
        color: "primary",
      },
    ],
  },
  {
    title: "Small team, big flavor",
    aspect: "523 / 248",
    art: [
      {
        src: JAR,
        ratio: RATIO.jar,
        top: "40%",
        left: "36%",
        w: "25%",
        color: "surface",
        rotate: 40,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "65%",
        left: "38%",
        w: "6.5%",
        color: "primary",
        rotate: -140,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "73%",
        left: "45%",
        w: "8%",
        color: "primary",
        rotate: 40,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "48%",
        left: "43%",
        w: "9%",
        color: "primary",
        rotate: -85,
      },
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "29%",
        left: "52%",
        w: "9%",
        color: "primary",
        rotate: 20,
      },
    ],
  },
  {
    title: "Creative minds, simple magic",
    aspect: "523 / 200",
    art: [
      {
        src: PICKLE,
        ratio: RATIO.pickle,
        top: "25%",
        left: "40%",
        w: "20%",
        color: "surface",
        rotate: 0,
      },
      {
        src: STAR,
        ratio: RATIO.star,
        top: "8%",
        left: "63%",
        w: "5.5%",
        color: "primary",
      },
      {
        src: STAR,
        ratio: RATIO.star,
        top: "90%",
        left: "60%",
        w: "6%",
        color: "primary",
      },
      {
        src: STAR,
        ratio: RATIO.star,
        top: "30%",
        left: "35%",
        w: "10%",
        color: "primary",
      },
    ],
  },
];

export default function FeatureCards() {
  return (
    <Grid>
      {FEATURES.map((feature) => (
        <FeatureCard feature={feature} key={feature.title} />
      ))}
    </Grid>
  );
}
