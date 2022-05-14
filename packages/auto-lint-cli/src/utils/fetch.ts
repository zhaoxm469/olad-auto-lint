import https from "node:https"

export const get = (url: string) => {
  // 发送GET请求
  return new Promise((resolve) => {
    https.get(url, response => {
      response.on("data", chunk => {
        resolve(JSON.parse(chunk.toString()))
      })
    })
  })
}