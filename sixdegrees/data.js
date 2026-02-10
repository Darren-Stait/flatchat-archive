// data.js — SCALED DATASET (100 Players, 20 Managers)

const players = {
// CHELSEA STARS
"Frank Lampard": {
  image: "/games/player-images/lampard.png",
  career: { "West Ham": [[1995, 2001]], "Chelsea": [[2001, 2014]], "Manchester City": [[2014, 2015]] },
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
"Filippo Inzaghi": {
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
    image: "/games/player-images/neuer.png",
    career: { "Schalke": [[2005, 2011]], "Bayern Munich": [[2011, 2026]] },
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
"Joshua Kimmich": {
    image: "/games/player-images/kimmich.png",
    career: { "RB Leipzig": [[2013, 2015]], "Bayern Munich": [[2015, 2026]] },
},
// MAN CITY STARS
"Edin Dzeko": {
    image: "/games/player-images/dzeko.png",
    career: { "Wolfsburg": [[2007, 2011]], "Manchester City": [[2011, 2016]], "AS Roma": [[2015, 2021]], "Inter Milan": [[2021, 2023]], "Fenerbahce": [[2023, 2025]], "Fiorentina": [[2025, 2026]], "Schalke": [[2026]] },
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
},
"Vincent Kompany": {
    image: "/games/player-images/kompany.png",
    career: { "Hamburg": [[2006, 2008]], "Manchester City": [[2008, 2019]] },
},
"John Stones": {
    image: "/games/player-images/stones.png",
    career: { "Everton": [[2013, 2016]], "Manchester City": [[2016, 2026]] },
},
// LIVERPOOL STARS
"John Arne Riise": {
    image: "/games/player-images/riise.png",
    career: { "Monaco": [[1998, 2001]], "Liverpool": [[2001, 2008]], "AS Roma": [[2008, 2011]], "Fulham": [[2011, 2014]] },
},
"Mohamed Salah": {
    image: "/games/player-images/salah.png",
    career: { "Chelsea": [[2014, 2016]], "Fiorentina": [[2015]], "AS Roma": [[2015, 2016]], "Liverpool": [[2017, 2026]] },
},
"Trent Alexander-Arnold": {
    image: "/games/player-images/alexanderarnold.png",
    career: { "Liverpool": [[2016, 2025]], "Real Madrid": [[2025, 2026]] },
},
"Virgil van Dijk": {
    image: "/games/player-images/vandijk.png",
    career: { "Celtic": [[2013, 2015]], "Southampton": [[2015, 2018]], "Liverpool": [[2018, 2026]] },
},
"Dejan Lovren": {
    image: "/games/player-images/lovren.png",
    career: { "Lyon": [[2010, 2013], [2023, 2024]], "Southampton": [[2013, 2014]], "Liverpool": [[2014, 2020]] },
},
"Sadio Mane": {
    image: "/games/player-images/mane.png",
    career: { "Southampton": [[2014, 2016]], "Liverpool": [[2016, 2022]], "Bayern Munich": [[2022, 2023]], "Al Nassr": [[2023, 2026]] },
},
// BARCELONA STARS
"Lionel Messi": {
    image: "/games/player-images/messi.png",
    career: { "Barcelona": [[2004, 2021]], "Paris Saint-Germain": [[2021, 2023]], "Inter Miami": [[2023, 2026]] },
},
"Gerard Pique": {
    image: "/games/player-images/pique.png",
    career: { "Manchester United": [[2004, 2008]], "Barcelona": [[2008, 2022]] },
},
"Cesc Fabregas": {
    image: "/games/player-images/fabregas.png",
    career: { "Arsenal": [[2003, 2011]], "Barcelona": [[2011, 2014]], "Chelsea": [[2014, 2019]], "Monaco": [[2019, 2022]] },
},
"David Villa": {
    image: "/games/player-images/davidvilla.png",
    career: { "Valencia": [[2005, 2010]], "Barcelona": [[2010, 2013]], "Atletico Madrid": [[2013, 2014]] },
},
"Juan Carlos Valeron": {
    image: "/games/player-images/valeron.png",
    career: { "Las Palmas": [[1995, 1997], [2013, 2016]], "Deportivo La Coruna": [[2002, 2013]] },
},
"Tim Cahill": {
    image: "/games/player-images/timcahill.png",
    career: { "Millwall": [[1997, 2004], [2018]], "Everton": [[2004, 2012]] },
},
"Daniele De Rossi": {
    image: "/games/player-images/derossi.png",
    career: { "AS Roma": [[2001, 2019]] },
},
"Francesco Totti": {
    image: "/games/player-images/totti.png",
    career: { "AS Roma": [[1993, 2017]] },
},
"Juninho Pernambucano": {
    image: "/games/player-images/juninho.png",
    career: { "Lyon": [[2001, 2009]] },
},
"Marek Hamsik": {
    image: "/games/player-images/hamsik.png",
    career: { "Napoli": [[2007, 2019]] },
},
"Matt Le Tissier": {
    image: "/games/player-images/letissier.png",
    career: { "Southampton": [[1986, 2002]] },
},
"Nwankwo Kanu": {
    image: "/games/player-images/kanu.png",
    career: { "Ajax": [[1993, 1996]], "Inter Milan": [[1996, 1999]], "Arsenal": [[1999, 2004]] },
},
"Harry Kane": {
    image: "/games/player-images/kane.png",
    career: { "Tottenham Hotspur": [[2009, 2023], [2023, 2026]] },
},
"Dries Mertens": {
    image: "/games/player-images/mertens.png",
    career: { "PSV Eindhoven": [[2011, 2013]], "Napoli": [[2013, 2022]], "Galatasaray": [[2022, 2025]] },
},
"Robbie Keane": {
    image: "/games/player-images/robkeane.png",
    career: { "Wolverhampton Wanderers": [[1997, 1999]], "Inter Milan": [[2000, 2001]], "Leeds United": [[2001, 2002]], "Tottenham Hotspur": [[2002, 2008], [2009, 2011]], "Liverpool": [[2008, 2009]], "Celtic": [[2010]], "West Ham": [[2011]], "Aston Villa": [[2012]] },
},
"Henrik Larsson": {
    image: "/games/player-images/henriklarsson.png",
    career: { "Feyenoord": [[1993, 1997]], "Celtic": [[1997, 2004]], "Barcelona": [[2004, 2006]], "Manchester United": [[2007]] },
},
"Joao Moutinho": {
    image: "/games/player-images/moutinho.png",
    career: { "Sporting": [[2004, 2010]], "Porto": [[2010, 2013]], "Monaco": [[2013, 2018]], "Wolverhampton Wanderers": [[2018, 2023]], "Braga": [[2023, 2026]] },
},
"Franck Ribery": {
    image: "/games/player-images/ribery.png",
    career: { "Marseille": [[2005, 2007]], "Bayern Munich": [[2007, 2019]], "Fiorentina": [[2019, 2021]] },
},
"Pablo Aimar": {
    image: "/games/player-images/aimar.png",
    career: { "Valencia": [[2001, 2006]], "Benfica": [[2008, 2013]] },
},
"Gianluigi Buffon": {
    image: "/games/player-images/buffon.png",
    career: { "Juventus": [[2001, 2018], [2019, 2021]], "Paris Saint-Germain": [[2018, 2019]] },
},
"Juan Mata": {
    image: "/games/player-images/mata.png",
    career: { "Valencia": [[2007, 2011]], "Chelsea": [[2011, 2014]], "Manchester United": [[2014, 2022]] },
},
"Alessandro Nesta": {
    image: "/games/player-images/nesta.png",
    career: { "Lazio": [[1993, 2002]], "AC Milan": [[2002, 2012]] },
},
"Raul Gonzalez": {
    image: "/games/player-images/raulgonzalez.png",
    career: { "Real Madrid": [[1994, 2010]], "Schalke": [[2010, 2012]] },
},
"Javier Zanetti": {
    image: "/games/player-images/zanetti.png",
    career: { "Inter Milan": [[1995, 2014]] },
},
"Per Mertesacker": {
    image: "/games/player-images/mertesacker.png",
    career: { "Hannover": [[2003, 2006]], "Werder Bremen": [[2006, 2011]], "Arsenal": [[2011, 2018]] },
},
"Nicolas Gaitan": {
    image: "/games/player-images/gaitan.png",
    career: { "Benfica": [[2010, 2016]], "Atletico Madrid": [[2016, 2018]], "Lille": [[2020]], "Braga": [[2020, 2021]] },
},
"Koke": {
    image: "/games/player-images/koke.png",
    career: { "Atletico Madrid": [[2009, 2026]] },
},
"Saul Niguez": {
    image: "/games/player-images/saul.png",
    career: { "Atletico Madrid": [[2012, 2025]], "Chelsea": [[2021, 2022]], "Sevilla": [[2024, 2025]] },
},
"Diego Godin": {
    image: "/games/player-images/godin.png",
    career: { "Villarreal": [[2007, 2010]], "Atletico Madrid": [[2010, 2019]], "Inter Milan": [[2019, 2020]], "Cagliari": [[2020, 2021]] },
},
"Ciro Immobile": {
    image: "/games/player-images/immobile.png",
    career: { "Juventus": [[2009, 2012]], "Genoa": [[2012, 2013]], "Torino": [[2013, 2014], [2016]], "Borussia Dortmund": [[2014, 2016]], "Sevilla": [[2015, 2016]], "Lazio": [[2016, 2024]], "Bologna": [[2025, 2026]] },
},
"Lucas Leiva": {
    image: "/games/player-images/lucasleiva.png",
    career: { "Liverpool": [[2007, 2017]], "Lazio": [[2017, 2022]] },
},
"Santi Cazorla": {
    image: "/games/player-images/cazorla.png",
    career: { "Villarreal": [[2003, 2006], [2007, 2011], [2018, 2020]], "Malaga": [[2011, 2012]], "Arsenal": [[2012, 2018]] },
},
"Alexandre Lacazette": {
    image: "/games/player-images/lacazette.png",
    career: { "Lyon": [[2010, 2017], [2022, 2025]], "Arsenal": [[2017, 2022]] },
},
"Jesus Navas": {
    image: "/games/player-images/jesusnavas.png",
    career: { "Sevilla": [[2003, 2013], [2017, 2024]], "Manchester City": [[2013, 2017]] },
},
"Carlos Bacca": {
    image: "/games/player-images/bacca.png",
    career: { "Club Brugge": [[2011, 2013]], "Sevilla": [[2013, 2015]], "AC Milan": [[2015, 2018]], "Villarreal": [[2017, 2021]], "Granada": [[2021, 2022]] },
},
"Dimitri Payet": {
    image: "/games/player-images/payet.png",
    career: { "Saint-Etienne": [[2007, 2011]], "Lille": [[2011, 2013]], "Marseille": [[2013, 2015], [2017, 2023]], "West Ham": [[2015, 2017]] },
},
"Florian Thauvin": {
    image: "/games/player-images/thauvin.png",
    career: { "Lille": [[2013]], "Marseille": [[2013, 2015], [2016, 2021]], "Newcastle United": [[2015, 2017]], "Udinese": [[2023, 2025]], "Lens": [[2025, 2026]] },
},
"Marco Reus": {
    image: "/games/player-images/reus.png",
    career: { "Borussia Monchengladbach": [[2009, 2012]], "Borussia Dortmund": [[2012, 2024]] },
},
"Ederson": {
    image: "/games/player-images/ederson.png",
    career: { "Benfica": [[2015, 2017]], "Manchester City": [[2017, 2025]], "Fenerbahce": [[2025, 2026]] },
},
"Joaquin": {
    image: "/games/player-images/joaquin.png",
    career: { "Real Betis": [[2000, 2006], [2015, 2023]], "Valencia": [[2006, 2011]], "Malaga": [[2011, 2023]], "Fiorentina": [[2013, 2015]] },
},
"Kevin Kuranyi": {
    image: "/games/player-images/kuranyi.png",
    career: { "Stuttgart": [[2001, 2005]], "Schalke": [[2005, 2010]], "Hoffenheim": [[2015, 2016]] },
},
"Mesut Özil": {
    image: "/games/player-images/ozil.png",
    career: { "Schalke": [[2006, 2008]], "Werder Bremen": [[2008, 2010]], "Real Madrid": [[2010, 2013]], "Arsenal": [[2013, 2021]], "Fenerbahce": [[2021, 2022]] },
},
"Mathieu Valbuena": {
    image: "/games/player-images/valbuena.png",
    career: { "Marseille": [[2006, 2014]], "Lyon": [[2015, 2017]], "Fenerbahce": [[2017, 2019]] },
},
"Loïc Rémy": {
    image: "/games/player-images/remy.png",
    career: { "Lyon": [[2006, 2008]], "Nice": [[2008, 2010]], "Marseille": [[2010, 2013]], "QPR": [[2013, 2014]], "Newcastle United": [[2013, 2014]], "Chelsea": [[2014, 2017]], "Crystal Palace": [[2016, 2017]], "Las Palmas": [[2017, 2018]], "Getafe": [[2018]], "Lille": [[2018, 2020]] },
},
"Alberto Gilardino": {
    image: "/games/player-images/gilardino.png",
    career: { "AC Milan": [[2005, 2008]], "Fiorentina": [[2008, 2012], [2015]], "Genoa": [[2012, 2014]], "Bologna": [[2012, 2013]] },
},
"Klaas-Jan Huntelaar": {
    image: "/games/player-images/huntelaar.png",
    career: { "Ajax": [[2006, 2009], [2017, 2021]], "Real Madrid": [[2009]], "AC Milan": [[2009, 2010]], "Schalke": [[2010, 2017], [2021]] },
},
"Miranda": {
    image: "/games/player-images/miranda.png",
    career: { "Atletico Madrid": [[2011, 2015]], "Inter Milan": [[2015, 2019]] },
},
"Raul Albiol": {
    image: "/games/player-images/albiol.png",
    career: { "Valencia": [[2004, 2009]], "Getafe": [[2004, 2005]], "Real Madrid": [[2009, 2013]], "Napoli": [[2013, 2019]], "Villarreal": [[2019, 2025]] },
},
"Dani Parejo": {
    image: "/games/player-images/parejo.png",
    career: { "Real Madrid": [[2008, 2009]], "QPR": [[2008]], "Getafe": [[2009, 2011]], "Valencia": [[2011, 2020]], "Villarreal": [[2020, 2026]] },
},
"Nabil Fekir": {
    image: "/games/player-images/fekir.png",
    career: { "Lyon": [[2013, 2019]], "Real Betis": [[2019, 2024]] },
},
"Axel Witsel": {
    image: "/games/player-images/witsel.png",
    career: { "Benfica": [[2011, 2012]], "Borussia Dortmund": [[2018, 2022]], "Atletico Madrid": [[2022, 2025]], "Girona": [[2025, 2026]] },
},
"Stefan Savic": {
    image: "/games/player-images/savic.png",
    career: { "Manchester City": [[2011, 2012]], "Fiorentina": [[2012, 2015]], "Atletico Madrid": [[2015, 2024]] },
},
"Javier Pastore": {
    image: "/games/player-images/pastore.png",
    career: { "Palermo": [[2009, 2011]], "Paris Saint-Germain": [[2011, 2018]], "AS Roma": [[2018, 2021]], "Elche": [[2021, 2023]] },
},
"Bruno Alves": {
    image: "/games/player-images/brunoalves.png",
    career: { "Porto": [[2002, 2010]], "Fenerbahce": [[2013, 2016]], "Rangers": [[2017, 2018]] },
},
"Eder": {
    image: "/games/player-images/eder.png",
    career: { "Braga": [[2012, 2015]], "Swansea": [[2015, 2016]], "Lille": [[2016, 2018]] },
},
"Gregory Van der Wiel": {
    image: "/games/player-images/vanderwiel.png",
    career: { "Ajax": [[2007, 2012]], "Paris Saint-Germain": [[2012, 2016]], "Fenerbahce": [[2016, 2017]], "Cagliari": [[2017, 2020]] },
},
"Yohan Cabaye": {
    image: "/games/player-images/cabaye.png",
    career: { "Lille": [[2004, 2011]], "Newcastle United": [[2011, 2014]], "Paris Saint-Germain": [[2014, 2015]], "Crystal Palace": [[2015, 2018]] },
},
"Jean-Alain Boumsong": {
    image: "/games/player-images/boumsong.png",
    career: { "Rangers": [[2004, 2005]], "Newcastle United": [[2005, 2006]], "Juventus": [[2006, 2008]], "Lyon": [[2008, 2010]] },
},
"Nacho Novo": {
    image: "/games/player-images/novo.png",
    career: { "Rangers": [[2004, 2010]], "Sporting Gijon": [[2010, 2012]] },
},
"Tore André Flo": {
    image: "/games/player-images/flo.png",
    career: { "Chelsea": [[1997, 2000]], "Rangers": [[2000, 2002]], "Sunderland": [[2002, 2003]], "Leeds United": [[2007, 2008]] },
},
"Shunsuke Nakamura": {
    image: "/games/player-images/nakamura.png",
    career: { "Celtic": [[2005, 2009]], "Espanyol": [[2009, 2010]] },
},
"Thomas Gravesen": {
    image: "/games/player-images/gravesen.png",
    career: { "Hamburg": [[1997, 2000]], "Everton": [[2000, 2005], [2007, 2008]], "Real Madrid": [[2005, 2006]], "Celtic": [[2006, 2008]] },
},
"Roy Makaay": {
    image: "/games/player-images/makaay.png",
    career: { "Deportivo La Coruna": [[1999, 2003]], "Bayern Munich": [[2003, 2007]], "Feyenoord": [[2007, 2010]] },
},
"Jefferson Farfan": {
    image: "/games/player-images/farfan.png",
    career: { "PSV Eindhoven": [[2004, 2008]], "Schalke": [[2008, 2015]] },
},
"Allan Nyom": {
    image: "/games/player-images/nyom.png",
    career: { "Granada": [[2009, 2015]], "Watford": [[2015, 2016]], "West Bromwich Albion": [[2016, 2019]], "Leganes": [[2018, 2019], [2022, 2024]], "Getafe": [[2019, 2022], [2024, 2026]] },
},
"Mario Gaspar": {
    image: "/games/player-images/mariogaspar.png",
    career: { "Villarreal": [[2009, 2022]], "Watford": [[2022, 2023]], "Elche": [[2023, 2025]] },
},
"Luis Enrique": {
    image: "/games/player-images/luisenrique.png",
    career: { "Sporting Gijon": [[1989, 1991]], "Real Madrid": [[1991, 1996]], "Barcelona": [[1996, 2004]] },
},
"Jonathan Viera": {
    image: "/games/player-images/jonathanviera.png",
    career: { "Las Palmas": [[2010, 2012], [2015, 2018], [2019], [2021, 2023], [2025, 2026]], "Valencia": [[2012, 2014]], "Standard Liege": [[2014, 2015]] }
},
"Niklas Sule": {
    image: "/games/player-images/sule.png",
    career: { "Hoffenheim": [[2013, 2017]], "Bayern Munich": [[2017, 2022]], "Borussia Dortmund": [[2022, 2026]]}
},
"Loris Karius": {
    image: "/games/player-images/karius.png",
    career: { "Mainz": [[2012, 2016]], "Liverpool": [[2016, 2022]], "Besiktas": [[2018, 2020]], "Newcastle United": [[2022, 2024]], "Schalke": [[2025, 2026]]}
},
"Gabriel Batistuta": {
    image: "/games/player-images/batistuta.png",
    career: { "Fiorentina": [[1991, 2000]], "Roma": [[2000, 2003]], "Inter Milan": [[2003]]}
},
"Davor Suker": {
    image: "/games/player-images/suker.png",
    career: { "Sevilla": [[1991, 1996]], "Real Madrid": [[1996, 1999]], "Arsenal": [[1999, 2000]], "West Ham": [[2000, 2001]]}
},
"Rivaldo": {
    image: "/games/player-images/rivaldo.png",
    career: { "Deportivo La Coruna": [[1996, 1997]], "Barcelona": [[1997, 2002]], "AC Milan": [[2002, 2003]] }
},
"Michael Laudrup": {
    image: "/games/player-images/michaellaudrup.png",
    career: { "Lazio": [[1983, 1985]], "Juventus": [[1985, 1989]], "Barcelona": [[1989, 1994]], "Real Madrid": [[1994, 1996]], "Ajax": [[1997, 1998]] }
},
"Gheorghe Hagi": {
    image: "/games/player-images/hagi.png",
    career: { "Real Madrid": [[1990, 1992]], "Barcelona": [[1994, 1996]]}
},
"Fernando Hierro": {
    image: "/games/player-images/hierro.png",
    career: { "Real Madrid": [[1989, 2003]], "Bolton": [[2004, 2005]]}
},
"Gaizka Mendieta": {
    image: "/games/player-images/mendieta.png",
    career: { "Valencia": [[1993, 2001]], "Lazio": [[2001, 2004]], "Barcelona": [[2002, 2003]], "Middlesbrough": [[2003, 2008]] }
},
"Marcel Desailly": {
    image: "/games/player-images/desailly.png",
    career: { "Marseille": [[1992, 1993]], "AC Milan": [[1993, 1998]], "Chelsea": [[1998, 2004]] }
},
"Frank de Boer": {
    image: "/games/player-images/frankdeboer.png",
    career: { "Ajax": [[1988, 1999]], "Barcelona": [[1999, 2003]], "Galatasaray": [[2003, 2004]], "Rangers": [[2004]] }
},
"Ronald de Boer": {
    image: "/games/player-images/ronalddeboer.png",
    career: { "Ajax": [[1988, 1991], [1993, 1999]], "Barcelona": [[1999, 2000]], "Rangers": [[2000, 2004]]}
},
"Aritz Aduriz": {
    image: "/games/player-images/aduriz.png",
    career: { "Athletic Bilbao": [[2002, 2004], [2006, 2008], [2012, 2020]], "Valencia": [[2010, 2012]] }
},
"Eric Cantona": {
    image: "/games/player-images/cantona.png",
    career: { "Marseille": [[1988, 1991]], "Leeds United": [[1992]], "Manchester United": [[1992, 1997]]}
},
"Rui Costa": {
    image: "/games/player-images/ruicosta.png",
    career: { "Benfica": [[1990, 1994], [2006, 2008]], "Fiorentina": [[1994, 2001]], "AC Milan": [[2001, 2006]]}
},
"Tugay": {
    image: "/games/player-images/tugay.png",
    career: { "Galatasaray": [[1987, 1999]], "Rangers": [[1999, 2001]], "Blackburn Rovers": [[2001, 2009]]}
},
"Dirk Kuyt": {
    image: "/games/player-images/kuyt.png",
    career: { "Feyenoord": [[2003, 2006], [2015, 2017]], "Liverpool": [[2006, 2012]], "Fenerbahce": [[2012, 2015]]}
},
"Enzo Fernandez": {
    image: "/games/player-images/enzofernandez.png",
    career: { "Benfica": [[2022, 2023]], "Chelsea": [[2023, 2026]]}
},
"Julian Alvarez": {
    image: "/games/player-images/julianalvarez.png",
    career: { "Manchester City": [[2022, 2024]], "Atletico Madrid": [[2024, 2026]]}
},
"Josko Gvardiol": {
    image: "/games/player-images/gvardiol.png",
    career: { "RB Leipzig": [[2020, 2023]], "Manchester City": [[2023, 2026]]}
},
"Gianfranco Zola": {
    image: "/games/player-images/zola.png",
    career: { "Napoli": [[1989, 1993]], "Parma": [[1993, 1996]], "Chelsea": [[1996, 2003]]}
},
"Claudio Pizarro": {
    image: "/games/player-images/pizarro.png",
    career: { "Werder Bremen": [[1999, 2001], [2008, 2012], [2015, 2017], [2018, 2020]], "Bayern Munich": [[2001, 2007], [2012, 2015]], "Chelsea": [[2007, 2009]], "Koln": [[2017, 2018]]}
},
"Diego Milito": {
    image: "/games/player-images/milito.png",
    career: { "Genoa": [[2003, 2005], [2008, 2009]], "Zaragoza": [[2005, 2008]], "Inter Milan": [[2009, 2014]] }
},
"Guti": {
    image: "/games/player-images/guti.png",
    career: { "Real Madrid": [[1995, 2010]], "Besiktas": [[2010, 2011]]}
},
"Giuseppe Rossi": {
    image: "/games/player-images/giusepperossi.png",
    career: { "Manchester United": [[2004, 2007]], "Newcastle United": [[2006]], "Parma": [[2007]], "Villarreal": [[2007, 2013]], "Fiorentina": [[2013, 2017]], "Levante": [[2016]], "Celta Vigo": [[2016, 2017]], "Genoa": [[2017, 2018]]}
},
"Mauro Camoranesi": {
    image: "/games/player-images/camoranesi.png",
    career: { "Verona": [[2000, 2002]], "Juventus": [[2002, 2010]], "Stuttgart": [[2010, 2011]] }
},
"Kevin Mirallas": {
    image: "/games/player-images/mirallas.png",
    career: { "Lille": [[2004, 2008]], "Saint-Etienne": [[2008, 2010]], "Everton": [[2012, 2019]], "Fiorentina": [[2018, 2019]] }
},
"Rodrigo Palacio": {
    image: "/games/player-images/palacio.png",
    career: { "Genoa": [[2009, 2012]], "Inter Milan": [[2012, 2017]], "Bologna": [[2017, 2021]]}
},
"Ivica Olic": {
    image: "/games/player-images/olic.png",
    career: { "Hertha Berlin": [[1998, 2000]], "Hamburg": [[2007, 2009], [2015, 2016]], "Bayern Munich": [[2009, 2012]], "Wolfsburg": [[2012, 2015]]}
},
"Alan Shearer": {
    image: "/games/player-images/shearer.png",
    career: { "Southampton": [[1988, 1992]], "Blackburn Rovers": [[1992, 1996]], "Newcastle United": [[1996, 2006]]}
},
"Marcos Senna": {
    image: "/games/player-images/senna.png",
    career: { "Villarreal": [[2002, 2013]] }
}
};

// Manager career data: who managed which club during which years
const managers = {
  "Carlo Ancelotti": { 
    image: "/games/player-images/ancelotti.png",
    career: { "Juventus": [[1999, 2001]], "AC Milan": [[2001, 2009]], "Chelsea": [[2009, 2011]], "Paris Saint-Germain": [[2011, 2013]], "Real Madrid": [[2013, 2015], [2021, 2025]], "Bayern Munich": [[2016, 2017]], "Napoli": [[2018, 2019]], "Everton": [[2019, 2021]] },
  },
  "Jose Mourinho": { 
    image: "/games/player-images/mourinho.png",
    career: { "Porto": [[2002, 2004]], "Chelsea": [[2004, 2007], [2013, 2015]], "Inter Milan": [[2008, 2010]], "Real Madrid": [[2010, 2013]], "Manchester United": [[2016, 2018]], "Tottenham Hotspur": [[2019, 2021]], "AS Roma": [[2021, 2024]], "Fenerbahce": [[2024, 2025]], "Benfica": [[2025, 2026]] },
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
    career: { "Villarreal": [[2004, 2009]], "Real Madrid": [[2009, 2010]], "Malaga": [[2010, 2013]], "Manchester City": [[2013, 2016]], "West Ham": [[2018, 2019]], "Real Betis": [[2020, 2026]] },
  },
  "Harry Redknapp": { 
    image: "/games/player-images/redknapp.png",
    career: { "West Ham": [[1994, 2001]], "Portsmouth": [[2002, 2004], [2005, 2008]], "Southampton": [[2004, 2005]], "Tottenham Hotspur": [[2008, 2012]], "QPR": [[2012, 2015]] },
  },
  "Arsene Wenger": { 
    image: "/games/player-images/wenger.png",
    career: { "Arsenal": [[1996, 2018]] },
  },
  "Rudi Garcia": { 
    image: "/games/player-images/rudigarcia.png",
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
    career: { "Monaco": [[1999, 2001]], "Lille": [[2002, 2008]], "Olympique Lyonnais": [[2009, 2011]], "Nice": [[2012, 2016], [2025, 2026]], "Southampton": [[2016, 2017]], "Leicester City": [[2017, 2019]] },
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
    career: { "Porto": [[2014, 2016]], "Real Madrid": [[2018]], "Sevilla": [[2019, 2022]], "Wolverhampton Wanderers": [[2022, 2023]], "West Ham": [[2024, 2025]] },
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
    career: { "Everton": [[2002, 2013], [2025, 2026]], "Manchester United": [[2013, 2014]], "Real Sociedad": [[2014, 2015]], "Sunderland": [[2016, 2017]], "West Ham": [[2017, 2018], [2019, 2024]] },
  },
  "Roberto Martinez": {
    image: "/games/player-images/robertomartinez.png",
    career: { "Swansea": [[2007, 2009]], "Wigan": [[2009, 2013]], "Everton": [[2013, 2016]] },
  },
  "Mark Hughes": {
    image: "/games/player-images/markhughes.png",
    career: { "Blackburn": [[2004, 2008]],"Manchester City": [[2008, 2009]], "Fulham": [[2010, 2011]], "QPR": [[2012]], "Stoke": [[2013, 2018]], "Southampton": [[2018]] },
  },
  "Brendan Rodgers": {
    image: "/games/player-images/rodgers.png",
    career: { "Swansea": [[2010, 2012]], "Liverpool": [[2012, 2015]], "Celtic": [[2016, 2019], [2023, 2025]], "Leicester": [[2019, 2023]] },
  },
  "Jorge Jesus": {
    image: "/games/player-images/jorgejesus.png",
    career: { "Benfica": [[2009, 2015], [2020, 2021]], "Sporting CP": [[2015, 2018]], "Al Hilal": [[2018, 2019]], "Fenerbahce": [[2022, 2023]], "Al Nassr": [[2025, 2026]] },
  },
  "Stefano Pioli": {
    image: "/games/player-images/pioli.png",
    career: { "Bologna": [[2011, 2014]], "Lazio": [[2014, 2016]], "Inter Milan": [[2016, 2017]], "Fiorentina": [[2017, 2019]], "AC Milan": [[2019, 2024]], "Al Nassr": [[2024, 2025]], "Fiorentina": [[2025]] },
  },
  "Ralf Rangnick": {
    image: "/games/player-images/rangnick.png",
    career: { "Schalke": [[2004, 2005], [2011]], "Hoffenheim": [[2006, 2011]], "RB Leipzig": [[2015, 2016], [2018, 2019]], "Manchester United": [[2021, 2022]] },
  },
  "Alex Ferguson": {
    image: "/games/player-images/alexferguson.png",
    career: { "Manchester United": [[1986, 2013]] },
  },
  "Ernesto Valverde": {
    image: "/games/player-images/ernestovalverde.png",
    career: { "Athletic Bilbao": [[2003, 2005], [2013, 2017], [2022, 2026]], "Espanyol": [[2006, 2008]], "Villarreal": [[2009, 2010]], "Valencia": [[2012, 2013]], "Barcelona": [[2017, 2020]] },
  },
  "Pep Guardiola": {
    image: "/games/player-images/guardiola.png",
    career: { "Barcelona": [[2008, 2012]], "Bayern Munich": [[2013, 2016]], "Manchester City": [[2016, 2026]] },
  },
  "Maurizio Sarri": {
    image: "/games/player-images/sarri.png",
    career: { "Napoli": [[2015, 2018]], "Chelsea": [[2018, 2019]], "Juventus": [[2019, 2020]], "Lazio": [[2021, 2024], [2025, 2026]] },
  },
  "Martin O'Neill": {
    image: "/games/player-images/martinoneill.png",
    career: { "Celtic": [[2000, 2005], [2025, 2026]], "Aston Villa": [[2006, 2010]], "Sunderland": [[2011, 2013]] },
  },
  "Diego Simeone": {
    image: "/games/player-images/diegosimeone.png",
    career: { "Atletico Madrid": [[2011, 2026]] },
  },
  "Alex McLeish": {
    image: "/games/player-images/mcleish.png",
    career: { "Rangers": [[2001, 2006]], "Birmingham City": [[2007, 2011]], "Aston Villa": [[2011, 2012]], "Nottingham Forest": [[2012, 2013]] },
  },
  "Walter Smith": {
    image: "/games/player-images/waltersmith.png",
    career: { "Rangers": [[1991, 1998], [2007, 2011]], "Everton": [[1998, 2002]] },
  }
};