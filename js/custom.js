
//Global Variables
var canvas = document.getElementById('myCanvas');
var canvas2 = document.getElementById('myCanvas3');
var canvas3 = document.getElementById('myCanvas5');
var canvas4 = document.getElementById('myCanvas7');

var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
var context3 = canvas3.getContext('2d');
var context4 = canvas4.getContext('2d');

function enhanceContext(canvas, context) {
    var ratio = 3,
    width = canvas.width,
    height = canvas.height;
    
    if (ratio > 1) {
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        context.scale(ratio, ratio);
    }
}

function enhanceContext2(canvas, context) {
    var ratio = 4,
    width = canvas.width,
    height = canvas.height;
    
    
        canvas.width = width * ratio;
        canvas.height = height * ratio;
    
        context.scale(ratio, ratio);
    
}


var circlelinewidth = 12;

var containerwidth = document.getElementById("circle").offsetWidth;
var containerheight = document.getElementById("circle").offsetHeight;

var x = (containerwidth / 2) - 3;
var x2 = (containerwidth / 2) - 2;

var radius;

var chartpaddingtop = 20;
var chartpaddingleft = 30;
var chartpaddingbottom = 30;

var chartxaxisfont = '0.8em';

var chartcomp = 12;


if ( $(window).width() == 480 || $(window).height() == 480 ) {
    radius = containerwidth / 2.75;// iphone 4
    var y = (containerheight / 2) - ((radius / 2) + 5);
    
    enhanceContext(canvas, context);
    enhanceContext(canvas2, context2);
    enhanceContext(canvas3, context3);
    enhanceContext(canvas4, context4);
    
    changeinner(0);
    
}else if ( $(window).width() == 568 || $(window).height() == 568 ) {
    radius = containerwidth / 2.5;// iphone 5
    var y = (containerheight / 2) - ((radius / 2) + 5);
    
    enhanceContext(canvas, context);
    enhanceContext(canvas2, context2);
    enhanceContext(canvas3, context3);
    enhanceContext(canvas4, context4);
    
    changeinner(0);
    
}else{
    
    radius = containerwidth / 5.75;// ipad
    var y = (containerheight / 3.75) - ((radius2 / 2) + 10);
    canvas.style.width = "360px";
    canvas.style.height = "360px";
    canvas2.style.width = "360px";
    canvas2.style.height = "360px";
    canvas3.style.width = "360px";
    canvas3.style.height = "360px";
    canvas4.style.width = "360px";
    canvas4.style.height = "360px";
    x = containerwidth / 4 - 3;
    x2 = containerwidth / 4 - 2;
    
    enhanceContext2(canvas, context);
    enhanceContext2(canvas2, context2);
    enhanceContext2(canvas3, context3);
    enhanceContext2(canvas4, context4);
    changeinner(1);
    changepredictor();
    changenavbar();
    changecircles();
    changepredictor2();
    changecontact();
}

function changecontact(){
    document.getElementById("contimg1").width = "200";
    document.getElementById("contimg2").width = "200";
    
    document.getElementById("conttitle1").style.fontSize = "40px";
    document.getElementById("conttitle2").style.fontSize = "40px";
    
    document.getElementById("contp1").style.fontSize = "30px";
    document.getElementById("contp2").style.fontSize = "30px";
    document.getElementById("contp3").style.fontSize = "30px";
    document.getElementById("contp4").style.fontSize = "30px";
}

function changepredictor2(){
    document.getElementById("date").style.fontSize = "30px";
    document.getElementById("pattend").style.fontSize = "30px";
    document.getElementById("percent").style.fontSize = "100px";
    document.getElementById("displayattend").style.fontSize = "40px";
    
    chartpaddingtop = 40;
    chartpaddingleft = 50;
    chartpaddingbottom = 50;
    
    chartxaxisfont = '1.75em';
    
    document.getElementById("linediv").style.marginLeft = "50px";
    document.getElementById("linediv").style.height = "80%";
    document.getElementById("linediv").style.width = "675px";
    
    document.getElementById("line").style.width = "3px";

    document.getElementById("time").style.fontSize = "35px";
    document.getElementById("ampm").style.fontSize = "15px";
    
    chartcomp = 8;
    
    document.getElementById("mena1").style.fontSize = "30px";
    document.getElementById("mena2").style.fontSize = "30px";
    document.getElementById("mena3").style.fontSize = "30px";
    document.getElementById("mena4").style.fontSize = "30px";
    document.getElementById("p").style.fontSize = "30px";
    
    document.getElementById("mena1").style.height = "100px";
    document.getElementById("mena1").style.lineHeight = "100px";
    document.getElementById("mena2").style.height = "100px";
    document.getElementById("mena2").style.lineHeight = "100px";
    document.getElementById("mena3").style.height = "100px";
    document.getElementById("mena3").style.lineHeight = "100px";
    document.getElementById("mena4").style.height = "100px";
    document.getElementById("mena4").style.lineHeight = "100px";

    document.getElementById("pr1").src = "img/forward@2x.png";
    document.getElementById("pr2").src = "img/forward@2x.png";
    document.getElementById("pr3").src = "img/forward@2x.png";
    document.getElementById("pr4").src = "img/forward@2x.png";
    
    document.getElementById("pr1").style.marginTop = "15px";
    document.getElementById("pr2").style.marginTop = "15px";
    document.getElementById("pr3").style.marginTop = "15px";
    document.getElementById("pr4").style.marginTop = "15px";
}

