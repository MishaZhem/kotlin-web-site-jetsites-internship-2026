import GlobalHeader from "@jetbrains/kotlin-web-site-ui/dist/header.js";
import "@jetbrains/kotlin-web-site-ui/dist/header.css";

export default function Header() {
    return (
        <GlobalHeader
            productWebUrl="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20"
            hasSearch={false}
        />
    );
}
