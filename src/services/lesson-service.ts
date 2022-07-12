import ILesson from "../models/lesson-interface";
import api from "./api";
import {host} from "../config";

export function getLessonService(id: number) {

    return api.get<ILesson>(`${host}/get-lesson?id=${id}`)
        .then(response => {
            return response.data;
        })
}