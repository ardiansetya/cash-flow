export const toRupiah = (value: number | string | null) => {

    if (value === null) return "Rp 0";

    const amount = typeof value === "string" ? Number(value) : value;

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);

    // return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}