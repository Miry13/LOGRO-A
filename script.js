const contacts = []; 

    function guardarRegistro() {
      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const email = document.getElementById("email").value;
      const etiqueta = document.getElementById("etiqueta").value;

      if (nombre && telefono && email && etiqueta) {
        const table = document.getElementById("TableBody");

        contacts.push({ nombre, telefono, email, etiqueta });

        const miru = table.insertRow();
        miru.innerHTML = `
          <td>${nombre}</td>
          <td>${telefono}</td>
          <td>${email}</td>
          <td>${etiqueta}</td>
          <td>
            <button class="btn btn-warning btn-sm me-1" onclick="editarRegistro(this)">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarRegistro(this)">Eliminar</button>
          </td>
        `;

        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("etiqueta").value = "";
      } else {
        alert("Llena los campos primero, si no, no se puede guardar.");
      }
    }

    function eliminarRegistro(button) {
      const miru = button.parentNode.parentNode;
      miru.parentNode.removeChild(miru);

      const index = Array.from(miru.parentNode.children).indexOf(miru);
      if (index > -1) contacts.splice(index, 1);
    }

    function editarRegistro(button) {
      const miru = button.parentNode.parentNode;

      document.getElementById("nombre").value = miru.cells[0].innerText;
      document.getElementById("telefono").value = miru.cells[1].innerText;
      document.getElementById("email").value = miru.cells[2].innerText;
      document.getElementById("etiqueta").value = miru.cells[3].innerText;

      eliminarRegistro(button);
    }

    document.getElementById("searchBar").addEventListener("input", function() {
      const michy = this.value.toLowerCase(); 
      const table = document.getElementById("TableBody");

      Array.from(table.rows).forEach(row => {
        const nom = row.cells[0].innerText.toLowerCase();
        const etiq = row.cells[3].innerText.toLowerCase();
        row.style.display = nom.includes(michy) || etiq.includes(michy) ? "" : "none";
      });
    });