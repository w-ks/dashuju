window.onload = function() {
    var bt = document.getElementById("mytx")

    bt.onkeydown = function() {
        if (bt.keycode == 13) {
            alert('回车')
        }
    }

}