<script>
var nume = [] ;
var numepar = [] ;
var numeimpar = [];	

for (i = 0; i < 50; i++) {
	nume = Math.floor((Math.random() * 100) + 1); 
    	if (nume % 2 == 1) {
    		nume.push(numeimpar);
    	}
    	if (nume % 2 == 0) {
    		nume.push(numepar);
    	};
}

return {
	"Impares": numeimpar , "pares": numepar
    };

</script>
