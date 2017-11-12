           function upDated(){
                $("#outcometext").contents().find("html").html("<html><head><style type='text/css'>"+$("#csstext").val()+"</style></head><body>"+$("#htmltext").val()+"</body></html>");
                
                document.getElementById("outcometext").contentWindow.eval($("#javascripttext").val());
                
                
            }
            
            
            
           $(".Panel").hover(function(){
               $(this).addClass("highlightedBtn");
           },
            function(){
               $(this).removeClass("highlightedBtn");
           }
                            
           )
           
            $(".Panel").click(function(){
                $(this).toggleClass("active");
                $(this).removeClass("highlightedBtn");
                
                var textId = $(this).attr("id")+"text";
                $("#"+textId).toggleClass("hidden");
                var numberOfActiveClass = 4 - $(".hidden").length;
                $(".block").width(($(window).width()/numberOfActiveClass)-10);
                
            })
           
            $(".block").height($(window).height()-$("#header").height());
            $(".block").width($(window).width()/2-10);
            
             upDated();
            
        
            $("textarea").on('change keyup paste', function(){
                
                upDated();
            })