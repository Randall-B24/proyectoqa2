$(document).ready(function () {
    var API_KEY = "AIzaSyC0-N_PiUe-GoKbCCDSJPB_KG-SK53SE-s";

    var video = ''

    $("#form").submit(function(event){
        event.preventDefault()

        var search = $("#search").val()

        videosSearch(API_KEY,search,10)

    })

    function videosSearch(key, search, maxResults){
      $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
      + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
        console.log(data)

        data.items.forEach(item => {
	    console.log(item.id.videoId)
	    video = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
            $("#videos").append(video)
        });
      })
    }
  }
);