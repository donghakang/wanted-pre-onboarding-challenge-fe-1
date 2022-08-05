export function toDate(num: number) {
  return new Date(num).toLocaleString() + ''
}

export function diffTime(num: number) {
  const timediff = Date.now() - num

  if (timediff < 1000 * 60) {
    return Math.floor(timediff / 1000) + '초 전'
  } else if (timediff < 60 * 60 * 1000) {
    return Math.floor(timediff / (1000 * 60)) + '분 전'
  } else if (timediff < 60 * 60 * 24 * 1000) {
    return Math.floor(timediff / (1000 * 60 * 60)) + '시간 전'
  } else {
    return Math.floor(timediff / (1000 * 60 * 60 * 24)) + '일 전'
  }
}
