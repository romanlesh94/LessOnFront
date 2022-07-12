import ILesson from "./lesson-interface";

export default interface IUnit {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    lessons: Array<ILesson>;
}