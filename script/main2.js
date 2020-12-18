///////////////////////////////////
//////////// FUNCTIONS ////////////
///////////////////////////////////

function magicOpacity () {
	if (magicNum1Interval == 1) {$('.fire').css({opacity: 1});}
	else {$('.fire').css({opacity: 0.3});}
	if (magicNum2Interval == 1) {$('.wolf').css({opacity: 1});}
	else {$('.wolf').css({opacity: 0.3});}
	if (magicNum3Interval == 1) {$('.witch-health').css({opacity: 1});}
	else {$('.witch-health').css({opacity: 0.3});}
}

function animeHero () {
	setTimeout(function() {
		$(function(){$('.enemy').animate({opacity: 0.5}, 500);});
		$('.hero').css({'background-position':'57.8% 0'});
	}, 200);
	setTimeout(function() {
		$('.enemy').css({'background-position':'98.1% 0'});
	}, 400);
	setTimeout(function() {
		$(function(){$('.enemy').animate({opacity: 1}, 500);});
	}, 600);
	setTimeout(function() {
		$('.enemy').css({'background-position':'9% 0'});
		$('.hero').css({'background-position':'9.1% 0'});
	}, 800);
}

function timeClickFun1 () {
	timeClick = 1;
	$(time).css({'color':'#E83232'});
	magicOpacity();
	$('.button1').css({opacity: 1});
}

function timeClickFun2 () {
	timeClick = 2;
	$(time).css({'color':'#32B0E8'});
	$('.magic1').css({opacity: 0.3});
	$('.button1').css({opacity: 0.3});
}

function animEnemyAttack () {
	setTimeout(function() {
		$(function(){$('.hero').animate({opacity: 0.5}, 500);});
		$('.enemy').css({'background-position':'57.8% 0'});
	}, 200);
	setTimeout(function() {
		$('.hero').css({'background-position':'98.1% 0'});
	}, 400);
	setTimeout(function() {
		$(function(){$('.hero').animate({opacity: 1}, 500);});
	}, 600);
	setTimeout(function() {
		$('.hero').css({'background-position':'9% 0'});
		$('.enemy').css({'background-position':'9.1% 0'});
		timeClickFun1();
	}, 800);
}

function enemyAttack () {
	if (healthOfPlayer2 >= 70) {
		if (healthOfPlayer2 < healthOfPlayer1) {
			if (blockAttack2 > 0) {
				blockAttack2 = blockAttack2 - 1;
			}
			else {
				healthOfPlayer1 = healthOfPlayer1 - attack2;
				$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
				animEnemyAttack();
			}
			if (magicNum1IntervalPlayer2 == 1) {
				healthOfPlayer1 = healthOfPlayer1 - magicNum1;
				$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
				magicNum1IntervalPlayer2 = 0;
			}
			else {
				if (blockAttack2 > 0) {
					blockAttack2 = blockAttack2 - 1;
				}
				else {
					healthOfPlayer1 = healthOfPlayer1 - attack2;
					$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
					animEnemyAttack();
				}
				if (blockAttack2 > 0) {
					blockAttack2 = blockAttack2 - 1;
				}
				else {
					healthOfPlayer1 = healthOfPlayer1 - attack2;
					$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
					animEnemyAttack();
				}
				setTimeout(function() {
					magicNum1IntervalPlayer2 = 1;
				}, 20000);
			}
		}
		else {
			healthOfPlayer1 = healthOfPlayer1 - attack2;
			animEnemyAttack();
			healthOfPlayer1 = healthOfPlayer1 - attack2;
			animEnemyAttack();
		}
	}
	else if (healthOfPlayer2 >= 40 && healthOfPlayer2 <= 69) {
		
	}
	else if (healthOfPlayer2 >= 10 && healthOfPlayer2 <= 39) {
		
	}
	else if (healthOfPlayer2 >= 1 && healthOfPlayer2 <= 9) {
		
	}
}

///////////////////////////////////
////////// HERO VARIBLES //////////
///////////////////////////////////

// Health
var healthOfPlayer1 = 100;
var healthOfPlayer2 = 100;
// Attack uron
var attack1 = 1;
var attack2 = 1;
// Can u Click magic or actions of hero
var canClick1 = 2;
var canClick2 = 2;
var canClick1Bus = 2;
var canClick2Bus = 2;
// timeClick - 2 players ochered, time of 1 hod
var timeClick = 1;
var time = document.getElementsByClassName('time')[0];
var timer = setInterval(function() {
	time.innerHTML = '00 : ' + i;
	i = i - 1;
	if (i == -1) {
		i = 9;
		if (timeClick == 2) {
			timeClick = 1;
			$('.button1').css({opacity: 1});
			$(time).css({'color':'#E83232'});
			blockAttack2 = 0;
			magicOpacity();
		}
		else {
			blockAttack1 = 0;
			timeClickFun2();
			enemyAttack();
		}
	}
	else {1;}
}, 1000);
// Magics
var magicNum1 = 5; var magicNum1Interval = 1;
var magicNum2 = 1; var magicNum2Interval = 1;
var magicNum3 = 5; var magicNum3Interval = 1;
var magicNum1IntervalPlayer2 = 1;
var magicNum2IntervalPlayer2 = 1;
var magicNum3IntervalPlayer2 = 1;

// Blocks
var blockAttack1 = 0;
var blockAttack2 = 0;

