// data.js — SCALED DATASET (100 Players, 20 Managers)

const players = {
// CHELSEA STARS
"Frank Lampard": {
  image: "/games/player-images/lampard.png",
  career: { "West Ham United": [[1995, 2001]], "Chelsea": [[2001, 2014]], "Manchester City": [[2014, 2015]] },
},
"Didier Drogba": {
  image: "/games/player-images/drogba.png",
  career: { "Marseille": [[2003, 2004]], "Chelsea": [[2004, 2012], [2014, 2015]] },
},
"John Terry": {
  image: "/games/player-images/terry.png",
  career: { "Chelsea": [[1998, 2017]] },
},
"Ashley Cole": {
  image: "/games/player-images/cole.png",
  career: { "Arsenal": [[1999, 2006]], "Chelsea": [[2006, 2014]], "AS Roma": [[2014, 2016]] },
},
"Petr Cech": {
  image: "/games/player-images/cech.png",
  career: { "Rennes": [[2002, 2004]], "Chelsea": [[2004, 2015]], "Arsenal": [[2015, 2019]] },
},
"Eden Hazard": {
    image: "/games/player-images/hazard.png",
    career: { "Lille": [[2007, 2012]], "Chelsea": [[2012, 2019]], "Real Madrid": [[2019, 2023]] },
},
// MILAN STARS
"Alexandre Pato": {
    image: "/games/player-images/pato.png",
    career: { "AC Milan": [[2007, 2013]], "Chelsea": [[2016]], "Villarreal": [[2016, 2017]] },
}, 
"Gennaro Gattuso": {
    image: "/games/player-images/gattuso.png",
    career: { "AC Milan": [[1999, 2012]]},
},
"Cafu": {
    image: "/games/player-images/cafu.png",
    career: { "AS Roma": [[1997, 2003]], "AC Milan": [[2003, 2008]] },
},
"Kaka": {
    image: "/games/player-images/kaka.png",
    career: { "AC Milan": [[2003, 2009], [2013, 2014]], "Real Madrid": [[2009, 2013]] },
},
"Fillipo Inzaghi": {
    image: "/games/player-images/inzaghi.png",
    career: { "Juventus": [[1999, 2001]], "AC Milan": [[2001, 2012]] },
},
"Nigel de Jong": {
    image: "/games/player-images/ndejong.png",
    career: { "Ajax": [[2002, 2006]], "Hamburg": [[2006, 2009]], "Manchester City": [[2009, 2012]], "AC Milan": [[2012, 2016]] },
},
// REAL MADRID STARS
"Toni Kroos": {
    image: "/games/player-images/kroos.png",
    career: { "Bayern Munich": [[2007, 2014]], "Bayer Leverkusen": [[2009, 2010]], "Real Madrid": [[2014, 2024]] },
},
"Karim Benzema": {
    image: "/games/player-images/benzema.png",
    career: { "Lyon": [[2004, 2009]], "Real Madrid": [[2009, 2023]] },
},
"Luka Modric": {
    image: "/games/player-images/modric.png",
    career: { "Tottenham Hotspur": [[2008, 2012]], "Real Madrid": [[2012, 2025]], "AC Milan": [[2025, 2026]] },
},
"Sergio Ramos": {
    image: "/games/player-images/sergioramos.png",
    career: { "Sevilla": [[2004, 2005], [2023, 2024]], "Real Madrid": [[2005, 2021]], "Paris Saint-Germain": [[2021, 2023]] },
},
"Gareth Bale": {
    image: "/games/player-images/bale.png",
    career: { "Southampton": [[2006, 2007]], "Tottenham Hotspur": [[2007, 2013], [2020,2021]], "Real Madrid": [[2013, 2022]] },
},
"Isco": {
    image: "/games/player-images/isco.png",
    career: { "Valencia": [[2010, 2011]], "Malaga": [[2011, 2013]], "Real Madrid": [[2013, 2022]], "Sevilla": [[2022]], "Real Betis": [[2023, 2026]] },
},
// JUVENTUS STARS
"Giorgio Chiellini": {
    image: "/games/player-images/chiellini.png",
    career: { "AS Roma": [[2002, 2004]], "Juventus": [[2004, 2022]], "Fiorentina": [[2004, 2005]] },
},
"Andrea Barzagli": {
    image: "/games/player-images/barzagli.png",
    career: { "Chievo": [[2003, 2004]], "Palermo": [[2004, 2008]], "Wolfsburg": [[2008, 2011]], "Juventus": [[2011, 2019]] },
},
"Paul Pogba": {
    image: "/games/player-images/pogba.png",
    career: { "Manchester United": [[2011, 2012], [2016, 2022]], "Juventus": [[2012, 2016], [2022, 2024]], "Monaco": [[2025, 2026]] },
},
"Kwadwo Asamoah": {
    image: "/games/player-images/asamoah.png",
    career: { "Udinese": [[2008, 2012]], "Juventus": [[2012, 2018]], "Inter Milan": [[2018, 2020]], "Cagliari": [[2021]] },
},
"Stephan Lichtsteiner": {
    image: "/games/player-images/lichtsteiner.png",
    career: { "Lille": [[2005, 2008]], "Lazio": [[2008, 2011]], "Juventus": [[2011, 2018]], "Arsenal": [[2018, 2019]] },
},
"Claudio Marchisio": {
    image: "/games/player-images/marchisio.png",
    career: { "Juventus": [[2005, 2018]] }
},
// BAYERN STARS
"Phillip Lahm": {
    image: "/games/player-images/lahm.png",
    career: { "Bayern Munich": [[2002, 2017]], "Stuttgart": [[2003, 2005]] },
},
"Bastian Schweinsteiger": {
    image: "/games/player-images/schweinsteiger.png",
    career: { "Bayern Munich": [[2002, 2015]], "Manchester United": [[2015, 2017]] },
},
"Manuel Neuer": {
    image: "/games/player-images/neuer.png",  image: "/games/player-images/lampard.png",
    career: { "Schalke 04": [[2005, 2011]], "Bayern Munich": [[2011, 2026]] },
},
"David Alaba": {
    image: "/games/player-images/alaba.png",
    career: { "Bayern Munich": [[2010, 2021]], "Hoffenheim": [[2011]], "Real Madrid": [[2021, 2026]] },
},
"Mario Gotze": {
    image: "/games/player-images/gotze.png",
    career: { "Borussia Dortmund": [[2009, 2013], [2016, 2020]], "Bayern Munich": [[2013, 2016]], "PSV Eindhoven": [[2020, 2022]], "Eintracht Frankfurt": [[2022, 2026]] },
},
"Michael Ballack": {
    image: "/games/player-images/ballack.png",
    career: { "Bayer Leverkusen": [[1999, 2002], [2010, 2012]], "Bayern Munich": [[2002, 2006]], "Chelsea": [[2006, 2010]] },
},
// MAN CITY STARS
"Edin Dzeko": {
    image: "/games/player-images/dzeko.png",
    career: { "Wolfsburg": [[2007, 2011]], "Manchester City": [[2011, 2016]], "AS Roma": [[2015, 2021]], "Inter Milan": [[2021, 2023]], "Fenerbache": [[2023, 2025]], "Fiorentina": [[2025, 2026]], "Schalke": [[2026]] },
},
"Yaya Toure": {
    image: "/games/player-images/yayatoure.png",
    career: { "Monaco": [[2006, 2007]],"Barcelona": [[2007, 2010]], "Manchester City": [[2010, 2018]] },
},
"Claudio Bravo": {
    image: "/games/player-images/bravo.png",
    career: { "Real Sociedad": [[2006, 2014]], "Barcelona": [[2014, 2016]], "Manchester City": [[2016, 2020]], "Real Betis": [[2020, 2024]] },
},
"Jack Grealish": {
    image: "/games/player-images/grealish.png",
    career: { "Aston Villa": [[2013, 2021]], "Manchester City": [[2021, 2026]], "Everton": [[2025, 2026]] },
}
};

