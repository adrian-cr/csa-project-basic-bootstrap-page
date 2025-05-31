const alertPlaceholder = document.getElementById('alert')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('form-button')
if (alertTrigger) {
  alertTrigger.addEventListener('click', e => {
    e.preventDefault();
    appendAlert("Message sent! We'll get back to you ASAP. :)", 'success')
  })
}
