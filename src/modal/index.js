import { openModal } from './open-modal'
export const modalListener = event => {
  const img = event.target
  const link = img.parentElement
  if (link.classList.contains('js-video-link')) {
    openModal(link.dataset.videoId)
  }
}
