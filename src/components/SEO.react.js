import React from "react";
import { Helmet } from "react-helmet";

const TITLE = "Car Showcase";
const DESCRIPTION =
  "The page to showcase different luxurious cars that we are selling in Singapore such as Mercedes-Benz SL55 AMG";

export default function SEO() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name='description' content={DESCRIPTION} />
      <meta
        name='keywords'
        content='Car, Car showcase, Mercedes-Benz SL55 AMG, Benz, Luxurious car, 奔驰，豪车'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content={TITLE} />
      <meta property='og:description' content={DESCRIPTION} />
      <meta property='og:image' content='https://example.com/carshowcase.jpg' />
      <meta property='og:url' content='https://example.com/carshowcase' />
    </Helmet>
  );
}
