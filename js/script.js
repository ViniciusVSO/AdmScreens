function showModalNotify(){
    var element = document.getElementById("modalNotify");
    element.classList.add("show-modal");
}

function closeModalNotify(){
    var element = document.getElementById("modalNotify")
    element.classList.remove("show-modal");
}

const abrirBtn = document.getElementById("addNew");
const modal_container = document.getElementById("modal_container");
const modal_containerDelete = document.getElementById("modal_container-delete");
const modal_containerEdit = document.getElementById("modal_container-edit");
const fecharBtn = document.getElementById("closemodal-box");

        function openModal(){
            modal_container.classList.add('show');
        }
        function openModalDelete(){
            modal_containerDelete.classList.add('show');
        }
        function openModalEdit(){
            modal_containerEdit.classList.add('show');
        }
        
        function closeModal(){
            modal_container.classList.remove('show');
        }
        function closeModalDelete(){
            modal_containerDelete.classList.remove('show');
        }
        function closeModalEdit(){
            modal_containerEdit.classList.remove('show');
        }