let crystalGame = {
    wins:0,
    count:0,
    losses:0,
    score:0,
    crystals:[{image:"1.png",name:"ruby", value:0},
            {image:"2.png", name:"diamond", value:0}, 
            {image:"3.png", name:"saphire", value:0}, 
            {image:"4.png", name:"onyx", value:0}],
    randomize: function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return ranNum;
    },
    randomNum: 0,
    start: function(){
        document.getElementById("list").innerHTML = "";
        document.getElementById("winsLosses").innerHTML = `Wins: ${this.wins}<br>Losses: ${this.losses}`;
        for(let i = 0; i < this.crystals.length; i++){
            let currentCrystal = this.crystals[i];
            currentCrystal.value = this.randomize(1,12);
            let newDiv = `<div id = "${currentCrystal.name}" class="crystals"><img src="assets/images/${currentCrystal.image}"></div>`
            document.getElementById("list").innerHTML += newDiv;
        }
        let arrCrystals = document.getElementsByClassName("crystals");
        for(let i = 0;i < arrCrystals.length; i++){
            let obj = `${arrCrystals[i].id}`;
            document.getElementById(`${arrCrystals[i].id}`).addEventListener("click", function(){this.addMore(obj)}.bind(this));
        }
        this.randomNum = this.randomize(19,120);
        document.getElementById("random").innerHTML = this.randomNum
    },
    addMore: function(e){
        for(let i = 0; i < this.crystals.length; i++){
            if(e === this.crystals[i].name){
                this.count = this.count + this.crystals[i].value;
                let close = this.randomNum/4;
                close = close * 3;
                document.getElementById("score").innerHTML = this.count;
                if(this.count === this.randomNum){
                    document.getElementById("winsLosses").prepend("You won!");
                    this.wins++
                    this.count = 0;
                    document.getElementById("scoreInfo").classList.remove("close");
                    document.getElementById("score").innerHTML = this.count;
                    this.start();
                }
                else if(this.count >= close){
                    document.getElementById("score").innerHTML = `Getting close!! ${this.count}`;
                    document.getElementById("scoreInfo").classList = "close";
                    if(this.count > this.randomNum){
                        document.getElementById("winsLosses").prepend("You lost!");
                        this.losses++;
                        this.count = 0;
                        document.getElementById("scoreInfo").classList.remove("close");
                        document.getElementById("score").innerHTML = this.count;
                        this.start();
                    }
                }
            }   
         }
    }
}
crystalGame.start();