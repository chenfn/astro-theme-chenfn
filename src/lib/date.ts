import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d)
  return date.format('YYYY 年 M 月 D 日 dddd')
}
