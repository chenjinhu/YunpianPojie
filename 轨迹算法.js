function getPoints(x) {

    var s = 65;
    var text = "[65,285,48]"
    var time = 48;
    while (s < x) {
        s = RandomNum(5, 20) + s;
        yy = RandomNum(285, 260);
        time = time + RandomNum(5, 20);
        text = text + ",[" + s + "," + yy + "," + time + "]"

    }
    return text;
}

function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range);
    return num;
}