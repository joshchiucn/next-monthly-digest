export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json(sites)
  } else {
    res.status(405).send('unsupported method')
  }
}

const sites = [
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