const QUESTION_POOL = {
  A: [
    { question: "(Surname) Highest scorer in Europa League history <br>(Submitted by PaddyD)", answer: "Pierre-Emerick Aubameyang", difficulty: "normal" },
    { question: "(Surname) Premier League winner for Leicester with the middle name Kevin <br>(Submitted by Laboon)", answer: "Marc Kevin Albrighton", difficulty: "extreme" }
  ],
  B: [
    { question: "(First name) Zimbabwean striker that played for Man City and Portsmouth <br>(Submitted by PaddyD)", answer: "Benjani", difficulty: "normal" },
    { question: "(Surname) Pink haired former winger for Ajax, Liverpool and Fulham <br>(Submitted by Laboon)", answer: "Ryan Babel", difficulty: "normal" },
    { question: "A type of bacteria", answer: "Any bacteria starting with B (e.g. Bacillus)", difficulty: "extreme" }
  ],
  C: [
    { question: "EFL club once managed by Ole Gunnar Solskjaer <br>(Submitted by PaddyD)", answer: "Cardiff", difficulty: "normal" },
    { question: "(Surname) 'When the seagulls follow the trawler, it's because they think sardines will be thrown in the sea' (Submitted by Laboon)", answer: "Eric Cantona", difficulty: "extreme" }
  ],
  D: [
    { question: "(Known by) Ex Real Madrid, Man City & Juve player who scored the only goal in the 2026 Copa Libertadores final <br>(Submitted by PaddyD)", answer: "Danilo", difficulty: "normal" },
    { question: "The city Bohemian FC is from <br>(Submitted by Laboon)", answer: "Dublin", difficulty: "normal" },
    { question: "A type of diatom", answer: "Any diatom starting with D (e.g. Denticula)", difficulty: "extreme" }
  ],
  E: [
    { question: "(Surname) First player to lose 4 Champions League finals <br>(Submitted by PaddyD)", answer: "Patrice Evra", difficulty: "normal" },
    { question: "(Surname) Former Swedish International that played for Feyenoord and Bolton <br>(Submitted by Laboon)", answer: "Johan Elmander", difficulty: "normal" },
    { question: "An extinct animal species", answer: "Any extinct species starting with E (e.g. Elasmotherium)", difficulty: "extreme" }
  ],
  F: [
    { question: "German team who beat Rangers in the 2022 Europa League final <br>(Submitted by PaddyD)", answer: "Frankfurt", difficulty: "normal" },
    { question: "(Surname) Most capped player from Honduras <br>(Submitted by Laboon)", answer: "Maynor Figueroa", difficulty: "normal" },
    { question: "A fictional element from science", answer: "Any fictional element starting with F (e.g. Fictionalium)", difficulty: "extreme" }
  ],
  G: [
    { question: "Italian team Djed Spence once spent time on loan at <br>(Submitted by PaddyD)", answer: "Genoa", difficulty: "normal" },
    { question: "(Surname) AS Roma coach during the 25/26 Serie A season <br>(Submitted by Laboon)", answer: "Gian Piero Gasperini", difficulty: "normal" },
    { question: "A genus of plants", answer: "Any plant genus starting with G (e.g. Ginkgo)", difficulty: "extreme" }
  ],
  H: [
    { question: "EFL Club that once signed Harry Maguire and Andy Robertson on the same day <br>(Submitted by PaddyD)", answer: "Hull City", difficulty: "normal" },
    { question: "(Known by) Former goalkeeper who played 20 Premier League games for Chelsea been 2006 and 2014 <br>(Submitted by Laboon)", answer: "Hilario", difficulty: "normal" },
    { question: "A type of hexapod", answer: "Any hexapod starting with H (e.g. Hemiptera)", difficulty: "extreme" }
  ],
  I: [
    { question: "Football Club owned by a member of the class of 92 <br>(Submitted by PaddyD)", answer: "Inter Miami", difficulty: "normal" },
    { question: "(Surname) Former Norweigan striker that played for Tottenham and Wolves <br>(Submitted by Laboon)", answer: "Steffen Iversen", difficulty: "extreme" }
  ],
  J: [
    { question: "(First name) Manager who won the world cup with Germany in 2014 <br>(Submitted by PaddyD)", answer: "Joachim Löw", difficulty: "normal" },
    { question: "(Surname) Former Australian International that played for Crystal Palace and Aston Villa <br>(Submitted by Laboon)", answer: "Mile Jedinak", difficulty: "normal" },
    { question: "A jawless fish", answer: "Any jawless fish starting with J (e.g. Jawfish)", difficulty: "extreme" }
  ],
  K: [
    { question: "(Known by) Player who famously scored in a 0-0 draw with Celtic <br>(Submitted by PaddyD)", answer: "Kaka", difficulty: "normal" },
    { question: "A ketone compound", answer: "Any ketone starting with K (e.g. Ketohexose)", difficulty: "extreme" }
  ],
  L: [
    { question: "(Surname) Belgian player who has played for Brighton and Arsenal <br>(Submitted by PaddyD)", answer: "Leandro Trossard", difficulty: "normal" },
    { question: "(First name) Argentinian centre half deemed too small for the league <br>(Submitted by Laboon)", answer: "Lisandro Martinez", difficulty: "normal" },
    { question: "A lichen species", answer: "Any lichen starting with L (e.g. Lobaria)", difficulty: "extreme" }
  ],
  M: [
    { question: "(Known by) Fullback who Gareth Bale scored a hattrick against for Spurs in the UCL <br>(Submitted by PaddyD)", answer: "Maicon", difficulty: "normal" },
    { question: "A mollusk genus", answer: "Any mollusk starting with M (e.g. Murex)", difficulty: "extreme" }
  ],
  N: [
    { question: "Name of Manchester United before they became Manchester United <br>(Submitted by PaddyD)", answer: "Newton Heath", difficulty: "normal" },
    { question: "English Team with a 100% win rate in European Cup finals <br>(Submitted by Laboon)", answer: "Nottingham Forest", difficulty: "normal" },
    { question: "A nematode species", answer: "Any nematode starting with N (e.g. Necator)", difficulty: "extreme" }
  ],
  O: [
    { question: "La Liga side that play home games at El Sadar Stadium <br>(Submitted by PaddyD)", answer: "Osasuna", difficulty: "normal" },
    { question: "An ore mineral", answer: "Any ore starting with O (e.g. Olivenite)", difficulty: "extreme" }
  ],
  P: [
    { question: "Team that won the 2008 FA Cup <br>(Submitted by PaddyD)", answer: "Portsmouth", difficulty: "normal" },
    { question: "A prehistoric creature", answer: "Any prehistoric creature starting with P (e.g. Pteranodon)", difficulty: "extreme" }
  ],
  Q: [
    { question: "A type of clothing", answer: "Any clothing starting with Q (e.g. Quilted jacket)", difficulty: "normal" },
    { question: "(First name) Dutch fullback that signed for Burnley in 2025 from Feyenoord <br>(Submitted by PaddyD)", answer: "Quilindschy Hartman", difficulty: "extreme" }
  ],
  R: [
    { question: "Scottish team that went into administration in 2012 <br>(Submitted by PaddyD)", answer: "Rangers", difficulty: "normal" },
    { question: "Team that made the quarter finals in the 1996 Champions League, furthest in their history (Submitted by Laboon)", answer: "Rosenborg", difficulty: "extreme" }
  ],
  S: [
    { question: "(Surname) Argentinian centre back who won the UCL with Man United in 1999 <br>(Submitted by PaddyD)", answer: "Jaap Stam", difficulty: "normal" },
    { question: "(Surname) Former player nicknamed the 'Baby Faced Assasin' <br>(Submitted by Laboon)", answer: "Ole Gunnar Solskjaer", difficulty: "normal" },
    { question: "(Surname) Former player nicknamed the 'Baby Faced Assasin' <br>(Submitted by Laboon)", answer: "Ole Gunnar Solskjaer", difficulty: "extreme" },
  ],
  T: [
    { question: "Turkish team that Daniel Sturridge had a spell at <br>(Submitted by PaddyD)", answer: "Trabzonspor", difficulty: "normal" },
    { question: "A textile fiber", answer: "Any fiber starting with T (e.g. Tencel)", difficulty: "extreme" }
  ],
  U: [
    { question: "Dutch team Celtic beat in the final league phase game in the Europa League 25/26 season <br>(Submitted by PaddyD)", answer: "FC Utrecht", difficulty: "normal" },
    { question: "An ultraviolet phenomenon", answer: "Any UV phenomenon starting with U (e.g. Ultraviolet radiation)", difficulty: "extreme" }
  ],
  V: [
    { question: "(First name) Member of the Wimbledon crazy gang turned hard man actor <br>(Submitted by PaddyD)", answer: "Vinnie Jones", difficulty: "normal" },
    { question: "A virus species", answer: "Any virus starting with V (e.g. Varicella)", difficulty: "extreme" }
  ],
  W: [
    { question: "(Surname) Youngest player to ever play for England <br>(Submitted by PaddyD)", answer: "Theo Walcott", difficulty: "normal" },
    { question: "Blue wearing english team that has an alliterative name with this letter <br>(Submitted by Laboon)", answer: "Wycombe Wanderers", difficulty: "normal" },
    { question: "A wavelength phenomenon", answer: "Any wavelength phenomenon starting with W (e.g. Wien's displacement law)", difficulty: "extreme" }
  ],
  X: [
    { question: "A musical instrument", answer: "Any instrument starting with X (e.g. Xylophone)", difficulty: "normal" },
    { question: "(Contains first name) 1998 World Cup winning left back <br>(Submitted by Laboon)", answer: "Bixente Lizarazu", difficulty: "extreme" }
  ],
  Y: [
    { question: "(First name) Trickster from DR Congo that played for Palace & Everton <br>(Submitted by PaddyD)", answer: "Yannick Bolasie", difficulty: "normal" },
    { question: "A yttrium compound", answer: "Any yttrium compound starting with Y (e.g. Yttrium oxide)", difficulty: "extreme" }
  ],
  Z: [
    { question: "(Surname) Italian fullback that spent time at Chelsea and Atalanta <br>(Submitted by PaddyD)", answer: "Davide Zappacosta", difficulty: "normal" },
    { question: "A zoological classification", answer: "Any classification starting with Z (e.g. Zooplankton)", difficulty: "extreme" }
  ]
};
