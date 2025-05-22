import { ELocalStorageKey } from '/@/types/enums'
import { CURRENT_CONFIG } from '/@/api/http/config'

export function getWebsocketUrl () {
  const token: string = localStorage.getItem(ELocalStorageKey.Token) || '' as string
  const url = CURRENT_CONFIG.websocketURL + '?x-auth-token=' + encodeURI(token)
  if (CURRENT_CONFIG.websocketURL.startsWith('ws')) {
    return url
  }
  return (window.location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + window.location.host + url
}

export function getApiBaseUrl () {
  if (CURRENT_CONFIG.baseURL.startsWith('http')) {
    return CURRENT_CONFIG.baseURL
  }
  return (window.location.protocol === 'https:' ? 'https:' : 'http:') + '//' + window.location.host + CURRENT_CONFIG.baseURL
}
