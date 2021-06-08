/*DOM -> Document Object Model -> es para representar todo el html en forma de objetos que despues podemos manipular con js*/
/*DOMContentLoaded -> significa que no nos ejecute nada de js hasta que el html se cargue por completo*/
document.addEventListener('DOMContentLoaded', function(){ 
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    /*tipo de dato const -> no se modifica, tipo de dato let -> si se modifica*/
    const btn = document.getElementById("add"); 
    let id = 1;

    /*Funcion para identificar el ID que deseo remover*/
    function removeTodo(id){
        console.log(id);
        document.getElementById(id).remove();
    }
    
    function addTodo(){
        /*Validacion: Si el titulo o descripcion es Vacio, muestro un mensaje de que los campos son requeridos */
        if (title.value === '' || description.value === ''){
            console.error("Title and Description are required ");
            alert.classList.remove("d-none");
            alert.innerText = "Title and Description are required";
            return;
        }
        
        /*  * Agrego la clase d-none de bootstrap para que el displey de alerta se desactive 
            * Creo una variable constante row, donde voy a insertar una fila nueva en la tabla, para eso a la constante row 
                la inicializo con table y llamo al metodo insertRow()
            * A la variable row creada le asigno un html con los campos que quiero insertar, usando el metodo innerHTML
        */
        alert.classList.add("d-none");
        const row = table.insertRow();
        row.setAttribute('id',id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
            <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        /** Eliminar una fila de la tabla:
            * Primero Creo el boton 'remove' 
            * Agrego una clase con varios estilos para darle diseno al boton
            * Agrego una clase con diseno de basura al boton
            * Agrego una funcion al evento 'hacer un click', al hacer click remueve de la lista el id que presione
        */
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){
            removeTodo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);
    }

    /*le asigno la funcion addTodo*/
    btn.onclick = addTodo; 

});

