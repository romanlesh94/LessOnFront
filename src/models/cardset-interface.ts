import ICard from "./card-interface";

export default interface ICardset {
    name: string;
    lessonId: number;
    cards: Array<ICard>;
    id: number;
}