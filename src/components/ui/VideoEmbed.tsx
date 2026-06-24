"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

type VideoEmbedProps = {
  src: string;
  title: string;
  poster?: string;
};

type ParsedVideo = {
  provider: "youtube" | "vimeo";
  id: string;
};

const parseVideo = (url: string): ParsedVideo | null => {
  const youtube = url.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/,
  );
  if (youtube) return { provider: "youtube", id: youtube[1] };

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { provider: "vimeo", id: vimeo[1] };

  return null;
};

const Frame = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundDeep};

  & img,
  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
  }
`;

const Play = styled.button`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(12, 12, 40, 0.32);
  cursor: pointer;
  transition: background 0.2s ease;

  ${({ theme }) => theme.media.canHover} {
    &:hover {
      background: rgba(12, 12, 40, 0.18);
    }

    &:hover span {
      transform: scale(1.08);
    }
  }
`;

const Disc = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s ease;

  &::after {
    content: "";
    width: 0;
    height: 0;
    margin-left: 6px;
    border-left: 22px solid ${({ theme }) => theme.colors.onPrimary};
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
  }
`;

export default function VideoEmbed({ src, title, poster }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const video = parseVideo(src);

  const youtubeMax = video
    ? `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
    : "";
  const youtubeHq = video
    ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
    : "";

  const [thumbnail, setThumbnail] = useState(
    poster ?? (video?.provider === "youtube" ? youtubeMax : undefined),
  );

  if (!video) return null;

  const embedSrc =
    video.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${video.id}?autoplay=1`;

  return (
    <Frame>
      {playing ? (
        <iframe
          src={embedSrc}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <>
          {thumbnail && (
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes="(max-width: 720px) 90vw, 680px"
              onError={() => {
                if (thumbnail === youtubeMax && youtubeHq) {
                  setThumbnail(youtubeHq);
                }
              }}
            />
          )}
          <Play
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title} trailer`}
          >
            <Disc />
          </Play>
        </>
      )}
    </Frame>
  );
}
