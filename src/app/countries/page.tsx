import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";
import Map from "@/components/map";
import EventsTable from "@/components/events-table";

const Countries = () => {
  return (
    <div>
      <CitiesSelectModal />
      {/* <SoacialPlatform />
      <Events /> */}
      <Map />
      <EventsTable />
    </div>
  );
};

export default Countries;
