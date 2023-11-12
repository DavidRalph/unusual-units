const unitsLength = [
  // Metric
  { name: "Millimeters", si: 0.001, penalty: 1 },
  { name: "Centimeters", si: 0.01, penalty: 1 },
  { name: "Meters", si: 1, penalty: 2 },
  { name: "Kilometers", si: 1000, penalty: 2 },
  // Imperial
  { name: "Inches", si: 0.0254, penalty: 1 },
  { name: "Feet", si: 0.3048, penalty: 1 },
  { name: "Hands", si: 0.1016, penalty: 0 },
  { name: "Links", si: 0.201168, penalty: 0 },
  { name: "Dimes", si: 0.01791, penalty: 0 },
  { name: "Nails", si: 0.05715, penalty: 0 },
  { name: "Fingers", si: 0.1143, penalty: 0 },
  { name: "Cubits", si: 0.4572, penalty: 0 },
  { name: "Yards", si: 0.9144, penalty: 1 },
  { name: "Fathoms", si: 1.8288, penalty: 0 },
  { name: "Rods", si: 5.0292, penalty: 0 },
  { name: "Chains", si: 20.1168, penalty: 0 },
  { name: "Furlongs", si: 201.168, penalty: 0 },
  { name: "Miles", si: 1609.344, penalty: 2 },
  { name: "Nautical Miles", si: 1852, penalty: 1 },
  { name: "Marathons", si: 42195, penalty: 0 },
  // Currency
  { name: "Pennies", si: 0.0203, penalty: 0 },
  { name: "Nickels", si: 0.01905, penalty: 0 },
  { name: "2p Coins", si: 0.0259, penalty: 0 },
  { name: "5p Coins", si: 0.018, penalty: 0 },
  { name: "10p Coins", si: 0.0245, penalty: 0 },
  { name: "20p Coins", si: 0.0214, penalty: 0 },
  { name: "50p Coins", si: 0.0273, penalty: 0 },
  { name: "£1 Coins", si: 0.0235, penalty: 0 },
  { name: "£2 Coins", si: 0.0284, penalty: 0 },
  { name: "£5 Notes", si: 0.125, penalty: 0 },
  { name: "£10 Notes", si: 0.132, penalty: 0 },
  { name: "£50 Notes", si: 0.156, penalty: 0 },
  { name: "£20 Notes", si: 0.139, penalty: 0 },
  { name: "£100 Notes", si: 0.167, penalty: 0 },
  { name: "£200 Notes", si: 0.178, penalty: 0 },
  { name: "Dollar Bills", si: 0.156, penalty: 0 },
  // Objects & Animals
  { name: "Human Hairs", si: 0.0001, penalty: 0 },
  { name: "Cans of Soda", si: 0.12, penalty: 0 },
  { name: "Hot Dogs", si: 0.15, penalty: 0 },
  { name: "Bananas", si: 0.18, penalty: 0 },
  { name: "House Cats", si: 0.3, penalty: 0 },
  { name: "Loaves of Bread", si: 0.3, penalty: 0 },
  { name: "Wine Bottles", si: 0.33, penalty: 0 },
  { name: "Watermelons", si: 0.6, penalty: 0 },
  { name: "Giant Pandas", si: 1.8, penalty: 0 },
  { name: "Lions", si: 3, penalty: 0 },
  { name: "African Elephant", si: 3, penalty: 0 },
  { name: "Tigers", si: 3.3, penalty: 0 },
  { name: "Sunflowers", si: 3.65, penalty: 0 },
  { name: "Giraffes", si: 5.5, penalty: 0 },
  { name: "Great White Sharks", si: 6, penalty: 0 },
  { name: "Killer Whales", si: 9.8, penalty: 0 },
  { name: "Buses", si: 12, penalty: 0 },
  { name: "Tyrannosaurus Rexes", si: 12.3, penalty: 0 },
  { name: "Giant Squids", si: 13, penalty: 0 },
  { name: "Megalodons", si: 18.2, penalty: 0 },
  { name: "Tennis Courts", si: 23.77, penalty: 0 },
  { name: "Basketball Courts", si: 28, penalty: 0 },
  { name: "Blue Whales", si: 33.5, penalty: 0 },
  { name: "Olympic Swimming Pools", si: 50, penalty: 0 },
  { name: "Leaning Towers of Pisa", si: 55.86, penalty: 0 },
  { name: "Boeing 747s", si: 76.3, penalty: 0 },
  { name: "Football Fields", si: 91.44, penalty: 0 },
  { name: "Statues of Liberty", si: 93, penalty: 0 },
  { name: "Big Bens", si: 96.3, penalty: 0 },
  { name: "Redwood Trees", si: 115.5, penalty: 0 },
  { name: "Great Pyramids", si: 146.6, penalty: 0 },
  { name: "Washington Monuments", si: 169.294, penalty: 0 },
  { name: "New York City Blocks", si: 264, penalty: 0 },
  { name: "Eiffel Towers", si: 324, penalty: 0 },
  { name: "Empire State Buildings", si: 443, penalty: 0 },
  { name: "Niagara Falls", si: 792, penalty: 0 },
  { name: "Burj Khalifas", si: 828, penalty: 0 },
  { name: "Great Barrier Reefs", si: 2300, penalty: 0 },
  { name: "Golden Gate Bridges", si: 2737, penalty: 0 },
  { name: "Nile Rivers", si: 6695, penalty: 0 },
  { name: "Mount Everests", si: 8848, penalty: 0 },
  { name: "Pacific Ocean Depth", si: 10911, penalty: 0 },
  { name: "Mariana Trench Depths", si: 11034, penalty: 0 },
  { name: "Great Walls of China", si: 21196, penalty: 0 },
  // Space
  { name: "Pluto Diameters", si: 2370000, penalty: 0 },
  { name: "Moon Diameters", si: 3476300, penalty: 0 },
  { name: "Mercury Diameters", si: 4879000, penalty: 0 },
  { name: "Mars Diameters", si: 6792000, penalty: 0 },
  { name: "Pluto Circumferences", si: 7360000, penalty: 0 },
  { name: "Moon Circumferences", si: 10921000, penalty: 0 },
  { name: "Venus Diameters", si: 12103600, penalty: 0 },
  { name: "Earth Diameters", si: 12742000, penalty: 0 },
  { name: "Mercury Circumferences", si: 15329000, penalty: 0 },
  { name: "Neptune Circumferences", si: 15415000, penalty: 0 },
  { name: "Uranus Circumferences", si: 15935400, penalty: 0 },
  { name: "Mars Circumferences", si: 21344000, penalty: 0 },
  { name: "Saturn Circumferences", si: 36588000, penalty: 0 },
  { name: "Venus Circumferences", si: 38025000, penalty: 0 },
  { name: "Earth Circumferences", si: 40075000, penalty: 0 },
  { name: "Jupiter Circumferences", si: 43926000, penalty: 0 },
  { name: "Neptune Diameters", si: 49532000, penalty: 0 },
  { name: "Uranus Diameters", si: 51118000, penalty: 0 },
  { name: "Earth-Moon Distances", si: 384400000, penalty: 0 },
  { name: "Sun Circumferences", si: 4374000000, penalty: 0 },
  { name: "Astronomical Units", si: 149597870700, penalty: 1 },
  { name: "Light Years", si: 9460730472580800, penalty: 0 },
  { name: "Parsecs", si: 30856775814671900, penalty: 0 },
  { name: "Earth-Alpha Centauri Distances", si: 41300000000000000, penalty: 0 },
  { name: "Solar Systems", si: 2.8746e21, penalty: 0 },
  { name: "Milky Ways", si: 1.02e29, penalty: 0 },
];

