export type Tag = 'js' | '前端框架' | '性能' | '代码规范' | '生活' | '网络通识'

export interface Item {
  name: string,
  description: string,
  link: string,
  tags: Tag[],
  source: string
}

export interface MonthData {
  time: string,
  data: Item[]
}

export interface SiteItem {
  name: string,
  link: string,
  description: string
}

export interface Donation {
  name: string,
  icon: string,
  amount: number
}

export interface executable {
  (): void
}