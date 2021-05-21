
const form = document.getElementById('check-out');


form.addEventListener('submit', function(event) {
  alert('Form Submitted!');
  event.preventDefault();

  const results = document.getElementsByTagName('input')
  for (var i = 0; i < 4; i++) {
    const result = results[i]
    console.log(result.value)
  }

  console.log(document.getElementsByTagName('select')[0].value)
  console.log(document.getElementById('zip').value)

  const radios = document.getElementsByClassName('experience');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      break;
    }
  }

  console.log(document.getElementsByTagName('select')[1].value)

})
