import { IIntervalData } from '@/types/interval';

export default {
  create: (body: IIntervalData) => fetch('/api/interval/create', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then((res) => res.json()),

  list: () => fetch('/api/interval/list').then((res) => res.json()),

  remove: (id: number) => fetch('/api/interval/remove', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  }).then((res) => res.json()),

}
