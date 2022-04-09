const materialdescription = [
    {material : "Aluminum Boring Scrap" ,
    hsncode : 76020010 ,
    gst : "18%" },
    {material : "Brass Boring Scrap" ,
    hsncode : 74040022 ,
    gst : "18%" },
    {material : "Film Scrap" ,
    hsncode : 39199090 ,
    gst : "5%" },
    {material : "Paper Scrap" ,
    hsncode : 47071000 ,
    gst : "5%" },
    {material : "Carton Box Scrap" ,
    hsncode : 47071000 ,
    gst : "5%" },
    {material : "Iron Scrap" ,
    hsncode : 7204 ,
    gst : "18%" },
    {material : "Factory Waste Disposal Scrap" ,
    hsncode : 999433 ,
    gst : "5%" },
    {material : "S.S Scrap" ,
    hsncode : 7204 ,
    gst : "18%" },
    {material : "Wood Scrap" ,
    hsncode : 4401 ,
    gst : "5%" },
    {material : "G.I Pallet Scrap" ,
    hsncode : 73269099 ,
    gst : "18%" },
    {material : "M.S Scrap" ,
    hsncode : 7204 ,
    gst : "18%" },
    {material : "Bail Patti Scrap" ,
    hsncode : 72044100 ,
    gst : "18%" },
]

let txt1 = " ";
let num1 = 1;
materialdescription.forEach(myFunction)
document.getElementById("materialdescription").innerHTML = txt1;

function myFunction(value){
    txt1 += '<tr> <td scope = "row" >' + num1 + "</td>"
    + "<td>" + value.material  + "</td>" 
    + "<td>" + value.hsncode + "</td>" 
    + "<td>" + value.gst + "</td> </tr>" 

    num1 +=1;
}
