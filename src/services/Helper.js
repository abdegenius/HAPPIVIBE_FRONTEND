export const CURRENCY = (value) => {
	return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value);
};

export let active = 'border-orange-400';
export let inactive = 'border-gray-200';

export const FIRST = (e) => {
	e.preventDefault();
	document.getElementById('first').style.display = 'block';
	document.getElementById('second').style.display = 'none';
	document.getElementById('third').style.display = 'none';
	document.getElementById('fourth').style.display = 'none';
	if (document.getElementById('firstTab').classList.contains('border-gray-200')) {
		document.getElementById('firstTab').classList.replace(inactive, active);
		document.getElementById('secondTab').classList.replace(active, inactive);
		document.getElementById('thirdTab').classList.replace(active, inactive);
		document.getElementById('fourthTab').classList.replace(active, inactive);
	}
};
export const SECOND = (e) => {
	e.preventDefault();
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'block';
	document.getElementById('third').style.display = 'none';
	document.getElementById('fourth').style.display = 'none';
	if (document.getElementById('secondTab').classList.contains('border-gray-200')) {
		document.getElementById('firstTab').classList.replace(active, inactive);
		document.getElementById('secondTab').classList.replace(inactive, active);
		document.getElementById('thirdTab').classList.replace(active, inactive);
		document.getElementById('fourthTab').classList.replace(active, inactive);
	}
};
export const THIRD = (e) => {
	e.preventDefault();
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'none';
	document.getElementById('third').style.display = 'block';
	document.getElementById('fourth').style.display = 'none';
	if (document.getElementById('thirdTab').classList.contains('border-gray-200')) {
		document.getElementById('firstTab').classList.replace(active, inactive);
		document.getElementById('secondTab').classList.replace(active, inactive);
		document.getElementById('thirdTab').classList.replace(inactive, active);
		document.getElementById('fourthTab').classList.replace(active, inactive);
	}
};
export const FOURTH = (e) => {
	e.preventDefault();
	document.getElementById('first').style.display = 'none';
	document.getElementById('second').style.display = 'none';
	document.getElementById('third').style.display = 'none';
	document.getElementById('fourth').style.display = 'block';
	if (document.getElementById('fourthTab').classList.contains('border-gray-200')) {
		document.getElementById('firstTab').classList.replace(active, inactive);
		document.getElementById('secondTab').classList.replace(active, inactive);
		document.getElementById('thirdTab').classList.replace(active, inactive);
		document.getElementById('fourthTab').classList.replace(inactive, active);
	}
};


