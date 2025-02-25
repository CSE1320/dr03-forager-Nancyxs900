// data/development.js

const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
  };
  
  const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution.",
  };
  
  const filterData = [
    {
      title: "Tags",
      pills: ["Favorites", "Recents"],
    },
    {
      title: "Regions",
      pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    },
    {
      title: "Category",
      pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
    },
  ];
  
  // Export multiple values
  export { warningMessage, dummyData, filterData }; 
  // Import with: import { warningMessage, dummyData, filterData } from './data/development.js';
  