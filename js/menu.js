
function showEleSTR()
{
	var ele1=document.getElementById("ele-div1");
	/*if(ele1.style.display=="block")
	{
		ele1.style.display="none";
	}
	else if(ele1.style.display=="none")
	{*/
		ele1.style.display="block";
	//}
}
function showEleMC()
{
	var ele2=document.getElementById("ele-div2");
	/*if(ele2.style.display=="block")
	{
		ele2.style.display="none";
	}
	else if(ele2.style.display=="none")
	{*/
		ele2.style.display="block";
	//}
}
function getContent()
{
	var id1=document.getElementById("main-menu");
	var id2=document.getElementById("Bill");
	var id3=document.getElementById("OrderItems");
	id1.style.display="none";
	id2.style.display="none";
	id3.style.display="block";
	document.getElementById("hid").innerHTML="ORDER ITEMS";
	var array = [];
	var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
	var food = {ChilliPannerDry : 100 , RajmaKebab : 150, OnionRings : 80 , HoneyChilliPotatoes : 90 , KakoriKebab : 60 , FriedChilliChicken : 120 , ChickenSatay : 70 , MeatCheeseBalls : 50 , PaneerInGravy : 90 , VegGravy : 70 , VegBriyani : 50 , DalMakhani : 80 , ChickenCurry : 100 , EggCurry : 80 , ChickenBiryani : 80 , MuttonBiryani : 110};

	for (var i = 0; i < checkboxes.length; i++) {
  		array.push(checkboxes[i].value);
	}
	var tr;
	var temp;
	var td1,td2,td3,input;
	var itm=document.getElementById("itemList");
	while(itm.hasChildNodes() && itm.childNodes.length>2)
	{
		itm.removeChild(itm.lastChild);
	}
	for(var i=0;i<array.length;i++)
	{
		tr=document.createElement("tr");
		td1=tr.appendChild(document.createElement("td"));
		td1.innerHTML=array[i];
		td2=tr.appendChild(document.createElement("td"));
		temp=String(array[i]).split(' ').join('');
		td2.innerHTML=food[temp];
		td3=tr.appendChild(document.createElement("td"));
		input = document.createElement("input");
        input.type = "number";
        input.id = "member";
        td3.appendChild(input);
		document.getElementById("itemList").appendChild(tr);
	}
}
function dispBill()
{
	var id1=document.getElementById("main-menu");
	var id2=document.getElementById("Bill");
	var id3=document.getElementById("OrderItems");
	id1.style.display="none";
	id2.style.display="block";
	id3.style.display="none";
	document.getElementById("hid").innerHTML="YOUR BILL";
	var tot=0;
	var tr1,td11,td12,td13;
	var val1,val2,val3;
    var table = document.getElementById('itemList');
	var itm=document.getElementById("ItemOrder");
	while(itm.hasChildNodes() && itm.childNodes.length>2)
	{
		itm.removeChild(itm.lastChild);
	}
    for (var r = 1, n = table.rows.length; r < n; r++) { 
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        	if(c==1){
        		val3=(table.rows[r].cells[c].innerHTML)*table.rows[r].cells[c+1].children[0].value;
        	}
        	else if(c==2)
        	{
				val2=table.rows[r].cells[c].children[0].value;
        	}
        	else
        	{
        		val1=table.rows[r].cells[c].innerHTML;
        	}
        }	
		tr1=document.createElement("tr");
		td11=tr1.appendChild(document.createElement("td"));
		td11.innerHTML=val1;
		td12=tr1.appendChild(document.createElement("td"));
		td12.innerHTML=val2;
		td13=tr1.appendChild(document.createElement("td"));
		td13.innerHTML=val3;
		document.getElementById("ItemOrder").appendChild(tr1);
        tot=tot+((table.rows[r].cells[1].innerHTML)*(table.rows[r].cells[2].children[0].value));
    }
    document.getElementById("TotPrice").innerHTML="<font style=\"color:#FE840E\">Total : </font>"+tot;
    var num=document.createElement("h3");
    num.innerHTML="Table Number : "+document.getElementById("TableNo").value;
    document.getElementById("NumTab").appendChild(num);
}