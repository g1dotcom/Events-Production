import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Anomally from "../../public/events-types/xmanomaly.png";

export function EventTypesTabs() {
  const SpanHover = "border-b-2 border-white";

  // className={`w-full lg:w-1/6 md:rounded-l-3xl ${   darkMode ? "dark-light-info shadow-xl shadow-black" : "bg-main-left"  }`}

  return (
    <div className="w-full flex justify-center ">
      <div className="text-white flex flex-col items-center  hover:border-white border-[#783cbd] border-b-2 px-4">
        <Image width={40} src={Anomally} alt="" />
        <h1>ANOMALY</h1>
      </div>
      <div className="text-white flex flex-col items-center  hover:border-white border-[#783cbd] border-b-2 px-4">
        <Image width={40} src={Anomally} alt="" />
        <h1>ANOMALY</h1>
      </div>
      <div className="text-white flex flex-col items-center  hover:border-white border-[#783cbd] border-b-2 px-4">
        <Image width={40} src={Anomally} alt="" />
        <h1>ANOMALY</h1>
      </div>
    </div>
  );
}
