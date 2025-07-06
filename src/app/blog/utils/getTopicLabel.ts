import { Topic } from "@/app/types";

export function getTopicLabel(topic: Topic): string {
  const map: Record<Topic, string> = {
    js: "JS",
    ts: "TS",
    react: "React",
    devops: "DevOps",
    ruby: "Ruby",
    ror: "Rails",
    math: "Math",
    cs: "CS",
    systems: "Systems",
    db: "Database",
    physics: "Physics",
  };

  return map[topic] ?? topic;
}
