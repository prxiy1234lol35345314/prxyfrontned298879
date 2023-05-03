var riddlesbanner = document.getElementById("riddlesbanner");
var num = Math.floor(Math.random() * 10001);
var code = "$options+new%#"+num
var counter = 0






document.getElementById('textbox').addEventListener('keypress', function(e){
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      // Enter pressed
      if (document.getElementById("textbox").value!=''){
        window.top.location.href='http://google.com/search?q='+document.getElementById("textbox").value
    }
    }
}

) 


setInterval(() => {
    const days = ['mon', 'tues', 'wed', 'thurs', 'fri']
    var d = new Date()
    var day = days[d.getDay()-1]
    var minute = d.getMinutes()
    var hour = d.getHours()
    //console.log('Day: '+day)
    //console.log('Hour: '+hour)
    //console.log('Minute: '+minute)
    if(day=='mon'||day=='tues'||day=='wed'||day=='thurs'||day=='fri'){
        if(hour=='9'||hour=='10'||hour=='11'||hour=='13'||hour=='14'){
            document.getElementById('textbox').value='Not avaliable right now.'
            document.getElementById('textbox').disabled=true;
            if(document.getElementById('embed')){
                document.getElementById('embed').remove()
                
            }
            
        }else if(hour=='12'){
            if(minute>29){
                document.getElementById('textbox').value='Not avaliable right now.'
                document.getElementById('textbox').disabled=true;
            if(document.getElementById('embed')){
                document.getElementById('embed').remove()
                
            }
            }
            
        }else if(hour=='15'){
            if(minute<16){
                document.getElementById('textbox').value='Not avaliable right now.'
                document.getElementById('textbox').disabled=true;
            if(document.getElementById('embed')){
                document.getElementById('embed').remove()
                
            }
            }
        }
    }
    
    
    
    
    
    
    
    
}, 1000);



//alert(counter)
function gmailclick(){
    if (counter==0){
        counter = 1;
        //alert(counter);
    }
}
function waffleclick(){
    if (counter==1){
        counter = 2;
        //alert(counter);
    } else if (counter==2){
        counter = 3;
        //alert(counter);
    }
}
function profilepicclick(){
    if (counter==3){
        counter = 4;
        //alert(counter);
    }
}
function termsclick(){
    if (counter==4){
        counter = 5;
        //alert(counter);
    }
}
function micclick(){
    if (counter==5){
        counter = 6;
        //alert(counter);
    } else if (counter==6){
        counter = 7;
        
        alert("ERROR(searchERRcode:"+code+") ERR CD:302 ADMINACCESSDENIED_3242 ERRDASHVALUE:laubfyg4387gfbkahu7gyb3kg#$TAG$TGSAFZDAG$#GASDFE$G$#EWGEWGWGUYBV&#WRGBVG#UGBEG*EBGIEUWBGE*G&@#FGEJBVNGEIRG*VER*(GHERJ?GVBERUIOGVER*GYW#RHGHERGQUERGB*UWGOQRBENQRIOGU*HEQAW&$*GUAHWGFIUH$*WTGRUGIFU)ERRSOLU:contact google support :)")
    }
}
function luckyclick(){
    textvalue = document.getElementById("textbox").value;
    if (textvalue==code & counter==7){
//puzzle done

        var embed = document.createElement('iframe')
        embed.style.border='none'
        embed.style.position='fixed'
        embed.style.height='100%'
        embed.style.width='100%'
        embed.style.bottom='0'
        embed.style.left='0'
        embed.style.zIndex='99'
        embed.id='embed'
        embed.src='https://web-production-e785.up.railway.app'
        document.getElementById('deleteWhenDone').remove()
        document.body.appendChild(embed)
    }
}
var aboutbtn = document.getElementById("about");
function aboutclick(){
    txtval = document.getElementById("textbox");
    if (counter==7){
        txtval.value="3487fg0yvbpqiwupj93jp93uhpr48iuvhnworicoinunban";
        //alert(counter);
    }
}
function adsclick(){
    txtval = document.getElementById("textbox");
    if (counter==7){
        txtval.value="s8347gfbvcqweoiuyvbqw3p8ru4hovi";
        //alert(counter);
    }
}


