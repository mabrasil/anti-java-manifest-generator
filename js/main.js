$( document ).ready(function() {

    var argument = [];
      argument.push('> Do you remember? Before Java 8, if you used only interfaces to implement multiple inheritance you couldn\'t share common code through them.');
      argument.push('> What about those versioning and scalability issues with Checked Exceptions?');
      argument.push('> Functions in the standard library don\'t use consistent naming, acronym and capitalization conventions, which makes it hard to remember exactly what the items are called');
      argument.push('> Do you remember? Before Java 8, for some reason useful methods like sorting, binary search etc. were not part of Collection classes, but part of separate "utility classes" like Collections and Arrays');
	  argument.push('> What about that StackOverflowException you get when you have (a|[^d]) regex on long strings?');
	  argument.push('> Remember you don\'t have operator overloading... except for strings. For example, if you have pseudo-numeric classes, like BigInteger, you have to do \'beautiful\' things like a.add(b.multiply(c)).');
	  argument.push('> Since you have no delegates, everytime you want a function pointer you have to implement a factory design.');
	  argument.push('> What about the return statement which isn\'t valid within initialization blocks?');
	  argument.push('> Remember that you can\'t create an array of a variable type new T[27] or of a parameterized type new ArrayList<String>[27]. Sorry, in Java, arrays don\'t work with generics.');
	  argument.push('> You don\'t have something like a \'var-Keyword\' for infering local types (like you have C#).');
	  
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