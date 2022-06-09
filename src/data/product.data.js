//importing images like this is way too expensive. TODO add media to a media hosting site and call from there.

import allOccasions from "../images/allOccasions.jpg";
import handTiedBouquet from "../images/handTiedBouquet.jpg";
import compactBouquet from "../images/compactBouquet.jpg";
import minimalistBouquet from "../images/minimalistBouquet.jpg";
import roundTiedBouquet from "../images/roundTiedBouquet.jpg";
import centerpiece from "../images/centerpiece.jpg";
import largeBouquet from "../images/largeBouquet.jpg";
import weddingArrangement from "../images/weddingArrangement.jpg";
import funeralArrangement from "../images/funeralArrangement.jpg";
import phalaenopsis from "../images/phalaenopsis.jpg";
import miniSucculents from "../images/miniSucculents.jpg";
import comboArrangement from "../images/comboArrangement.jpg";

import asymmetricCenterpiece from "../images/arrangements/asymmetric-centerpiece-design.png";
import bigCity from "../images/arrangements/big-city-design.png";
import cityComboTwoInOneAlt from "../images/arrangements/city-combo-two-in-one-alt.png";
import cityComboTwoInOne from "../images/arrangements/city-combo-two-in-one.png";
import cityFlowers from "../images/arrangements/city-flowers-design.png";
import cityFuneral from "../images/arrangements/city-funeral-combo.png";
import cityMiniSucculentGarden from "../images/arrangements/city-mini-succulent-garden.png";
import cityWedding from "../images/arrangements/city-wedding-combo.png";
import cityRose from "../images/arrangements/citys-rose-design.png";
import citysTulips from "../images/arrangements/citys-tulips-design.png";
import contemporary from "../images/arrangements/contemporary-design.png";
import cosmopolitan from "../images/arrangements/cosmopolitan-design.png";
import cosmopolitanAlt from "../images/arrangements/cosmopolitan-design-alt.png";
import fathersDay from "../images/arrangements/masculinity-fathers-day-design.png";
import metropolitan from "../images/arrangements/metropolitan-design.png";
import neonLightCity from "../images/arrangements/neon-light-city-design.png";
import phaelenopsisOrchidGarden from "../images/arrangements/phaelenopsis-orchid-garden-design.png";

