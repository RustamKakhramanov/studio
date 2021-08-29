import React, {useState, useEffect} from "react";
import { MainSection, OfferSection, PortfolioSection} from "../components/Pages/Home/Sections";
import Main from "../layouts/Main";




export default function Home() {
    return (
      <Main>
          <MainSection/>
          <OfferSection/>
          <PortfolioSection/>
      </Main>
    )
}
