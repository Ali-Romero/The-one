function initRangeSlider() {
  var valueMap = {
    pc20: {
      0: 1273566,
      1: 720221,
      2: 1155252,
      3: 1136021,
      4: 2215496,
      5: 3307908,
      6: 3802201,
      7: 4471092,
      8: 1899321,
      9: 5140906,
      10: 5584671,
      11: 6046493,
    },
    pc50: {
      0: 2153408,
      1: 1126286,
      2: 2163781,
      3: 3151958,
      4: 4116446,
      5: 3959121,
      6: 5026827,
      7: 6045581,
      8: 5841083,
      9: 6185208,
      10: 7147771,
      11: 7832286,
    },
  }

  var type = 'pc20'

  function renderTotal(from) {
    var value = valueMap[type][from]
    $('.js-range-total').text(value.toLocaleString('de-DE'))
  }

  $('.js-range-btn').on('click', function () {
    $('.js-range-btn').removeClass('calc-btn--active')
    $(this).addClass('calc-btn--active')

    type = $(this).data('type')
    renderTotal(range.result.from)
  })

  function setActiveItem(index) {
    var selector = `.js-grid-text-${index}`

    $('.irs-grid-text').removeClass('active')
    $(selector).addClass('active')
  }

  var range = $('.range')
    .ionRangeSlider({
      grid: true,
      skin: 'big',
      from: 3,
      grid_snap: false,
      hide_min_max: true,
      hide_from_to: true,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      onChange: function (data) {
        renderTotal(data.from)
        setActiveItem(data.from)
      },
      onStart: function (data) {
        renderTotal(data.from)
        setActiveItem(data.from)
      },
    })
    .data('ionRangeSlider')
}

$(document).ready(function () {
  initRangeSlider()
})
