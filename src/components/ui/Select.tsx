"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap, useGSAP } from "@/lib/gsap";
import { brand } from "@/styles/theme";

const Wrap = styled.div`
  position: relative;
`;

const Trigger = styled.button<{ $invalid?: boolean; $placeholder: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 999px;
  padding: 16px 24px;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: ${({ $placeholder }) =>
    $placeholder ? "rgba(255, 255, 255, 0.5)" : brand.white};
  background: rgba(255, 255, 255, 0.07);
  border: 2px solid
    ${({ $invalid }) =>
      $invalid ? brand.orange : "rgba(255, 255, 255, 0.16)"};
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:focus-visible {
    outline: none;
    border-color: ${brand.orange};
  }
`;

const Chevron = styled.span<{ $open: boolean }>`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  background: ${brand.white};
  -webkit-mask: url("/assets/icons/chevron.svg") no-repeat center / contain;
  mask: url("/assets/icons/chevron.svg") no-repeat center / contain;
  transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);
  transition: transform 0.3s ease;
`;

const List = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 5;
  display: none;
  overflow: hidden;
  border-radius: 20px;
  background: ${brand.indigoDarkest};
  border: 2px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.4);
`;

const Option = styled.li<{ $active: boolean }>`
  padding: 13px 24px;
  cursor: pointer;
  color: ${brand.white};
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.12)" : "transparent"};
  transition: background 0.15s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      background: rgba(255, 255, 255, 0.16);
    }
  }
`;

type SelectProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: string[];
  placeholder?: string;
  invalid?: boolean;
};

export default function Select({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Select",
  invalid,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;
      if (open) {
        gsap.set(list, { display: "block" });
        gsap.fromTo(
          list,
          { height: 0, autoAlpha: 0, y: -8 },
          { height: "auto", autoAlpha: 1, y: 0, duration: 0.3, ease: "power3.out" },
        );
      } else {
        gsap.to(list, {
          height: 0,
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => gsap.set(list, { display: "none" }),
        });
      }
    },
    { dependencies: [open] },
  );

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (
        wrapRef.current &&
        e.target instanceof Node &&
        !wrapRef.current.contains(e.target)
      ) {
        setOpen(false);
        onBlur?.();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onBlur]);

  const select = (option: string) => {
    onChange(option);
    setOpen(false);
    onBlur?.();
  };

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type="button"
        id={id}
        $invalid={invalid}
        $placeholder={!value}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={invalid}
        onClick={() => setOpen((v) => !v)}
      >
        {value || placeholder}
        <Chevron $open={open} aria-hidden="true" />
      </Trigger>

      <List ref={listRef} role="listbox">
        {options.map((option) => (
          <Option
            key={option}
            role="option"
            aria-selected={option === value}
            $active={option === value}
            onClick={() => select(option)}
          >
            {option}
          </Option>
        ))}
      </List>
    </Wrap>
  );
}
