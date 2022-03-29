const CURRENCY = (value) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(value)
}

export default CURRENCY


