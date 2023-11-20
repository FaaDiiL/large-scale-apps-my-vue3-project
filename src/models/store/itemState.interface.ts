import { ItemInterface } from '@/models/items/Item.interface'

/**
* @name ItemStateInterface
* @description Interface for the Items state
 */
export interface ItemsStateInterface {
     loading: boolean,
     items: ItemInterface[]
}