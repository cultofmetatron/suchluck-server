var Session = function(player1, player2, winner, bet){
		this.player1 = player1,
		this.player2 = player2,
		this.bet = bet;
		this.currentRound = 0;

}


Session.prototype.startRound = function(){

		this.round = {
		round: 0,
		winner: null,
		player1Click: null,
		player2Click: null,
		startTime : new Date().getTime(),
		endTime : new Date.getTime()
		this.roundEnded = false;
	  }

		setTimeout(this.endRound.bind(this), 5000);
}

Session.prototype.endRound = function(){
	this.round++;
	this.roundEnded = true;
}

var findWinner = function(obj){

	if ((obj.player1Click && obj.player2Click ) && obj.player1Click > obj.player2Click){
		this.round.winner = this.player1;
	} else if ((obj.player1Click && obj.player2Click ) && obj.player2Click > obj.player1Click){
		this.round.winner = this.player2;
	} else if (obj.player1Click && !obj.player2Click && this.roundEnded){
		this.round.winner = this.player1;
	} else if(!obj.player1Click && obj.player2Click && this.roundEnded){
		this.round.winner = this.player2;
	} else {
		this.round.winner = null;
	}
};



/** 
---Params---


pubnub callbacks internally are allowed to modify the object in some way such that it sends out a stream or things come in
once you create them the users work with them but you don't think about them beyond basics
this is building interfaces


**/