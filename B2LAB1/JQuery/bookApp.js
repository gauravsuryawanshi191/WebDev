// bookApp.js
$(document).ready(function () {
  $('#showDetails').click(function () {
    const bookName = $('#bookName').val();
    const author = $('#author').val();
    const publishingDate = $('#publishingDate').val();
    const price = $('#price').val();
    const languages = $('input[name="language"]:checked')
      .map(function () {
        return $(this).val();
      })
      .get();

    if (bookName.length >= 3 && price > 200 && languages.length >= 2) {
      const row = `<tr>
        <td>${bookName}</td>
        <td>${author}</td>
        <td>${publishingDate}</td>
        <td>${price}</td>
        <td>${languages.join(',')}</td>
      </tr>`;

      $('#bookDetailsBody').append(row);
    } else {
      alert('Please check the input criteria: Book Name (>= 3 characters), Price (> 200), and at least two languages selected.');
    }
  });
});
