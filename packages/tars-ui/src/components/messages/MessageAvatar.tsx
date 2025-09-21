import React from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { User03Icon } from "@hugeicons/core-free-icons";
import { Role } from "@/types";

interface MessageAvatarProps {
  role: Role;
}

export function MessageAvatar({ role }: MessageAvatarProps) {
  const baseClasses = "flex flex-shrink-0 items-center justify-center rounded-md border border-tars-bronze-light-7 bg-tars-bronze-light-1 h-[28px] w-[28px]";

  if (role === Role.ASSISTANT) {
    return (
      <div className={baseClasses}>
        <Image
          src="/tars_square_light.svg"
          alt="TARS"
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </div>
    );
  }

  return (
    <div className={baseClasses}>
      <HugeiconsIcon
        icon={User03Icon}
        className="text-tars-bronze-dark-9 w-4 h-4"
      />
    </div>
  );
}