const input = document.getElementById("input");
    input.addEventListener('keyup', function(event) {
        const text = input.value;
        const length = text.length;
        document.getElementById("word").innerHTML = length;


        var space = text.split(" ");
        var charlength = space.length;
        document.getElementById("character").innerHTML = charlength;

    });