function loadForm(data) {
    select = document.getElementById("filter")
    set = []
    for (var i = 0; i < data.length; i++) {

        for (var j = 0; j < data[i].genre.length; j++) {
            var curr = data[i].genre[j];
            if (!contains(set, curr)) {
                elem = document.createElement("option");
                elem.setAttribute("value", curr);
                elem.innerHTML = curr;
                select.appendChild(elem);
                set.push(curr)
            }
        }
    }
}

function handleForm(form) {
    filter = form.filter.value;
    showJSON(filter)
}

function getGenres() {

    showJSON("")
    loadForm(JSON.parse(songs))
}

function showJSON(filter) {
    appendData(JSON.parse(songs), filter)
}

function appendData(data, filter) {
    console.log(filter)
    var mainContainer = document.getElementById("output");
    mainContainer.innerHTML = "";
    for (var i = 0; i < data.length; i++) {

        if (contains(data[i].genre, filter) || filter == "") {
            var div = document.createElement("div");
            div.className = "song";
            div.innerHTML = "Title: " + data[i].title + "<br>Artist: " + data[i].artist + "<br>Genre " + arrStr(data[i].genre) + "<br>Year: " + data[i].year;
            mainContainer.appendChild(div);
        }
    }
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}

function arrStr(arr) {
    out = arr[0];
    for (var i = 1; i < arr.length; i++) {
        out += ", " + arr[i];
    }
    return out;
}