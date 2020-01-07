document.addEventListener("DOMContentLoaded", () => {

    
    setInterval(function(){
        increment_by_some_number(1)
    }, 1500);

    let plus = document.getElementById("plus");
    plus.addEventListener("click",function(event){
        increment_by_some_number(1);
    });

    let minus = document.getElementById("minus");
    minus.addEventListener("click",function(event){
        increment_by_some_number(-1);
    });

    let like_button = document.getElementById("heart");
    like_button.addEventListener("click",function(event){
        add_a_like_statement();
    });

    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click",function(event){
        pauseButtonActions(event.target.id)
    })
  
  });

  function pauseButtonActions(eventId){
      let buttonToChange = document.getElementById(eventId)
      buttonToChange.innerText = "resume"
      //TODO: Pause the counter
      let counter = document.getElementById("counter");

      //Disable all buttons except the resume button
      let allButtons = document.querySelectorAll("button")
      allButtons.forEach(btn => btn.disabled = true)
      buttonToChange.disabled = false
  }

  function increment_by_some_number(number){
    let counter = document.getElementById("counter");
    let temp = parseInt(counter.innerText);
    counter.innerText = temp + number
  };

  function add_a_like_statement(){
    let counter = document.getElementById("counter");
    // let current_second = parseInt(counter.innerText);
    let current_second = counter.innerText;

    //NEW LI CREATION
    target_li = document.getElementById(current_second);
    // debugger;
    if (target_li != null){
        //TODO: update process
        target_li.value +=1
        target_li.innerText = `${current_second} has been liked ${target_li.value} timeSSS`
    }
    else { 
        //TODO: new process
    let new_li = document.createElement('li');
    new_li.id = current_second;
    new_li.value = 1;
    new_li.innerText = `${current_second} has been liked ${new_li.value} time`
    document.getElementsByClassName("likes")[0].appendChild(new_li);
    }

  }



//   3 has been liked 1 time