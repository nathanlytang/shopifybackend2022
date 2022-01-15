// export class Item {
//     id: number;
//     name: string;
//     description: string;
//     available: number;

//     constructor(options: Record<string, any>) {
//         this.id = options.id;
//         this.name = options.name;
//         this.description = options.description;
//         this.available = options.available;
//     }
// }

export interface Item {
    id: number,
    name: string,
    description: string,
    available: number
}