import hyRequest from "..";

//封装网络请求
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}