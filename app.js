/**
 * Created by mekhala on 12/3/15.
 */

function user() {
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetedPlayer){
        targetedPlayer.life += 1;
        console.log(this.name + " gave a life to " + targetedPlayer.name);
        console.log(targetedPlayer.name + " has " + targetedPlayer.life + " lives now. ")
    }
}

var mekhala = new user();
var samiyuru = new user();
mekhala.name = "Mekh";
samiyuru.name = "Sam";

samiyuru.giveLife(mekhala);

user.prototype.punch = function punch(targetedPlayer){
    targetedPlayer.life -= 3;
    console.log(this.name + " punched " + targetedPlayer.name);
    console.log(targetedPlayer.name + " has " + targetedPlayer.life + " lives now. ")
}

mekhala.punch(samiyuru);