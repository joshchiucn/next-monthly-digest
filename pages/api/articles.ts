export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json(articles)
  } else {
    res.status(405).send('unsupported method')
  }
}

const articles = [
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