import { ThemeProvider } from "@rescui/ui-contexts";
import { HeaderSection } from "./header-section";

export default function OverviewPage() {
    return (
        <ThemeProvider theme="dark">
            <main className="overview-page">
                <HeaderSection />
            </main>
        </ThemeProvider>
    );
}
