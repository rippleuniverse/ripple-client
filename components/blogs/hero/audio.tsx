"use client";

import { AudioLines, Pause } from "lucide-react";
import { FC } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Button } from "@/components/common/button";
import { Play } from "@/components/common/icons/play";
import { Sheet, SheetContent, SheetTrigger } from "@/components/common/sheet";
import { usePodcast } from "@/hooks/podcasts";

export const Audio: FC = () => {
  const podcast = usePodcast();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"sm"} variant={"secondary"} className="bg-[#FFF8C6]">
          <span>Start listening</span>
          <span className={"flex"}>
            <AudioLines />
            <AudioLines />
          </span>
          <Play size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <AudioPlayer src={podcast.data?.audio} />
      </SheetContent>
    </Sheet>
  );
};