function changecircles(){
    document.getElementById("gymname1").style.fontSize = "22px";
    document.getElementById("gymname2").style.fontSize = "22px";
    document.getElementById("gymname3").style.fontSize = "22px";
    document.getElementById("gymname4").style.fontSize = "22px";
        
    document.getElementById("oc1").style.fontSize = "22px";
    document.getElementById("oc2").style.fontSize = "22px";
    document.getElementById("oc3").style.fontSize = "22px";
    document.getElementById("oc4").style.fontSize = "22px";

    document.getElementById("line1").style.marginTop = "125px";
    document.getElementById("line2").style.marginTop = "125px";
    document.getElementById("line3").style.marginTop = "125px";
    document.getElementById("line4").style.marginTop = "125px";

    document.getElementById("count").style.marginTop = "35px";
    document.getElementById("counter").style.fontSize = "75px";
    document.getElementById("percent1").style.fontSize = "59px";
    
    document.getElementById("count2").style.marginTop = "35px";
    document.getElementById("counter2").style.fontSize = "75px";
    document.getElementById("percent2").style.fontSize = "59px";
    
    document.getElementById("count3").style.marginTop = "35px";
    document.getElementById("counter3").style.fontSize = "75px";
    document.getElementById("percent3").style.fontSize = "59px";
    
    document.getElementById("count4").style.marginTop = "35px";
    document.getElementById("counter4").style.fontSize = "75px";
    document.getElementById("percent4").style.fontSize = "59px";
    
    document.getElementById("fraction").style.marginTop = "135px";
    document.getElementById("fraction").style.fontSize = "30px";
    document.getElementById("fraction2").style.marginTop = "135px";
    document.getElementById("fraction2").style.fontSize = "30px";
    document.getElementById("fraction3").style.marginTop = "135px";
    document.getElementById("fraction3").style.fontSize = "30px";
    document.getElementById("fraction4").style.marginTop = "135px";
    document.getElementById("fraction4").style.fontSize = "30px";
    


}

function changenavbar(){
    document.getElementById("navimg1").src = "img/menu@2x.png";
    document.getElementById("navimg2").src = "img/back@2x.png";
    document.getElementById("navimg3").src = "img/back@2x.png";
    document.getElementById("navimg4").src = "img/back@2x.png";

    document.getElementById("btn").style.paddingTop = "27px";
    document.getElementById("btn").style.paddingLeft = "20px";
    document.getElementById("btn2").style.paddingTop = "27px";
    document.getElementById("btn2").style.paddingLeft = "20px";
    document.getElementById("btn3").style.paddingTop = "17px";
    document.getElementById("btn3").style.paddingLeft = "20px";
    document.getElementById("btn4").style.paddingTop = "27px";
    document.getElementById("btn4").style.paddingLeft = "20px";
    
    document.getElementById("navtitle").style.fontSize = "43px";
    document.getElementById("navtitle").style.marginTop = "24px";
    document.getElementById("navtitle").style.marginLeft = "120px";
    
    document.getElementById("mentitle").style.fontSize = "43px";
    document.getElementById("mentitle").style.paddingTop = "27px";
    document.getElementById("mentitle").style.marginLeft = "27px";
    
    document.getElementById("name2").style.fontSize = "43px";
    document.getElementById("name2").style.marginTop = "27px";
    document.getElementById("name2").style.marginLeft = "235px";
    
    document.getElementById("name").style.fontSize = "43px";
    document.getElementById("name").style.marginTop = "25px";
    document.getElementById("name").style.paddingLeft = "160px";
}

function changepredictor(){
    document.getElementById("days").style.width = "100%";
    document.getElementById("days").style.height = "80px";
    document.getElementById("today").style.lineHeight = "80px";
    document.getElementById("day1").style.lineHeight = "80px";
    document.getElementById("day2").style.lineHeight = "80px";
    document.getElementById("day3").style.lineHeight = "80px";
    document.getElementById("day4").style.lineHeight = "80px";
    document.getElementById("day5").style.lineHeight = "80px";
    document.getElementById("day6").style.lineHeight = "80px";
    
    document.getElementById("today").style.fontSize = "25px";
    document.getElementById("day1").style.fontSize = "25px";
    document.getElementById("day2").style.fontSize = "25px";
    document.getElementById("day3").style.fontSize = "25px";
    document.getElementById("day4").style.fontSize = "25px";
    document.getElementById("day5").style.fontSize = "25px";
    document.getElementById("day6").style.fontSize = "25px";

}

function changeinner(j){

//adjusts inner red divs to be positioned right.
var innerstuff1 = document.getElementById("innerone");
var innerstuff2 = document.getElementById("innertwo");
var innerstuff3 = document.getElementById("innerthree");
var innerstuff4 = document.getElementById("innerfour");

    if(j == 0){
    
innerstuff1.style.width = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff1.style.height = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff1.style.marginTop = (y - radius + (circlelinewidth/2)) + "px";
innerstuff1.style.marginLeft = (x2 - radius + (circlelinewidth/2) + 1) + "px";

innerstuff2.style.width = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff2.style.height = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff2.style.marginTop = (y - radius + (circlelinewidth/2)) + "px";
innerstuff2.style.marginLeft = (x - radius + (circlelinewidth/2) + 1) + "px";

innerstuff3.style.width = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff3.style.height = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff3.style.marginTop = (y - radius + (circlelinewidth/2)) + "px";
innerstuff3.style.marginLeft = (x2 - radius + (circlelinewidth/2) + 1) + "px";

innerstuff4.style.width = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff4.style.height = ((radius * 2) - circlelinewidth + 1) + "px";
innerstuff4.style.marginTop = (y - radius + (circlelinewidth/2)) + "px";
innerstuff4.style.marginLeft = (x - radius + (circlelinewidth/2) + 1) + "px";
    }else{
    
    innerstuff1.style.width = "249px";
    innerstuff1.style.height = "249px";
    innerstuff1.style.borderRadius = "200px";
    innerstuff1.style.marginTop = "34px";
    innerstuff1.style.marginLeft = "67px";
        
    innerstuff2.style.width = "249px";
    innerstuff2.style.height = "249px";
    innerstuff2.style.borderRadius = "200px";
    innerstuff2.style.marginTop = "34px";
    innerstuff2.style.marginLeft = "67px";
        
    innerstuff3.style.width = "249px";
    innerstuff3.style.height = "249px";
    innerstuff3.style.borderRadius = "200px";
    innerstuff3.style.marginTop = "34px";
    innerstuff3.style.marginLeft = "67px";
        
    innerstuff4.style.width = "249px";
    innerstuff4.style.height = "249px";
    innerstuff4.style.borderRadius = "200px";
    innerstuff4.style.marginTop = "34px";
    innerstuff4.style.marginLeft = "67px";
    }
}

