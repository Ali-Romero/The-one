function initAnchorBtn() {
  $('[data-scroll-top]').on('click', function () {
    $('.modal-scrollable').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })
}

function setCurrentYear() {
  $('[data-current-year]').text(new Date().getFullYear())
}

$(document).ready(function () {
  initAnchorBtn()
  setCurrentYear()

  $('input').inputmask()
})
