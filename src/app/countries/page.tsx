import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";
import Map from "@/components/map";
import { EventsTable } from "@/components/events-table";
import { FlipWordsTitle } from "@/components/flip-words-title";
import Navbar from "@/components/navbar";

const Countries = () => {
  return (
    <div className=" w-full h-screen">
      <div className="flex w-full p-12">
        <Map />
        {/* <div className="w-1/3 flex justify-center items-center h-full bg-red-500">
          <FlipWordsTitle />
        </div> */}
      </div>
      <EventsTable />
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Countries;
