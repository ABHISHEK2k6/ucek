import Image from "next/image";
import Topnav from '@/components/header/topnav';
import Nav from '@/components/header/nav'
import Landing from '@/components/layout/landing'
import Quick from '@/components/layout/announcement'
import Whyucek from '@/components/layout/whyucek'
import NewsEvents from '@/components/layout/events'
import AdministrationPanel from '@/components/layout/admins'
import MoreUcek from '@/components/layout/ucekmore'
import Footer from '@/components/layout/footer'
import Link from "next/link";
import HeroSlider from "@/components/layout/landing";

export default function Home() {
  return (
   <>
    <Topnav /> 
    <Nav/>
    <Landing/>
    <Quick/>
    <Whyucek/>
    <NewsEvents/>
    <AdministrationPanel/>
    <MoreUcek/>
    <Footer/>
   </>
  );
}
