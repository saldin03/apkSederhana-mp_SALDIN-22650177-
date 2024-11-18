let listTugas = [];  

function tambahTugas() {
    let tugas = document.getElementById("tugas").value; 
    if (tugas.trim() !== "") {  
        listTugas.push(tugas);  
        document.getElementById("tugas").value = ""; 
        tampilkanTugas();  
    }
}

function hapusTugas(index) {
    listTugas.splice(index, 1);  
    tampilkanTugas(); 
}

function tampilkanTugas() {
    const listElement = document.getElementById("list-tugas");
    listElement.innerHTML = "";  

    listTugas.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        li.onclick = () => hapusTugas(index);

        listElement.appendChild(li);  
    });
}
