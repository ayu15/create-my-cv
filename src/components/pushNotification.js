export default function updateNotify() {
	// console.log('inside update notify');
	const elem = document.querySelector('.new-update');
	elem.setAttribute("style", "display: block");
	const hardRefresh = async() => {
		await setTimeout(function(){ return document.location.reload(true);
		}, 3000);
	};
	hardRefresh();
};