var endPercent; // make 101% when 100% because the color does not fill up the image all the way!
var endPercent1;
var endPercent2;
var endPercent3;

var curPerc1 = 0;
var curPerc2 = 0;
var curPerc3 = 0;
var curPerc4 = 0;

var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

//code returns all of the attendance data and puts it into variables
function starterfunction(ra, rw, wa, ww, ia, iw, fa, fw){
    
    //convert the raw attendance data to percentages
    endPercent = ra/240*100;
    endPercent = endPercent.toFixed();
    
    endPercent1 = wa/210*100;
    endPercent1 = endPercent1.toFixed();

    endPercent2 = ia/60*100;
    endPercent2 = endPercent2.toFixed();

    endPercent3 = fa/40*100;
    endPercent3 = endPercent3.toFixed();
    
/*--------------------------------------------------------------
 if statements that determine weather to animate and what to display
 ----------------------------------------------------------*/
    // Code for rec hall. Does different things if open/close
    if(ra == 240){
        context.clearRect(0, 0, canvas.width, canvas.height);
        curPerc1 = 0;
        animate();
        document.getElementById('counter').innerHTML=rw;
        document.getElementById('percent1').innerHTML= "min";
        document.getElementById('attend').innerHTML= "wait time";
        document.getElementById('max').innerHTML="";
        endPercent=101;
        
        changefull(0);
        
    }else if(ra < 240){
        context.clearRect(0, 0, canvas.width, canvas.height);
        curPerc1 = 0;
        animate();
        //requestAnimationFrame(count);
        document.getElementById('counter').innerHTML = endPercent;
        document.getElementById('percent1').innerHTML= "%";
        document.getElementById('attend').innerHTML=ra;
        document.getElementById('max').innerHTML="/240";
        changeopen(0);
    }else{
        context.clearRect(0, 0, canvas.width, canvas.height);
        changeclosed(0);
    }
    
    // Code for white building Does different things if open/close
    if(wa == 210){
        context2.clearRect(0, 0, canvas.width, canvas.height);
        curPerc2 = 0;
        animate2();
        document.getElementById('counter2').innerHTML=ww;
        document.getElementById('percent2').innerHTML= "min";
        document.getElementById('attend2').innerHTML= "wait time";
        document.getElementById('max2').innerHTML="";
        endPercent1=101;
        
        changefull(1);
    }else if(wa < 210){
        context2.clearRect(0, 0, canvas.width, canvas.height);
        curPerc2 = 0;
        animate2();
        //requestAnimationFrame(count2);
        document.getElementById('counter2').innerHTML = endPercent1;
        document.getElementById('percent2').innerHTML= "%";
        document.getElementById('attend2').innerHTML=wa;
        document.getElementById('max2').innerHTML="/210";
        changeopen(1);
        
    }else{
        context2.clearRect(0, 0, canvas.width, canvas.height);
        changeclosed(1);
    }
    
    // Code for im building Does different things if open/close
    if(ia == 60){
        context3.clearRect(0, 0, canvas.width, canvas.height);
        curPerc3 = 0;
        animate3();
        document.getElementById('counter3').innerHTML=iw;
        document.getElementById('percent3').innerHTML= "min";
        document.getElementById('attend3').innerHTML= "wait time";
        document.getElementById('max3').innerHTML="";
        endPercent2=101;
        changefull(2);

    }else if(ia < 60){
        context3.clearRect(0, 0, canvas.width, canvas.height);
        curPerc3 = 0;
        animate3();
        //requestAnimationFrame(count3);
        document.getElementById('counter3').innerHTML = endPercent2;
        document.getElementById('percent3').innerHTML= "%";
        document.getElementById('attend3').innerHTML=ia;
        document.getElementById('max3').innerHTML="/60";
        changeopen(2);
    }else{
        context3.clearRect(0, 0, canvas.width, canvas.height);
        changeclosed(2);
    }
    
    // Code for fitness loft Does different things if open/close
    /*
    if(fa == 40){
        context4.clearRect(0, 0, canvas.width, canvas.height);
        curPerc4 = 0;
        animate4();
        document.getElementById('counter4').innerHTML=fw;
        document.getElementById('percent4').innerHTML= "min";
        document.getElementById('attend4').innerHTML= "wait time";
        document.getElementById('max4').innerHTML="";
        endPercent3=101;
        changefull(3);
    }else if(fa < 40){
        context4.clearRect(0, 0, canvas.width, canvas.height);
        curPerc4 = 0;
        animate4();
        //requestAnimationFrame(count4);
        document.getElementById('counter4').innerHTML = endPercent3;
        
        document.getElementById('percent4').innerHTML= "%";
        document.getElementById('attend4').innerHTML=fa;
        document.getElementById('max4').innerHTML="/40";
        
        changeopen(3);
        
    }else{
        context4.clearRect(0, 0, canvas.width, canvas.height);
        changeclosed(3);
    }
     */
    
    //Delete the following two lines and uncomment top for fitness loft to work.
    context4.clearRect(0, 0, canvas.width, canvas.height);
    changeclosed(3);
    
    function changeclosed(x){
        
        var openclosed;
        var theoc;
        var gymn;
        var innerdiv;
        var circ;
        var lin;
        var maximim;
        var attendanc;
        var percent;
        var countt;
        
        if(x == 0){
            openclosed = 'ocone';
            theoc = 'oc1';
            gymn = 'gymname1';
            innerdiv = 'innerfour';
            circ = 'circle';
            lin = 'line1';
            countt = 'counter';
            percent = 'percent1';
            attendanc = 'attend';
            maximim = 'max';
            document.getElementById(theoc).innerHTML= "CLOSED";
        }else if(x == 1){
            openclosed = 'octwo';
            theoc = 'oc2';
            gymn = 'gymname2';
            innerdiv = 'innerthree';
            circ = 'circle2';
            lin = 'line2';
            countt = 'counter2';
            percent = 'percent2';
            attendanc = 'attend2';
            maximim = 'max2';
            document.getElementById(theoc).innerHTML= "CLOSED";
        }else if(x == 2){
            openclosed = 'octhree';
            theoc = 'oc3';
            gymn = 'gymname3';
            innerdiv = 'innertwo';
            circ = 'circle3';
            lin = 'line3';
            countt = 'counter3';
            percent = 'percent3';
            attendanc = 'attend3';
            maximim = 'max3';
            document.getElementById(theoc).innerHTML= "CLOSED";
        }else{
            openclosed = 'ocfour';
            theoc = 'oc4';
            gymn = 'gymname4';
            innerdiv = 'innerone';
            circ = 'circle4';
            lin = 'line4';
            countt = 'counter4';
            percent = 'percent4';
            attendanc = 'attend4';
            maximim = 'max4';
        }
        
        document.getElementById(countt).innerHTML = "";
        document.getElementById(percent).innerHTML= "";
        document.getElementById(attendanc).innerHTML="";
        document.getElementById(maximim).innerHTML="";
        document.getElementById(lin).style.display = "none";
        document.getElementById(circ).style.background = "rgba(102,102,102,0.5)";
        document.getElementById(innerdiv).style.background = "#666666";
        document.getElementById(gymn).style.background = "#666666";
        document.getElementById(gymn).style.color = "#000";
        document.getElementById(openclosed).style.background = "#666666";
        document.getElementById(theoc).style.color = "#000";
        //Uncomment once fitness loft is up and running
        //document.getElementById(theoc).innerHTML= "CLOSED";
    }
    
    function changefull(y){
        
        var openclosed;
        var theoc;
        var gymn;
        var innerdiv;
        var circ;
        var lin;
        var maximim;
        var attendanc;
        var percent;
        var countt;
        
        if(y == 0){
            openclosed = 'ocone';
            theoc = 'oc1';
            gymn = 'gymname1';
            innerdiv = 'innerfour';
            circ = 'circle';
            lin = 'line1';
            countt = 'counter';
            percent = 'percent1';
            attendanc = 'attend';
            maximim = 'max';
        }else if(y == 1){
            openclosed = 'octwo';
            theoc = 'oc2';
            gymn = 'gymname2';
            innerdiv = 'innerthree';
            circ = 'circle2';
            lin = 'line2';
            countt = 'counter2';
            percent = 'percent2';
            attendanc = 'attend2';
            maximim = 'max2';
        }else if(y == 2){
            openclosed = 'octhree';
            theoc = 'oc3';
            gymn = 'gymname3';
            innerdiv = 'innertwo';
            circ = 'circle3';
            lin = 'line3';
            countt = 'counter3';
            percent = 'percent3';
            attendanc = 'attend3';
            maximim = 'max3';
        }else{
            openclosed = 'ocfour';
            theoc = 'oc4';
            gymn = 'gymname4';
            innerdiv = 'innerone';
            circ = 'circle4';
            lin = 'line4';
            countt = 'counter4';
            percent = 'percent4';
            attendanc = 'attend4';
            maximim = 'max4';
        }
        
        document.getElementById(gymn).style.background = "#0066ff";
        document.getElementById(gymn).style.color = "#fff";
        document.getElementById(openclosed).style.background = "#0066ff";
        document.getElementById(theoc).style.color = "#fff";
        document.getElementById(circ).style.background = "rgba(0,102,255,0.5)";
        document.getElementById(lin).style.display = "block";
        document.getElementById(lin).style.background = "#fff";
        document.getElementById(theoc).innerHTML= "FULL";
        document.getElementById(innerdiv).style.background = "#000";
        document.getElementById(innerdiv).style.color = "#fff";
    }
    
    function changeopen(z) {
        
        var openclosed;
        var theoc;
        var gymn;
        var innerdiv;
        var circ;
        var lin;
        var maximim;
        var attendanc;
        var percent;
        var countt;
        
        if(z == 0){
            openclosed = 'ocone';
            theoc = 'oc1';
            gymn = 'gymname1';
            innerdiv = 'innerfour';
            circ = 'circle';
            lin = 'line1';
            countt = 'counter';
            percent = 'percent1';
            attendanc = 'attend';
            maximim = 'max';
        }else if(z == 1){
            openclosed = 'octwo';
            theoc = 'oc2';
            gymn = 'gymname2';
            innerdiv = 'innerthree';
            circ = 'circle2';
            lin = 'line2';
            countt = 'counter2';
            percent = 'percent2';
            attendanc = 'attend2';
            maximim = 'max2';
        }else if(z == 2){
            openclosed = 'octhree';
            theoc = 'oc3';
            gymn = 'gymname3';
            innerdiv = 'innertwo';
            circ = 'circle3';
            lin = 'line3';
            countt = 'counter3';
            percent = 'percent3';
            attendanc = 'attend3';
            maximim = 'max3';
        }else{
            openclosed = 'ocfour';
            theoc = 'oc4';
            gymn = 'gymname4';
            innerdiv = 'innerone';
            circ = 'circle4';
            lin = 'line4';
            countt = 'counter4';
            percent = 'percent4';
            attendanc = 'attend4';
            maximim = 'max4';
        }
        
        document.getElementById(gymn).style.background = "#fff";
        document.getElementById(gymn).style.color = "#000";
        document.getElementById(openclosed).style.background = "#fff";
        document.getElementById(theoc).style.color = "green";
        document.getElementById(circ).style.background = "rgba(255,255,255,0.5)";
        document.getElementById(lin).style.background = "#000";
        document.getElementById(lin).style.display = "block";
        document.getElementById(innerdiv).style.background = "#fff";
        document.getElementById(innerdiv).style.color = "#000";
        document.getElementById(theoc).innerHTML= "OPEN";
    }

}