// On page load
window.addEventListener("load", () => {
  setupConverter("#inputLength", "#selectLength", "#outputLength", unitsLength);
});

function setupConverter(input, select, output, units) {
  const inputElement = document.querySelector(input);
  const selectElement = document.querySelector(select);
  const outputElement = document.querySelector(output);

  // Populate select
  for (const unit of units) {
    const option = document.createElement("option");
    option.value = unit.name;
    option.innerHTML = unit.name;
    selectElement.appendChild(option);
  }

  // Handle input
  const update = () => {
    const conversion = convert(inputElement.value, selectElement.value, units);
    const parts = conversion.map((part) => `${part.count} ${part.unit.name}`);
    outputElement.innerHTML = "Is equal to " + parts.join(", ");
  };

  inputElement.addEventListener("input", update);
  selectElement.addEventListener("change", update);
}

function convert(inNumber, inUnitName, units) {
  const inUnit = units.filter((unit) => unit.name === inUnitName)[0];
  console.log(inNumber, inUnit, "equals:");
  let output = [];
  let allowedUnits = units.filter((unit) => unit !== inUnit);
  let remainder = inUnit.si * inNumber;
  while (remainder > 0.0000000001) {
    const { count, unit } = bestUnit(remainder, allowedUnits);
    remainder = remainder - count * unit.si;
    console.log(count, unit, "remainder", remainder);
    output.push({ count, unit });
  }
  return output;
}

/**
 * Find the unit with the least digits
 */
function bestUnit(si, units) {
  return units
    .map((unit) => {
      const count = si / unit.si;

      // Prefer visually smaller numbers (less digits)
      let weight = numberOfDigits(count);

      // Strongly prefer units smaller than the input
      if (count < 1) {
        weight += 10;
      }

      return { count, unit, weight };
    })
    .sort((a, b) => a.weight - b.weight)[0];
}

function numberOfDigits(number) {
  // Avoid scientific notation
  const str = Number(number)
    .toFixed(100)
    .replace(/\.?0+$/, "");
  // Don't penalise decimals
  return str.replace(".", "").length;
}
