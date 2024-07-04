function initRangeSlider() {
  var valueMap = {
    0: 170700,
    1: 151120,
    2: 200508,
    3: 246237,
    4: 290657,
    5: 46174,
    6: 67003,
    7: 82202,
    8: 440678,
    9: 468889,
    10: 496341,
    11: 524552,
  }

  function renderTotal(from) {
    var value = valueMap[from]
    var formattedValue = value.toLocaleString('de-DE') // Use German locale for dot as thousand separator
    $('.js-range-total').text(formattedValue)
  }

  function setActiveItem(index) {
    var selector = `.js-grid-text-${index}`

    $('.irs-grid-text').removeClass('active')
    $(selector).addClass('active')
  }

  $('.range').ionRangeSlider({
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
}

$(document).ready(function () {
  initRangeSlider()
})
