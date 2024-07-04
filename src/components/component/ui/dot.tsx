import { cn } from "@/lib/utils";
import React from "react";

export type Props = {
  color: string;
};

export default function Dot(props: Props) {
  return <div className={`w-3 h-3 rounded-full ${props.color}`}></div>;
}
