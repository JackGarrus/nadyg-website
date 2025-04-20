"use client";

import s from "@/app/components/Label.module.css";
import clsx from "clsx";
import Square from "../icons/Square";
import { Topic } from "../types";

interface Props {
  topic: Topic;
}

const Label = ({ topic }: Props) => {
  const getTopicLabel = (topic: Topic) => {
    switch (topic) {
      case "js":
        return "JS";
      case "ts":
        return "TS";
      case "react":
        return "React";
      case "devops":
        return "DevOps";
      case "ruby":
        return "Ruby";
      case "ror":
        return "Rails";
      case "math":
        return "Math";
      case "cs":
        return "CS";
      case "db":
        return "Database";
      case "physics":
        return "Physics";
      default:
        return topic;
    }
  };

  return (
    <div className={clsx(s.label, s[topic])}>
      <Square className={clsx(s[`${topic}`])} />
      <p> {getTopicLabel(topic)}</p>
    </div>
  );
};

export default Label;
