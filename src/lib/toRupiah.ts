export const toRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);

    // return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}