// Manager career data: who managed which club during which years


const managers = {
  "Carlo Ancelotti": { 
    image: "/games/player-images/lampard.png",
    career: { "Juventus": [[1999, 2001]], "AC Milan": [[2001, 2009]], "Chelsea": [[2009, 2011]], "Paris Saint-Germain": [[2011, 2013]], "Real Madrid": [[2013, 2015], [2021, 2025]], "Bayern Munich": [[2016, 2017]], "Napoli": [[2018, 2019]], "Everton": [[2019, 2021]] },
  },
  "Jose Mourinho": { 
    image: "/games/player-images/mourinho.png",
    career: { "Porto": [[2002, 2004]], "Chelsea": [[2004, 2007], [2013, 2015]], "Inter Milan": [[2008, 2010]], "Real Madrid": [[2010, 2013]], "Manchester United": [[2016, 2018]], "Tottenham Hotspur": [[2019, 2021]], "AS Roma": [[2021, 2024]], "Fenerbache": [[2024, 2025]], "Benfica": [[2025, 2026]] },
  },
  "Antonio Conte": { 
    image: "/games/player-images/conte.png",
    career: { "Atalanta": [[2009, 2010]],"Juventus": [[2011, 2014]], "Chelsea": [[2016, 2018]], "Inter Milan": [[2019, 2021]], "Tottenham Hotspur": [[2021, 2023]], "Napoli": [[2024, 2026]] },
  },
  "Rafael Benitez": { 
    image: "/games/player-images/benitez.png",
    career: { "Valencia": [[2001, 2004]], "Liverpool": [[2004, 2010]], "Inter Milan": [[2010]], "Chelsea": [[2012, 2013]], "Napoli": [[2013, 2015]], "Real Madrid": [[2015, 2016]], "Newcastle": [[2016, 2019]], "Everton": [[2021, 2022]], "Celta Vigo": [[2023, 2024]] },
  },
  "Claudio Ranieri": { 
    image: "/games/player-images/ranieri.png",
    career: { "Chelsea": [[2000, 2004]], "Valencia": [[2004, 2005]], "Parma": [[2007]], "Juventus": [[2007, 2009]], "AS Roma": [[2009, 2011], [2019], [2024, 2025]], "Inter Milan": [[2011, 2012]], "Monaco": [[2012, 2014]], "Leicester City": [[2015, 2017]], "Nantes": [[2017, 2018]], "Fulham": [[2018, 2019]], "Sampdoria": [[2019, 2021]], "Watford": [[2021, 2022]], "Cagliari": [[2023, 2024]] },
  },
  "Manuel Pellegrini": { 
    image: "/games/player-images/pellegrini.png",
    career: { "Villarreal": [[2004, 2009]], "Real Madrid": [[2009, 2010]], "Malaga": [[2010, 2013]], "Manchester City": [[2013, 2016]], "West Ham United": [[2018, 2019]], "Real Betis": [[2020, 2026]] },
  },
  "Harry Redknapp": { 
    image: "/games/player-images/redknapp.png",
    career: { "West Ham United": [[1994, 2001]], "Portsmouth": [[2002, 2004], [2005, 2008]], "Southampton": [[2004, 2005]], "Tottenham Hotspur": [[2008, 2012]], "Queens Park Rangers": [[2012, 2015]] },
  },
  "Arsene Wenger": { 
    image: "/games/player-images/wenger.png",
    career: { "Arsenal": [[1996, 2018]] },
  },
  "Rudi Garcia": { 
    image: "/games/player-images/garcia.png",
    career: { "Lille": [[2008, 2013]], "AS Roma": [[2013, 2016]], "Marseille": [[2016, 2019]], "Napoli": [[2023]] },
  },
  "Luciano Spalletti": { 
    image: "/games/player-images/spalletti.png",
    career: { "Udinese": [[2002, 2005]], "AS Roma": [[2005, 2009], [2016, 2017]], "Inter Milan": [[2017, 2019]], "Napoli": [[2021, 2023]], "Juventus": [[2025, 2026]] },
  },
  "Zinedine Zidane": { 
    image: "/games/player-images/zidane.png",
    career: { "Real Madrid": [[2016, 2018], [2019, 2021]] },
  },
  "Claude Puel": { 
    image: "/games/player-images/puel.png",
    career: { "Lille": [[2002, 2008]], "Olympique Lyonnais": [[2009, 2011]], "Nice": [[2012, 2016], [2025, 2026]], "Southampton": [[2016, 2017]], "Leicester City": [[2017, 2019]] },
  },
  "Massimiliano Allegri": { 
    image: "/games/player-images/allegri.png",
    career: { "AC Milan": [[2010, 2014], [2025, 2026]], "Juventus": [[2014, 2019], [2021, 2024]]},
  },
  "Fabio Capello": { 
    image: "/games/player-images/capello.png", 
    career: { "AC Milan": [[1997, 1998]], "AS Roma": [[1999, 2004]], "Juventus": [[2004, 2006]], "Real Madrid": [[2006, 2007]] },
  },
  "Ronald Koeman": { 
    image: "/games/player-images/koeman.png",
    career: { "Ajax": [[2001, 2005]], "Benfica": [[2005, 2006]], "PSV Eindhoven": [[2006, 2007]], "Valencia": [[2007, 2008]], "Southampton": [[2014, 2016]], "Everton": [[2016, 2017]], "Barcelona": [[2020, 2021]] },
  },
  "Roberto Mancini": { 
    image: "/games/player-images/mancini.png",
    career: { "Fiorentina": [[2001, 2002]], "Lazio": [[2002, 2004]], "Inter Milan": [[2004, 2008]], "Manchester City": [[2009, 2013]] },
  },
  "Filippo Inzaghi": { 
    image: "/games/player-images/inzaghi.png",
    career: { "AC Milan": [[2014, 2015]], "Bologna": [[2018, 2019]] },
  },
  "Gerard Houllier": { 
    image: "/games/player-images/houllier.png",
    career: { "Liverpool": [[1998, 2004]], "Lyon": [[2005, 2007]], "Aston Villa": [[2010, 2011]] },
  },
  "Andres Villas-Boas": { 
    image: "/games/player-images/villasboas.png",
    career: { "Porto": [[2010, 2011]], "Chelsea": [[2011, 2012]], "Tottenham Hotspur": [[2012, 2013]], "Marseille": [[2019, 2021]] },
  },
  "Xabi Alonso": { 
    image: "/games/player-images/xabialonso.png",
    career: { "Bayer Leverkusen": [[2022, 2025]], "Real Madrid": [[2025, 2026]] },
  },
  "Julen Lopetegui": { 
    image: "/games/player-images/lopetegui.png",
    career: { "Porto": [[2014, 2016]], "Real Madrid": [[2018]], "Sevilla": [[2019, 2022]], "Wolverhampton Wanderers": [[2022, 2023]], "West Ham United": [[2024, 2025]] },
  },
  "Mauricio Pochettino": { 
    image: "/games/player-images/pochettino.png",
    career: { "Espanyol": [[2009, 2012]], "Southampton": [[2013, 2014]], "Tottenham Hotspur": [[2014, 2019]], "Paris Saint-Germain": [[2021, 2022]], "Chelsea": [[2023, 2024]] },
  },
  "Christophe Galtier": { 
    image: "/games/player-images/galtier.png",
    career: { "Saint-Etienne": [[2009, 2017]], "Lille": [[2017, 2021]], "Nice": [[2021, 2022]], "Paris Saint-Germain": [[2022, 2023]] },
  },
  "Juande Ramos": { 
    image: "/games/player-images/juanderamos.png",
    career: { "Malaga": [[2003, 2004], [2016]], "Sevilla": [[2005, 2007]], "Tottenham Hotspur": [[2007, 2008]], "Real Madrid": [[2008, 2009]] },
  },
  "Steve McClaren": { 
    image: "/games/player-images/mcclaren.png",
    career: { "Middlesbrough": [[2001, 2006]], "Wolfsburg": [[2010, 2011]], "Newcastle United": [[2015, 2016]]},
  },
  "Ole Gunnar Solskjaer": { 
    image: "/games/player-images/solskjaer.png",
    career: { "Cardiff City": [[2014]], "Manchester United": [[2018, 2021]]},
  },
  "Didier Deschamps": { 
    image: "/games/player-images/deschamps.png",
    career: { "Monaco": [[2001, 2005]], "Juventus": [[2006, 2007]], "Marseille": [[2009, 2012]] },
  },
  "Thomas Tuchel": { 
    image: "/games/player-images/tuchel.png",
    career: { "Mainz 05": [[2009, 2014]], "Borussia Dortmund": [[2015, 2017]], "Paris Saint-Germain": [[2018, 2020]], "Chelsea": [[2021, 2022]], "Bayern Munich": [[2023, 2024]] },
  },
  "Vincent Kompany": { 
    image: "/games/player-images/kompany.png",
    career: { "Burnley": [[2022, 2024]], "Bayern Munich": [[2024, 2026]] },
  },
  "Julian Nagelsmann": { 
    image: "/games/player-images/nagelsmann.png",
    career: { "Hoffenheim": [[2016, 2019]], "RB Leipzig": [[2019, 2021]], "Bayern Munich": [[2021, 2023]] },
  },
  "Hansi Flick": { 
    image: "/games/player-images/flick.png",
    career: { "Bayern Munich": [[2019, 2021]], "Barcelona": [[2024, 2026]] },
  },
  "Louis Van Gaal": { 
    image: "/games/player-images/vangaal.png",
    career: { "Barcelona": [[2002, 2003]], "Bayern Munich": [[2009, 2011]], "Manchester United": [[2014, 2016]] },
  },
  "Jurgen Klopp": { 
    image: "/games/player-images/klopp.png",
    career: { "Mainz 05": [[2001, 2008]], "Borussia Dortmund": [[2008, 2015]], "Liverpool": [[2015, 2024]] },
  },
  "Frank Rijkaard": { 
    image: "/games/player-images/rijkaard.png",
    career: { "Barcelona": [[2003, 2008]], "Galatasaray": [[2009, 2010]] },
  },
  "Luis Enrique": { 
    image: "/games/player-images/luisenrique.png",
    career: { "AS Roma": [[2011, 2012]], "Celta Vigo": [[2013, 2014]], "Barcelona": [[2014, 2017]], "Paris Saint-Germain": [[2023, 2026]] },
  },
  "Quique Setién": { 
    image: "/games/player-images/setien.png",
    career: { "Las Palmas": [[2015, 2017]], "Real Betis": [[2017, 2019]], "Barcelona": [[2020]], "Villarreal": [[2022, 2023]] },
  },
  "David Moyes": { 
    image: "/games/player-images/moyes.png",
    career: { "Everton": [[2002, 2013], [2025, 2026]], "Manchester United": [[2013, 2014]], "Real Sociedad": [[2014, 2015]], "Sunderland": [[2016, 2017]], "West Ham United": [[2017, 2018], [2019, 2024]] },
  },
};