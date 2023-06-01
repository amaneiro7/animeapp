export const modalListener = event => {
  const img = event.target
  const link = img.parentElement
  const videoId = link.dataset.videoId
  if (link.classList.contains('js-video-link')) {
    import(
      /* webpackChunkName: "Modal" */ './open-modal'
    ).then(({ openModal }) => openModal(videoId))
  }
}
