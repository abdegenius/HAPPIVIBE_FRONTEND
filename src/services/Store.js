import { writable } from 'svelte-local-storage-store'
let user_data = {}
let token_data = "";
export const USER = writable('user', user_data)
export const TOKEN = writable('token', token_data)
  