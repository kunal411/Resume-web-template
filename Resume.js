var navMenuAnchorTags =  document.querySelectorAll(".horizontal-list a");

for(var i = 0; i < navMenuAnchorTags.length; i++){
	let currentPos = 0;
	navMenuAnchorTags[i].addEventListener('click', function(event){
		var targetSectionsID = this.textContent.trim().toLowerCase();
		var targetSection = document.getElementById(targetSectionsID);
		var targetPositon = targetSection.getBoundingClientRect().top;
		event.preventDefault();
		var scrollInterval = setInterval(function(){
			if(currentPos >= targetPositon){
				// document.location.reload(true);
				return;
			}
			currentPos += 50;
			window.scrollBy(0, 50);
		}, 20);
	});
}

var progressBars = document.querySelectorAll('.skill-progress > div');
var animationDone = [];
for(let bar of progressBars){
	animationDone.push(false);
}
var skillSection = document.getElementById('skills');
window.addEventListener('scroll', findingBarsVisible);
initializeBars();
function initializeBars(){
	for(let bar of progressBars){
		bar.style.width = 0 + '%';
	}
}

function fillBars(barsVisible){
	for(let bar of barsVisible){
		let initialwidth = 0;
		let targetWidth = bar.getAttribute('data-value');
		let scrollBarFilling = setInterval(function(){
			if(initialwidth > targetWidth){
				clearInterval(scrollBarFilling);
				return;
			}
			initialwidth++;
			bar.style.width = initialwidth + '%';
		}, 10);
	}
}

function findingBarsVisible(){
	let barsVisible = [];
	for(let i = 0; i < progressBars.length; i++){
		let coordinates = progressBars[i].getBoundingClientRect();
		if(!animationDone[i] && coordinates.top <= window.innerHeight){
			barsVisible.push(progressBars[i]);
			animationDone[i] = true;
		}
		else if(coordinates.top > window.innerHeight){
			animationDone[i] = false;
		}
	}
	fillBars(barsVisible);
}

// function checkScroll() {
// 	let coordinates = skillSection.getBoundingClientRect();
// 	if(!animationDone && coordinates.top <= window.innerHeight){
// 		fillBars();
// 		animationDone = true;
// 	}
// 	if(coordinates.top > window.innerHeight){
// 		animationDone = false;
// 	}
// }