import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";
import Map from "@/components/map";
import { EventsTable } from "@/components/events-table";
import { FlipWordsTitle } from "@/components/flip-words-title";
import Header from "@/components/header";

const Countries = () => {
  return (
    <div className=" w-full h-screen  space-y-11 mt-8">
      <Header />
      <Map />

      <EventsTable />
    </div>
  );
};

export default Countries;
