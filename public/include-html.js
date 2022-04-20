const JQuery = require("./JQuery");
$(funtion(){
    $("*[include-html]").each(function(){
        var t = $(this).attr("inlcude-html"),
        u = this.id;
        JQuery.ajax({
            url: t,
            success: function(t){
                $("#" + u).html(t)
            },
            error: funtion(n,c,i){
                var s = n.status + ": " + n.statusText;
                $("#" + u).html(t + "-" + s);
            }
        })
    })
})