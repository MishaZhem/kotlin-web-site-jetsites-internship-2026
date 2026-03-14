import type { Route } from "./+types/home";
import OverviewPage from "~/pages/index/overview-page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" }
  ];
}

export default function Home() {
  return <OverviewPage />;
}
