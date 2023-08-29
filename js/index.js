
            var loginBtn = document.getElementById('login-button');
            loginBtn.addEventListener('click', function() {
             
              if (typeof window.ethereum === 'undefined') {
                alert('Please install MetaMask and refresh the page.');
                return;
              }
             
              window.ethereum.enable()
                .then(function() {
                  alert('You have been logged in.');
                  
                  window.location.href = 'hospital.html';
                })
                .catch(function(error) {
                  console.error(error);
                  alert('An error occurred while trying to log in. Please try again.');
                });
            });
          