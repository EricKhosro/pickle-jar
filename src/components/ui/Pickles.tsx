import { DefaultTheme } from "styled-components";
import { Pickle } from "@/components/sections/common.styles";
import { PickleConfig } from "@/components/sections/types";

export default function Pickles({
  items,
  color = "surfaceRaised",
  gsapHidden = true,
}: {
  items: PickleConfig[];
  color?: keyof DefaultTheme["colors"];
  gsapHidden?: boolean;
}) {
  return (
    <>
      {items.map((p, i) => (
        <Pickle
          key={i}
          className="pickle"
          aria-hidden="true"
          data-gsap-hidden={gsapHidden || undefined}
          data-rotate={p.rotate}
          data-speed={p.speed}
          $top={p.top}
          $left={p.left}
          $w={p.w}
          $color={color}
          $hideOnMobile={p.hide}
        />
      ))}
    </>
  );
}
