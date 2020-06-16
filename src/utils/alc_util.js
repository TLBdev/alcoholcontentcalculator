export function alc_ml_util(total_ml, abv) {
    let total = total_ml * (abv / 100)
    return total
}

export function alc_oz_util(total_oz) {
    return total_oz * 28.3495231
}
