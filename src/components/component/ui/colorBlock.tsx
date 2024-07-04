import React from "react";

type Prop = {
  color: string;
};

export default function colorBlock(props: Prop) {
  return <div className={`w-10 h-10 ${props.color}`}></div>;
}
