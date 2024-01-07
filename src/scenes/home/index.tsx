import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/actionbutton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="bg-gray-20 gab-16 py-10 md:h-full">
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <div className="md:-mt-20">
            <div className="">
              <div className="">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="text-sm mt-8">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          <div className="">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </div>
        </div>
        <div className="">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {isAboveMediumScreens && (
        <div className="">
          <div className="">
            <div className="flex justify-around">
              <img src={SponsorForbes} alt="" />
              <img src={SponsorRedBull} alt="" />
              <img src={SponsorFortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
