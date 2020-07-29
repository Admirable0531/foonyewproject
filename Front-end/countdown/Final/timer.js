//set date for count down
    

    var countDownDate = new Date("Jul 30, 2020 00:00:00").getTime();
    // update the counter down every 1 sec
    var countDownFunction = setInterval(function(){
          // get today date
          var now = new Date().getTime();
          // find distance btw now and countdown Date
          var distance = countDownDate - now ;
          // time calc for days, hours , minutes and seconds
          var days = Math.floor(distance /(1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
          var seconds = Math.floor((distance % (1000 * 60)) / (1000 ));
          //output the result in element timer
          document.getElementById('timer').innerHTML = days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒 ";


          //if the count down is over , write some text
          if(distance < 0) {
            clearInterval(countDownFunction);
            document.getElementById("timer").innerHTML = "Redirect to Xiao Qing Offical Page";
            setTimeout("location.href = 'file:///C:/Users/Admin/Desktop/FYP/Front-end/Registration/index.html';",3000);//拜托给时间过完才进去plsss
                }
           
        
         }, 1000); 


//Reference
//www.w3schools.com/howto/howto_js_countdown.asp
//https://www.youtube.com/watch?v=DpjQAyrx3UY
