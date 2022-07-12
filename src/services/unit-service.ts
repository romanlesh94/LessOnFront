import IUnit from "../models/unit-interface";
import api from "./api";
import {host} from "../config";

export function getUnitsService() {

    return api.get<IUnit>(`${host}/get-units`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
}
