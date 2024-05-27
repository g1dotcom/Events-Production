import Map from "@/components/map";
import { EventsTable } from "@/components/events-table";
import Header from "@/components/header";

const Home = () => {
  return (
    <div className=" w-full h-screen   ">
      <Header />
      <Map />
      <EventsTable />
    </div>
  );
};

export default Home;
