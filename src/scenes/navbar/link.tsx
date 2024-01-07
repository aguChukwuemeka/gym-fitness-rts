import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300`}
      href={`#${selectedPage}`}
      onClick={() => setSelectedPage(lowCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
