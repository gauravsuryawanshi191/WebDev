// employeeApp.js
$(document).ready(function () {
    $('#showDetails').click(function () {
      const employeeName = $('#employeeName').val();
      const dob = $('#dob').val();
      const gender = $('input[name="gender"]:checked').val();
      const languages = $('input[name="language"]:checked')
        .map(function () {
          return $(this).val();
        })
        .get();
  
      if (employeeName.length >= 5) {
        const row = `<tr>
          <td>${employeeName}</td>
          <td>${dob}</td>
          <td>${gender}</td>
          <td>${languages.join(', ')}</td>
        </tr>`;
  
        $('#employeeDetailsBody').append(row);
      } else {
        alert('Employee name must be at least 5 characters');
      }
    });
  });
  