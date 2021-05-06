
    $( "#botao" ).on('click',function() {
    
        var date = $('#date').val()
        
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=jipk8a2PMcGLJNrZY0aqVTNhi73jAdxFn83dS8WV&date=${date}`,
            
            success: function(result) {
              
              if(result.media_type === "image") { 
                $("iframe").addClass("invisivel");
                $("#imagem").removeClass("invisivel");
                $('#titulo').text(`${result.title}`);
                $('#imagem').attr("src", `${result.url}`);
                $('#legenda').text(`${result.explanation}`);
                


              } else if (result.media_type === "video") {
                $("#imagem").addClass("invisivel");
                $("iframe").removeClass("invisivel");
                $('#titulo').text(`${result.title}`);
                $('#video').attr("src", `${result.url}`);
                $('#legenda').text(`${result.explanation}`);
                
              }
            }
           
            })
          })


          //
          //