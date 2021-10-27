$(document).ready(function(){

        var Nouns = ["governments","horses","teletubbies", "mago juul pods","butts","horny anime characters","a polar bear","Harambe","vintage Ariel motorcycles","Vicks VapoRub"];
        var Verbs = ["suggest","huffing","driving","rude", "Regulate","Jumping","adapt", "bibble", "grok","sliding"];
        var Adjectives = ["honorable","reckless","viril","needy", "big", "bitter", "puce green","friendly", "putrid"];
       

        $("button").click(function(){
        $(".Noun").each(function() {
          var random = Math.floor (Math.random() * Nouns.length);
          $(this).text(Nouns[random]);
        });
      
        $(".Verb").each(function() {
          var random = Math.floor (Math.random() * Verbs.length);
          $(this).text(Verbs[random]);
        });
      
        $(".Adjective").each(function() {
          var random = Math.floor (Math.random() * Adjectives.length);
          $(this).text(Adjectives[random]);
        });

        $(".Originals").each(function() {
          
       });

      });
        
    });
