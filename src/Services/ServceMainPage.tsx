
import usePageTitle from "../Hook/titleTab";
import Body from "./Component/Body";
import Head from "./Component/Head";
import Last from "./Component/Last";
import Package from "./Component/Package";
import ServicesCard from "./Component/ServicesCard";


const ServiceMain=() =>{
  usePageTitle("Our Service | Study Abroad Services");
  return (
    <>
    <Head />
    <Body />
    <ServicesCard/>
    <Package />
    <Last/>
    </>
  )
}

export default ServiceMain;