/*-------------------------------------------------------------
 Code that makes the animations of the four circles
 --------------------------------------------------------------*/
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


context.lineWidth = circlelinewidth;
context.strokeStyle = '#0066ff';
context2.lineWidth = circlelinewidth;
context2.strokeStyle = '#0066ff';
context3.lineWidth = circlelinewidth;
context3.strokeStyle = '#0066ff';
context4.lineWidth = circlelinewidth;
context4.strokeStyle = '#0066ff';

//code to animate first circle
 function animate(current) {
     //context.clearRect(0, 0, context.width, context.height);
     context.beginPath();
     context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
     context.stroke();
     if (curPerc1 < (endPercent -1)) {
         requestAnimationFrame(function () {
            animate(curPerc1 / 100)
            curPerc1++;
         });
     }
     
 }

//code to animate second circle
function animate2(current) {
    //context2.clearRect(0, 0, context2.width, context2.height);
    context2.beginPath();
    context2.arc(x2, y, radius, -(quart), ((circ) * current) - quart, false);
    context2.stroke();
    curPerc2++;
    if (curPerc2 < endPercent1) {
        requestAnimationFrame(function () {
                              animate2(curPerc2 / 100)
                              });
    }
}

//Code to animate third circle
function animate3(current) {
    //context3.clearRect(0, 0, context3.width, context3.height);
    context3.beginPath();
    context3.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
    context3.stroke();
    curPerc3++;
    if (curPerc3 < endPercent2) {
        requestAnimationFrame(function () {
                              animate3(curPerc3 / 100)
                              });
    }
}

