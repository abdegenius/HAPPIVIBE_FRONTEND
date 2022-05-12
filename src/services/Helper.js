export const CURRENCY = (value) => {
	return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value);
};

export const STATUS = (value) => {
	if(value.toUpperCase() == 'PROCESSING'){
		return 'Waiting for payment';
	}
	else if(value.toUpperCase() == 'AWAITING'){
		return 'Paid and awaiting';
	}
	else if(value.toUpperCase() == 'IN_PROGRESS'){
		return 'Call in progress';
	}
	else if(value.toUpperCase() == 'COMPLETED'){
		return 'Paid and call made';
	}
	else if(value.toUpperCase() == 'FAILED'){
		return 'Failed';
	}
}
