import { Item, MonthData, SiteItem, Donation } from '../types/index'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const template: Item = {
  name: '',
  description: '',
  link: '',
  tags: [],
  source: ''
}

const data: MonthData[] = [
  {
    time: '2021-02',
    data: [
      {
        name: 'All you need to know about third-party cookies',
        description: '三方cookie利与弊',
        link: 'https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html',
        tags: ['网络通识'],
        source: ''
      }
    ]
  },
  {
    time: '2021-01',
    data: [
      {
        name: 'import、require、export、module.exports 混合使用详解',
        description: '',
        link: 'https://juejin.cn/post/6844903520865386510',
        tags: ['js'],
        source: '掘金'
      }, {
        name: '带你走进webpack世界，成为webpack头号玩家。',
        description: '',
        link: 'https://juejin.cn/post/6844903588607557639',
        tags: ['js'],
        source: '掘金'
      }, {
        name: '代码整洁之道 js版',
        description: '',
        link: 'https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals',
        tags: ['js', '代码规范'],
        source: 'github'
      }
    ]
  }
]
export const sites: SiteItem[] = [
  {
    name: 'Frontend Focus Archives',
    link: 'https://frontendfoc.us/issues',
    description: '前端技术周刊'
  }, {
    name: 'DEV Community 👩‍💻👨‍💻',
    link: 'https://dev.to/',
    description: '开发者社区'
  }, {
    name: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com/articles/',
    description: '前端文章'
  }, {
    name: 'Front-end RSS Feeds (2020 Edition)',
    link: 'https://www.impressivewebs.com/frontend-rss-feeds-2020/',
    description: '前端网站&博客汇总'
  }
]
export const donations: Donation[] = [
  {
    name: 'Microsoft Edge',
    icon: 'https://images.opencollective.com/microsoftedge/503102e/logo.png',
    amount: 250000
  }, {
    name: 'Google Open Source',
    icon: 'https://images.opencollective.com/google/9d8073c/logo.png',
    amount: 250000
  }, {
    name: 'Coil',
    icon: 'https://images.opencollective.com/coilhq/ea92e4d/logo.png',
    amount: 100000
  }, {
    name: 'Igalia',
    icon: 'https://images.opencollective.com/igalia/dd7aa72/logo.png',
    amount: 20000
  }, {
    name: 'Type of Web',
    icon: 'https://images.opencollective.com/typeofweb/2c75cc0/logo.png',
    amount: 106
  }, {
    name: 'Open Collective',
    icon: 'https://images.opencollective.com/opencollective/019a512/logo.png',
    amount: 105
  }
]
export default data