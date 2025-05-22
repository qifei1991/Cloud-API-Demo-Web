export const CURRENT_CONFIG = {

  // license
  appId: '121607', // You need to go to the development website to apply.
  appKey: '9634af17614cefcb133f3e5db8c4e50', // You need to go to the development website to apply.
  appLicense: 'Q798DvMCbkOoUhtMJSTOa9J558re0FhO7G4+ah/JJxzJTWclebjvPYsL0zluvgmkf69CTcUzoO27jXySiI0Z9uRnRnDXRnuOonW8BTb7qZ7al0BPCSkqBar3+YaSfxdVNB3jWfYFVHAj6caBiKHLsAlS5bLE2WiZ2w0rii7y+iw=', // You need to go to the development website to apply.

  // http
  baseURL: import.meta.env.VITE_APP_API_BACKEND_URL, // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: import.meta.env.VITE_APP_API_WS_URL, // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: import.meta.env.VITE_LIVE_RTMP_URL, // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: '7b62a6d322d4d1c2cbe3470e5c684fe8',

}
