const ytch = require('yt-channel-info')


const channelId = 'UCOTeWBC-BcUREP8yPwXSqew'
const sortBy = 'newest'

ytch.getChannelVideos(channelId, sortBy).then((response) => {
  console.log(response)
}).catch((err) => {
  console.log(err)
})

