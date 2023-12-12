class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }

    sayName = () => {
        console.log(this.nombre)
    }
    showStats = () => {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud)
    }
    drinkSake = () => {
        this.salud += 10
    }
}

// let brian = new Ninja("Brian", 100)
// brian.sayName()
// brian.showStats()
// brian.drinkSake()
// brian.showStats()

class Sensei extends Ninja {
    constructor(nombre) {
        super()
        this.nombre = nombre
        this.salud = 200
        this.velocidad = 10
        this.fuerza = 10
        this.sabiduria = 10
    }

    speakWisdom = () => {
        this.drinkSake()
        console.log("Deja para mañana lo que puedes hacer hoy")
    }
}

let splinter = new Sensei("Splinter")
splinter.sayName()
splinter.showStats()
splinter.drinkSake()
splinter.showStats()
splinter.speakWisdom()
splinter.showStats()