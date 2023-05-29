export function lazyLoading() {
  const cards = document.querySelectorAll('.carousel-item__img')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        const img = target
        img.src = img.dataset.src
        observer.unobserve(target)
      }
    })
  }, options)

  cards.forEach(card => {
    observer.observe(card)
  })
}
