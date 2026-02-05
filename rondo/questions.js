const QUESTION_POOL = {
  A: [
    { question: "(Surname) Highest scorer in Europa League history <br>(Submitted by PaddyD)", answer: "Pierre-Emerick Aubameyang", difficulty: "normal" },
    { question: "Italian club that won back-to-back European Cups in 1989 and 1990 <br>(Submitted by Unico)", answer: "AC Milan", difficulty: "normal" },
    { question: "Country who won the 2019 Africa Cup of Nations <br>(Submitted by Unico)", answer: "Algeria", difficulty: "normal" },
    { question: "Stadium that hosted the 2005 Champions League final <br>(Submitted by Unico)", answer: "Atatürk Olympic Stadium", difficulty: "normal" },
    { question: "Spanish club nicknamed Los Colchoneros <br>(Submitted by Unico)", answer: "Atlético Madrid", difficulty: "normal" },
    { question: "(First name) Spanish full back who once scored a solo goal against Spurs <br>(Submitted by Bandaaa)", answer: "Alberto Moreno", difficulty: "normal" },
    { question: "(Surname) Scottish midfielder who scored from the halfway line against Chelsea <br>(Submitted by Bandaaa)", answer: "Charlie Adam", difficulty: "normal" },
    { question: "(Surname) 'Welsh Xavi' <br>(Submitted by Bandaaa)", answer: "Joe Allen", difficulty: "normal" },
    { question: "(Surname) Premier League winner for Leicester with the middle name Kevin <br>(Submitted by Laboon)", answer: "Marc Kevin Albrighton", difficulty: "normal" }

  ],
  B: [
    { question: "(First name) Zimbabwean striker that played for Man City and Portsmouth <br>(Submitted by PaddyD)", answer: "Benjani", difficulty: "normal" },
    { question: "(Surname) Pink haired former winger for Ajax, Liverpool and Fulham <br>(Submitted by Laboon)", answer: "Ryan Babel", difficulty: "normal" },
    { question: "German club that have won the most Bundesliga titles <br>(Submitted by Unico)", answer: "Bayern Munich", difficulty: "normal" },
    { question: "English club that famously won the 2004–05 Championship with 98 points <br>(Submitted by Unico)", answer: "Burnley", difficulty: "normal" },
    { question: "(Both names) Celtic defender that joined from Toulouse in 2001 <br>(Submitted by F0ley)", answer: "Bobo Balde", difficulty: "normal" },
    { question: "(First name) Former England striker who scored 13 goals at the 1966 World Cup <br>(Submitted by Unico)", answer: "Bobby Charlton", difficulty: "normal" },
  ],
  C: [
    { question: "EFL club once managed by Ole Gunnar Solskjaer <br>(Submitted by PaddyD)", answer: "Cardiff", difficulty: "normal" },
    { question: "The scandal that rocked Italian football in 2006 <br>(Submitted by Unico)", answer: "Calciopoli", difficulty: "normal" },
    { question: "South American club competition that mirrors the Champions League <br>(Submitted by Unico)", answer: "Copa Libertadores", difficulty: "normal" },
    { question: "African nation that reached the 1990 World Cup quarter-finals <br>(Submitted by Unico)", answer: "Cameroon", difficulty: "normal" },
    { question: "English club that won the FA Cup in 1988 <br>(Submitted by Unico)", answer: "Coventry City", difficulty: "normal" },
    { question: "Famous Italian defensive system that means 'door bolt' <br>(Submitted by Unico)", answer: "Catenaccio", difficulty: "normal" },
    { question: "(Surname) 'When the seagulls follow the trawler, it's because they think sardines will be thrown in the sea' (Submitted by Laboon)", answer: "Eric Cantona", difficulty: "normal" }
  ],
  D: [
    { question: "(Known by) Ex Real Madrid, Man City & Juve player who scored the only goal in the 2026 Copa Libertadores final <br>(Submitted by PaddyD)", answer: "Danilo", difficulty: "normal" },
    { question: "The city Bohemian FC is from <br>(Submitted by Laboon)", answer: "Dublin", difficulty: "normal" },
    { question: "(First name) Argentine attacking midfielder that won the Ballon d'Or in 1986 <br>(Submitted by Unico)", answer: "Diego Maradona", difficulty: "normal" },
    { question: "Tournament that replaced the Intercontinental Cup <br>(Submitted by Unico)", answer: "Club World Cup", difficulty: "normal" },
  ],
  E: [
    { question: "(Surname) First player to lose 4 Champions League finals <br>(Submitted by PaddyD)", answer: "Patrice Evra", difficulty: "normal" },
    { question: "(Surname) Former Swedish International that played for Feyenoord and Bolton <br>(Submitted by Laboon)", answer: "Johan Elmander", difficulty: "normal" },
    { question: "European competition that began in 1955 <br>(Submitted by Unico)", answer: "European Cup", difficulty: "normal" },
    { question: "English club that played at Goodison Park until recently <br>(Submitted by Unico)", answer: "Everton", difficulty: "normal" },
  ],
  F: [
    { question: "German team who beat Rangers in the 2022 Europa League final <br>(Submitted by PaddyD)", answer: "Frankfurt", difficulty: "normal" },
    { question: "(Surname) Former Portugese attacker that played for West Ham <br>(Submitted by Unico)", answer: "Paulo Futre", difficulty: "normal" },
    { question: "(First name) Former Swedish international who rocked a pink mohaek <br>(Submitted by Laboon)", answer: "Freddie Ljungberg", difficulty: "normal" },
    { question: "(Surname) Most capped player from Honduras <br>(Submitted by Laboon)", answer: "Maynor Figueroa", difficulty: "normal" },
  ],
  G: [
    { question: "Italian team Djed Spence once spent time on loan at <br>(Submitted by PaddyD)", answer: "Genoa", difficulty: "normal" },
    { question: "(Surname) AS Roma coach during the 25/26 Serie A season <br>(Submitted by Laboon)", answer: "Gian Piero Gasperini", difficulty: "normal" },
    { question: "Pressing philosophy which means 'counter-pressing' <br>(Submitted by Unico)", answer: "Gegenpressing", difficulty: "normal" },
    { question: "Tournament contested by CONCACAF nations <br>(Submitted by Unico)", answer: "Gold Cup", difficulty: "normal" },
  ],
  H: [
    { question: "EFL Club that once signed Harry Maguire and Andy Robertson on the same day <br>(Submitted by PaddyD)", answer: "Hull City", difficulty: "normal" },
    { question: "(Known by) Former goalkeeper who played 20 Premier League games for Chelsea been 2006 and 2014 <br>(Submitted by Laboon)", answer: "Hilario", difficulty: "normal" },
    { question: "Defensive trap where players step forward to catch attackers offside <br>(Submitted by Unico)", answer: "High line", difficulty: "normal" },
    { question: "(Surname) Striker who scored a hat-trick in the 1966 World Cup final <br>(Submitted by Unico)", answer: "Geoff Hurst", difficulty: "normal" },
  ],
  I: [
    { question: "Football Club owned by a member of the class of 92 <br>(Submitted by PaddyD)", answer: "Inter Miami", difficulty: "normal" },
    { question: "(Surname) Former Norweigan striker that played for Tottenham and Wolves <br>(Submitted by Laboon)", answer: "Steffen Iversen", difficulty: "normal" }
  ],
  J: [
    { question: "(First name) Manager who won the world cup with Germany in 2014 <br>(Submitted by PaddyD)", answer: "Joachim Löw", difficulty: "normal" },
    { question: "(Surname) Former Australian International that played for Crystal Palace and Aston Villa <br>(Submitted by Laboon)", answer: "Mile Jedinak", difficulty: "normal" },
    { question: "(First name) Dutch football icon who pioneered Total Football <br>(Submitted by Unico)", answer: "Johan Cruyff", difficulty: "normal" },
    { question: "Asian domestic league that operates in Japan <br>(Submitted by Unico)", answer: "J-League", difficulty: "normal" },
    { question: "(First name) Manager that led Porto to Champions League victory in 2004 <br>(Submitted by Unico)", answer: "José Mourinho", difficulty: "normal" },
  ],
  K: [
    { question: "(Known by) Player who famously scored in a 0-0 draw with Celtic <br>(Submitted by PaddyD)", answer: "Kaka", difficulty: "normal" },
    { question: "(First name) Defender known for his time at Man City, Liverpool and Celtic <br>(Submitted by Unico)", answer: "Kolo Touré", difficulty: "normal" },
    { question: "(Both names) Back to back Ballon d'Or winner in the 70s <br>(Submitted by Unico)", answer: "Kevin Keegan", difficulty: "normal" },
    { question: "(Surname) Central African Republic talisman since 2018 <br>(Submitted by Unico)", answer: "Geoffrey Kondogbia", difficulty: "normal" }
  ],
  L: [
    { question: "(Surname) Belgian player who has played for Brighton and Arsenal <br>(Submitted by PaddyD)", answer: "Leandro Trossard", difficulty: "normal" },
    { question: "(First name) Argentinian centre half deemed too small for the league <br>(Submitted by Laboon)", answer: "Lisandro Martinez", difficulty: "normal" },
    { question: "Club that won the 2005 Champions League final <br>(Submitted by Unico)", answer: "Liverpool", difficulty: "normal" },
    { question: "Italian club that shares the Stadio Olimpico <br>(Submitted by Unico)", answer: "Lazio", difficulty: "normal" },
    { question: "(First name) Portuguese winger that played for both Barcelona and Real Madrid <br>(Submitted by Unico)", answer: "Luis Figo", difficulty: "normal" },
  ],
  M: [
    { question: "(Known by) Fullback who Gareth Bale scored a hattrick against for Spurs in the UCL <br>(Submitted by PaddyD)", answer: "Maicon", difficulty: "normal" },
    { question: "(First name) Brazilian born Villareal midfielder that won the 2008 Euros <br>(Submitted by Unico)", answer: "Marcos Senna", difficulty: "normal" },
    { question: "Team with the 3rd most Ligue 1 titles <br>(Submitted by Unico)", answer: "Marseille", difficulty: "normal" },
    { question: "English non league club that beat the reigning champions in the FA Cup in 2026 <br>(Submitted by Unico)", answer: "Macclesfield FC", difficulty: "normal" },
    { question: "City that hosted the 2008 Champions League final <br>(Submitted by Unico)", answer: "Moscow", difficulty: "normal" },
  ],
  N: [
    { question: "Name of Manchester United before they became Manchester United <br>(Submitted by PaddyD)", answer: "Newton Heath", difficulty: "normal" },
    { question: "English Team with a 100% win rate in European Cup finals <br>(Submitted by Laboon)", answer: "Nottingham Forest", difficulty: "normal" },
    { question: "(First name) Turkish midfielder who transitioned into a manager in 2021 <br>(Submitted by Unico)", answer: "Nuri Sahin", difficulty: "normal" },
    { question: "(Surname) Defensive partner to Maldini in the early 2000s <br>(Submitted by Unico)", answer: "Alessandro Nesta", difficulty: "normal" }
  ],
  O: [
    { question: "La Liga side that play home games at El Sadar Stadium <br>(Submitted by PaddyD)", answer: "Osasuna", difficulty: "normal" },
    { question: "(Known by) Most expensive player in CSL history <br>(Submitted by Unico)", answer: "Oscar", difficulty: "normal" },
    { question: "(First name) French striker that led Montpeiller to an unlikely Ligue 1 title in 2012 <br>(Submitted by Unico)", answer: "Olivier Giroud", difficulty: "normal" },
    { question: "Nation whose only PL representative was a Goalkeeper at Wigan <br>(Submitted by Unico)", answer: "Oman", difficulty: "normal" }
  ],
  P: [
    { question: "Team that won the 2008 FA Cup <br>(Submitted by PaddyD)", answer: "Portsmouth", difficulty: "normal" },
    { question: "(Known by) Former Chelsea and Barcelona winger <br>(Submitted by Unico)", answer: "Pedro", difficulty: "normal" },
    { question: "English football team with Pieface as a famous supporter <br>(Submitted by Unico)", answer: "Plymouth Argyle", difficulty: "normal" },
    { question: "Italian team that has won the UEFA Cup and Cup Winners' Cup <br>(Submitted by Unico)", answer: "Parma", difficulty: "normal" },
  ],
  Q: [
    { question: "(First name) Dutch winger in Prison FC <br>(Submitted by Unico)", answer: "Quincy Promes", difficulty: "normal" },
    { question: "(First name) South African PL midfielder who played for Bolton and Doncaster <br>(Submitted by Unico)", answer: "Quinton Fortune", difficulty: "normal" },
    { question: "(First name) Dutch fullback that signed for Burnley in 2025 from Feyenoord <br>(Submitted by PaddyD)", answer: "Quilindschy Hartman", difficulty: "normal" },
    { question: "California based stadium that hosted matches in multiple Gold Cups <br>(Submitted by Unico)", answer: "Qualcomm Stadium", difficulty: "normal" }
  ],
  R: [
    { question: "Scottish team that went into administration in 2012 <br>(Submitted by PaddyD)", answer: "Rangers", difficulty: "normal" },
    { question: "Team that made the quarter finals in the 1996 Champions League, furthest in their history (Submitted by Laboon)", answer: "Rosenborg", difficulty: "normal" },
    { question: "(First name) English footballer who has lost every domestic final but won every European final (Submitted by Unico)", answer: "Reece James", difficulty: "normal" },
    { question: "(Both names) Owner of the '92' side nicknamed 'The Red Dragons' (Submitted by Unico)", answer: "Ryan Reynolds", difficulty: "normal" }
  ],
  S: [
    { question: "(Surname) Argentinian centre back who won the UCL with Man United in 1999 <br>(Submitted by PaddyD)", answer: "Jaap Stam", difficulty: "normal" },
    { question: "(Surname) Former player nicknamed the 'Baby Faced Assasin' <br>(Submitted by Laboon)", answer: "Ole Gunnar Solskjaer", difficulty: "normal" },
    { question: "(First name) Goalkeeper on the bench for the losing side in the 2017-18 UCL final <br>(Submitted by Unico)", answer: "Simon Mignolet", difficulty: "normal" },
    { question: "(Surname) Former everton player W2S once mispronounced on an AJ3 video <br>(Submitted by Unico)", answer: "Djibril Sidibé", difficulty: "normal" }
  ],
  T: [
    { question: "Turkish team that Daniel Sturridge had a spell at <br>(Submitted by PaddyD)", answer: "Trabzonspor", difficulty: "normal" },
    { question: "Dundee United nickname <br>(Submitted by Unico)", answer: "The Tangerines", difficulty: "normal" },
    { question: "(First name) Former England striker who scored 22 goals in the 1992-93 PL season <br>(Submitted by Unico)", answer: "Teddy Sheringham", difficulty: "normal" },
    { question: "(First name) Long Haired attacking midfielder who won the 23-24 Scottish League Cup with Rangers <br>(Submitted by Unico)", answer: "Todd Cantwell", difficulty: "normal" }
  ],
  U: [
    { question: "Dutch team Celtic beat in the final league phase game in the Europa League 25/26 season <br>(Submitted by PaddyD)", answer: "FC Utrecht", difficulty: "normal" },
    { question: "Italian side that play at Stadio Friuli <br>(Submitted by Unico)", answer: "Udinese", difficulty: "normal" },
    { question: "African country whose National Team is nicknamed The Cranes <br>(Submitted by Unico)", answer: "Uganda", difficulty: "normal" },
    { question: "Country that Aaron thinks Marmoush is from <br>(Submitted by Unico)", answer: "Uzbekistan", difficulty: "normal" }
  ],
  V: [
    { question: "(First name) Member of the Wimbledon crazy gang turned hard man actor <br>(Submitted by PaddyD)", answer: "Vinnie Jones", difficulty: "normal" },
    { question: "(First name) World Cup winning manager with a signature moustache <br>(Submitted by Unico)", answer: "Vicente del Bosque", difficulty: "normal" },
    { question: "Club side from Liechtenstein that compete in the Switzerland football pyramid <br>(Submitted by Unico)", answer: "FC Vaduz", difficulty: "normal" },
    { question: "(Surname) Dutch footballer with the nickname 'Roncrete' <br>(Submitted by Unico)", answer: "Ron Vlaar", difficulty: "normal" }
  ],
  W: [
    { question: "(Surname) Youngest player to ever play for England <br>(Submitted by PaddyD)", answer: "Theo Walcott", difficulty: "normal" },
    { question: "Blue wearing english team that has an alliterative name with this letter <br>(Submitted by Laboon)", answer: "Wycombe Wanderers", difficulty: "normal" },
    { question: "Historical name of the stadium Eintracht Frankfurt play at <br>(Submitted by Unico)", answer: "Waldstadion", difficulty: "normal" },
    { question: "(Surname) French scorer in extra time in the Euro 2000 final <br>(Submitted by Unico)", answer: "Sylvain Wiltord", difficulty: "normal" }
  ],
  X: [
    { question: "(Contains first name) 1998 World Cup winning left back <br>(Submitted by Laboon)", answer: "Bixente Lizarazu", difficulty: "normal" },
    { question: "(Contains it) 1994-95 UCL Winner <br>(Submitted by Unico)", answer: "Ajax", difficulty: "normal" },
    { question: "(First name) Former Liverpool Midfielder to go onto become a Top 5 league winning manager <br>(Submitted by Unico)", answer: "Xabi Alonso", difficulty: "normal" },
    { question: "(First name) This attacker has 120m in total transfer fees and signed to Nike at 13 <br>(Submitted by Unico)", answer: "Xavi Simons", difficulty: "normal" }

  ],
  Y: [
    { question: "(First name) Trickster from DR Congo that played for Palace & Everton <br>(Submitted by PaddyD)", answer: "Yannick Bolasie", difficulty: "normal" },
    { question: "2023–24 Runners-up in the AFC Champions League <br>(Submitted by Unico)", answer: "Yokohama F. Marinos", difficulty: "normal" },
    { question: "(First name) Former Arsenal and Huddersfield striker with 8 caps for France U21s <br>(Submitted by Unico)", answer: "Yaya Sanogo", difficulty: "normal" },
    { question: "(First name) Former Tottenham defender with 5 France caps <br>(Submitted by Unico)", answer: "Younes Kaboul", difficulty: "normal" }
  ],
  Z: [
    { question: "(Surname) Italian fullback that spent time at Chelsea and Atalanta <br>(Submitted by PaddyD)", answer: "Davide Zappacosta", difficulty: "normal" },
    { question: "Winners of the 2012 AFCON <br>(Submitted by Unico)", answer: "Zambia", difficulty: "normal" },
    { question: "Egyptian side to win multiple CAF Champions League titles <br>(Submitted by Unico)", answer: "Zamalek", difficulty: "normal" },
    { question: "(Surname) Ex Fulham Midfielder who went on to win 2x Serie A titles with Napoli <br>(Submitted by Unico)", answer: "André-Frank Zambo Anguissa", difficulty: "normal" }
  ]
};