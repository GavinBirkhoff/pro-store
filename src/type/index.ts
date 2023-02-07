import PowerStorage from "../PowerStorage"

export type StorageKeyType = string | null
export type StorageValueType = Partial<any> | null | string
export type StorageEventType = "storage" | "setItemEvent"

export interface DispatchPublishEvent extends Partial<Event> {
  key: StorageKeyType
  newValue: StorageValueType
  oldValue: StorageValueType
  type: StorageEventType
}

export interface IDispatchEvent extends Event {
  key: StorageKeyType
  newValue: StorageValueType
  oldValue: StorageValueType
}

export interface StorePro {
  localStore: PowerStorage
  set: (key: string, value: Partial<any> | string | null, expires?: number) => void
  get: (key: string) => null | Partial<any> | string
  remove: (key: string) => void
  has: (key: string) => boolean
  clear: () => void
  subscribe: (key: string, action: (e?: DispatchPublishEvent) => void) => void
  unsubscribe: (keys: string | string[], action?: (e: any) => void) => void
}

export interface LocalStoreRaw extends Partial<StorePro> {
  (...rest: any[]): StorageValueType | PowerStorage
}

export interface LocalStorePro extends StorePro {
  (...rest: any[]): StorageValueType | PowerStorage
}

export type LocalStoragePro = PowerStorage
