import SoacialPlatform from "@/components/social-platforms";
import CitiesSelectModal from "./_components/cities-select-modals";
import Events from "@/components/events";

const Countries = () => {
  return (
    <div>
      <CitiesSelectModal />
      <SoacialPlatform />
      <Events />
    </div>
  );
};

export default Countries;
