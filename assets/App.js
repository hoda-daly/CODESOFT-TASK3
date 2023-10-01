let ourskills = document.querySelector('.skills');
let skillbox = document.querySelectorAll('.skill-box .skill-progress span');

window.onscroll = function () {
	let skillsOffsetTop = ourskills.offsetTop;
	let skillsoffsetHeight = ourskills.offsetHeight;
	let windowscrollTop = window.pageYOffset;
	let windowHeight = this.innerHeight;
	if (windowscrollTop > (skillsOffsetTop + skillsoffsetHeight - windowHeight)) {
		skillbox.forEach(skill => {
			skill.style.width = skill.dataset.progress
		})

	}
}

// Sticky navigation: Intersection Observer API
const nav = document.querySelector('.navbar');

const aboutUs = document.querySelector('.Abou-Us');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)

const stickyNav = function (entries) {
	const [entry] = entries;
	//   console.log(entry);

	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(aboutUs);
////////////////////////////////////////
const allContainers = document.querySelectorAll('.container');
const revealContainer = function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('container--hidden');
	observer.unobserve(entry.target);
}
const containerObserve = new IntersectionObserver(revealContainer,
	{
		root: null,
		threshold: 0.15,

	})
allContainers.forEach(container => {
	containerObserve.observe(container);
	container.classList.add('container--hidden');

});


// Overlay
let overlay = document.querySelectorAll('.overlay');
console.log(overlay)
let h3Overlay = document.querySelectorAll('.blogs .card h3');
let pOverlay = document.querySelectorAll('.blogs .card p');
let iOverlay = document.querySelectorAll('.blogs .card i');

setInterval(() => {
	overlay.forEach(el => {
		el.style.width = '100%';
		el.style.height = '100%';
		el.style.left = '0';

	});
	h3Overlay.forEach(el => {
		el.style.color = '#fff';
	})
	pOverlay.forEach(el => {
		el.style.color = '#fff';
	});
	iOverlay.forEach(el => {
		el.style.color = '#fff';
	})

}, 1000);
clearInterval();

