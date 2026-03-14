import GlobalFooter from "@jetbrains/kotlin-web-site-ui/dist/footer.js";
import "@jetbrains/kotlin-web-site-ui/dist/footer.css";
import { ThemeProvider } from "@rescui/ui-contexts";

export default function Footer() {
    return (
        <ThemeProvider theme="dark">
            <GlobalFooter />
        </ThemeProvider>
    );
}
