import cosmopolitan from "images/arrangements/cosmopolitan-design.png";
import cityFlowers from "images/arrangements/city-flowers-design.png";
import metropolitan from "images/arrangements/metropolitan-design.png";

const INITIAL_STATE = {
  sections: [
    {
      title: "All Occasions",
      imageUrl: cityFlowers,
      id: 1,
      linkUrl: "shop/all-occasions",
    },
    {
      title: "Holiday",
      imageUrl: metropolitan,
      id: 2,
      linkUrl: "shop/holiday",
    },
    {
      title: "Deals",
      imageUrl: cosmopolitan,
      size: "large",
      id: 5,
      linkUrl: "shop/deals",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
