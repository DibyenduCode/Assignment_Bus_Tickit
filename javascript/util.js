function btnclick(btnid){
const btnelemen=document.getElementById(btnid);
btnelemen.setAttribute("disabled","true");
btnelemen.classList.add("disabled:bg-[#1DD100]","disabled:text-white");
}

function seatcal(){
const seatavelable=document.getElementById("seatLeft").innerText;
const bookseatnum=parseInt(document.getElementById("bookedseatnum").innerText);
const updatedseat=seatavelable-1;
const updatebookseatnum=bookseatnum+1;
document.getElementById("seatLeft").innerText=updatedseat;
document.getElementById("bookedseatnum").innerText=updatebookseatnum;

}

function addseats(btnid){
const setlocation=document.getElementById("seats")
setlocation.insertAdjacentHTML("afterend",`<div class="flex space-x-[178px] pb-3">
<p class="text-[16px]" id="seatNo"></p>
<p class="text-[16px]">Economoy</p>
<p class="text-[16px]">550</p>
</div>`);
document.getElementById("seatNo").innerText=btnid;


}

function after4block(){
    document.getElementById("nomoreseats").classList.remove("hidden");
   
}

function cupunonoff(){
    document.getElementById("cuponbtn").removeAttribute("disabled");
    document.getElementById("cuponplace").removeAttribute("disabled");
}

function totalprice(){
    const numbofseats=document.getElementById("bookedseatnum").innerText;
    const updateprice=numbofseats*550;
    document.getElementById("totalPrice").innerText=updateprice;
    document.getElementById("gtotal").innerText=updateprice;
    

    return updateprice;

}