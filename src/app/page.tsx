import ScrollGallery from "../components/ScrollGallery";
import InformationPanel from "../components/InformationPanel";
import FooterStrip from "../components/FooterStrip";
import { HoverProvider } from "../components/HoverProvider";

export default function Home() {
  return (
    <main>
      <HoverProvider>
        <InformationPanel />
        <ScrollGallery />
        <FooterStrip />
      </HoverProvider>
    </main>
  );
}
