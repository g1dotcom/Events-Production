import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";
import Map from "@/components/map";
import { EventsTable } from "@/components/events-table";
import { BackgroundBeams } from "@/components/bg-beams";

const Countries = () => {
  return (
    <div className="bg-black w-full h-screen flex flex-col space-y-8">
      <Map />
      <EventsTable />

      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Countries;
