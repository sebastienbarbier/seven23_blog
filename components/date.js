import { parseISO, format } from 'date-fns'

export default function Date({ dateString, formatString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, formatString || 'LLLL d, Y')}</time>
}
