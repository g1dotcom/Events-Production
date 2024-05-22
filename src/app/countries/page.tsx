import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";
import Map from "@/components/map";

const Countries = () => {
  return (
    <div>
      <CitiesSelectModal />
      {/* <SoacialPlatform />
      <Events /> */}
      <Map />
    </div>
  );
};

export default Countries;
