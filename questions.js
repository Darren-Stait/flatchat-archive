const QUESTION_POOL = {
  A: [
    { question: "An animal", answer: "Any animal starting with A (e.g. Antelope)", difficulty: "easy" },
    { question: "A type of ape", answer: "Any ape starting with A (e.g. Ape)", difficulty: "medium" },
    { question: "An obscure aquatic creature", answer: "Any aquatic creature starting with A (e.g. Anglerfish)", difficulty: "hard" }
  ],
  B: [
    { question: "A country", answer: "Any country starting with B (e.g. Brazil)", difficulty: "easy" },
    { question: "A breed of dog", answer: "Any dog breed starting with B (e.g. Beagle)", difficulty: "medium" },
    { question: "A type of bacteria", answer: "Any bacteria starting with B (e.g. Bacillus)", difficulty: "hard" }
  ],
  C: [
    { question: "A type of food", answer: "Any food starting with C (e.g. Curry)", difficulty: "easy" },
    { question: "A citrus fruit", answer: "Any citrus starting with C (e.g. Clementine)", difficulty: "medium" },
    { question: "A chemical element", answer: "Any element starting with C (e.g. Chromium)", difficulty: "hard" }
  ],
  D: [
    { question: "A city", answer: "Any city starting with D (e.g. Denver)", difficulty: "easy" },
    { question: "A desert", answer: "Any desert starting with D (e.g. Sahara)", difficulty: "medium" },
    { question: "A type of diatom", answer: "Any diatom starting with D (e.g. Denticula)", difficulty: "hard" }
  ],
  E: [
    { question: "A famous person", answer: "Any famous person starting with E (e.g. Einstein)", difficulty: "easy" },
    { question: "A European capital", answer: "Any European capital starting with E (e.g. Edinburgh)", difficulty: "medium" },
    { question: "An extinct animal species", answer: "Any extinct species starting with E (e.g. Elasmotherium)", difficulty: "hard" }
  ],
  F: [
    { question: "A sport", answer: "Any sport starting with F (e.g. Football)", difficulty: "easy" },
    { question: "A type of fish", answer: "Any fish starting with F (e.g. Flounder)", difficulty: "medium" },
    { question: "A fictional element from science", answer: "Any fictional element starting with F (e.g. Fictionalium)", difficulty: "hard" }
  ],
  G: [
    { question: "A movie title", answer: "Any movie title starting with G (e.g. Gladiator)", difficulty: "easy" },
    { question: "A type of gemstone", answer: "Any gemstone starting with G (e.g. Garnet)", difficulty: "medium" },
    { question: "A genus of plants", answer: "Any plant genus starting with G (e.g. Ginkgo)", difficulty: "hard" }
  ],
  H: [
    { question: "A musical instrument", answer: "Any instrument starting with H (e.g. Harp)", difficulty: "easy" },
    { question: "A historical figure", answer: "Any historical figure starting with H (e.g. Henry VIII)", difficulty: "medium" },
    { question: "A type of hexapod", answer: "Any hexapod starting with H (e.g. Hemiptera)", difficulty: "hard" }
  ],
  I: [
    { question: "A historical event", answer: "Any event starting with I (e.g. Industrial Revolution)", difficulty: "easy" },
    { question: "An island", answer: "Any island starting with I (e.g. Iceland)", difficulty: "medium" },
    { question: "An isotope", answer: "Any isotope starting with I (e.g. Iodine-131)", difficulty: "hard" }
  ],
  J: [
    { question: "A book title", answer: "Any book title starting with J (e.g. Jane Eyre)", difficulty: "easy" },
    { question: "A type of jewelry", answer: "Any jewelry starting with J (e.g. Jade bracelet)", difficulty: "medium" },
    { question: "A jawless fish", answer: "Any jawless fish starting with J (e.g. Jawfish)", difficulty: "hard" }
  ],
  K: [
    { question: "A type of flower", answer: "Any flower starting with K (e.g. Kalanchoe)", difficulty: "easy" },
    { question: "A kitchen utensil", answer: "Any utensil starting with K (e.g. Knife)", difficulty: "medium" },
    { question: "A ketone compound", answer: "Any ketone starting with K (e.g. Ketohexose)", difficulty: "hard" }
  ],
  L: [
    { question: "A musical genre", answer: "Any genre starting with L (e.g. Latin)", difficulty: "easy" },
    { question: "A type of lizard", answer: "Any lizard starting with L (e.g. Leopard Gecko)", difficulty: "medium" },
    { question: "A lichen species", answer: "Any lichen starting with L (e.g. Lobaria)", difficulty: "hard" }
  ],
  M: [
    { question: "A famous landmark", answer: "Any landmark starting with M (e.g. Machu Picchu)", difficulty: "easy" },
    { question: "A metal", answer: "Any metal starting with M (e.g. Magnesium)", difficulty: "medium" },
    { question: "A mollusk genus", answer: "Any mollusk starting with M (e.g. Murex)", difficulty: "hard" }
  ],
  N: [
    { question: "A type of dance", answer: "Any dance starting with N (e.g. Nia)", difficulty: "easy" },
    { question: "A country in Africa", answer: "Any African country starting with N (e.g. Nigeria)", difficulty: "medium" },
    { question: "A nematode species", answer: "Any nematode starting with N (e.g. Necator)", difficulty: "hard" }
  ],
  O: [
    { question: "A type of ocean", answer: "Any ocean starting with O (e.g. Ocean)", difficulty: "easy" },
    { question: "An orchestra instrument", answer: "Any instrument starting with O (e.g. Oboe)", difficulty: "medium" },
    { question: "An ore mineral", answer: "Any ore starting with O (e.g. Olivenite)", difficulty: "hard" }
  ],
  P: [
    { question: "A beverage", answer: "Any beverage starting with P (e.g. Pepsi)", difficulty: "easy" },
    { question: "A type of pasta", answer: "Any pasta starting with P (e.g. Penne)", difficulty: "medium" },
    { question: "A prehistoric creature", answer: "Any prehistoric creature starting with P (e.g. Pteranodon)", difficulty: "hard" }
  ],
  Q: [
    { question: "A type of clothing", answer: "Any clothing starting with Q (e.g. Quilted jacket)", difficulty: "easy" },
    { question: "A queen in history", answer: "Any queen starting with Q (e.g. Queen Victoria)", difficulty: "medium" },
    { question: "A quark type", answer: "Any quark starting with Q (e.g. Quantum)", difficulty: "hard" }
  ],
  R: [
    { question: "A color", answer: "Any color starting with R (e.g. Red)", difficulty: "easy" },
    { question: "A river", answer: "Any river starting with R (e.g. Rhine)", difficulty: "medium" },
    { question: "A rare earth element", answer: "Any rare earth starting with R (e.g. Rhenium)", difficulty: "hard" }
  ],
  S: [
    { question: "A type of vehicle", answer: "Any vehicle starting with S (e.g. Sedan)", difficulty: "easy" },
    { question: "A type of shell", answer: "Any shell starting with S (e.g. Scallop)", difficulty: "medium" },
    { question: "A stellar phenomenon", answer: "Any stellar phenomenon starting with S (e.g. Supernova)", difficulty: "hard" }
  ],
  T: [
    { question: "A holiday", answer: "Any holiday starting with T (e.g. Thanksgiving)", difficulty: "easy" },
    { question: "A type of tree", answer: "Any tree starting with T (e.g. Teak)", difficulty: "medium" },
    { question: "A textile fiber", answer: "Any fiber starting with T (e.g. Tencel)", difficulty: "hard" }
  ],
  U: [
    { question: "A body of water", answer: "Any body of water starting with U (e.g. Ural River)", difficulty: "easy" },
    { question: "A university", answer: "Any university starting with U (e.g. UCLA)", difficulty: "medium" },
    { question: "An ultraviolet phenomenon", answer: "Any UV phenomenon starting with U (e.g. Ultraviolet radiation)", difficulty: "hard" }
  ],
  V: [
    { question: "A type of tree", answer: "Any tree starting with V (e.g. Vine maple)", difficulty: "easy" },
    { question: "A vegetable", answer: "Any vegetable starting with V (e.g. Violet)", difficulty: "medium" },
    { question: "A virus species", answer: "Any virus starting with V (e.g. Varicella)", difficulty: "hard" }
  ],
  W: [
    { question: "A type of weather", answer: "Any weather starting with W (e.g. Windy)", difficulty: "easy" },
    { question: "A type of weapon", answer: "Any weapon starting with W (e.g. Wand)", difficulty: "medium" },
    { question: "A wavelength phenomenon", answer: "Any wavelength phenomenon starting with W (e.g. Wien's displacement law)", difficulty: "hard" }
  ],
  X: [
    { question: "A musical instrument", answer: "Any instrument starting with X (e.g. Xylophone)", difficulty: "easy" },
    { question: "An x-ray application", answer: "Any x-ray use starting with X (e.g. X-radiography)", difficulty: "medium" },
    { question: "A xenon compound", answer: "Any xenon compound starting with X (e.g. Xenon difluoride)", difficulty: "hard" }
  ],
  Y: [
    { question: "A type of fabric", answer: "Any fabric starting with Y (e.g. Yarn)", difficulty: "easy" },
    { question: "A yacht type", answer: "Any yacht starting with Y (e.g. Yacht)", difficulty: "medium" },
    { question: "A yttrium compound", answer: "Any yttrium compound starting with Y (e.g. Yttrium oxide)", difficulty: "hard" }
  ],
  Z: [
    { question: "An animal", answer: "Any animal starting with Z (e.g. Zebra)", difficulty: "easy" },
    { question: "A geological zone", answer: "Any zone starting with Z (e.g. Zone)", difficulty: "medium" },
    { question: "A zoological classification", answer: "Any classification starting with Z (e.g. Zooplankton)", difficulty: "hard" }
  ]
};
