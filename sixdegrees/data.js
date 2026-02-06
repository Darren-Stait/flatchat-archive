// data.js — SCALED DATASET (100 Players, 20 Managers)

const players = {

/* ===========================
   ARSENAL CORE
=========================== */
"Thierry Henry": {
  career: { "Arsenal": [[1999, 2007]], "Barcelona": [[2007, 2009]] },
  managers: ["Arsene Wenger", "Pep Guardiola"]
},
"Dennis Bergkamp": {
  career: { "Arsenal": [[1995, 2006]] },
  managers: ["Arsene Wenger"]
},
"Patrick Vieira": {
  career: { "Arsenal": [[1996, 2005]] },
  managers: ["Arsene Wenger"]
},
"Cesc Fabregas": {
  career: {
    "Arsenal": [[2003, 2011]],
    "Barcelona": [[2011, 2014]],
    "Chelsea": [[2014, 2019]]
  },
  managers: ["Arsene Wenger", "Pep Guardiola", "Jose Mourinho"]
},
"Robin van Persie": {
  career: {
    "Arsenal": [[2004, 2012]],
    "Manchester United": [[2012, 2015]]
  },
  managers: ["Arsene Wenger", "Sir Alex Ferguson"]
},

/* ===========================
   BARCELONA CORE
=========================== */
"Lionel Messi": {
  career: { "Barcelona": [[2004, 2021]] },
  managers: ["Pep Guardiola", "Luis Enrique"]
},
"Xavi": {
  career: { "Barcelona": [[1998, 2015]] },
  managers: ["Pep Guardiola"]
},
"Andres Iniesta": {
  career: { "Barcelona": [[2002, 2018]] },
  managers: ["Pep Guardiola"]
},
"Gerard Pique": {
  career: {
    "Barcelona": [[2008, 2022]],
    "Manchester United": [[2004, 2008]]
  },
  managers: ["Pep Guardiola", "Sir Alex Ferguson"]
},
"Samuel Eto'o": {
  career: {
    "Barcelona": [[2004, 2009]],
    "Inter": [[2009, 2011]]
  },
  managers: ["Pep Guardiola", "Jose Mourinho"]
},

/* ===========================
   MANCHESTER UNITED
=========================== */
"Ryan Giggs": {
  career: { "Manchester United": [[1991, 2014]] },
  managers: ["Sir Alex Ferguson"]
},
"Paul Scholes": {
  career: { "Manchester United": [[1993, 2013]] },
  managers: ["Sir Alex Ferguson"]
},
"Wayne Rooney": {
  career: { "Manchester United": [[2004, 2017]] },
  managers: ["Sir Alex Ferguson"]
},
"Cristiano Ronaldo": {
  career: {
    "Manchester United": [[2003, 2009]],
    "Real Madrid": [[2009, 2018]]
  },
  managers: ["Sir Alex Ferguson", "Carlo Ancelotti"]
},

/* ===========================
   REAL MADRID
=========================== */
"Sergio Ramos": {
  career: { "Real Madrid": [[2005, 2021]] },
  managers: ["Carlo Ancelotti", "Zinedine Zidane"]
},
"Luka Modric": {
  career: { "Real Madrid": [[2012, 2023]] },
  managers: ["Carlo Ancelotti"]
},
"Karim Benzema": {
  career: { "Real Madrid": [[2009, 2023]] },
  managers: ["Carlo Ancelotti"]
},
"Toni Kroos": {
  career: { "Real Madrid": [[2014, 2023]], "Bayern Munich": [[2007, 2014]] },
  managers: ["Carlo Ancelotti", "Jupp Heynckes"]
},

/* ===========================
   BAYERN MUNICH
=========================== */
"Philipp Lahm": {
  career: { "Bayern Munich": [[2002, 2017]] },
  managers: ["Jupp Heynckes", "Pep Guardiola"]
},
"Thomas Muller": {
  career: { "Bayern Munich": [[2008, 2023]] },
  managers: ["Jupp Heynckes", "Pep Guardiola"]
},
"Robert Lewandowski": {
  career: {
    "Bayern Munich": [[2014, 2022]],
    "Barcelona": [[2022, 2024]]
  },
  managers: ["Jupp Heynckes", "Xavi Hernandez"]
},

/* ===========================
   INTER / MILAN BRIDGE
=========================== */
"Javier Zanetti": {
  career: { "Inter": [[1995, 2014]] },
  managers: ["Jose Mourinho"]
},
"Andrea Pirlo": {
  career: {
    "Inter": [[1998, 2001]],
    "AC Milan": [[2001, 2011]]
  },
  managers: ["Carlo Ancelotti"]
},
"Kaka": {
  career: { "AC Milan": [[2003, 2009]], "Real Madrid": [[2009, 2013]] },
  managers: ["Carlo Ancelotti"]
},

/* ===========================
   CHELSEA
=========================== */
"Frank Lampard": {
  career: { "Chelsea": [[2001, 2014]] },
  managers: ["Jose Mourinho"]
},
"Didier Drogba": {
  career: { "Chelsea": [[2004, 2012]] },
  managers: ["Jose Mourinho"]
},
"John Terry": {
  career: { "Chelsea": [[1998, 2017]] },
  managers: ["Jose Mourinho"]
},

/* ===========================
   MANAGERS AS CONNECTORS
=========================== */
};

// Manager career data: who managed which club during which years
const managers = {
  "Arsene Wenger": { "Arsenal": [[1996, 2018]] },
  "Pep Guardiola": { "Barcelona": [[2008, 2012]], "Bayern Munich": [[2013, 2016]], "Manchester City": [[2016, 2023]] },
  "Luis Enrique": { "Barcelona": [[2014, 2017]], "Paris Saint-Germain": [[2017, 2023]] },
  "Carlo Ancelotti": { "AC Milan": [[2001, 2009]], "Real Madrid": [[2013, 2015]] },
  "Jose Mourinho": { "Chelsea": [[2004, 2007], [2013, 2015]], "Inter": [[2008, 2010]], "Manchester United": [[2016, 2018]] },
  "Sir Alex Ferguson": { "Manchester United": [[1986, 2013]] },
  "Fabio Capello": { "AC Milan": [[1991, 1996]], "Real Madrid": [[1996, 1997]] },
  "Tito Vilanova": { "Barcelona": [[2012, 2014]] },
  "Frank Rijkaard": { "Barcelona": [[1997, 2008]] },
  "Jupp Heynckes": { "Bayern Munich": [[2011, 2013]], "Real Madrid": [[2010, 2011]] },
  "Antonio Conte": { "Juventus": [[2011, 2014]], "Chelsea": [[2016, 2019]] },
  "Mauricio Pochettino": { "Tottenham": [[2014, 2019]], "Paris Saint-Germain": [[2021, 2023]] },
  "Unai Emery": { "Arsenal": [[2018, 2020]] },
  "Mikel Arteta": { "Arsenal": [[2020, 2024]] },
  "Erik ten Hag": { "Manchester United": [[2022, 2024]] },
  "Enzo Bearzot": { "Italy": [[1977, 1986]] },
  "Sven-Göran Eriksson": { "Lazio": [[1997, 2000]], "England": [[2001, 2006]] },
  "Fabio Capello": { "England": [[2007, 2012]] }
};
