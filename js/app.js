var source = $("#hike-list-template").html(); 
var template = Handlebars.compile(source); 

function getHikeList() {
    var response = '';
    $.ajax({ type: "GET",   
             url: "https://hikewithben.appspot.com/_ah/api/hikewithben/v1/hike_list",
             async: false,
             success : function(text)
             {
                 response = text;
             }
    });

    return response;
}

var data = getHikeList(); 
var html = template(data)
$("#content-placeholder").html(html);

