
var navbar = [0,0,0]

function beans(a){
    console.log(a)
    if(a == "item1"){
        if(navbar[0]==0){
        navbar[0]++
        document.getElementById('safe').style.visibility = "visible";document.getElementById('AI').style.visibility = "hidden";document.getElementById('veh').style.visibility = "hidden"

        document.getElementById('safe').style.height = "350px";document.getElementById('AI').style.height = "0px";document.getElementById('veh').style.height= "0px"
        }
        else{
            navbar[0] = 0
            document.getElementById('safe').style.visibility = "hidden";
            document.getElementById('safe').style.height = "0px"
        }
    }
    else if(a == "item2"){
        if(navbar[1]==0){
        navbar = [0,1,0]
        document.getElementById('AI').style.visibility = "visible";document.getElementById('safe').style.visibility = "hidden";document.getElementById('veh').style.visibility = "hidden";

        document.getElementById('AI').style.height = "350px";document.getElementById('safe').style.height = "0px";document.getElementById('veh').style.height= "0px";
        }
        else{
            navbar[1] = 0;
            document.getElementById('AI').style.visibility = "hidden";
            document.getElementById('AI').style.height = "0px"
        }


    }
    else if (a == "item3"){
        if(navbar[2]==0){
        navbar = [0,0,1]
        document.getElementById('veh').style.visibility = "visible";document.getElementById('safe').style.visibility = "hidden";document.getElementById('AI').style.visibility = "hidden";

        document.getElementById('veh').style.height = "350px";document.getElementById('safe').style.height = "0px";document.getElementById('AI').style.height= "0px";
        }
        else{
            navbar[2] = 0
            document.getElementById('veh').style.visibility = "hidden";
            document.getElementById('veh').style.height = "0px";
        }

    }


}