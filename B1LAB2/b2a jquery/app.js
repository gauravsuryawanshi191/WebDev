function showBookDetails() {
    const bookName = $('#bookName').val();
    const author = $('#author').val();
    const publishingDate = $('#publishingDate').val();
    const price = $('#price').val();
    const languages = $('input[name="language"]:checked').map(function () {
      return this.value;
    }).get();
  
    if (bookName.length < 3) {
      alert('Book name must be at least 3 characters');
      return;
    }
  
    if (price <= 200) {
      alert('Price must be greater than 200');
      return;
    }
  
    if (languages.length < 2) {
      alert('Select at least two languages');
      return;
    }
  
    const bookDetails = {
      BookName: bookName,
      Author: author,
      PublishingDate: publishingDate,
      Price: price,
      Language: languages.join(', ')
    };
  
    const tableRow = `<tr>
                        <td>${bookDetails.BookName}</td>
                        <td>${bookDetails.Author}</td>
                        <td>${bookDetails.PublishingDate}</td>
                        <td>${bookDetails.Price}</td>
                        <td>${bookDetails.Language}</td>
                      </tr>`;
  
    $('#bookDetailsTable').append(tableRow);
  
    // Clear the form after showing book details
    $('#bookForm')[0].reset();
  }
  