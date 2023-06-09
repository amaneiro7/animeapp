const { formatDistance, parseISO } = require ('date-fns')
const h = require('hyperscript')

// const relativeDate = dateStr => moment(dateStr, 'YYYY-MM-DD').fromNow()
const relativeDate = dateStr =>
  formatDistance(parseISO(dateStr, 'YYYY-MM-DD'), new Date())

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div.carousel-item__links',
    h(
      'button.js-video-link',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        'data-Video-id': youtubeVideoId,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img', {
        src: 'assets/play-icon.png',
        alt: 'Play',
      })
    ),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img.carousel-item__img', {
      'data-src': imageUrl,
      alt: '',
      loading: 'lazy',
    }),
    h(
      'div.carousel-item__details',
      Controls({ slug, youtubeVideoId }),
      h('p', title),
      h('p', subtitle),
      h('p', `Released: ${relativeDate(startDate)}`)
    )
  )

module.exports = CarouselItem
