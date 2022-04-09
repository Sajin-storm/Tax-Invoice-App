const companies = [
    { name : "M S Metals" , 
gstnumber : "29HOIPS0489Q1ZN" ,
address : "No. 3, 9th Cross, 2nd Main Road, Peenya 2nd Stage, Bangalore - 560058" },
{ name : "Sahana Traders" ,
gstnumber : "29AXIPN3818J1Z0" ,
address : "V, 30 C, area 10th main road, Peenya Industrial area, Peenya 2nd stage, Bangalore - 560058" },
{ name : "N R Enterprises" ,
gstnumber : "29CCMPB8546G1Z9" ,
address : "Sy No. 44, SSR layout, Segehalli, Magadi Main Road, Bangalore North, Near Bus Depot, Bangalore- 560091" },
{ name : "Sri Angala Parameshwari Enterprises" ,
gstnumber : "29ALGPM9950Q1Z0" ,
address : "#67/2, 1st Cross, Kuvempunagar Main Road, Abbigere Ind. Area, (Near Shriram, Sameeksha Apartment) Jalahalli Post, Bengaluru - 560014" },
{ name : "Kousalya Traders" ,
gstnumber : "29ACWPR8331H1ZS" ,
address : "Plot No. 205, B-4, KIADB Industrial Area, Peenya 3rd Phase, Bangalore - 560058" },
{ name : "Intralox" , 
gstnumber : "29AACCI8066P1ZR" ,
address : "No. 18/23 Peenya Industrial Area Phase 1 Yeshwanthpur Hobli Bangalore, Karnataka - 560058" },
{ name : "Merck Life Science" ,
gstnumber : "29AACCM1226B1Z0" ,
address : "50A, 2nd Phase Ring Road, Bangalore - 560058" },
{ name : "G M Enterprises" ,
gstnumber : "29BUMPK2339B1ZN" ,
address : "13th cross, Kareemsab Layout, Hegganahalli, Peenya 2nd Stage, Vishwaneedam Post, Bangalore - 560091" },
{ name : "Sri Murugan Traders" ,
gstnumber : "29DZCPK1143N1Z4" ,
address : "No. 4/1, Beera Deevara Gudi Lane, Ranasinghpet, Bengaluru - 560053" },
{ name : "Avery Dennison" ,
gstnumber : "29AAACA6163D2ZV" ,
address : "PLOT NO 18 and 23, PEENYA INDUSTRIAL AREA PHASE-I, YESHWANTHPUR, HOBLI, BANGALORE, Bengaluru (Bangalore) Rural, Karnataka, 560058" },
{ name : "Castron Metal Process" ,
gstnumber : "29GSTPS5404M1ZO" ,
address : "No. 42, Rajeshwari Nagar, Opp. Udaya Public School, Laggere, Peenya, Bangalore - 560058" },
{ name : "Buhler India Private Limited" ,
gstnumber : "-"  ,
address : "13-D, 12-D, 13-C and 13-B, KIADB Industrial Area, Attibele, Bengaluru, Karnataka - 562 107" },
{ name : "Terex" ,
gstnumber : "-" ,
address : "Terex India Private Limited E-18, Phase-II, Expansion-II, SIPCOT Industrial Complex Hosur, Tamil Nadu – 635 109, INDIA" }

]

let txt2 = " ";
let num2 = 1;
companies.forEach(myFunction2)
document.getElementById("companies").innerHTML = txt2;

function myFunction2(value){
    txt2 += '<tr> <td scope = "row" >' + num2 + "</td>"
    + "<td>" + value.name  + "</td>" 
    + "<td>" + value.gstnumber + "</td>" 
    + "<td>" + value.address + "</td> </tr>" 

    num2 +=1;
}