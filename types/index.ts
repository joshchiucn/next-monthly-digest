export type Tag = 'js' | '前端框架' | '性能' | '代码规范' | '生活' | '网络通识'

export interface Item {
  name: string,
  description: string,
  link: string,
  tags: string,
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

export interface ArticleResponse {
  result: Item[],
  count: number
}

export interface SiteResponse {
  status: number,
  data: {
    result: SiteItem[]
  }
}