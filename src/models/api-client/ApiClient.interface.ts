import { ItemsApiClientInterface } from '@/models/api-client/items/ItemsApiClient.interface'

/**
 * @Name ApiClientInterface
 * @description Interface wrap all api client modules
 * for keeping code organized.
 */
export interface ApiClientInterface {
    items: ItemsApiClientInterface
}