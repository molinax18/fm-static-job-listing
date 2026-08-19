import HeroImage from "./components/HeroImage";
import JobListingContainer from "./components/JobListingContainer";

export default function App() {
  return (
    <div className="grid grid-rows-[min-content_1fr] gap-y-16 min-h-dvh">
      <HeroImage />
      <main className="w-[90%] max-w-6xl mx-auto">
        <JobListingContainer />
      </main>
    </div>
  );
}
