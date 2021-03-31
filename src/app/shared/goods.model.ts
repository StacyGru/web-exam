export interface MyGoods
{
    id?: number;
    article: string;
    name: string;
    price: string;
    category: number;
    weight: string;
    amount: string;
    manufacturer?: string;
}

export enum MyGoodsCategory
{
    furniture,
    tech,
    books,
    phones
}