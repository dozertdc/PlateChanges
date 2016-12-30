
function mindenoff(){
  sulyoff("w25");
  sulyoff("w25_2");
  sulyoff("w25_3");
  sulyoff("w25_4");
  sulyoff("w20");
  sulyoff("w15");
  sulyoff("w10");
  sulyoff("w5");
  sulyoff("w2_5");
  sulyoff("w2");
  sulyoff("w1_5");
  sulyoff("w1");
  sulyoff("w0_5"); 
}

function sulyup(){
   var x = document.getElementById("weight").value
   var sex  = document.getElementById("weight2").value
   if (sex=='m' && x<=273) {x++;}//*x=x-20 v 25
   if (sex=='f' && x<=268) {x++;}//*x=x-20 v 25
   document.getElementById("weight").value = x;
   rajzol();
}
function sulydown(){
   var x = document.getElementById("weight").value
   var sex  = document.getElementById("weight2").value
   if (sex=='m' && x>=27) {x--;}//*x=x-20 v 25
   if (sex=='f' && x>=22) {x--;}//*x=x-20 v 25
   document.getElementById("weight").value = x;
   rajzol();
}
function sulyon(boxid){
   document.getElementById(boxid).style.display="block";
}
 
function sulyoff(boxid){
   document.getElementById(boxid).style.display="none";
}
function rajzol(){
   mindenoff();
   var x = document.getElementById("weight").value
   var sex  = document.getElementById("weight2").value
   if (sex=='m' && x<26) {document.getElementById("weight").value = 26;}//*x=x-20 v 25
   if (sex=='f' && x<21) {document.getElementById("weight").value = 21;}//*x=x-20 v 25
   if (sex=='m' && x>274) {document.getElementById("weight").value = 274;}//*x=x-20 v 25
   if (sex=='f' && x>269) {document.getElementById("weight").value = 269;}//*x=x-20 v 25   
   var x = document.getElementById("weight").value
   if (sex=='m') {x=x-25} else {x=x-20}//*x=x-20 v 25
   var y = x/2;
   //var y = x;
   if (y>=25) {var maradek = y%25;}
   var hanyszor = (y-maradek)/25;
   if (hanyszor==1) {sulyon("w25");sulyoff("w25_2");sulyoff("w25_3");sulyoff("w25_4");y=y-25;}
   if (hanyszor==2) {sulyon("w25");sulyon("w25_2");sulyoff("w25_3");sulyoff("w25_4");y=y-50;}
   if (hanyszor==3) {sulyon("w25");sulyon("w25_2");sulyon("w25_3");sulyoff("w25_4");y=y-75;}
   if (hanyszor==4) {sulyon("w25");sulyon("w25_2");sulyon("w25_3");sulyon("w25_4");y=y-100;}
   
   if (y>=20) {sulyon("w20");y=y-20;}
   if (y>=15) {sulyon("w15");y=y-15;}
   if (y>=10) {sulyon("w10");y=y-10;}
   if (y>=5) {sulyon("w5");y=y-5;}
   if (y>=2.5) {sulyon("w2_5");y=y-2.5;}
   if (y>=2) {sulyon("w2");y=y-2;}
   if (y>=1.5) {sulyon("w1_5");y=y-1.5;}
   if (y>=1) {sulyon("w1");y=y-1;}
   if (y>=0.5) {sulyon("w0_5");y=y-0.5;}
 
}

function mw(){
$('#loading_female').click(function(){
    $(this).addClass('selected');
    $('#loading_male').removeClass('selected');
    $('#loading_sex').val('f');
    document.getElementById("weight2").value = 'f';
    rajzol();
});
$('#loading_male').click(function(){
    $(this).addClass('selected');
    $('#loading_female').removeClass('selected');
    $('#loading_sex').val('m');
    document.getElementById("weight2").value = 'm';
    rajzol();
});
rajzol();
}
