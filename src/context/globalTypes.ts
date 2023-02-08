interface ProductInterface {
    name: string,
    price: number,
    image: string,
}

export interface StateInterface {
    products: ProductInterface[]
}