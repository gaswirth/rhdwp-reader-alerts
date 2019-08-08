/**
 * FRONTEND: rhdwp-reader-alerts
 *
 * Display and user interaction.
 *
 * @uses js-cookie
 */

;(function ($) {
  const cookie_prefix = 'rhdwp_reader_alert__'

  function removeDismissedAlerts () {
    $('.reader-alert-item').each(function () {
      const id = $(this).attr('data-post-id')

      if (Cookies.get(`${cookie_prefix}${id}`)) {
        $(this).remove()
      }
    })
  }

  function clickActions () {
    $('.close-reader-alert').click(function (e) {
      e.preventDefault()
      const item = $(this).parents('.reader-alert-item')
      const id = item.attr('data-post-id')

      item.animate(
        {
          height: 0
        },
        'fast',
        function () {
          $(this).remove()
        }
      )

      Cookies.set(`${cookie_prefix}${id}`, Date.now(), { expires: 7 })
    })
  }

  $(document).ready(function () {
    removeDismissedAlerts()

    $('.reader-alerts').animate({ opacity: 1 })

    clickActions()
  })
})(jQuery)
