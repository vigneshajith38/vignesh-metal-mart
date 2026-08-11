import { useMemo, useState } from "react";
import "./App.css";

/* =========================================================
   VIGNESH METAL MART
   PRODUCT DATA
   ========================================================= */

const products = [
  /* =======================================================
     COOKWARE - STEEL
     ======================================================= */

  {
    id: 1,
    name: "Steel Kudam",
    code: "SK",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 2,
    name: "Steel Idli Pathram",
    code: "SIP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 3,
    name: "Steel Kalam",
    code: "SK",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 4,
    name: "Steel Cheenachetti",
    code: "SC",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 5,
    name: "Steel Basin",
    code: "SB",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 6,
    name: "Steel Jug",
    code: "SJ",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 7,
    name: "Steel Cheratta Puttu Large",
    code: "SCP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 8,
    name: "Steel Cheratta Puttu Medium",
    code: "SCP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 9,
    name: "Steel Baby Thotty",
    code: "SBT",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 10,
    name: "Steel Thotti Large",
    code: "ST",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 11,
    name: "Steel Uruli",
    code: "SU",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 12,
    name: "Steel Dishes",
    code: "SD",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 13,
    name: "Steel Kuthuponi Charuvam",
    code: "SKC",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 14,
    name: "Steel Saus Pan",
    code: "SSP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 15,
    name: "Steel Copper Bottom Sauspan",
    code: "SCBS",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 16,
    name: "Steel Waste Tray",
    code: "SWT",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 17,
    name: "Steel Copper Bottom Uruli",
    code: "SCBU",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 18,
    name: "Steel Agarbathi Plate-07",
    code: "SAP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 19,
    name: "Steel Copper Bottom Dish",
    code: "SCB",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 20,
    name: "Steel Puttukutty",
    code: "SP",
    category: "Cookware",
    subcategory: "Steel",
  },
  {
    id: 21,
    name: "Steel Colour Dish",
    code: "SCD",
    category: "Cookware",
    subcategory: "Steel",
  },

  /* =======================================================
     COOKWARE - ALUMINIUM
     ======================================================= */

  {
    id: 22,
    name: "Aluminium Thotti",
    code: "AT",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 23,
    name: "Anna Aluminium Kalam",
    code: "AAK",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 24,
    name: "Aluminium Kalam",
    code: "AK",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 25,
    name: "Anna Aluminium Puttukutty",
    code: "AAP",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 26,
    name: "Aluminium Puttukutty",
    code: "AP",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 27,
    name: "Aluminium Moodi",
    code: "AM",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 28,
    name: "Aluminium Charuvam",
    code: "AC",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 29,
    name: "Aluminium Uruli",
    code: "AU",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 30,
    name: "Aluminium Cheenachetti",
    code: "AC",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 31,
    name: "Aluminium Saucepan",
    code: "AS",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 32,
    name: "Aluminium Idli Cooker",
    code: "AIC",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 33,
    name: "Anna Aluminium Idli Cooker",
    code: "AC",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 34,
    name: "Aluminium Vadi",
    code: "AV",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 35,
    name: "Aluminium Mould Uruli",
    code: "AMU",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 36,
    name: "Aluminium Vagaria Large",
    code: "AVL",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 37,
    name: "Aluminium Vagaria Small",
    code: "AVS",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 38,
    name: "Aluminium Vagaria Black",
    code: "AVB",
    category: "Cookware",
    subcategory: "Aluminium",
  },
  {
    id: 39,
    name: "Aluminium Biriyani Pot",
    code: "ABP",
    category: "Cookware",
    subcategory: "Aluminium",
  },

  /* =======================================================
     COOKWARE - NON-STICK
     ======================================================= */

  {
    id: 40,
    name: "Prestige NS Fry Pan 28 CM",
    code: "GRC",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 41,
    name: "Prestige NS Fry Pan 20 CM",
    code: "NST",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 42,
    name: "Prestige NS Fry Pan 200 MM",
    code: "NST",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 43,
    name: "Grihalekshmi NS Fry Pan 230 MM",
    code: "NSF",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 44,
    name: "Gramans Frypan 240 Induction Base",
    code: "FPI",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 45,
    name: "Milton Pro Cook NS Fry Pan 28 CM",
    code: "MPNFP",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 46,
    name: "Prestige 3 Units Kadai Frypan 24 CM",
    code: "KFP",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 47,
    name: "Nirlep 3 Units Flat Griddle 25 CM",
    code: "FGFP",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 48,
    name: "Natraj NS Tawa 5MM",
    code: "NST",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 49,
    name: "Prestige NS Tawa 280 MM",
    code: "NST",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 50,
    name: "Gramans NS Appachatti",
    code: "NSA",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 51,
    name: "Butterfly NS Appachatti",
    code: "NSA",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 52,
    name: "Pigeon NS Appachatti",
    code: "NSA",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 53,
    name: "Prestige NS Kadai 25 CM",
    code: "NSK",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 54,
    name: "Prestige NS Kadai 20 CM",
    code: "NSK",
    category: "Cookware",
    subcategory: "Non-Stick",
  },
  {
    id: 55,
    name: "Prestige NS Kadai 27 CM",
    code: "NSK",
    category: "Cookware",
    subcategory: "Non-Stick",
  },

  /* =======================================================
     COOKWARE - CAST IRON
     ======================================================= */

  {
    id: 56,
    name: "Casting Appachatti Medium",
    code: "CAP",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 57,
    name: "Casting Appachatti Big",
    code: "CAP",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 58,
    name: "Flat Type Appachatti Big",
    code: "FTA",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 59,
    name: "Flat Type Appachatti Small",
    code: "FTA",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 60,
    name: "Casting Dosakalle 09",
    code: "CDK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 61,
    name: "Casting Dosakalle 10",
    code: "CDK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 62,
    name: "Indallium Dosakell 11",
    code: "IDK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 63,
    name: "Indallium Dosakell 12",
    code: "IDK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 64,
    name: "Handle Indalium Doshakal",
    code: "HID",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 65,
    name: "Wooden Metal Thawa",
    code: "WMT",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 66,
    name: "Iron Vagarria Big",
    code: "IV",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 67,
    name: "Iron Vagaria Small",
    code: "IV",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 68,
    name: "Wooden Handle Net Kannappa No 12",
    code: "WHNK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 69,
    name: "Wooden Handle Net Kannappa No 10",
    code: "WHNK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 70,
    name: "Wooden Handle Net Kannappa No 08",
    code: "WHNK",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 71,
    name: "Wooden Handle Spoon No 8",
    code: "WHS",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 72,
    name: "Wooden Handle Spoon Joosh",
    code: "WHS",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 73,
    name: "Indalium Special Thavi No 02",
    code: "IPT",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 74,
    name: "Indalium Special Thavi No 03",
    code: "IPT",
    category: "Cookware",
    subcategory: "Cast Iron",
  },
  {
    id: 75,
    name: "Indalium Special Thavi No 04",
    code: "IPT",
    category: "Cookware",
    subcategory: "Cast Iron",
  },

  /* =======================================================
     COOKERS & STOVES - PRESSURE COOKERS
     ======================================================= */

  {
    id: 76,
    name: "Chakson Aluminium Pressure Cooker 3 LTR",
    code: "CAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 77,
    name: "Chakson Aluminium Pressure Cooker 4 LTR",
    code: "CAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 78,
    name: "Chakson Aluminium Pressure Cooker 5 LTR",
    code: "CAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 79,
    name: "Grihalakshmi Aluminium Pressure Cooker 2 LTR",
    code: "GAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 80,
    name: "Butterfly Aluminium Pressure Cooker 5 LTR",
    code: "BAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 81,
    name: "Peigion Aluminium Pressure Cooker 7.5 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 82,
    name: "Peigion Aluminium Pressure Cooker 5 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 83,
    name: "Peigion Aluminium Pressure Cooker 3 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 84,
    name: "Prestige Aluminium Pressure Cooker 3 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 85,
    name: "Prestige Aluminium Pressure Cooker 2 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 86,
    name: "Prestige Aluminium Pressure Cooker 4 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 87,
    name: "Prestige Aluminium Pressure Cooker 5 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 88,
    name: "Gramans Aluminium Cooker 10 LTR",
    code: "GAC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 89,
    name: "Laxmiram Aluminium Cooker 7.5 LTR",
    code: "LAC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 90,
    name: "Bell Aluminium Pressure Cooker 7.5 LTR",
    code: "BAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 91,
    name: "Ultra SS Pressure Cooker 2 LTR",
    code: "UAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 92,
    name: "Premier Aluminium Pressure Cooker 5 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 93,
    name: "Premier Aluminium Pressure Cooker 5.5 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 94,
    name: "Premier Aluminium Pressure Cooker 3 LTR",
    code: "PAPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 95,
    name: "Nolta SS Pressure Cooker 5 LTR",
    code: "NSPC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 96,
    name: "Peigion SS Pressure Cooker 2 LTR",
    code: "PSC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 97,
    name: "Peigion SS Pressure Cooker 3 LTR",
    code: "PSC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 98,
    name: "Butterfly SS Pressure Cooker 3 LTR",
    code: "BC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 99,
    name: "Butterfly SS Pressure Cooker 5 LTR",
    code: "BC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },
  {
    id: 100,
    name: "Butterfly SS Pressure Cooker 7.5 LTR",
    code: "BC",
    category: "Cookers & Stoves",
    subcategory: "Pressure Cookers",
  },

  /* =======================================================
     RICE COOKERS
     ======================================================= */

  {
    id: 101,
    name: "Steel Rice Cooker Sreeram 2 KG",
    code: "SRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 102,
    name: "Steel Rice Cooker Sreeram 1.5 KG",
    code: "SRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 103,
    name: "Steel Rice Cooker Sreeram 3/4 KG",
    code: "SRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 104,
    name: "Curry Leaf Steel Rice Cooker 1.5 KG",
    code: "CSRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 105,
    name: "Curry Leaf Steel Rice Cooker 1 KG",
    code: "CSRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 106,
    name: "V Brand Rice Cooker 1 KG",
    code: "VR",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 107,
    name: "Chakson Aluminium Rice Cooker 7.5 LTR",
    code: "CARC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 108,
    name: "Gramans Rice Cooker 1.5 KG",
    code: "GRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },
  {
    id: 109,
    name: "Gramans Rice Cooker 1 KG",
    code: "GRC",
    category: "Cookers & Stoves",
    subcategory: "Rice Cookers",
  },

  /* =======================================================
     GAS STOVES
     ======================================================= */

  {
    id: 110,
    name: "Gramans Gas Stove SS 2B",
    code: "GS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },
  {
    id: 111,
    name: "Gramans Gas Stove SS Pan Support",
    code: "GS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },
  {
    id: 112,
    name: "Nestron Gas Stove 2 Burner Glass Top",
    code: "NGS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },
  {
    id: 113,
    name: "Usha Gas Stove Glass Top 2 Burner",
    code: "GS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },
  {
    id: 114,
    name: "Nirlop Gas Stove Glass Top 2 Burner",
    code: "GS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },
  {
    id: 115,
    name: "Ultix Gas Stove Single Burner",
    code: "GS",
    category: "Cookers & Stoves",
    subcategory: "Gas Stoves",
  },

  /* =======================================================
     ELECTRIC STOVES
     ======================================================= */

  {
    id: 116,
    name: "V Guard Induction Stove",
    code: "VGIS",
    category: "Cookers & Stoves",
    subcategory: "Electric Stoves",
  },
  {
    id: 117,
    name: "Gramans Induction Stove",
    code: "GIS",
    category: "Cookers & Stoves",
    subcategory: "Electric Stoves",
  },

  /* =======================================================
     ELECTRIC APPLIANCES
     ======================================================= */

  {
    id: 118,
    name: "Gramans Mixi",
    code: "GM",
    category: "Electric Appliances",
    subcategory: "Electric Kitchen",
  },
  {
    id: 119,
    name: "Greenchef Mixi",
    code: "GM",
    category: "Electric Appliances",
    subcategory: "Electric Kitchen",
  },
  {
    id: 120,
    name: "BPL Mixi",
    code: "BM",
    category: "Electric Appliances",
    subcategory: "Electric Kitchen",
  },
  {
    id: 121,
    name: "Watts Rove Wall Mount Fan",
    code: "WRWF",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 122,
    name: "Gramans Electric Kettle",
    code: "GEK",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 123,
    name: "Impex Electric Kettle",
    code: "IEK",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 124,
    name: "Nestron Electric Kettle",
    code: "NEK",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 125,
    name: "BPL Iron Box",
    code: "BIB",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 126,
    name: "Bajaj Iron Box",
    code: "BIB",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 127,
    name: "Bajaj Edge Fan 400MM",
    code: "FBE",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },
  {
    id: 128,
    name: "Bajaj Edge Fan 600MM",
    code: "FBE",
    category: "Electric Appliances",
    subcategory: "Electric Equipment",
  },

  /* =======================================================
     KITCHEN ACCESSORIES - STEEL
     ======================================================= */

  {
    id: 129,
    name: "Steel Lunch Box",
    code: "SLB",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 130,
    name: "Steel Lunch Carrier Thook",
    code: "SLCT",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 131,
    name: "Steel Plate",
    code: "SP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 132,
    name: "Steel Moodi",
    code: "SM",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 133,
    name: "Steel Curry Dubba",
    code: "SCD",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 134,
    name: "Steel Montha",
    code: "SM",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 135,
    name: "Steel Thavi",
    code: "ST",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 136,
    name: "Steel S",
    code: "SC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 137,
    name: "Steel Mug",
    code: "SM",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 138,
    name: "Steel Glass",
    code: "SG",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 139,
    name: "Steel Handled Cup Big",
    code: "SHC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 140,
    name: "Steel Handled Cup Medium",
    code: "SHC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 141,
    name: "Steel Thookupathram",
    code: "ST",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 142,
    name: "Steel Agarbathi Plate-05",
    code: "SGP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 143,
    name: "Steel Bowl",
    code: "SB",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 144,
    name: "Steel Agarbathi Plate-03",
    code: "SAP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 145,
    name: "Steel Visappam Plate",
    code: "SVP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 146,
    name: "Mangalam Milk Boiler",
    code: "MMB",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 147,
    name: "SS Seva Nazhi",
    code: "SSN",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 148,
    name: "Steel Spoon Stand Double",
    code: "SSS",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 149,
    name: "Brass Seva Nazhi",
    code: "SN",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 150,
    name: "Steel Dubba",
    code: "SD",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 151,
    name: "Steel Spoon",
    code: "SP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 152,
    name: "Steel Cake Tray",
    code: "SCT",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 153,
    name: "Steel Thamboola Thatte",
    code: "STT",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 154,
    name: "Steel Chiplithatu",
    code: "SCH",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 155,
    name: "Steel Panapetti",
    code: "SP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 156,
    name: "Steel Karithukku",
    code: "SK",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 157,
    name: "Steel Curry Plate",
    code: "SCP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 158,
    name: "Stainless Steel Gas Trolly",
    code: "SSGT",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 159,
    name: "Steel Screw Curry Dubba",
    code: "SSCD",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 160,
    name: "Kerala Uruli",
    code: "KU",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 161,
    name: "Murugan Idly Cooker 16 PCS",
    code: "MIC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 162,
    name: "Sree Ram Idly Cooker 24 PCS",
    code: "SRIC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 163,
    name: "Ideal Eva Plus Idli Cooker",
    code: "IEPIC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 164,
    name: "Amar Jeet Multi Puttu Cooker",
    code: "AJMPC",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 165,
    name: "Sun Brand Chirattupotu With Kudam",
    code: "SBCWK",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 166,
    name: "Murugan Milk Boiler",
    code: "MMM",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 167,
    name: "Biriyani Pot Spanio 10 Liter",
    code: "BP0",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },
  {
    id: 168,
    name: "I Biriyani Pot Greenchef 5.3 LTR",
    code: "IBP",
    category: "Kitchen Accessories",
    subcategory: "Steel Accessories",
  },

  /* =======================================================
     KITCHEN RACKS
     ======================================================= */

  {
    id: 169,
    name: "Icon Kitchen Rack Big",
    code: "IKR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 170,
    name: "Soumya Kitchen Rack Small",
    code: "SKR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 171,
    name: "B K Stand",
    code: "BKS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 172,
    name: "Fruit Trolly",
    code: "FT",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 173,
    name: "Kitchen Stand Sheet",
    code: "KSS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 174,
    name: "Kitchen Rack 4 Step",
    code: "KR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 175,
    name: "Kitchen Rack 3 Step",
    code: "KR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 176,
    name: "SS Ulli Kuda",
    code: "SSUK",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },
  {
    id: 177,
    name: "SS Round And Square Kooda",
    code: "SSRSK",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Racks",
  },

  /* =======================================================
     KITCHEN TOOLS
     ======================================================= */

  {
    id: 178,
    name: "SS Cake Tong Big",
    code: "SSCT",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 179,
    name: "Bottle Brush Large",
    code: "BB L",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 180,
    name: "Bottle Brush Small",
    code: "BB",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 181,
    name: "PE Birds Kitchen Unit Knife, Scissor, Peeler",
    code: "PBK",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 182,
    name: "Peeler",
    code: "PLR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 183,
    name: "Chopping Board Large",
    code: "CHB L",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 184,
    name: "Chopping Board Medium",
    code: "CHB M",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 185,
    name: "Chopping Board Small",
    code: "CHB",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 186,
    name: "Easy Flow Oil Can",
    code: "EFOC",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 187,
    name: "Polyguard Scissors",
    code: "PS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 188,
    name: "Lemon Press Steel",
    code: "LP",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 189,
    name: "Kitchen Scissor",
    code: "KS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 190,
    name: "SS Arippu Big Medium",
    code: "ARP",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 191,
    name: "SS Arippu Small",
    code: "ARP S",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 192,
    name: "Slicer 2 In 1",
    code: "SLIC",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 193,
    name: "Slicer SS Blue Colour Large",
    code: "SLI",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 194,
    name: "Egg Blender Round Type Big",
    code: "EBR B",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 195,
    name: "Egg Blender Round Type Small",
    code: "EBR",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 196,
    name: "Curd Blender",
    code: "CB",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 197,
    name: "Slicer SS Blue Colour Small",
    code: "SBCS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 198,
    name: "Kitchen Vessel Keeping SS Ring Medium",
    code: "KVK",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 199,
    name: "Cooker Handle Black",
    code: "CH",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 200,
    name: "Gas Vessel Holder",
    code: "GVH",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 201,
    name: "Rice Colander 22 CM",
    code: "RC 22",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 202,
    name: "Rice Colander 25 CM",
    code: "RC 25",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 203,
    name: "Rice Colander 28 CM",
    code: "RCL",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 204,
    name: "Square Rice Colander 24 CM",
    code: "RC 24",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 205,
    name: "Zalak All In One Chipser / Slicer",
    code: "ZAIO",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 206,
    name: "Coconut Scrapper",
    code: "CS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 207,
    name: "Kreena Quick Chopper",
    code: "KQC",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },
  {
    id: 208,
    name: "Knife Sharpener",
    code: "KS",
    category: "Kitchen Accessories",
    subcategory: "Kitchen Tools",
  },

  /* =======================================================
     STORAGE & SERVING - CASAROLES
     ======================================================= */

  {
    id: 209,
    name: "Unicorn 3.6 Casarole",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 210,
    name: "Bluestar Casarole 5000 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 211,
    name: "Unicorn 2.4 Casarole",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 212,
    name: "Milton Casarole 3000 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 213,
    name: "Milton Casarole 2500 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 214,
    name: "Ideal Casarole",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 215,
    name: "Ndura Casarole 1000 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 216,
    name: "Ornate 3500 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },
  {
    id: 217,
    name: "Asian Casarole 2500 ML",
    code: "CS",
    category: "Storage & Serving",
    subcategory: "Casaroles",
  },

  /* =======================================================
     FLASKS & WATER BOTTLES
     ======================================================= */

  {
    id: 218,
    name: "Prestige Vacuum Flask 750 ML",
    code: "VF",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 219,
    name: "Milton Vacuum Flask 350 ML",
    code: "MVF",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 220,
    name: "Baby Feeding Water Bottle",
    code: "BFWB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 221,
    name: "Baby Water Bottle",
    code: "BWB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 222,
    name: "Water Bottle Sport Super 68 750 ML",
    code: "WB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 223,
    name: "Water Bottle Sport Super 68 500 ML",
    code: "WB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 224,
    name: "Magnus Water Bottle 900 ML",
    code: "WB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 225,
    name: "Magnus Water Bottle 500 ML",
    code: "WB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 226,
    name: "Highsky Steel Bottle 750 ML",
    code: "SB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 227,
    name: "Steel Highsky Bottle 500 ML",
    code: "SHB",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },
  {
    id: 228,
    name: "Water Bottle Steel Highsky 250 ML",
    code: "WBS",
    category: "Storage & Serving",
    subcategory: "Flasks & Water Bottles",
  },

  /* =======================================================
     GLASSWARE
     ======================================================= */

  {
    id: 229,
    name: "Plain Glass Single",
    code: "PGS",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 230,
    name: "Yera Glass Jar VM 01",
    code: "YGJ",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 231,
    name: "Yera Glass Jar VM 02",
    code: "YGJ",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 232,
    name: "Yera Glass Jar VM 03",
    code: "YGJ",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 233,
    name: "Yera Glass Jar VM 04",
    code: "YGJ",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 234,
    name: "Glass Box 6 PC Polo Glass",
    code: "PG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 235,
    name: "Deli Glass Wares 6 PCS",
    code: "DGW",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 236,
    name: "Apex Max 06 PCS",
    code: "APM",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 237,
    name: "China Glass 6 PCS Box",
    code: "CG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 238,
    name: "Ice Cream Glass",
    code: "ICG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 239,
    name: "Juice Glass",
    code: "JG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 240,
    name: "Tea Glass Glacira 85 ML 6 PCS",
    code: "TG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },
  {
    id: 241,
    name: "Tea Glass Glacira 80 ML 6 PCS",
    code: "TG",
    category: "Glassware & Crockery",
    subcategory: "Glassware",
  },

  /* =======================================================
     CROCKERY
     ======================================================= */

  {
    id: 242,
    name: "Dinner Set Opalware 9 PC V Brand",
    code: "DS",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 243,
    name: "Dinner Set Glass 18 PC V Brand",
    code: "DS",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 244,
    name: "Dinner Set Glass 08 PCS V Brand",
    code: "DS",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 245,
    name: "Laopolo 6 No Dinner Set",
    code: "LAO",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 246,
    name: "Diva Plate 6 No Dinner Set",
    code: "DPD",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 247,
    name: "Classique 6 Nos Dinner Set",
    code: "CLD",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 248,
    name: "Diva Cogge Cup Set 6",
    code: "DC",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 249,
    name: "Cogge 6 No Cup Set",
    code: "CC",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 250,
    name: "Coffee Mug Set Arham",
    code: "CM",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
  {
    id: 251,
    name: "Coffee Set Mug Liva Plus 6 PCS",
    code: "CSM",
    category: "Glassware & Crockery",
    subcategory: "Crockery",
  },
];

/* =========================================================
   CATEGORY CONFIGURATION
   ========================================================= */

const categories = [
  {
    name: "Cookware",
    icon: "🍳",
    description: "Steel, aluminium, non-stick & cast iron",
    subcategories: [
      "Steel",
      "Aluminium",
      "Non-Stick",
      "Cast Iron",
    ],
  },
  {
    name: "Cookers & Stoves",
    icon: "🔥",
    description: "Cookers, rice cookers & stoves",
    subcategories: [
      "Pressure Cookers",
      "Rice Cookers",
      "Gas Stoves",
      "Electric Stoves",
    ],
  },
  {
    name: "Electric Appliances",
    icon: "⚡",
    description: "Kitchen & electrical appliances",
    subcategories: [
      "Electric Kitchen",
      "Electric Equipment",
    ],
  },
  {
    name: "Kitchen Accessories",
    icon: "🥄",
    description: "Accessories, racks & kitchen tools",
    subcategories: [
      "Steel Accessories",
      "Kitchen Racks",
      "Kitchen Tools",
    ],
  },
  {
    name: "Storage & Serving",
    icon: "🍱",
    description: "Casaroles, flasks & bottles",
    subcategories: [
      "Casaroles",
      "Flasks & Water Bottles",
    ],
  },
  {
    name: "Glassware & Crockery",
    icon: "🥛",
    description: "Glassware, dinner sets & cups",
    subcategories: [
      "Glassware",
      "Crockery",
    ],
  },
  {
    name: "Dining & Serving",
    icon: "🍽️",
    description: "Dining and serving essentials",
    subcategories: [],
  },
];

/* =========================================================
   APP COMPONENT
   ========================================================= */

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  /* =======================================================
     FILTER PRODUCTS
     ======================================================= */

  const filteredProducts = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSubcategory =
        selectedSubcategory === "All" ||
        product.subcategory === selectedSubcategory;

      const matchesSearch =
        search === "" ||
        product.name.toLowerCase().includes(search) ||
        product.code.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.subcategory.toLowerCase().includes(search);

      return (
        matchesCategory &&
        matchesSubcategory &&
        matchesSearch
      );
    });
  }, [
    selectedCategory,
    selectedSubcategory,
    searchTerm,
  ]);

  /* =======================================================
     SELECT CATEGORY
     ======================================================= */

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory("All");
      setSelectedSubcategory("All");
    } else {
      setSelectedCategory(categoryName);
      setSelectedSubcategory("All");
    }
  };

  /* =======================================================
     SELECT SUBCATEGORY
     ======================================================= */

  const handleSubcategoryClick = (subcategory) => {
    if (selectedSubcategory === subcategory) {
      setSelectedSubcategory("All");
    } else {
      setSelectedSubcategory(subcategory);
    }
  };

  /* =======================================================
     CLEAR FILTERS
     ======================================================= */

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedSubcategory("All");
    setSearchTerm("");
  };

  /* =======================================================
     GET ACTIVE SUBCATEGORIES
     ======================================================= */

  const activeCategory = categories.find(
    (category) => category.name === selectedCategory
  );

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="app">

      {/* ===================================================
          HEADER
          =================================================== */}

      <header className="header">
        <div className="header-content">

          <div className="logo">
            <h1>Vignesh Metal Mart</h1>
            <p>Quality Kitchenware & Household Products</p>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search products, codes..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

            <span className="search-icon">
              🔍
            </span>
          </div>

        </div>
      </header>

      {/* ===================================================
          MAIN
          =================================================== */}

      <main className="main-container">

        {/* SECTION HEADER */}

        <div className="section-header">

          <div>
            <h2>Our Collection</h2>
            <p>
              Explore our range of quality kitchenware
              and household products.
            </p>
          </div>

          {(selectedCategory !== "All" ||
            selectedSubcategory !== "All" ||
            searchTerm !== "") && (
            <button
              className="clear-button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}

        </div>

        {/* =================================================
            CATEGORY CARDS
            ================================================= */}

        <section className="category-grid">

          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-card ${
                selectedCategory === category.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleCategoryClick(category.name)
              }
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

            </div>
          ))}

        </section>

        {/* =================================================
            ACTIVE FILTER
            ================================================= */}

        {(selectedCategory !== "All" ||
          selectedSubcategory !== "All" ||
          searchTerm !== "") && (
          <section className="filter-section">

            <div className="active-filter">

              <span className="filter-label">
                Active filter:
              </span>

              {selectedCategory !== "All" && (
                <>
                  <span className="filter-value">
                    {selectedCategory}
                  </span>
                </>
              )}

              {selectedCategory !== "All" &&
                selectedSubcategory !== "All" && (
                  <span className="filter-arrow">
                    →
                  </span>
                )}

              {selectedSubcategory !== "All" && (
                <span className="filter-value">
                  {selectedSubcategory}
                </span>
              )}

              {searchTerm !== "" && (
                <>
                  <span className="filter-arrow">
                    →
                  </span>

                  <span className="filter-value">
                    Search: "{searchTerm}"
                  </span>
                </>
              )}

            </div>

          </section>
        )}

        {/* =================================================
            SUBCATEGORIES
            ================================================= */}

        {selectedCategory !== "All" &&
          activeCategory &&
          activeCategory.subcategories.length > 0 && (
            <section className="subcategory-section">

              <h3>
                {selectedCategory} Categories
              </h3>

              <div className="subcategory-list">

                <button
                  className={`subcategory-button ${
                    selectedSubcategory === "All"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSubcategory("All")
                  }
                >
                  All
                </button>

                {activeCategory.subcategories.map(
                  (subcategory) => (
                    <button
                      key={subcategory}
                      className={`subcategory-button ${
                        selectedSubcategory === subcategory
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleSubcategoryClick(
                          subcategory
                        )
                      }
                    >
                      {subcategory}
                    </button>
                  )
                )}

              </div>

            </section>
          )}

        {/* =================================================
            PRODUCTS
            ================================================= */}

        <section className="products-section">

          <div className="products-header">

            <div>
              <h2>Products</h2>

              <p>
                Showing{" "}
                <strong>
                  {filteredProducts.length}
                </strong>{" "}
                products
              </p>
            </div>

          </div>

          {/* PRODUCT GRID */}

          {filteredProducts.length > 0 ? (
            <div className="product-grid">

              {filteredProducts.map((product) => (
                <article
                  className="product-card"
                  key={product.id}
                >

                  {/* IMAGE PLACEHOLDER */}

                  <div className="product-image">
                    <div className="image-placeholder">
                      <span>📦</span>
                      <small>
                        Image coming soon
                      </small>
                    </div>
                  </div>

                  {/* PRODUCT INFORMATION */}

                  <div className="product-info">

                    <span className="product-category">
                      {product.subcategory}
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      Item Code:{" "}
                      <strong>
                        {product.code}
                      </strong>
                    </p>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="no-products">

              <div className="no-products-icon">
                🔎
              </div>

              <h3>
                No products found
              </h3>

              <p>
                Try a different search term
                or clear the filters.
              </p>

              <button
                className="clear-button"
                onClick={clearFilters}
              >
                Show All Products
              </button>

            </div>
          )}

        </section>

      </main>

      {/* ===================================================
          FOOTER
          =================================================== */}

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vignesh Metal Mart
          — Quality Kitchenware & Household Products
        </p>
      </footer>

    </div>
  );
}

/* =========================================================
   IMPORTANT:
   THIS FIXES THE "DOES NOT PROVIDE AN EXPORT NAMED DEFAULT"
   ERROR FROM main.jsx
   ========================================================= */

export default App;