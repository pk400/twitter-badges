// const targetNode = document.getElementById('some-id');
const targetNode = document.querySelector('[data-testid="primaryColumn"] [role="heading"]')

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
			console.log(mutation)
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

// observer.disconnect();








// // const loadTopHeader = () => {
// // 	const element = document.querySelector('[data-testid="primaryColumn"] [role="heading"] div div div')
// // 	if (!element) {
// // 		window.requestAnimationFrame(init)
// // 	}
// // 	const badge = document.createElement('img')
// // 	badge.src = browser.runtime.getURL('img.jpg')
// // 	badge.width = 20
// // 	element.appendChild(badge)
// // }

// const loadTopHeader = async () => {
// 	const element = document.querySelector('[data-testid="primaryColumn"] [role="heading"] div div div')
// 	const promise = new Promise(window.requestAnimationFrame)
// 	promise.then(e => {
// 		console.log(e)
// 	})
// 	// if (!element) {
// 	// 	window.requestAnimationFrame(init)
// 	// }
// 	// const badge = document.createElement('img')
// 	// badge.src = browser.runtime.getURL('img.jpg')
// 	// badge.width = 20
// 	// element.appendChild(badge)
// }

// // loadTopHeader()
// const promise = new Promise(window.requestAnimationFrame)
// promise.then(e => {
// 	console.log(e)
// })
