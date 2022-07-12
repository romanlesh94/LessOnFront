import ILesson from "./lesson-interface";

export default interface IAddUnit {
    name: string;
    description: string;
    imagePath: string;
    lessons: Array<ILesson>
}