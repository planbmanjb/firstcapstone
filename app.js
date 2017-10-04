//This is app.js
//zillow api: X1-ZWz1fzyymt4avf_6jziz
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';


$(document).ready(function () {
    //    $('.js-query').val("");
    // add comments about what the variables will be used for
    var searchText = "";
    var searchTerm = [];
    var resultdata = [];
    //on search all this function (Famous Person)
    $('.js-search-form').submit(function () {
        event.preventDefault();
        $('.youtube-videos').empty();
        var searchText = $('.js-query').val();

        // If input field empty, display error message and hide yahootube and wiki sections
        if (searchText == "") {
            var noResponse = "<p> Please Enter A Famous Person </p>";
            $('.noResponse').show();
            var searchText = "";
            $('.youtube-section').hide();
            $('.wikidata-section').hide();
            // otherwise preform api call with searchText
        } else {

            $('.js-query').val("");

            //  make API call to youtube
            youtubeApiCall(searchText);
        }

    })
})

//function makeApiCall(searchTerm) { 1
function youtubeApiCall(searchTerm) {
    //    API call to youtube with key  and maximum Results = 25
    $.getJSON('https://www.googleapis.com/youtube/v3/search', 'key=AIzaSyCU-EmwvmAiifcdWYalkLlP6yKnTv-8egg&q=' + searchTerm + '&maxResults=25&type=video&part=snippet',
        function (resultdata) {
            $('.youtube-videos').html("");
            console.log(resultdata);
            console.log(resultdata.items.length);
            // search for video results in data object and search for video id. Build iframe and append to youtube video section
            for (i = 0; i < resultdata.items.length; i++) {
                console.log(resultdata.items[0].id.videoId)
                var eachVideoId = resultdata.items[i].id.videoId

                var videoResults = '<iframe class="yahooclass"' + 'src = ' + "https://www.youtube.com/embed/" + eachVideoId + '></iframe>'

                console.log(videoResults);
                $('.youtube-videos').append(videoResults);
                $('.youtube-section').show();
            }
        }
    )
    // make wikipedia api call
    wikiApiCall(searchTerm);
}

//    var calling = searchTerm;
function wikiApiCall(searchTerm) {
    // API call to wikipedia with no key, page images , extract text
    $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|extracts&generator=search&exintro&explaintext&exsentences=1&exlimit=max&gsrlimit=10&callback=?&gsrsearch=" + encodeURIComponent(searchTerm),
            type: "GET",
            dataType: 'jsonp'
        })
        //   callback function to display Wikidata object
        .done(function (Wikidata) {
            var buildTheHtmlOutput = "";
            // looping through the Wikidata.query.pages array, we are using the Wikikey as the index and Wikivalue as the value of the index
            $.each(Wikidata.query.pages, function (Wikikey, Wikivalue) {
                // if the Wikivalue.thumbnail and Wikivalue.title are equal to our searchTerm, then display result
                if (Wikivalue.thumbnail && Wikivalue.title == searchTerm) {
                    // console.log(Wikivalue.title);
                    console.log(Wikivalue.thumbnail.source);
                    // console.log(Wikivalue.extract);
                    console.log(Wikivalue);


                    TheHtmlOutputtitle = "<p>" + Wikivalue.title + "</p>";
                    // Set image equal to TheHtmlOutputpic
                    TheHtmlOutputpic = '<img style = "height: 75px;" ' + 'src="' + Wikivalue.thumbnail.source + '" />';
                    // Set wikipedia text equal to wikivalue.extract
                    TheHtmlOutputextract = "<p>" + Wikivalue.extract + "</p>";
                } else {}
            })
            // Show wikidata-section with persons name (wiki-name), persons picture (wiki-picture) and persons bio (wiki-extract)
            $('.wikidata-section').show();
            $(".wiki-name").html(TheHtmlOutputtitle);
            $(".wiki-picture").html(TheHtmlOutputpic);
            $(".wiki-extract").html(TheHtmlOutputextract);

        })
        // Unsucessful call to API
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
