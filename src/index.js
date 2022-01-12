module.exports = function toReadable (number) {
        
    let dozens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let teens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    number = number.toString();
    let numberClass = number.length;
    let numberToMassive = number.split('');
    let text = '';

    for(let i = 0; i < numberClass; i++) {
        if ((numberClass - i) % 3 === 2) {
            if (numberToMassive[i] === '1') {
                text += teens[Number(numberToMassive[i + 1])];
                i = i + 2;
            } else if (numberToMassive[i] != 0) {
                text += dozens[numberToMassive[i] - 2] + ' ';
            }
        } else if (numberToMassive[i] > 0) {
            text += units[numberToMassive[i] - 1];
            if((numberClass - i) % 3 == 0) text += ' hundred ';
        } else if (numberToMassive[i] == 0) {
            if(numberClass == 1) text += 'zero';
        }

   }
   return text.trim();
}
