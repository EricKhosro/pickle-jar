"use client";

import { Art, Card, CardTitle } from "./FeatureCards.styles";
import { Feature } from "./FeatureCards";
import { Shape } from "../common.styles";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const kindOf = (src: string) => src.split("/").pop()!.replace(".svg", "");

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLLIElement>(null);

  useGSAP(
    () => {
      const card = ref.current!;
      const jar = card.querySelector<HTMLElement>(".art-jar");
      const pickles = gsap.utils.toArray(".art-pickle", card);
      const stars = gsap.utils.toArray(".art-star", card);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: card, start: "top 80%", once: true },
      });

      if (jar) tl.from(jar, { y: 40, autoAlpha: 0, duration: 0.8 });
      if (pickles && pickles.length)
        tl.from(pickles, { y: -120, autoAlpha: 0, stagger: 0.1 });

      if (stars && stars.length)
        tl.from(stars, { scale: 0, rotation: 270, autoAlpha: 0 });
    },
    { scope: ref },
  );

  return (
    <Card className="card-reveal" ref={ref}>
      <Art aria-hidden="true">
        {feature.art.map((piece, i) => (
          <Shape
            key={i}
            className={`art-${kindOf(piece.src)}`}
            $src={piece.src}
            $ratio={piece.ratio}
            $top={piece.top}
            $left={piece.left}
            $w={piece.w}
            $color={piece.color}
            $rotate={piece.rotate}
          />
        ))}
      </Art>
      <CardTitle>{feature.title}</CardTitle>
    </Card>
  );
};

export default FeatureCard;
