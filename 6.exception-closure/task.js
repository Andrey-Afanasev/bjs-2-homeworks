function parseCount(number) {
    if (isNaN(Number.parseFloat(number))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(number)
    }
}

function validateCount(number){
    try {
        return parseCount(number)
      } catch (err) {
         return err
      }
}

class Triangle {
    constructor(dlina, shirina, visota) {
        this.dlina = dlina;
        this.shirina = shirina;
        this.visota = visota;

        if (dlina + shirina < visota || dlina + visota < shirina ||  shirina + visota < dlina) {
            throw new Error("Треугольник с такими сторонами не существует");
           }
    }

   

   get perimeter() {
    return this.dlina + this.shirina + this.visota;
   }

   get area() {
    return +(Math.sqrt((this.perimeter/2) * (this.perimeter/2 - this.dlina) *
     (this.perimeter/2 - this.shirina) * (this.perimeter/2 - this.visota))).toFixed(3)
   }


}

function getTriangle (dlina, shirina, visota) {

    try {
        return new Triangle(dlina, shirina, visota)
      } catch (err) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
              }, 
              get area() {
                return "Ошибка! Треугольник не существует"
              }
        }
         
      }

   }