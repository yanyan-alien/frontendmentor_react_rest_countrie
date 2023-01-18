function code(country) {
    var country_code
    var code = [country.cca2, country.cca3, country.ccn3, country.cioc]
    var i = 0
    while (country_code === undefined) {
        country_code = code[i]
        i++
    return country_code
}}

export default code