import {requiredFuel} from './scriptOne';
import {getModules} from './input';

let modules = getModules();

const fuelModules: number[] = modules.map(mass => {
    let remainder: number = requiredFuel(mass);
    let totalFuelPerModule: number = requiredFuel(mass);
    while (remainder > 0) {
        let additionalFuel = (requiredFuel(remainder) > 0) ? requiredFuel(remainder) : 0;
        totalFuelPerModule += additionalFuel
        remainder = additionalFuel;
    }
    return totalFuelPerModule
})

const totalFuelNeeded: number = fuelModules.reduce((totalFuel, fuel) => {return totalFuel += fuel})
console.log('result part two: ' + totalFuelNeeded)
