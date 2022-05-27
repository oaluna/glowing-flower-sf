import comboArrangement from "images/comboArrangement.jpg";
import handTiedBouquet from "images/handTiedBouquet.jpg";
import roundTiedBouquet from "images/roundTiedBouquet.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "All Occasions",
      imageUrl: comboArrangement,     
      id: 1,
      linkUrl: "shop/all-occasions"
      },
      {
      title: "Holiday",
      imageUrl: handTiedBouquet,     
      id: 2,
      linkUrl: "shop/holiday"
      },
      {
      title: "Deals",
      imageUrl: roundTiedBouquet,  
      size: "large",
      id: 5,
      linkUrl: "shop/deals"
      }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
