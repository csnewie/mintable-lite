/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Nft = "Nft",
	StoreOffers = "StoreOffers",
	Stores = "Stores",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type NftRecord = {
	for_sale?: boolean
	nft_token?: string
	store_token?: RecordIdString
}

export type StoreOffersRecord = {
	offer_description?: string
	offer_name?: string
}

export type StoresRecord = {
	offer_name?: RecordIdString[]
	store_token?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
	nft_token?: RecordIdString[]
	store_token?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type NftResponse<Texpand = unknown> = Required<NftRecord> & BaseSystemFields<Texpand>
export type StoreOffersResponse<Texpand = unknown> = Required<StoreOffersRecord> & BaseSystemFields<Texpand>
export type StoresResponse<Texpand = unknown> = Required<StoresRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Nft: NftRecord
	StoreOffers: StoreOffersRecord
	Stores: StoresRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Nft: NftResponse
	StoreOffers: StoreOffersResponse
	Stores: StoresResponse
	users: UsersResponse
}