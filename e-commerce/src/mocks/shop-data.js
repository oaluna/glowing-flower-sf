import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { image } from "@cloudinary/url-gen/qualifiers/source";


const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME
  }
});


const SHOP_DATA = [
  {
    name: 'All Occasions',
    route: 'shop/all-occasions',
    items: [{
      id: 100,
      imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/phaelenopsis-orchid-garden_seodpx.png",
      title: "Orchid Garden",
      description:
        "A perfect bouquet to give to anybody to express your love, care, congratulations, anniversary, birthday, thank you, miss you, get well etc.",
      fullDescription:
        "A perfect bouquet to give to anybody to express your love, care, congratulations, anniversary, birthday, thank you, miss you, get well etc. The bouquet made as one side view and a bit in long stems they are mixed spring flowers variety of mum, ]chrysanthemums, rose, lisianthus, tulips, spray rose and some greenish with a variety of foliages to make it so elegant in your hand or when it’s placed in the glass water vase (included) on table as a home decor.",
      dimensions: "W-6”, D-4”, H-13”",
      pricingText: "$49.50",
    },
    {
      id: 101,
      imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/neon-light-city-design_jgzsyq.png",
      title: "Neon Light City",
      description:
        "Mixed spring flowers and use mostly bright and happy colors that give a young look, energetic and casual.",
      fullDescription:
        "The arrangement I make specially for graduation, bridesmaids or birthday girls, the compact size and the round shape makes this bouquet so adorable. This bouquet also can be placed in the vase after the event is done and turn into a home decor or even centerpiece. Mixed spring flowers and use mostly bright and happy colors that give a young look, energetic and casual.",
      dimensions: "W-5”, D-4”, H-10”",
      pricingText: "$41.50",
    }
    ]
  },

  {

    name: 'bridal',
    route: 'shop/bridal',
    items: [
      {
        id: 102,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/metropolitan-design_fashox.png",
        title: "Metropolitan",
        description:
          "A perfect bouquet to gift for any occasion.",
        fullDescription:
          "A perfect bouquet to gift for any occasion. The bouquet made as one side view and a bit in long stems they are mixed spring flowers variety of mum, chrysanthemums, roses, lisianthus, tulips, spray roses and some greenish with a variety of foliages to make it so elegant in your hand or when it’s placed in a ceramic water vase (included) on table as a home decor. ",
        dimensions: "",
        pricingText: "$57.50",
      }
    ]
  },

  {
    name: "Holidays",
    route: 'shop/holidays',
    items: [
      {
        id: 103,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/cosmoplolitan-design-alt_pmwds2.png",
        title: "Chic Centerpiece",
        description:
          "Mixed spring flowers and use mostly bright and happy colors.",
        fullDescription: "For graduations, bridesmaids or birthday girls. Called chic for its petite shape. This bouquet also can be placed in the vase after the event  is done and turn into a home decor or even as a centerpiece. Mixed spring flowers and use mostly bright and happy colors. So comfortable to hold in your hand, modern and classy.",
        dimensions: "",
        pricingText: "$41.50",
      },
      {
        id: 104,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/citys-tulips-design_nqwe7c.png",
        title: "City's Tulips",
        description:
          "A gorgeous tulip bouquet with chrysanthemum and a variety of mums and foliages.",
        fullDescription:
          "A gorgeous tulip bouquet with chrysanthemum and a variety of mums and foliages. Accesorized with curly willows to make this bouquet stunning. Available in one or two colors of your choice and in bunches of 18, 24 or 36 tulips.",
        dimensions: "varies",
        pricingText: "$59 for 18 tulips, $69 for 24 tulips, $89 for 36 tulips",
      }
    ]
  },

  {
    name: 'Well Wishes',
    route: 'shop/well-wishes',
    items: [
      {
        id: 105,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/asymmetric-centerpiece-design_anphoq.png",
        title: "Asymmetric Centerpiece",
        description:
          "Its unusual, mystifying shape give an elegant look to your dining table.",
        fullDescription:
          "The dramatic curve of this asymmetrical arrangement makes for an excellent centerpiece. Its unusual, mystifying shape give an elegant look to your dining table. Predominantly made of roses, along with carnations, hypericum, delphinium, eucalyptus, evangarium, curly willows and foliage.",
        dimensions: "",
        pricingText: "$59.00",
      },
      {
        id: 106,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003848/arrangements/citys-rose-design_dqwdgr.png",
        title: "City's Rose",
        description: "Available in one or two colors and in bunches of 18, 24, or 36 roses.",
        fullDescription: "A gorgeous roses  bouquet with huckleberry, alstroemeria and foliage accessories with curly willows to make this roses arrangement stunning. Available in one or two colors and in bunches of 18, 24, or 36 roses.",
        dimensions: "varies",
        pricingText: "$10 for 18roses, $145 for 24 roses, $25 for 36 roses",
      }
    ]
  },
  {
    name: 'deals',
    route: 'shop/deals',
    items: [
      {
        id: 107,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/masculine-fathers-day_gnl5x6.png",
        title: "Father's Day Special",
        description: "Product description not yet available. Please check back later.",
        fullDescription: "Product description not yet available. Please check back later.",
        dimensions: "",
        pricingText: "",
      },
      {
        id: 108,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003848/arrangements/contemporary-design_alhn5k.png",
        title: "Contemporary",
        description: "Product description not yet available. Please check back later.",
        fullDescription: "A contemporary, minimalist  with an avant-garde style will give a modern look to your events or your home. The arrangement uses a minimal number of focal flowers and curvy branches to create a simple, clean  and beautiful line arrangement. It’s a designer choice to pick. Your info of what this arrangement is going to be used will help the designer to create a perfect fit material.",
        dimensions: "",
        pricingText: "$69.00",
      },
      {
        id: 109,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003848/arrangements/city-wedding-combo_vjvb6d.png",
        title: "City's Wedding",
        description: "Product description not yet available. Please check back later.",
        fullDescription: "Product description not yet available. Please check back later.",
        dimensions: "",
        pricingText: "",
      },
      {
        id: 110,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003847/arrangements/city-mini-succulent-garden_mc71oh.png",
        title: "City's Mini Succulent Garden",
        description: "Product description not yet available. Please check back later.",
        fullDescription: "A variety of succulents were planted in a low pan ceramic vase design and arranged like the back garden. This popular gift perfect to bring on the house warming party, birthday, congratulations or to thank you.",
        dimensions: "",
        pricingText: "$35.00",
      },
      {
        id: 111,
        imageUrl: "https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/city-combo-two-in-one_q0sk7l.png",
        title: "City's Combo - 2 In 1",
        description: "Product description not yet available. Please check back later.",
        fullDescription: "A combo of choices  of  two different designs in vertical, asymmetrical or centerpiece as you need.",
        dimensions: "",
        pricingText: "",
      }
    ]
  },

];

export default SHOP_DATA;