const ProductData = [
  {
    imageSrc: allOccasions,
    title: "Arrangements For Every Occasion",
    description:
      "Available everyday, for any occasions flower arrangement and for anyone too. Mix seasonal flowers arrange in vertical design in green floral foam with square black ceramic vase.",
    fullDescription:
      "Available everyday, for any occasions flower arrangement and for anyone too. Mix seasonal flowers arrange in vertical design in green floral foam with square black ceramic vase.",
    dimensions: "W-10” X H-20” X D-6",
    pricingText: "$39.00",
  },
  {
    imageSrc: handTiedBouquet,
    title: "Hand Tied Bouquet",
    description:
      "Specially made hand bouquet style a perfect gift to friend, family, colleague or to the love one. A beautiful mix flowers with tied up as a bouquet or keep it in the clear glass vase.",
    fullDescription:
      "Specially made hand bouquet style a perfect gift to friend, family, colleague or to the love one. A beautiful mix flowers with tied up as a bouquet or keep it in the clear glass vase. The arrangement come with a simple beautiful glass vase included.",
    dimensions: "",
    pricingText: "$39.00",
  },
  {
    imageSrc: compactBouquet,
    title: "Compact Bouquet",
    description:
      "A cute small hand tied bouquet with several favorite designer choice flowers could a perfect bouquet for graduation girl, bridesmaid, thoughtful and thank you expression. This arrangement come with a simple beautiful glass vase to keep it fresh. ",
    fullDescription: "",
    dimensions: "W-4.5” X H-13” X D-4”",
    pricingText: "$39.50",
  },
  {
    imageSrc: minimalistBouquet,
    title: "Minimalist Bouquet",
    description:
      "A compact flowers that arranged them using less number and variety of flowers instead using dry accessories, feathers, bamboo sticks, etc. It’s combined artistically that’s give it’s clean modern look.",
    fullDescription:
      "A compact flowers that arranged them using less number and variety of flowers instead using dry accessories, feathers, bamboo sticks, etc. It’s combined artistically that’s give it’s clean modern look. Something for you to bring or send for a housewarming party, birthday, graduation or a thank you gift. It will stand in a unique stylist vase that incorporate to make look artistically stunning.",
    dimensions: "W-5” X H-15”-17” X D-4”",
    pricingText: "$57.00",
  },
  {
    imageSrc: roundTiedBouquet,
    title: "Round-tied Bouquet",
    description:
      "An evenly arranged a half  round shape hand tied bouquet in glass vase by using a few flower which mainly used roses, tulips, lily, garbera or designer unique choice.",
    fullDescription:
      "An evenly arranged a half  round shape hand tied bouquet in glass vase by using a few flower which mainly used roses, tulips, lily, garbera or designer unique choice. It perfect for the bride on the wedding, anniversary, birthday or Valentine’s day.",
    dimensions: "W-6” X H-12” X D-6”",
    pricingText: "$59.00",
  },
  {
    imageSrc: centerpiece,
    title: "Centerpiece Arrangement",
    description:
      "The florist's personal favorite style of center piece. A unique and curvy arrangement made with a varied selection of flowers and foliages.",
    fullDescription:
      "The florist's personal favorite style of center piece. A unique and curvy arrangement made with snapdragon, stock, gladioli,  rose, hydrangea, lisianthus, carnations, mums, wax flowers, evangirium, curly willow and wrapped with pittosporum, bacchus, or other foliages perfect centerpieces for wedding reception, formal dining table.",
    dimensions: "W-20”-22”X H-10”-12” X D-6”-8”",
    pricingText: "$59.50",
  },
  {
    imageSrc: largeBouquet,
    title: "Large Arrangement",
    description:
      "The oversized arrangement usually to decor for a big party or event to get the room attention. It’s mostly use tropical materials blended  with local plants.",
    fullDescription:
      "The oversized arrangement usually to decor for a big party or event to get the room attention. It’s mostly use tropical materials blended  with local plants, such as leucodendron, protea, cushion button, ginger, heliconia, kale, anthurium hyacinth, curly willow, calla lily  and kangaroo pauw. They are stunning to be combined it together.",
    dimensions: "W-20”, D-6”, H-30”",
    pricingText: "$87.00",
  },
  {
    imageSrc: weddingArrangement,
    title: "Wedding Arrangement",
    description:
      "For big events such a wedding from boutonnières, bride & bridesmaids’  hand bouquet, sweet fantasy backdrop and bride & groom garland’  table, centerpieces, flower girls, cake, welcoming arrangement and many more as your budget.",
    fullDescription:
      "For big events such a wedding from boutonnières, bride & bridesmaids’  hand bouquet, sweet fantasy backdrop and bride & groom garland’  table, centerpieces, flower girls, cake, welcoming arrangement and many more as your budget.Price range may vary based upon meeting.",
    dimensions: "Arizona, RAK",
    pricingText: "$69.00 and Up",
  },
  {
    imageSrc: funeralArrangement,
    title: "Funeral Arrangement",
    description:
      "We offer a funeral package of a full set for funeral flower arrangement from table arrangement, cascade, wreath, cross candle, photo framed, and for the last goodbye flower.",
    fullDescription:
      "We offer a funeral package of a full set for funeral flower arrangement from table arrangement, cascade, wreath, cross candle, photo framed, and for the last goodbye flower.Price may vary depend on the your need and type of flower used.",
    dimensions: "Arizona, RAK",
    pricingText: "$59.00 for bouquet, $125.00 with Wreath",
  },
  {
    imageSrc: phalaenopsis,
    title: "Phalaenopsis",
    description:
      "The authentication beauty of Phalaenopsis orchid accessories with other element that fit well and stunning potting in ceramic vase. A classy and elegant gifts. available in two colors: (choose one your color preference).",
    fullDescription:
      "The authentication beauty of Phalaenopsis orchid accessories with other element that fit well and stunning potting in ceramic vase. A classy and elegant gifts.",
    dimensions: "",
    pricingText: "USD 99/Day",
  },
  {
    imageSrc: miniSucculents,
    title: "Mini Succulents",
    description:
      "A variety  and unique of succulents that create a beautiful thing to view it  just  like a miniature garden in round ceramic bowl. This  would be a perfect  gift  for a housewarming party, farewell party or use as in home decor.",
    fullDescription:
      "A variety  and unique of succulents that create a beautiful thing to view it  just  like a miniature garden in round ceramic bowl. This  would be a perfect  gift  for a housewarming party, farewell party or use as in home decor. An easy care and a longer lifetime of these plants could be a favorite choice as a gift  for friends. ",
    dimensions: "",
    pricingText: "$35.00",
  },
  {
    imageSrc: comboArrangement,
    title: "Combo Arrangement",
    description:
      "A duo, trio of  combo arrangements in one order it’s an smart choice for your party event, staging for open house or for a regularly home decor arrangement for different areas. A combo order is specially made and make easy for you to create a set of color, shape and in the needs can corporate together.",
    fullDescription:
      "A duo, trio of  combo arrangements in one order it’s an smart choice for your party event, staging for open house or for a regularly home decor arrangement for different areas. A combo order is specially made and make easy for you to create a set of color, shape and in the needs can corporate together. A duo arrangements could order in the same similarity to each other or in different style (one arrangement for living room and the other arrangement for dining table). ",
    dimensions: "",
    pricingText: "$99.00 - $135.00",
  },
  {
    imageSrc: phaelenopsisOrchidGarden,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: neonLightCity,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: metropolitan,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: fathersDay,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: [cosmopolitan, cosmopolitanAlt],
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: contemporary,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: citysTulips,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: cityRose,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: cityWedding,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: cityMiniSucculentGarden,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: cityFuneral,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: cityFlowers,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: [cityComboTwoInOne, cityComboTwoInOneAlt],
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: bigCity,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: asymmetricCenterpiece,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
  {
    imageSrc: phaelenopsisOrchidGarden,
    title: "",
    description: "",
    fullDescription: "",
    dimensions: "",
    pricingText: "",
  },
];

export default ProductData;
