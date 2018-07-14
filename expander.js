const openingAllComments = setInterval(() => {
  const loadMoreButton = document.querySelector('.ajax-pagination-btn')
  if (loadMoreButton) {
    loadMoreButton.click()
  } else {
    clearInterval(openingAllComments)
    const outDatedComments = document.querySelectorAll('.show-outdated-button')
    if (outDatedComments && outDatedComments.length > 0) {
      outDatedComments.forEach(comment => comment.click())
    }
  }
}, 200)
