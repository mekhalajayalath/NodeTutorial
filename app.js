/**
 * Created by mekhala on 12/3/15.
 */

var mekhala = {
    checkThis: function () {
        console.log(this === mekhala)
    }
};

mekhala.checkThis(); // this refers to whtever calling the func

function doSomething(){
    console.log(this === global);
}

doSomething();