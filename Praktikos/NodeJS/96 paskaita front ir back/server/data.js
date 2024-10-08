class Partija {
  constructor({ pavadinimas, isteigimoMetai, politineKryptis, vadovas, nariuSkaicius, turiParlamenteAtstova }) {
    this.pavadinimas = pavadinimas
    this.isteigimoMetai = isteigimoMetai;
    this.politineKryptis = politineKryptis
    this.vadovas = vadovas;
    this.nariuSkaicius  = nariuSkaicius;
    this.turiParlamenteAtstova = turiParlamenteAtstova;
  }
  keistiNariuSkaiciu(naujasSkaicius){
    this.nariuSkaicius = naujasSkaicius;
  }
}

const politinesPartijos = [
  {
    pavadinimas: "Tėvynės sąjunga – Lietuvos krikščionys demokratai (TS-LKD)",
    isteigimoMetai: 1993,
    politineKryptis: "Centro-dešinė, konservatyvi",
    vadovas: "Gabrielius Landsbergis",
    nariuSkaicius: 14700,
    turiParlamenteAtstova: true
  },
  {
    pavadinimas: "Lietuvos valstiečių ir žaliųjų sąjunga (LVŽS)",
    isteigimoMetai: 2001,
    politineKryptis: "Centro-kairė, agrarinė",
    vadovas: "Ramūnas Karbauskis",
    nariuSkaicius: 3000,
    turiParlamenteAtstova: true
  },
  {
    pavadinimas: "Lietuvos socialdemokratų partija (LSDP)",
    isteigimoMetai: 1896,
    politineKryptis: "Centro-kairė, socialdemokratinė",
    vadovas: "Vilija Blinkevičiūtė",
    nariuSkaicius: 17000,
    turiParlamenteAtstova: true
  },
  {
    pavadinimas: "Liberalų sąjūdis",
    isteigimoMetai: 2006,
    politineKryptis: "Centro-dešinė, liberalizmas",
    vadovas: "Eugenijus Gentvilas",
    nariuSkaicius: 2800,
    turiParlamenteAtstova: true
  },
  {
    pavadinimas: "Darbo partija",
    isteigimoMetai: 2003,
    politineKryptis: "Centras, populizmas",
    vadovas: "Andrius Mazuronis",
    nariuSkaicius: 12000,
    turiParlamenteAtstova: true
  },
  {
    pavadinimas: "Nemuno aušra",
    isteigimoMetai: 2023,
    politineKryptis: "Centro-dešinė, regionų politika",
    vadovas: "Remigijus Žemaitaitis",
    nariuSkaicius: 1500,
    turiParlamenteAtstova: false
  }
];

export const partijos = [];

politinesPartijos.forEach(el => partijos.push(new Partija(el)));