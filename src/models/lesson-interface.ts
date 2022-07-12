import ICardset from "./cardset-interface";

export default interface ILesson {
    id: number;
    unitId: number;
    number: number;
    cardsets: Array<ICardset>;
}