const openingAllComments = setInterval(() => {
  const loadMoreButton = document.querySelector('.ajax-pagination-btn')
  if (loadMoreButton) {
    loadMoreButton.click()
  } else {
    clearInterval(openingAllComments)
    const outDatedComments = document.querySelectorAll('.Details-content--closed')
    if (outDatedComments && outDatedComments.length > 0) {
      outDatedComments.forEach(comment => comment.click())
    }
  }
}, 200)