//code to animate fourth circle
function animate4(current) {
    //context4.clearRect( 0 , 0 , context4.width , context4.height );
    context4.beginPath();
    context4.arc(x2, y, radius, -(quart), ((circ) * current) - quart, false);
    context4.stroke();
    curPerc4++;
    
    if (curPerc4 < endPercent3) {
        requestAnimationFrame(function () {
                              animate4(curPerc4 / 100)
                              });
    }
}


/*----------------------------------------------------------
 Code that draws a stationary circle behind each of the animations
 ----------------------------------------------------------*/
 var circcanvas = document.getElementById('myCanvas2');
 var circcanvas2 = document.getElementById('myCanvas4');
 var circcanvas3 = document.getElementById('myCanvas6');
 var circcanvas4 = document.getElementById('myCanvas8');

var circcontext = circcanvas.getContext('2d');
var circcontext2 = circcanvas2.getContext('2d');
var circcontext3 = circcanvas3.getContext('2d');
var circcontext4 = circcanvas4.getContext('2d');

var centerX2 = containerwidth / 2 - 3;
var centerX22 = containerwidth / 2 - 2;

if ( $(window).width() == 480 || $(window).height() == 480 ) {
    var radius2 = containerwidth / 2.75;// iphone 4
    
    enhanceContext(circcanvas, circcontext);
    enhanceContext(circcanvas2, circcontext2);
    enhanceContext(circcanvas3, circcontext3);
    enhanceContext(circcanvas4, circcontext4);
    
    var centerY2 = y = (containerheight / 2) - ((radius2 / 2) + 5);
}else if ( $(window).width() == 568 || $(window).height() == 568 ) {
    var radius2 = containerwidth / 2.5;// iphone 5
    
    enhanceContext(circcanvas, circcontext);
    enhanceContext(circcanvas2, circcontext2);
    enhanceContext(circcanvas3, circcontext3);
    enhanceContext(circcanvas4, circcontext4);
    
    var centerY2 = y = (containerheight / 2) - ((radius2 / 2) + 5);
}else{
    
    enhanceContext2(circcanvas, circcontext);
    enhanceContext2(circcanvas2, circcontext2);
    enhanceContext2(circcanvas3, circcontext3);
    enhanceContext2(circcanvas4, circcontext4);
    
    var radius2 = containerwidth / 5.75;// ipad
    var centerY2 = y = (containerheight / 3.75) - ((radius2 / 2) + 10);
    circcanvas.style.width = "360px";
    circcanvas.style.height = "360px";
    circcanvas2.style.width = "360px";
    circcanvas2.style.height = "360px";
    circcanvas3.style.width = "360px";
    circcanvas3.style.height = "360px";
    circcanvas4.style.width = "360px";
    circcanvas4.style.height = "360px";
    centerX2 = containerwidth / 4 - 3;
    centerX22 = containerwidth / 4 - 2;
}

