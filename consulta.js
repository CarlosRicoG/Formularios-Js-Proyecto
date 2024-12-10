document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const TableBody = document.querySelector("tbody");

    // Cargar los datos de la tabla al inicio
    const loadTableData = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        renderTable(users);
    };

    // Guardar los datos en localStorage
    const saveUser = (user, userIndex) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];


        if (userIndex !== "") { 
            users[userIndex] = user; 
        } else {
            users.push(user);  
        }

        localStorage.setItem("users", JSON.stringify(users)); 
        renderTable(users);  
    };

    // Mostrar los datos en la tabla
    const renderTable = (users) => {
        TableBody.innerHTML = "";  

        users.forEach((user, index) => {
            const row = document.createElement("tr"); 
            row.innerHTML = ` 
                <td>${index + 1}</td>
                <td>${user.nombre}</td> 
                <td>${user.documento}</td> 
                <td>${user.correo}</td>
                <td>${user.ciudad}</td>
                <td>${user.fechanacimiento}</td>
                <td> 
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dialogo1" onclick="userConsult(${index})">Consultar</button>
                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dialogo1" onclick="userEdit(${index})">Editar</button> 
                    <button class="btn btn-danger" onclick="deleteUser(${index})">Eliminar</button> 
                </td>
            `;
            TableBody.appendChild(row); 
        });
    };

    // Manejo del envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userIndex = document.getElementById("userIndex").value; 

        const user = {
            nombre: document.getElementById("nombre").value,
            documento: document.getElementById("documento").value,
            correo: document.getElementById("email").value,
            ciudad: document.getElementById("ciudad").value,
            fechanacimiento: document.getElementById("fechanacimiento").value,
        };

        saveUser(user, userIndex);  

        form.reset();  
        document.getElementById("userIndex").value = '';  
    });

   
    loadTableData();
});

// Consulta el Usuario 
userConsult = (index) => {
   
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users[index];

    if (user) { 
        document.getElementById("nombre").value = user.nombre;
        document.getElementById("documento").value = user.documento;
        document.getElementById("email").value = user.correo;
        document.getElementById("ciudad").value = user.ciudad;
        document.getElementById("fechanacimiento").value = user.fechanacimiento;

        
        document.querySelectorAll("#myform input").forEach(field => {
            field.disabled = true;
        });

        
        const Consultbtn = document.getElementById("Consultbtn");
        Consultbtn.disabled = true;
    }
};

const deleteUser = (index) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    users.splice(index, 1)
    localStorage.setItem("users", JSON.stringify(users))
    
    location.reload()
    
    renderTable(users)

};


window.userEdit = (index) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users[index];

    if (user) { 
        document.getElementById("nombre").value = user.nombre; 
        document.getElementById("documento").value = user.documento;
        document.getElementById("ciudad").value = user.ciudad;
        document.getElementById("email").value = user.correo;
        document.getElementById("fechanacimiento").value = user.fechanacimiento;
    } 

    
    document.getElementById("userIndex").value = index;

    
    const Consultbtn = document.getElementById("Consultbtn");
    Consultbtn.disabled = false; 

    document.querySelectorAll("#myform input").forEach(field => {
        field.disabled = false; 
    });
};

// Limpiar Formulario
const ResetForm = () => { 
    document.getElementById("myform").reset(); 
    document.getElementById("userIndex").value = "";  
};
