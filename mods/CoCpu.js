elements.carbon_monoxide = {
      color: "#b5b5b5",
      behavior: behaviors.GAS,
      behaviorOn: [
        "XX|XX|XX",
        "XX|CH:fire|XX",
        "XX|XX|XX",
    ],
      category: "gases",
      state: "gas",
      density: 1.14,
      burn: 75,
      tempHigh: 609,
      stateHigh: "fire",
      tempLow: -192,
      stateLow: "liquid_carbon_monoxide",
      burntime: 5,
      fireColor: "#ebba34",
      reactions: {
                    "head": { elem2:"rotten_meat", chance:0.5 },
                    "body": { elem2:"rotten_meat", chance:0.5 },
                    "human": { elem2:"rotten_meat", chance:0.5 },
                    "bird": { elem2:"rotten_meat", chance:0.2 },
                    "ant": {elem2:"dead_bug", },
                    "plant": {elem1:"null", },
                    "meat": {elem2:"rotten_meat", },
                }
};
elements.liquid_carbon_monoxide = {
         color: "#b5b5b5",
         behavior: behaviors.LIQUID,
         category: "liquids",
         state: "liquid",
         density: 1.14,
         tempHigh: 190,
         tempLow: -199,
         stateLow: "ice_carbon_monoxide",
         stateHigh: "carbon_monoxide", 
         temp: -192,
};
elements.ice_carbon_monoxide = {
         color: "#b5b5b5",
         behavior: behaviors.WALL,
         category: "solids",
         state: "solid",
         density: 1.14,
         tempHigh: -192,
         stateHigh: "liquid_carbon_monoxide", 
         temp: -199,
};
elements.cpu = {
         color: "#575757",
         behavior: behaviors.SOLID,
         category: "machines",
         state: "solid",
         density: 75,
         tempHigh: 1414,
         stateHigh: "explosion",
reactions: {
                    "virus": { elem1 : null , elem2:"malware", chance:0.9 },
                     
                 }
};

elements.computer = {
         color: "#2b2b2a",
         behavior: behaviors.SOLID,
         category: "machines",
         state: "solid",
         density: 8908,
         tempHigh: 1414,
         stateHigh: "explosion",
 reactions: {
                    "virus": { elem1 : null , elem2:"malware", chance:0.9 },
                    "water": { elem1: null , elem2: "electric" },                    
                 }
elements.co_detector = {
         color: "#2b2b2a",
         behavior: behaviors.WALL,
         category: "machines",
         state: "solid",
         density: 8908,
 reactions: {
                    "carbon_monoxide": { elem2:electric, chance:0.9 },
                    "water": { elem1: "explosion", elem2: "electric" },                    
                 }
};

