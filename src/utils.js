//(new Date())と()で全体を括ることで，オブジェクトとして使用できる
export const timeCurrentIso8601 = () => (new Date()).toLocaleString({ timeZone: "Asia/Tokyo"})