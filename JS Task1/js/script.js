var Base = prompt ('Введите число');
var Exponent = prompt ('Введите степень');
	
console.log (Base, '^', Exponent, '=', pow (Base, Exponent) );

function pow (Base, Exponent) {
    if (Exponent < 0)
        return 'Error. Please enter Exponent >= 0';
    var result = 1;
    for (var i = 0; i < Exponent; i++)
        result *= Base;
    return result;
}

