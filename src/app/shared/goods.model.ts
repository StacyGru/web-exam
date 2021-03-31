export interface MyGoods
{
    id?: number;
    article: string;
    name: string;
    price: number;
    category: number;
    weight: string;
    amount: number;
    manufacturer?: string;
}

export enum MyGoodsCategory
{
    furniture,
    tech,
    books,
    phones
}