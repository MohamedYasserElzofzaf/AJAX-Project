function loadData() {
    var $body = $("body");
    var $wikiElem = $("#wikipedia-links");
    var $nytHeaderElem = $("#nytimes-header");
    var $nytElem = $("#nytimes-articles");
    var $greeting = $("#greeting");

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var streetStr = $("#street").val();
    var cityStr = $("#city").val();
    var address = streetStr + ", " + cityStr;

    $greeting.text("so , you want to live at " + address + "?");
    var streetviewUrl =
        "http://maps.googleapis.com/maps/api/streetview?size=600x300&location= " +
        address +
        "";
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');
    // load streetview

    // YOUR CODE GOES HERE!

    return false;
}

$("#form-container").submit(loadData);

// loadData();