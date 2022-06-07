// Случайный цвет с возможностью ограничивать выходные значения
// Используется чтобы не получать слишком тёмные или слишком светлые цвета
export default function getRandomHexColor(lowerBound = 30, upperBound = 200) {
  var r = lowerBound + Math.floor(rnd.nextFloat() * (upperBound - lowerBound));
  var g = lowerBound + Math.floor(rnd.nextFloat() * (upperBound - lowerBound));
  var b = lowerBound + Math.floor(rnd.nextFloat() * (upperBound - lowerBound));
  return (
    '#' +
    r.toString(16).padStart(2, 0) +
    g.toString(16).padStart(2, 0) +
    b.toString(16).padStart(2, 0)
  );
}

// Сидируемый псевдогенератор чисел
class Random {
  constructor(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0) this._seed += 2147483646;
  }
  next() {
    return (this._seed = (this._seed * 16807) % 2147483647);
  }
  nextFloat() {
    return (this.next() - 1) / 2147483646;
  }
}

const rnd = new Random(123456); // Экземпляр, используется в getRandomHexColor