$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
$('.bar2').css({marginLeft: -healthOfPlayer2+'%'});
$(time).css({'color':'#E83232', 'font-size': screen.height * 0.05});



///////////////////////////////////
///////////// ACTIONS /////////////
///////////////////////////////////

// Attack the Enemy

$('.attack').click(function() {
	if (timeClick == 1) {
		animeHero();
		healthOfPlayer2 = healthOfPlayer2 - attack1;
		if (healthOfPlayer2 <= 0) {
			$('.bar2').css({marginLeft: '-0%'});
		}
		else {
			if (blockAttack2 > 0) {
				blockAttack2 = blockAttack2 - 1;
			}
			else {
				$('.bar2').css({marginLeft: -healthOfPlayer2+'%'})
			}
		}
	}
	else {
		healthOfPlayer2;
	}
});

///////////////////////////////////
///////////// ACTIONS /////////////
///////////////////////////////////

// Add +1 to canClick

$('.move').click(function() {
	if (timeClick == 1) {
		i = 9;
		canClick1Bus = canClick1Bus + 1;
		canClick1 = canClick1Bus;
		timeClickFun2();
		enemyAttack();
		console.log(timeClick)
	}
	else {
	}
});

// Block the Attack of enemy

$('.block').click(function() {
	if (timeClick == 1) {
		blockAttack1 = blockAttack1 + 1;
	}
	else {
		healthOfPlayer2;
	}
});

///////////////////////////////////
////////////// MAGIC //////////////
///////////////////////////////////

// Magic Fireball

$('.fire').click(function() {
	if (timeClick == 1) {
		if (magicNum1Interval == 1) {
			canClick1 = canClick1 - 1;
			if (canClick1 == 0) {
				i = 9;
				canClick1 = canClick1Bus;
				blockAttack1 = 0;
				timeClickFun2();
				enemyAttack();
			}
			else {
				healthOfPlayer2 = healthOfPlayer2 - magicNum1;
				animeHero();
			}
			if (healthOfPlayer2 <= 0) {
				$('.bar2').css({marginLeft: '-0%'});
			}
			else {
				if (blockAttack2 > 0) {
					blockAttack2 = blockAttack2 - 1;
				}
				else {
					$('.bar2').css({marginLeft: -healthOfPlayer2+'%'})
				}
			}
			magicNum1Interval = 0;
			$('.fire').css({opacity: 0.3});
			setTimeout(function() {
				if (timeClick == 1) {
					$('.fire').css({opacity: 1});
				}
				else {
					timeClick;
				}
				magicNum1Interval = 1;
			}, 20000);
		}
		else {
			magicNum1Interval;
		}
	}
	else {
		healthOfPlayer2;
	}
});

// Magic Wolf

$('.wolf').click(function() {
	if (timeClick == 1) {
		if (magicNum2Interval == 1) {
			canClick1 = canClick1 - 1;
			if (canClick1 == 0) {
				i = 9;
				canClick1 = canClick1Bus;
				blockAttack1 = 0;
				timeClickFun2();
				enemyAttack();
			}
			else {
				timeClick;
			}	
			attack1 = attack1 + 2;
			magicNum2Interval = 0;
			setTimeout(function() {
				attack1 = 1;
			}, 20000);
			magicNum2Interval = 0;
			$('.wolf').css({opacity: 0.3});
			setTimeout(function() {
				if (timeClick == 1) {
					$('.wolf').css({opacity: 1});
				}
				else {
					timeClick;
				}
				magicNum2Interval = 1;
			}, 20000);
		}
		else {
			magicNum2Interval
		}
	}
	else {
		healthOfPlayer2;
	}
});

// Magic Witch Health

$('.witch-health').click(function() {
	if (timeClick == 1) {
		if (magicNum3Interval == 1) {
			canClick1 = canClick1 - 1;
			if (canClick1 == 0) {
				i = 9;
				canClick1 = canClick1Bus;
				blockAttack1 = 0;
				timeClickFun2();
				enemyAttack();
			}
			else {
				timeClick;
			}
			if (healthOfPlayer1 == 100) {
				healthOfPlayer2 = healthOfPlayer2 - magicNum3;
				animeHero();
			}
			else {
				healthOfPlayer1 = healthOfPlayer1 + magicNum3;
				healthOfPlayer2 = healthOfPlayer2 - magicNum3;
				animeHero();
			}
			$('.bar1').css({marginLeft: healthOfPlayer1+'%'});
			$('.bar2').css({marginLeft: -healthOfPlayer2+'%'});
			magicNum3Interval = 0;
			$('.witch-health').css({opacity: 0.3});
			setTimeout(function() {
				if (timeClick == 1) {
					$('.witch-health').css({opacity: 1});
				}
				else {
					timeClick;
				}
				magicNum3Interval = 1;
			}, 30000);
		}
		else {
			magicNum3Interval;
		}
	}
	else {
		healthOfPlayer2;
	}
});

///////////////////////////////////
////////////// TIMER //////////////
///////////////////////////////////

var i = 9;

$('.button1').click(function() {
	if (timeClick == 1) {
		canClick1 = canClick1 - 1;
		if (canClick1 == 0) {
			i = 9;
			canClick1 = canClick1Bus;
			blockAttack1 = 0;
			timeClickFun2();
			enemyAttack();
		}
		else {
			timeClick;
		}
	}
	else {
		timeClick;
	}
});