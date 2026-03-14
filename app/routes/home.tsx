import type { Route } from "./+types/home";
import OverviewPage from "~/pages/index/overview-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { property: "og:title", content: "Kotlin Programming Language" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kotlinlang.org/" },
    { property: "og:image", content: "https://kotlinlang.org/assets/images/open-graph/general.png" },
    { property: "og:description", content: "A modern programming language that makes developers happier." },
    { property: "og:site_name", content: "Kotlin" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: "Kotlin Programming Language" },
    { name: "twitter:description", content: "A modern programming language that makes developers happier." },
    { name: "twitter:image", content: "https://kotlinlang.org/assets/images/twitter/general.png" },
  ];
}

export default function Home() {
  return <OverviewPage />;
}
