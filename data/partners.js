const partners = [
  {
    id: "",
    order: null,
    name: "Techniconsult",
    logo: "logos/techniconsult.png",
    website: "https://www.tcfirenze.com/en/",
    devision: "engineering"
  },
  {
    id: "",
    order: null,
    name: "PEQ GROUP",
    logo: "https://www2.pqegroup.com/wp-content/uploads/2022/08/PQE-logo.svg",
    website: "https://www2.pqegroup.com/blog/techniconsult-group-joins-pqe-federation/",
    devision: "engineering"
  },
  {
    id: "",
    order: null,
    name: "PARTECO Modular Cleanroom System",
    logo: "https://parteco.it/wp-content/uploads/2021/11/cropped-parteco-200x51.png",
    website: "https://parteco.it/",
    devision: "facility"
  },
  {
    id: "",
    order: null,
    name: "STERILINE",
    logo: "https://www.steriline.it/i/logo.png",
    website: "https://www.steriline.it/en/home/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "ZIRBUS",
    logo: "	https://www.zirbus.com/wp-content/themes/zirbus/dist/images/logo_9202bb09.svg",
    website: "https://www.zirbus.com/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "SOLME",
    logo: "logos/solme.png",
    website: "https://www.solme.com/",
    devision: "preparation"
  },
  {
    id: "",
    order: null,
    name: "COS.MEC",
    logo: "logos/cosmec-freund.png",
    website: "https://www.cosmec-it.com/en",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "KIKUSUI",
    logo: "logos/kikusui.png",
    website: "http://www.kikusui.com/en/Home",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "FAMAR TEC",
    logo: "logos/famarTec.png",
    website: "https://www.famartecsrl.com/",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "OMAS",
    logo: "logos/omas.png",
    website: "https://www.omastecnosistemi.it/",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "OMAG",
    logo: "logos/omag.png",
    website: "https://www.omag-pack.com/en",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "Hudi Pharma X",
    logo: "logos/hudiPharmaX.png",
    website: "https://www.hudipharma.com/dedalo-encapsulator/",
    devision: "non-sterile"
  },
  {
    id: "",
    order: null,
    name: "ARCA Labeling & Marking",
    logo: "logos/arca-removebg-preview.png",
    website: "https://www.arcalabelingmarking.com/en/",
    devision: "secondary-packaging"
  },
  {
    id: "",
    order: null,
    name: "PIERI",
    logo: "https://www.pieri.it/wp-content/uploads/2018/08/logo-pieri.png",
    website: "https://www.pieri.it/en/",
    devision: "secondary-packaging"
  },
  {
    id: "",
    order: null,
    name: "PRISMA",
    logo: "logos/prisma.png",
    website: "https://www.prismaindustriale.com/en-US/home-page.aspx",
    devision: "secondary-packaging"
  },
  {
    id: "",
    order: null,
    name: "METAPACK",
    logo: "logos/metapack.png",
    website: "https://www.metapack.it/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "STI Engineering",
    logo: "logos/sti-engineering.jpg",
    website: "https://www.sti-engineering.it/en/",
    devision: "engineering"
  },
  {
    id: "",
    order: null,
    name: "Di Renzo Regulatory",
    logo: "logos/di-renzo-regulatory.png",
    website: "https://www.direnzo.biz/it/en/",
    devision: "regulatory"
  },
  {
    id: "",
    order: null,
    name: "MPA ITALY",
    logo: "https://mpaitaly.com/images/logo.png",
    website: "https://mpaitaly.com/uk/index.html",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "SENNA INOX",
    logo: "logos/sennaInox.png",
    website: "https://www.sennainox.it/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "TEMA SINERGIE",
    logo: "logos/TEMAsinergie.png",
    website: "https://www.temasinergie.com/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "ABC TRANSFER",
    logo: "logos/abcTransfer.png",
    website: "https://abctransfer.fr/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "FASTER",
    logo: "logos/faster.png",
    website: "https://www.faster-air.com/en/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "RIGEL LIFE SCIENCES",
    logo: "logos/rigel.png",
    website: "https://www.rigellifesciences.com/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "ELETTRACQUA",
    logo: "logos/elettracqua.png",
    website: "http://www.elettracqua.com/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "CDZ",
    logo: "logos/cdz.png",
    website: "https://www.cosmec-it.com/en",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "HFILTRATION",
    logo: "logos/hfiltration.png",
    website: "https://hfiltration.it/en/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "GENERAL FILTER",
    logo: "https://www.generalfilter.com/wp-content/themes/gfs-child/img/logo.png",
    website: "https://www.generalfilter.com/en/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "IPM Italia",
    logo: "logos/ipm.png",
    website: "https://www.ipmitalia.it/en/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "INEXPORT LIGHT",
    logo: "logos/inexport-light.png",
    website: "https://www.inexportlight.com/it/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "PLUEMAT",
    logo: "logos/Plumat.jpg",
    website: "https://www.pluemat.info/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "TM ITALIA",
    logo: "logos/tm-italia.png",
    website: "https://www.tm-italia.it/index.php?lin=inglese",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "BISIO PROGETTI",
    logo: "logos/bisio-progetti.png",
    website: "http://www.bisioprogetti.it/it/index.html",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "Gualapack",
    logo: "https://www.gualapackgroup.com/wp-content/uploads/2020/06/GP-Logo-color.png",
    website: "https://www.gualapackgroup.com/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "NECTRA",
    logo: "logos/nectra-removebg-preview.png",
    website: "https://nectra-com.fr/en/home/",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "VICTORIA",
    logo: "logos/victoria-removebg-preview.png",
    website: "https://incubatricivictoria.com/en.html",
    devision: "sterile"
  },
  {
    id: "",
    order: null,
    name: "SOLDO CAVITATORS",
    logo: "logos/soldo-removebg-preview.png",
    website: "https://soldocavitators.com/",
    devision: "sterile"
  }
];

