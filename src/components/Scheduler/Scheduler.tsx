import React from "react";

export interface ButtonProps {
  label: string;
}

const Scheduler = (props: ButtonProps) => {
  const months = [];

  return <div>{props.label}</div>;
};

export default Scheduler;
