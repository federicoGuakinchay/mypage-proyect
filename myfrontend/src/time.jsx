function dateFormat(dateString, locale = 'en-US', type = 'complete') {
  let options 
  if (type === 'complete'){
    options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    }
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
  if (type === 'short'){
    options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
  if (type === 'ago'){
    const result = timeAgo(dateString,locale)
    return result
  }
}
function timeAgo(dateString,locale) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  let intervals
  if (locale === 'en-US'){
    intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 }
    ];
    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
      }
    }
  }else{
    intervals = [
      { label: 'año', seconds: 31536000 },
      { label: 'mes', seconds: 2592000 },
      { label: 'semana', seconds: 604800 },
      { label: 'dia', seconds: 86400 },
      { label: 'horas', seconds: 3600 },
      { label: 'minutos', seconds: 60 },
      { label: 'segundos', seconds: 1 }
    ];
    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count >= 1) {
        console.log(`${count} ${interval.label}${count !== 1 ? 's' : ''} ago`)
        return `Hace ${count} ${interval.label}${count !== 1 ? 's' : ''}`;
      }
    }
  }


  return 'just now';
}
export default dateFormat