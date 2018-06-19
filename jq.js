$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    $(".btn").hover(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "pink");
    });
    $("#btnpdf").click(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "pink");
        alert("A Revista Damsel será visualizada em formato PDF");

    });
    $("#btndoc").click(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "pink");
        alert("A documentação da Revista Damsel será visualizada em formato PDF");
    });
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");

    });
    $('#coin-slider').coinslider({ width: 900, spw: 7,sph: 5, navigation: true, delay: 2000,opacity: 0.7,effect: '', hoverPause: true});

    $('button.btn-rounded').on('click', function(){
    $(this).addClass('animated bounce');
    });
    $("form").submit(function(event){
        event.preventDefault();
        alert("Não foi possível fazer o envio");
    });
    
});

