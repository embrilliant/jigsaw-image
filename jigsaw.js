var boxParts = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// function startedDragging() {
//     console.log(this);
// }

function extractPartID (someElement) {
    var id = someElement.attr('id');
    if (id == "1") {
        return 1;
    }
    if (id == "2") {
        return 2;
    }
    if (id == "3") {
        return 3;
    }
    if (id == "4") {
        return 4;
    }
    if (id == "5") {
        return 5;
    }
    if (id == "6") {
        return 6;
    }
    if (id == "7") {
        return 7;
    }
    if (id == "8") {
        return 8;
    }
    if (id == "9") {
        return 9;
    }
}

function stoppedDragging(e) {
    var self = $(this);
    console.log(e.pageX, e.pageY);

    var partID = extractPartID(self);

    for (var i = 0; i < boxParts.length; i = i + 1) {
        if (boxParts[i]==partID) {
            boxParts[i] = 0;
        }
    }

    if (e.pageX < 300 && e.pageY < 250) {
        console.log("box1");
        if (boxParts[0] == 0) {
            self.offset({
                top: 100,
                left: 100
            });
            boxParts[0] = partID;
        }
    } else if (e.pageX > 300 && e.pageY < 250 && e.pageX < 500) {
        console.log("box2");
        if (boxParts[1] == 0) {
            $(self).offset({
                top: 100,
                left: 300
            });
            boxParts[1] = partID;
        }
    } else if (e.pageX > 500 && e.pageY < 250 && e.pageX < 700) {
        console.log("box3");
        if (boxParts[2] == 0) {
            $(self).offset({
                top: 100,
                left: 500
            });
            boxParts[2] = partID;
        }
    } else if (e.pageX < 300 && e.pageY > 250 && e.pageY < 400) {
        console.log("box4");
        if (boxParts[3] == 0) {
            $(self).offset({
                top: 250,
                left: 100
            });
            boxParts[3] = partID;
        } 
    } else if (e.pageX > 300 && e.pageY > 250 && e.pageX < 500 && e.pageY < 400) {
        console.log("box5");
        if (boxParts[4] == 0) {
            $(self).offset({
                top: 250,
                left: 300
            });
            boxParts[4] = partID;
        } 
    } else if (e.pageX > 500 && e.pageY > 250 && e.pageX < 700 && e.pageY < 400) {
        console.log("box6");
        if (boxParts[5] == 0) {
            $(self).offset({
                top: 250,
                left: 500
            });
            boxParts[5] = partID;
        } 
    } else if (e.pageX < 300 && e.pageY > 400 && e.pageY < 550) {
        console.log("box7");
        if (boxParts[6] == 0) {
            $(self).offset({
                top: 400,
                left: 100
            });
            boxParts[6] = partID;
        } 
    } else if (e.pageX > 300 && e.pageX < 500 && e.pageY > 400 && e.pageY < 550) {
        console.log("box8");
        if (boxParts[7] == 0) {
            $(self).offset({
                top: 400,
                left: 300
            });
            boxParts[7] = partID;
        } 
    } else if (e.pageX > 500 && e.pageY > 400 && e.pageX < 700 && e.pageY < 550) {
        console.log("box9");
        if (boxParts[8] == 0) {
            $(self).offset({
                top: 400,
                left: 500
            });
            boxParts[8] = partID;
        } 
    }

    var solved = true;
    var allFieldsFull = true;
    for (var i = 0; i < 9; i++) {
        if (boxParts[i] != i + 1) {
            solved = false;
        }
        if (boxParts[i] == 0) {
            allFieldsFull = false;
        }
    }
    if (solved) {
        alert("You're smart!");
    } else if (allFieldsFull) {
        // alert("You're stupid.");

    var answer = confirm("You're stupid. Play again?");
    if (answer == true) {
        location.reload();
        }
    }

    console.log(boxParts);
    // 1. Check if drag stops over field.
    //    if not: return
    // 2. Check if that field is empty.
    //    if not: return
    // 3. Snap the part into the empty field.
    // 4. Record that the field is not empty anymore.
}



$(function() {
    $("#1").draggable({
        stop: stoppedDragging
    });
    $("#2").draggable({
        stop: stoppedDragging
    });
    $("#3").draggable({
        stop: stoppedDragging
    });
    $("#4").draggable({
        stop: stoppedDragging
    });
    $("#5").draggable({
        stop: stoppedDragging
    });
    $("#6").draggable({
        stop: stoppedDragging
    });
    $("#7").draggable({
        stop: stoppedDragging
    });
    $("#8").draggable({
        stop: stoppedDragging
    });
    $("#9").draggable({
        stop: stoppedDragging
    });
});

function randomNum(t, l) {
    return {top: ((Math.random()*t) + 1).toFixed(), left: ((Math.random()*l) + 1).toFixed()};
}

// var maxWidth = $(document).width()-640;

$(document).ready(function() {
    //var boxWidth = $("#part1"). ;
    var boxWidth = 200;
    var maxWidth = $(document).width()-boxWidth;
    var boxHeight = 150;
    // var maxWidth = window.innerWidth - boxWidth;
    // var maxHeight = window.innerHeight - boxHeight;
    var maxHeight = $(document).height()-boxHeight;
    $("#1").offset(randomNum(maxHeight, maxWidth));
    $("#2").offset(randomNum(maxHeight, maxWidth));
    $("#3").offset(randomNum(maxHeight, maxWidth));
    $("#4").offset(randomNum(maxHeight, maxWidth));
    $("#5").offset(randomNum(maxHeight, maxWidth));
    $("#6").offset(randomNum(maxHeight, maxWidth));
    $("#7").offset(randomNum(maxHeight, maxWidth));
    $("#8").offset(randomNum(maxHeight, maxWidth));
    $("#9").offset(randomNum(maxHeight, maxWidth));
});