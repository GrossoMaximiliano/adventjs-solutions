export default function daysToXmas(date) {
  const date1 = new Date('Dec 25, 2021');
  let timestamp = Math.floor( date1.getTime() / 1000 ) - Math.floor( date.getTime() / 1000 ), 
  dias = timestamp / 86400;

  return Math.ceil(dias)
}
