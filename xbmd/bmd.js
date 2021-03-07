var weight, height, age, gender, tscore, tuoi;
var BMI, range;
var page = 1;
weight = 50;
age = 50;

$(".weightMinus").click(function(){
    weight--;
    $(".weightNum").text(weight);
})

$(".weightPlus").click(function(){
    weight++;
    $(".weightNum").text(weight);
})

$(".ageMinus").click(function(){
    age--;
    $(".ageNum").text(age);
})

$(".agePlus").click(function(){
    age++;
    $(".ageNum").text(age);
})

var swo = [0.99993, 0.99977, 0.99935, 0.99916, 0.99887, 0.99864, 0.99847, 0.99823, 0.99812, 0.99785, 0.99757, 0.99711, 0.99661, 0.99605, 0.99531];
var smen = [0.99993, 0.99998, 0.99995, 0.99993, 0.99991, 0.99989, 0.99987, 0.99984, 0.99981, 0.99979, 0.99976, 0.99974, 0.99969, 0.99957, 0.99947]
var s0



$(".male").click(function(){
    gender = 'male';
    s0 = smen
    $(".male").addClass("genderClicked");
    $(".female").removeClass("genderClicked");
})

$(".female").click(function(){
    gender = 'female';
    s0 = swo
    $(".female").addClass("genderClicked");
    $(".male").removeClass("genderClicked");
})


    

$(".calculateBtn").click(function(){
    if (gender==null || gender=="")
      {
      alert("Please select Gender for calculation");
      return false;
      }

    if(page==1){
        height = $(".heightInput").val();
        $(".screen_2").css("left","0%");
        $(".screen_1").css("right","100%");
        BMI = weight/((height/100)*(height/100));
        BMI = Math.round(BMI*10)/10

        tscore = $(".tscoreInput").val();
        age = $(".tuoiInput").val();
        var risk_wo =((1 - Math.pow(0.99993, Math.exp(0.0662*age - 0.4877*tscore)))*1).toFixed(2);

        console.log('call function success!');
        console.log('call function success!', tscore, age, risk_wo);
        var s1 = s0.values();
        var risk_array=[]
        for (let elements of s1) {
                //console.log(elements);};
                risk_array.push(((1 - Math.pow(elements, Math.exp(0.0662*age - 0.4877*tscore)))*1).toFixed(2)); }

        for(var i=0, l=risk_array.length; i<l; i++){
          if(risk_array[i] > 0.20){
            var result_risk = risk_array[i];
            break;
          }
        }
        i=i+1
        if (typeof result_risk == 'undefined') {result_risk = risk_array[14]; i=15}

        console.log(risk_array)
        console.log("year "+ (i));
        console.log(result_risk);



    if(i>10){
        range = 'Underweight';
        $(".resultRange").css("color","#32DC7C");
        $(".suggestion").text("You have low risk. Enjoy your life！");
    }else if(i<2){
        range = 'Overweight';
        $(".resultRange").css("color","#E5235A");
        $(".suggestion").text("You have high risk. Be careful！");
    }else{
        range = 'Normal';
        $(".resultRange").css("color","#32DC7C");
        $(".suggestion").text("You have a normal risk. Keep yourself healthy!");
    }

    $(".resultRange").text(range);
    $(".resultRange").text("Risk: "+ Math.round(result_risk*100) + "%");
        
        $(".resultBMI").text(BMI);
        $(".resultBMI").text("Next "+ i +" Years");
        $(".calculateBtn").text("RE-CALCULATE YOUR NEXT MEASUREMENT");
        page = 2;
    }else{
        $(".screen_2").css("left","100%");
        $(".screen_1").css("right","0%");
        $(".calculateBtn").text("CALCULATE YOUR NEXT MEASUREMENT");
        page = 1;
    }
})