/*
var x = containerwidth / 2;
var radius = containerwidth / 2.25;
var y = (containerheight / 2) - (radius / 2);
*/
 
//draws stationary circle behind first wheel
circcontext.beginPath();
circcontext.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
circcontext.fillStyle = 'rgba(200,200,200,0.5)';
circcontext.fill();
circcontext.lineWidth = 12;
circcontext.strokeStyle = '#000066';
circcontext.stroke();

//draws stationary circle behind second wheel
circcontext2.beginPath();
circcontext2.arc(centerX22, centerY2, radius2, 0, 2 * Math.PI, false);
circcontext2.fillStyle = 'rgba(200,200,200,0.5)';
circcontext2.fill();
circcontext2.lineWidth = 12;
circcontext2.strokeStyle = '#000066';
circcontext2.stroke();

//draws stationary circle behind third wheel
circcontext3.beginPath();
circcontext3.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
circcontext3.fillStyle = 'rgba(200,200,200,0.5)';
circcontext3.fill();
circcontext3.lineWidth = 12;
circcontext3.strokeStyle = '#000066';
circcontext3.stroke();

//draws stationary circle behind fourth wheel
circcontext4.beginPath();
circcontext4.arc(centerX22, centerY2, radius2, 0, 2 * Math.PI, false);
circcontext4.fillStyle = 'rgba(200,200,200,0.5)';
circcontext4.fill();
circcontext4.lineWidth = 12;
circcontext4.strokeStyle = '#000066';
circcontext4.stroke();


/*-------------------------------------------------------------------
 Code that counts up to the current percentage full
 ------------------------------------------------------------------
//Starts the timer for the first percentage
function count()
{
  
	var el = document.getElementById('counter');
	var currentNumber =parseFloat(el.innerHTML);
	
        if(currentNumber < endPercent){
            el.innerHTML = currentNumber+1;
            requestAnimationFrame(count);
        }
    
}

//Starts the timer for the second percentage
function count2()
{
	var el = document.getElementById('counter2');
	var currentNumber =parseFloat(el.innerHTML);
	
    if(currentNumber < endPercent1){
        el.innerHTML = currentNumber+1;
        requestAnimationFrame(count2);
     }

}

//Starts the timer for the third percentage
function count3()
{
    var el = document.getElementById('counter3');
	var currentNumber =parseFloat(el.innerHTML);
	
    if(currentNumber < endPercent2){
        el.innerHTML = currentNumber+1;
        requestAnimationFrame(count3);
    }
    
    /*
	var el = document.getElementById('counter3');
	var currentNumber =parseFloat(el.innerHTML);
	
    if(currentNumber < endPercent2){
        el.innerHTML = currentNumber+1;
     }
 
}

//Starts the timer for the fourth percentage
function count4()
{
	var el = document.getElementById('counter4');
	var currentNumber =parseFloat(el.innerHTML);
	
    if(currentNumber < endPercent3){
        el.innerHTML = currentNumber+1;
        requestAnimationFrame(count4);
     }
}
 
 */

function changeday(x) {
    
    var d = new Date();
    var numberdate = d.getDate();
    var month = d.getMonth();
    var realmonth = month + 1;
    var year = d.getFullYear();
    var todaysdate;
    
    var monthmax
    
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        monthmax = 31;
    }else{
        monthmax = 30
    }
    
    if(x == 0){
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(0);
        
        document.getElementById("today").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 1){
        numberdate = numberdate + 1;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(1);
        
        document.getElementById("day1").style.background = "rgba(0,102,255,1)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 2){
        numberdate = numberdate + 2;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(2);
        
        document.getElementById("day2").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 12){
        numberdate = numberdate + 3;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(3);
        
        document.getElementById("day3").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 4){
        numberdate = numberdate + 4;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(4);
        
        document.getElementById("day4").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 5){
        numberdate = numberdate + 5;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(5);
        
        document.getElementById("day5").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        document.getElementById("day6").style.background = "rgba(0,102,255,0)";
        
    }else if(x == 6){
        numberdate = numberdate + 6;
        
        if(numberdate > monthmax){
            numberdate = numberdate - monthmax;
            realmonth = realmonth + 1;
        }
        
        todaysdate = realmonth + "/" + numberdate + "/" + year;
        document.getElementById("date").innerHTML = todaysdate;
        redrawchart(6);
        
        document.getElementById("day6").style.background = "rgba(0,102,255,1)";
        document.getElementById("day1").style.background = "rgba(0,102,255,0)";
        document.getElementById("day2").style.background = "rgba(0,102,255,0)";
        document.getElementById("day3").style.background = "rgba(0,102,255,0)";
        document.getElementById("day4").style.background = "rgba(0,102,255,0)";
        document.getElementById("day5").style.background = "rgba(0,102,255,0)";
        document.getElementById("today").style.background = "rgba(0,102,255,0)";
        
    }
}

//Function that calls the correct array for the chart. The arrays are made on the socket connection.

function redrawchart(x){
    
    var realarray = [];
    
    if(x == 0){
        realarray = array1;
        
    }else if(x == 1){
        realarray = array2;
    }else if(x == 2){
        realarray = array3;
    }else if(x == 3){
        realarray = array4;
    }else if(x == 4){
        realarray = array5;
    }else if(x == 5){
        realarray = array6;
    }else if(x == 6){
        realarray = array7;
    }
    
    
    
    for (i=0;i<288;i++) {
        var attend = realarray[i];
        
        percentday(i,function(predictedtime){
                   predictaray[i]=[predictedtime,attend];
                   });
    }
    drawchart(predictaray);
}

