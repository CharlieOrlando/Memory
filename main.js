var cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
var first = '';
var second = '';
var cards_flipped = 0;
var first_id = 0;
var second_id = 0;
var matches = 0;

//fisher yates shuffle to randomize array
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoardtest() {

	output = '';
    cardsArray.shuffle();
    for(var i = 0; i < cardsArray.length; i++) {
    	output += '<div id="tile_'+i+'" onclick="Flip(this,\''+cardsArray[i]+'\')"></div>';
    }
    document.getElementById('wrapper').innerHTML = output;
}
	
function newBoard() {
	cards_flipped = 0;
	var cards = '';
    cardsArray.shuffle();
    for(var i = 0; i < cardsArray.length; i++) {
    	cards = document.createElement("div");
    	cards.setAttribute("id", 'card_'+i);
    	cards.setAttribute("onclick", 'flip(this,\''+cardsArray[i]+'\')');
    	document.getElementById('wrapper').appendChild(cards);
    }
}

function flip(card,val) {
	if (card.innerHTML == '' && cards_flipped < 2){
				card.style.background = '#FFF';
				card.innerHTML = val;
		if (cards_flipped == 0) {
				cards_flipped++;
				first = val;
				first_id = card.id;
			}
		else if (cards_flipped == 1){
				cards_flipped++;
				second = val;
				second_id = card.id;
				if (first == second){
					matches += 2;
					cards_flipped = 0;
					first = 0;
					second = 0;
					first_id = 0;
					second_id = 0;
					if (matches == cardsArray.length){
						function winner(){
							alert("You win!");
					}
					setTimeout(winner, 700);
				}
			}
				else {
					function flipBack(){
				var card_1 = document.getElementById(first_id);
				var card_2 = document.getElementById(second_id);
				card_1.style.background = 'grey';
				card_1.style.backgroundImage = "url(http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png)";
				card_1.style.backgroundSize = 'contain';
				card_1.style.backgroundRepeat = 'no-repeat';
				card_1.innerHTML = '';
				card_2.style.background = 'grey';
				card_2.style.backgroundImage = 'url(http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png)';
				card_2.style.backgroundSize = 'contain';
				card_2.style.backgroundRepeat = 'no-repeat';
				card_2.innerHTML = '';
				first = 0;
				second = 0;
				cards_flipped = 0;
				first_id = 0;
				second_id = 0;
			}
			setTimeout(flipBack, 700);
			}
		}
	}
}