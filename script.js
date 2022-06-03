"use strict";

const text = document.querySelector('#text-area'),
	upperCaseBtn = document.querySelector('#upper-case'),
	lowerCaseBtn = document.querySelector('#lower-case'),
	properCaseBtn = document.querySelector('#proper-case'),
	sentenceCaseBtn = document.querySelector('#sentence-case'),
	saveTextBtn = document.querySelector('#save-text-file');

function upperCase(text) {
	if (text.length > 0) {
		return text.toUpperCase();
	} else {
		alert('You need to enter some text!')
		text.value = '';
	}
}

function lowerCase(text) {
	if (text.length > 0) {
		return text.toLowerCase();
	} else {
		alert('You need to enter some text!')
		text.value = '';
	}
}

function properCase(text) {
	if (text.length > 0) {
		let newArrText = text.split(' ');
		newArrText = newArrText.map(item => {
			let itemArr = item.split('');
			itemArr[0] = itemArr[0].toUpperCase();
			return itemArr.join('');
		});
		return newArrText.join(' ');
	} else {
		alert('You need to enter some text!')
		text.value = '';
	}
}

function sentenceCase(text) {
	if (text.length > 0) {
		let newArrText = text.toLowerCase().split('. ');
		newArrText = newArrText.map(item => {
			let itemArr = item.split('');
			itemArr[0] = itemArr[0].toUpperCase();
			return itemArr.join('');
		});
		return newArrText.join('. ');
	} else {
		alert('You need to enter some text!')
		text.value = '';
	}
}

function download(filename, text) {
	if (text.length > 0) {
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	} else {
		alert('You need to enter some text!')
		text.value = '';
	}
}

upperCaseBtn.addEventListener('click', () => {
	text.value = upperCase(text.value);
});
lowerCaseBtn.addEventListener('click', () => {
	text.value = lowerCase(text.value);
});
properCaseBtn.addEventListener('click', () => {
	text.value = properCase(text.value);
});
sentenceCaseBtn.addEventListener('click', () => {
	text.value = sentenceCase(text.value);
});
saveTextBtn.addEventListener('click', () => {
	download('text', text.value)
})


