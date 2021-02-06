axios.get('http://localhost:5000/product')
.then(function (response) {
    var tbody = document.getElementById("tbody");
    var addDossier = '';
    response.data.forEach(element => {
      addDossier += '<tr>';
      addDossier += '<td>';
      addDossier += "<p style='font-size:15px'>" + element.productname + "</p>";
      addDossier += "</td>";
      addDossier += '<td>';
      addDossier += "<p style='font-size:15px'>" + element.productPrice + "</p>";
      addDossier += "</td>";
      addDossier += '<td>';
      addDossier += "<p style='font-size:15px'>" + element.category + "</p>";
      addDossier += "</td>";
      addDossier += '<td>';
      addDossier += "<p style='font-size:15px'>" + element.souscategories + "</p>";
      addDossier += "</td>";
      addDossier += '<td>';
      addDossier += '<button onclick ="removepro(601d0eaf5c7f9b29c033e5a8)">delete</button> ';
      addDossier += "</td>";
   
    });
    tbody.innerHTML = addDossier;
  })
  .catch(function (err) {
    console.log(err);
  });

  function addpro() {

    var name = document.getElementById('proname').value;
    var prenom = document.getElementById('proprice').value;
    var cin = document.getElementById('procate').value;
    var email = document.getElementById('prosous').value;
    
    
    params = {
        productname: name,
        productPrice: prenom,
        souscategories: email,
        category: cin,
      
    }
    
    let res = axios.post('http://localhost:5000/product/add', params);
    

    
    }
    addpro();
    /////////update data///////////
    function removepro(id) {
        console.log(id);
        
        //  axios.delete('http://localhost:5000/product/delete/'+id+'');
        
        }
        
       

  
  