//function that sets the value of the time div
function percentday(incriment,callback){
    var hoursraw = incriment / 12;
    var hours = ~~(hoursraw);
    var decimal = hoursraw - hours;
    var min = Math.round(60 * decimal);
    var ampm;
    
    if (min >= 0 && min < 10) {
        min = "0" + min;
        document.getElementById("min").innerHTML = min;
    }else{
        document.getElementById("min").innerHTML = min;
    }
    
    if(hours == 0){
        hours = 12;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("ampm").innerHTML = "AM";
        ampm = "AM";
    }else if(hours == 12){
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("ampm").innerHTML = "PM";
        ampm = "PM";
    }
    else if(hours>12){
        hours = hours - 12;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("ampm").innerHTML = "PM";
        ampm = "PM";
    }
    else{
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("ampm").innerHTML = "AM";
        ampm = "AM";
    }
    
    callback(hours + ":" + min + ampm);
}


function drawchart(line1){
    
    var plot2 = $.jqplot('chart1', [line1], {
                         
                         //don't show markers on the chart
                         seriesDefaults: {
                         markerOptions:{show: false}},
                         shadow: false,
                         grid:{shadow:false,drawBorder: false,
                         background: 'rgba(0,0,0,0)',
                         gridLineColor: 'rgba(255,255,255,0)',
                         borderColor: 'rgba(255,255,255,0)'},
                         gridPadding : {
                         bottom : chartpaddingbottom,
                         left:chartpaddingleft,
                         top: chartpaddingtop,
                         },
        
                         axes:{
                         //x2axis puts it on top of the graph
                         xaxis: {
                         renderer:$.jqplot.DateAxisRenderer,
                         tickOptions:{
                         showGridline: false,
                         formatString:'%#I %p',  //%b-month, %#d-date, %#I-time, %p - am/pm
                         fontSize:chartxaxisfont,
                         fontFamily:'\"HelveticaNeue-Light\",\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif',
                         textColor: 'rgba(255,255,255,0.5)'},
                         min:'12:00 AM',
                         tickInterval:'14400',
                         numberTicks: 7
                         
                         },yaxis:{
                         min:0,
                         max:graphmax,
                         showTicks : false,
                         tickOptions: {
                         showGridline: false,
                         fontSize:'0.6em',
                         fontFamily:'\"HelveticaNeue-Light\",\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif',
                         textColor: 'rgba(255,255,255,0.5)'
                         }
                         }
                         },
                         series:[{xaxis:'xaxis',lineWidth:2, color:"#fff",shadow:false, markerOptions:{style:'square'}}]
                         }).replot();
};


$("#linediv").on('touchstart',function(){
                 var x = event.touches[0].pageX;
                 var percent = (x / $("#line").parent().width() * 100)- chartcomp;
                 var timepercent = percent - 10;
                 
                 var string2 = percent + "%";
                 var string4 = timepercent + "%";
                 
                 document.getElementById("line").style.marginLeft=string2;
                 document.getElementById("time").style.marginLeft=string4;
                 var increments = Math.round(percent / 0.34722222222);
                 var pattend = predictaray[increments][1];
                 if(pattend != 0){
                 //This is the predictor attendance at said spot!
                 document.getElementById("predictedattend").innerHTML=pattend;
                var fullpercent = Math.round((predictaray[increments][1] / graphmax)*100);
                 document.getElementById("percentage").innerHTML=fullpercent;
                 document.getElementById("percent69").innerHTML="%";
                 document.getElementById("slash").innerHTML="/";
                 document.getElementById("maximumattend").innerHTML=graphmax;
                 } else {
                 document.getElementById("predictedattend").innerHTML="Available";
                 document.getElementById("percent69").innerHTML="";
                 document.getElementById("percentage").innerHTML="No Data";
                 document.getElementById("slash").innerHTML="";
                 document.getElementById("maximumattend").innerHTML="";
                 }
                 percentday(increments);
                 });

$("#linediv").on('touchmove',function(){
                 var x = event.touches[0].pageX;
                 var percent = (x / $("#line").parent().width() * 100) - chartcomp;
                 
                 if(percent <= 100 && percent >= 0){
                 
                 var string2 = percent + "%";
                 var timepercent = percent - 10;
                 
                 var string2 = percent + "%";
                 var string4 = timepercent + "%";
                 
                 document.getElementById("line").style.marginLeft=string2;
                 document.getElementById("time").style.marginLeft=string4;
                 var increments = Math.round(percent / 0.34722222222);
                 
                 var pattend = predictaray[increments][1];
                 
                 if(pattend != 0){
                 //This is the predictor attendance at said spot!
                 document.getElementById("predictedattend").innerHTML=pattend;
                 var fullpercent = Math.round((predictaray[increments][1] / graphmax)*100);
                 document.getElementById("percentage").innerHTML=fullpercent;
                 document.getElementById("percent69").innerHTML="%";
                 document.getElementById("slash").innerHTML="/";
                 document.getElementById("maximumattend").innerHTML=graphmax;
                 } else {
                 document.getElementById("predictedattend").innerHTML="Available";
                 document.getElementById("percent69").innerHTML="";
                 document.getElementById("percentage").innerHTML="No Data";
                 document.getElementById("slash").innerHTML="";
                 document.getElementById("maximumattend").innerHTML="";
                 }
                 
                 percentday(increments);
                 
                 }
                 
                 });

function backtoone(){
    var link = document.getElementById("onerev");
    link.click();
    pullDownAction();
    
    setTimeout(function(){
               
               document.getElementById("contactcontent").style.display="none";
               document.getElementById("predictorcontent").style.display="none";},500)
}

function menu(){
    $('.menuslide').animate({'left':'0px'},200);
}

