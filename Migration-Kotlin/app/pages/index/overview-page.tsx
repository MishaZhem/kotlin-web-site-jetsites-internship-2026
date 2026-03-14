import { ThemeProvider } from "@rescui/ui-contexts";
import { HeaderSection } from "./header-section";
import { LatestFromKotlinSection } from "./latest-from-kotlin-section";
import { WhyKotlinSection } from "./why-kotlin-section";

export default function OverviewPage() {
    return (
        <ThemeProvider theme="dark">
            <main className="overview-page">
                <HeaderSection />
                <LatestFromKotlinSection />
                <WhyKotlinSection />
            </main>
        </ThemeProvider>
    );
}
