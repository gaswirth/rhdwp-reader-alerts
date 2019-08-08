/**
 * FRONTEND: rhdwp-reader-alerts
 *
 * Display and user interaction.
 */

;(function ($) {
  $(document).ready(function () {
    $('.close-reader-alert').click(function (e) {
      e.preventDefault()

      $(this)
        .parents('.reader-alert-item')
        .animate(
          {
            height: 0
          },
          'fast',
          function () {
            $(this).remove()
          }
        )
    })
  })
})(jQuery)
