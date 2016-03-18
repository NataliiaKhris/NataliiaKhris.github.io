var arr = [];
var n = 5;
  for (var i = 0; i < n; i++) {
    arr[i] = prompt('Введите имя', "")
  }

var name = prompt('Введите свое имя');
var flag = false;

  for (var i = 0; i < n; i++) {
    if (name === arr[i]) {
      alert (name + ', Вы успешно вошли');
      flag = true;
    }
  }
	if (!flag) {
	   alert ('Ошибка...');
	}