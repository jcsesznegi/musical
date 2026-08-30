import type { Route } from "./+types/home";
import { Game } from "../features/game/Game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "App" },
    { name: "description", content: "Welcome to Musical!" },
  ];
}

export default function Index() {
  return <Game />;
}
