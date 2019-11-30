let popularSites = [
  {
    name: 'Facebook',
    img: 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-Meaning.jpg'
  },
  {
    name: 'Amazon',
    img: 'https://www.logolynx.com/images/logolynx/f1/f1d040ec50f4ec469b2fad157027d37c.png'
  },
  {
    name: 'Linkedin',
    img: 'https://www.militaryspouse.com/wp-content/uploads/2018/06/LinkedIn.png'
  },
  {
    name: 'Twitter',
    img: 'https://www.dsmhomesales.com/wp-content/uploads/2014/02/twitter_logo.jpg'
  }
]

function getDetail(url) {
  if (url.match(/facebook/gi)) {
    return popularSites[0]
  } else if (url.match(/amazon/gi)) {
    return popularSites[1]
  } else if (url.match(/linkedin/gi)) {
    return popularSites[2]
  } else if (url.match(/twitter/gi)) {
    return popularSites[3]
  }
}

module.exports = getDetail
