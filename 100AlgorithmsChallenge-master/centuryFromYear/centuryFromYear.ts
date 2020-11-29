function centuryFromYear(year: number): number {
 return Math.floor(year/100)
}

console.log(centuryFromYear(2020));
console.log(centuryFromYear(1700));