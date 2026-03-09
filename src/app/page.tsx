import ScrollGallery from "../components/ScrollGallery";
import InformationPanel from "../components/InformationPanel";
import FooterStrip from "../components/FooterStrip";

export default function Home() {
  return (
    <main>
      <InformationPanel />
      <ScrollGallery />
      <FooterStrip />
    </main>
  );
}
