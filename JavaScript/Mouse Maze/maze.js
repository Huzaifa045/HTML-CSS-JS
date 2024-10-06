// Mouse Maze Game 

let isStart = false;
let isInMap = false;

// When Page is Loaded
window.onload = function () {
    let wall = document.getElementsByClassName("wall");
    
    // start
    document.getElementById("start").addEventListener("mouseover", start)
    
    function start () {
        document.getElementById("result").innerHTML = "";
        isStart = true;
        isInMap = true;
        for (let i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "white"; }

    }

    // out of the map 
    document.getElementById("wholeMaze").addEventListener("mouseleave", function () {
        isInMap = false;
    });
    
    // wall
    for (let i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseover", function (event) {
            if (isStart) {
                console.log(event);
                event.target.style.backgroundColor = "red";
                document.getElementById("result").innerHTML = "You hit the wall, lost the game!";
                isStart = false;
            }
        });
    for (let i = 0; i < wall.length; i++)
        wall[i].addEventListener("mouseleave", function (event) {
            event.target.style.backgroundColor = "red";
        });
    // end 

    document.getElementById("end").addEventListener("mouseover", end)
     function end () {
        if (isStart) {
            if (isInMap) { document.getElementById("result").innerHTML = "Congratulations! You won the game!"; }
            else {
                document.getElementById("result").innerHTML = "Oh, my friend, please don't cheat!";
                isStart = false;
            }
        }
        isStart = false;
    };
}    