function contactus() {
    
    if ( $(window).width() == 480 || $(window).height() == 480 ) {
    }
    else {
        document.getElementById("middlecenter").style.marginTop = "37px";// iphone 5
    }
    
    document.getElementById("contactcontent").style.display="";
    document.getElementById("three").click();
    $('.menuslide').animate({'left':'-100%'},200);
}

function menuback() {
    $('.menuslide').animate({'left':'-100%'},200);
}

// Below is code for the predictor  ///
function setdays(){
    
    var d = new Date();
    var month = d.getMonth();
    var realmonth = month + 1;
    var numberdate = d.getDate();
    var year = d.getFullYear();
    
    var n = d.getDay();
    
    changeday(0);
    
    var tod;
    var dayone;
    var daytwo;
    var daythree;
    var dayfour;
    var dayfive;
    var daysix;
    
    switch (n)
    {
        case 0:
            tod = "Su";
            dayone = "M";
            daytwo = "Tu";
            daythree = "W";
            dayfour = "Tr";
            dayfive = "F";
            daysix = "S";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 1:
            tod = "M";
            dayone = "Tu";
            daytwo = "W";
            daythree = "Tr";
            dayfour = "F";
            dayfive = "S";
            daysix = "Su";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 2:
            tod = "Tu";
            dayone = "W";
            daytwo = "Tr";
            daythree = "F";
            dayfour = "S";
            dayfive = "Su";
            daysix = "M";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 3:
            tod = "W";
            dayone = "Tr";
            daytwo = "F";
            daythree = "S";
            dayfour = "Su";
            dayfive = "M";
            daysix = "Tu";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 4:
            tod = "Tr";
            dayone = "F";
            daytwo = "S";
            daythree = "Su";
            dayfour = "M";
            dayfive = "Tu";
            daysix = "W";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 5:
            tod = "F";
            dayone = "S";
            daytwo = "Su";
            daythree = "M";
            dayfour = "Tu";
            dayfive = "W";
            daysix = "Tr";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
            
        case 6:
            tod = "S";
            dayone = "Su";
            daytwo = "M";
            daythree = "T";
            dayfour = "W";
            dayfive = "Tr";
            daysix = "F";
            makedays(tod, dayone, daytwo, daythree, dayfour, dayfive, daysix);
            break;
    }
    
}

function makedays(today, one, two, three, four, five, six){
    document.getElementById("today").innerHTML = today;
    document.getElementById("day1").innerHTML = one;
    document.getElementById("day2").innerHTML = two;
    document.getElementById("day3").innerHTML = three;
    document.getElementById("day4").innerHTML = four;
    document.getElementById("day5").innerHTML = five;
    document.getElementById("day6").innerHTML = six;
}

function predictor(x) {
    
    var mylink = document.getElementById("two");
    document.getElementById("predictorcontent").style.display="";
    
    switch(x){
        case 0:
            document.getElementById("name").style.marginLeft = "95px";
            document.getElementById("innerfour").style.backgroundColor = "rgba(255,255,255,0.5)";
            mylink.click();
            document.getElementById("name").innerHTML = "Rec Hall";
            document.getElementById("maximumattend").innerHTML = "240";
            graphmax = 240;
            socket.emit('predictor',1);
            break;
            
        case 1:
            document.getElementById("name").style.marginLeft = "63px";
            document.getElementById("innerthree").style.backgroundColor = "rgba(255,255,255,0.5)";
            mylink.click();
            document.getElementById("name").innerHTML = "White Building";
            document.getElementById("maximumattend").innerHTML = "210";
            graphmax = 210;
            socket.emit('predictor',2);
            break;
            
        case 2:
            document.getElementById("name").style.marginLeft = "80px";
            document.getElementById("innertwo").style.backgroundColor = "rgba(255,255,255,0.5)";
            mylink.click();
            document.getElementById("name").innerHTML = "IM Building";
            document.getElementById("maximumattend").innerHTML = "60";
            graphmax = 60;
            socket.emit('predictor',3);
            break;
            
        case 3:
            document.getElementById("name").style.marginLeft = "77px";
            document.getElementById("innerone").style.backgroundColor = "rgba(255,255,255,0.5)";
            mylink.click();
            document.getElementById("name").innerHTML = "Fitness Loft";
            document.getElementById("maximumattend").innerHTML = "40";
            graphmax = 40;
            socket.emit('predictor',4);
            break;
    }
    setdays();
}

var predictaray = [];
var newarray = [];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];

var myScroll,
pullDownEl,
pullDownOffset,
generatedCount = 0;

function pullDownAction () {
    //setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
    
    emittosocket();
    
    myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
    // }, 2000);	// <-- Simulate network congestion, remove setTimeout from production!
}

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    
    //inside the purple apostrophies is the name of the div that would get pulled down
    myScroll = new iScroll('ultimatewrapper', {
                           useTransition: true,
                           topOffset: pullDownOffset,
                           onRefresh: function () {
                           if (pullDownEl.className.match('loading')) {
                           pullDownEl.className = '';
                           pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                           }
                           },
                           onScrollMove: function () {
                           if (this.y > 5 && !pullDownEl.className.match('flip')) {
                           pullDownEl.className = 'flip';
                           pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                           this.minScrollY = 0;
                           } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                           pullDownEl.className = '';
                           pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                           this.minScrollY = -pullDownOffset;
                           }
                           },
                           onScrollEnd: function () {
                           if (pullDownEl.className.match('flip')) {
                           pullDownEl.className = 'loading';
                           pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                           
                           //This is the custom function that happens on the pull down to refresh.
                           pullDownAction();	// Execute custom function (ajax call?)
                           }
                           }
                           });
    
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { loaded(); }, false);


var whiteat;
var whitewait;
var recat;
var recwait;
var imat;
var imwait;
var fitat;
var fitwait;

var graphmax;
