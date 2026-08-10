"use client";

import { MARKETS_PRESENCE } from "@/data/markets";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiArrowDown, HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const HERO_VIDEO = "/videos/home-hero.mp4";

/** Video banner — full viewport; transparent nav overlays on homepage. */
export function HomeHeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  const enableSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v || videoFailed) return false;

    v.muted = false;
    v.defaultMuted = false;
    v.volume = 1;
    setVideoMuted(false);

    try {
      await v.play();
      return true;
    } catch {
      v.muted = true;
      setVideoMuted(true);
      await v.play().catch(() => undefined);
      return false;
    }
  }, [videoFailed]);

  const playVideo = useCallback(async () => {
    const v = videoRef.current;
    if (!v || videoFailed) return;

    v.muted = true;
    setVideoMuted(true);

    try {
      await v.play();
    } catch {
      setVideoFailed(true);
    }
  }, [videoFailed]);

  useEffect(() => {
    const v = videoRef.current;
    const section = ref.current;
    if (!v || !section) return;

    const onReady = () => {
      void playVideo();
    };

    v.addEventListener("loadedmetadata", onReady);
    if (v.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      void onReady();
    } else {
      v.addEventListener("canplay", onReady, { once: true });
    }

    const onError = () => setVideoFailed(true);
    v.addEventListener("error", onError);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void playVideo();
        } else {
          v.pause();
        }
      },
      { threshold: 0.08, rootMargin: "80px 0px" },
    );
    observer.observe(section);

    return () => {
      v.removeEventListener("loadedmetadata", onReady);
      v.removeEventListener("canplay", onReady);
      v.removeEventListener("error", onError);
      observer.disconnect();
    };
  }, [playVideo]);

  useEffect(() => {
    const retrySound = () => {
      if (videoMuted) void enableSound();
    };

    const opts: AddEventListenerOptions = { capture: true, passive: true };
    document.addEventListener("touchstart", retrySound, opts);
    document.addEventListener("touchend", retrySound, opts);
    document.addEventListener("click", retrySound, { capture: true });
    window.addEventListener("pageshow", retrySound);
    window.addEventListener("focus", retrySound);

    return () => {
      document.removeEventListener("touchstart", retrySound, opts);
      document.removeEventListener("touchend", retrySound, opts);
      document.removeEventListener("click", retrySound, { capture: true });
      window.removeEventListener("pageshow", retrySound);
      window.removeEventListener("focus", retrySound);
    };
  }, [videoMuted, enableSound]);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const nextMuted = !videoMuted;
    setVideoMuted(nextMuted);
    v.muted = nextMuted;
    void v.play();
  }, [videoMuted]);

  const jump = (id: string) => {
    void enableSound();
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate w-full max-w-none shrink-0 overflow-hidden bg-mm-graphite"
      aria-label="Homepage hero"
    >
      <div className="mm-hero-video-wrap">
        {!videoFailed ? (
          <video
            ref={videoRef}
            className="mm-hero-video"
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            suppressHydrationWarning
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-mm-graphite via-mm-graphite-deep to-mm-graphite" />
        )}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-mm-graphite/55 via-mm-graphite/20 to-mm-graphite/40 max-md:from-mm-graphite/45 max-md:via-mm-graphite/15" />

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="pointer-events-auto relative h-full w-full">
            <h1 className="sr-only">Media Mantra Global — integrated communications across {MARKETS_PRESENCE}</h1>

            <div className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-2 z-20 md:right-8 md:bottom-8">
              {!videoFailed ? (
                <button
                  type="button"
                  aria-pressed={!videoMuted}
                  aria-label={videoMuted ? "Turn sound on" : "Mute video"}
                  onClick={() => {
                    if (videoMuted) void enableSound();
                    else toggleMute();
                  }}
                  className="inline-flex min-h-10 min-w-10 items-center justify-center gap-2 rounded-full border border-mm-cream/30 bg-mm-graphite/70 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-mm-cream transition hover:border-mm-gold/60 hover:text-mm-gold sm:min-h-11 sm:min-w-11 sm:px-3.5 sm:text-[9px]"
                >
                  {videoMuted ? <HiSpeakerXMark className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden /> : <HiSpeakerWave className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />}
                  <span className="hidden sm:inline">{videoMuted ? "Sound on" : "Mute"}</span>
                </button>
              ) : null}
            </div>

            <button
              type="button"
              aria-label="Scroll to content"
              className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-20 flex min-h-10 min-w-10 -translate-x-1/2 flex-col items-center justify-center gap-0.5 rounded-full px-2 py-1.5 text-mm-light transition hover:text-mm-gold md:bottom-8"
              onClick={() => jump("intro")}
            >
              <span className="text-[7px] uppercase tracking-[0.38em] sm:text-[8px]">Scroll</span>
              <HiArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
