import citysJson from './citys';
import { ICity } from './const';

export function findCity(id: string, citys = citysJson): ICity {
    let city;
    citys.find(value => {
        if (value.id === id) {
            city = value;
        } else {
            city = findCity(id, value.children);
        }
        return city;
    });

    return city;
}

