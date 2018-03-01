module.exports = function longestConsecutiveLength(array) {
	//сортируем массив быстрой сортировкой
	array = array.sort((a, b) => a - b);
	let count = 1;
	let max = 0; //максимальная последовательность

	//бежим по массиву и сравниваем больше ли сл. число на 1
	for (let i = 0; i <= array.length; i++) {
		if (array[i] + 1 === array[i + 1]) {
			count++; //если да, то повышаем счетчик на 1
		} else if (array.length === 1) {
			return 1; //если только 1 элемент в массиве, сразу возвращаем
		} else if (array[i + 1] === array[i]) {
			continue; //если текущее число равно следующему, начинаем сл. итерацию
		} else {
			//проверяем, если счетчик больше максимальной последовательности
			if (count >= max) {
				max = count; //обновляем максимальную
			}
			count = 1; //возвращаем счетчик к начальному числу
		}
	}
	return max;
};
