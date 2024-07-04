"use client";

import { useState } from "react";
import { Nav } from "@/components/ui/nav";

import {
  LayoutDashboard,
  User,
  Palette,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const SideNavbar = ({}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 860;

  return (
    <div className="relative min-w-[90px] border-r sm:pr-5 pt-24">
      {!mobileWidth && (
        <Button
          variant="secondary"
          className="absolute top-7 right-[-20px] p-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "#",
            label: "",
            icon: LayoutDashboard,
            variant: "ghost",
             },
          {
            title: "Themes",
            href: "#",
            label: "",
            icon: Palette,
            variant: "default",
          },
          {
            title: "Profile",
            href: "#",
            label: "",
            icon: User,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
