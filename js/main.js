$( document ).ready(function() {

    var argument = [];
      argument.push('Argument 1');
      argument.push('Argument 2');
      argument.push('Argument 3');
      argument.push('Argument 4');
	  argument.push('Argument 5');
	  argument.push('Argument 6');
	  argument.push('Argument 7');
	  
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    $(".btn-danger").click(function(){
        
        shuffle(argument);
        var newArgument = "";
        var counter = 0;
        var currentArgument = $(this).text();
        $.each( argument, function( key, value ) {
          if(counter == currentArgument){
              return false
          }else{
              counter = counter +1;
          }
          newArgument = newArgument + value + "\n\n" ;
        });
        $(".argument").val(newArgument);
    });

});