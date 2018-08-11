import { Category } from "./category-data.model";

export class Product {

    public ProductId: number;
    public Name: string;
    public Description: string;
    public Url: string;
    public CategoryIds: number[];
    public Categories: Category[];
}