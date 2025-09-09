"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const original = 2+3*2-4*6;
const modified = 2+3*(2-4)*6;

printOut("2+3*(2-4)*6 = "+modified);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const inch = 25.4;
const meter = 25*1000; //meter om til mm//
const centi = 34*10; //cm om til mm//
const mogcm = meter + centi; //plusser m og cm etter omgjort til mm//
const mmtilinch = mogcm / inch; //Gjør mm om til inc//
const todesimaler = mmtilinch.toFixed(2); //Satte en sperre for kun to desimaler//

printOut("25m og 34cm blir "+todesimaler + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3;
const hours = 12; //Gjør om allt til min//
const minutes = 14;
const seconds = 45; 
const daysminutes = days*24*60;
const hourminutes = hours*60;
const secondsminutes = seconds/60;
const allminutes = daysminutes+hourminutes+secondsminutes+minutes; //Plusser alt sammen//

printOut("3 dager, 12 timer, 14 minutter og 45 sekkunder blir: " +allminutes + " minutter.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const startmin = 6322.52;

const heledager = Math.floor(startmin/60/24); //Regner ut hele dager//
const restmin = startmin - heledager*24*60; //Regner ut resten av min etter hele dager//

const heletimer = Math.floor(restmin/60); //Regner ut hele timer//
const restmintimer = restmin - heletimer *60;//Regner ut resten av min etter hele timer//

const helemin = Math.floor(restmintimer); //Regner ut hele min//
const helesek = Math.floor((restmintimer - helemin)*60); //Regner ut sekunder//

printOut("Dager: "+ heledager + " timer: "+ heletimer + " minutter: " + helemin + " sekunder: " + helesek);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const antallusd = 54; //Antall dollar//
const norskkurs = 76; //Norsk krone kurs//
const uskurs = 8.6; //US dollar kurs//
const kurs = norskkurs / uskurs; //Gjør om kursen til NOK per USD//
const kroner = antallusd * kurs; //Regner ut hvor mange kroner det blir//
const helkroner = kroner.toFixed(0); //Gjør om til heltall//

printOut(antallusd + " USD blir " + helkroner + " Kr."); //Gir ut svaret//
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst = ("There is much between heaven and earth that we do not understand.")
const antallbokstaver = tekst.length; //Regner ut antall bokstaver//
const bokstav19 = tekst.charAt(19); //Regner ut bokstaven på plass 19//
const tegnfra35 = tekst.substring(35,43); //Regner ut tegn fra plass 35 og 8 plasser fremover//
const earthindex = tekst.indexOf("earth");  //Regner ut indeksen der earth starter//

printOut("Antall tegn i teksten: " + antallbokstaver + newLine + ". Tegnet på plass 19: " + bokstav19 + newLine + ". Tegn fra plass 35 og 8 plasser fremmover: " + tegnfra35 + newLine + ". Indeksen der earth strater: " + earthindex);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const paastand1 = (5 > 3);
const paastand2 = (7 >= 7);
const paastand3 = ("a" > "b");
const paastand4 = (1 < "b");
const paastand5 = (2500 < "abcd");
const paastand6 = ("arne" != "thomas"); 
const paastand7 = (2 == 5);
const paastand8 = ("abcd" > "bcd");

printOut("(5 > 3) = " + paastand1 + newLine + "(7 >= 7) = " + paastand2 + newLine + "(a > b) = " + paastand3 + newLine + "(1 < b) = " + paastand4 + newLine + "(2500 < abcd) = " + paastand5 + newLine + "(arne != thomas) = " + paastand6 + newLine + "(2 == 5) = " + paastand7 + newLine + "(abcd > bcd) = " + paastand8);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst1 = "254";
const tekst2 = "57.23";
const tekst3 = "25 kroner";
const nummer1 = Number(tekst1); //Gjør om tekst til tall//
const nummer2 = Number(tekst2);
const nummer3 = Number(tekst3);
const nummer3riktig = parseInt(tekst3); //Gjør om tekst til til tall med bokstaver i teksten//

printOut("Fra tekst til tall:" + newLine + tekst1 + " blir " + nummer1 + newLine + tekst2 + " blir " + nummer2 + newLine + tekst3 + " blir " + nummer3riktig);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1; //Gjør om til et tilfeldig tall mellom 1 og 360//

printOut("Tilfeldig tall mellom 1 og 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dager = 131; 
const uker = Math.floor(dager / 7); //Gjør om til heltall//
const restdager = dager % 7; //Regner ut resten av dagene. % gir rester etter du har delt//

printOut(dager + " dager blir " + uker + " uker og " + restdager + "dager.");
printOut(newLine);