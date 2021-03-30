export default function getDonators (req, res) {
  res.status(200).json(donators)
}

const donators = [
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