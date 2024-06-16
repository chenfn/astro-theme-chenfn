import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  return date.format('YYYY 年 MM 月 DD 日 dddd')
}

export function formatPostDate(d: string | Date) {
  const date = dayjs(d)
  return date.format('YYYY/MM/DD')
}

export function formatReleativeDate(d: string | Date) {
  const date = dayjs(d)
  return date.fromNow()
}