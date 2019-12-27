const initialState = {
  groups: [
    {
      title: "Barbells",
      imageUrl: "https://i.ibb.co/FWpkFbn/barbells.jpg",
      id: 1,
      url: "shop/barbells"
    },
    {
      title: "Dumbbells",
      imageUrl: "https://i.ibb.co/sKGkyxB/dumbbells.jpg",
      id: 2,
      url: "shop/dumbbells"
    },
    {
      title: "Kettlebells",
      imageUrl: "https://i.ibb.co/j3Dz9Q8/kettlebells.jpg",
      id: 3,
      url: "shop/kettlebells"
    },
    {
      title: "Barbell plates",
      imageUrl: "https://i.ibb.co/B3J1P2W/barbell-plates.jpg",
      id: 4,
      url: "shop/plates"
    },
    {
      title: "Exercise mats",
      imageUrl: "https://i.ibb.co/r6nSCPy/exercise-mats.jpg",
      id: 5,
      url: "shop/mats"
    }
  ]
};

const mainDisplayPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainDisplayPanelReducer;
