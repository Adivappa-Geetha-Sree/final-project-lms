import Image from "next/image";
import Homeslider from "./Homecomponents/Homeslider";
import Viaschool from "./Homecomponents/Viaschool";
import Whatwedo from "./Homecomponents/Whatwedo";
import BrowseTopCourse from "./Homecomponents/BrowseTopCourse";
import Teacher from "./Homecomponents/Teacher";
import GEtitNow from "./Homecomponents/GetitNow";

export default function Home() {
  return (
   <>
      <Homeslider/>
      <Viaschool/>
      <Whatwedo/>
      <BrowseTopCourse/>
      <Teacher/>
      <GEtitNow/>
   </>
  )
}
