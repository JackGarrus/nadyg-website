"use client";

import s from "@/app/components/Label.module.css";
import clsx from "clsx";
import Square from "../icons/Square";
import { Topic } from "../types";
import { getTopicLabel } from "../blog/utils/getTopicLabel";

interface Props {
  topic: Topic;
  isButton?: boolean;
  onClick?: (value: string) => void;
}

const Label = ({ topic, isButton = false, onClick }: Props) => {
  const label = getTopicLabel(topic);

  const handleClick = () => {
    onClick?.(label);
  };

  return isButton ? (
    <button className={clsx(s.label, s[topic])} onClick={handleClick}>
      <Square className={clsx(s[`${topic}`])} />
      <p> {getTopicLabel(topic)}</p>
    </button>
  ) : (
    <div className={clsx(s.label, s[topic])}>
      <Square className={clsx(s[`${topic}`])} />
      <p> {getTopicLabel(topic)}</p>
    </div>
  );
};

export default Label;
