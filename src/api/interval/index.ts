import { IIntervalData } from '@/types/interval';

export default {
  create: (body: IIntervalData) => fetch('/api/interval/create', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then((res) => res.json),
}
