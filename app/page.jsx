import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import OurCoreValue from "@/components/OurCoreValue";
import ValuesAndVision from "@/components/ValuesAndVision";
import OurTeam from "@/components/OurTeam";
import Statistics from "@/components/Statistics";
import Sponsors from "@/components/Sponsors";

export default function Home() {
    return (
        <div className="mt-8">
            <div className="flex flex-col gap-y-8">
                <HeroSection/>
                <ValuesAndVision/>
                <OurCoreValue/>
                <Statistics />
                <LatestBlogs/>
                <OurTeam/>
                <Sponsors />
            </div>
        </div>
    );
}
