const addClassBtn = document.getElementById('add-class-btn');
const orarList = document.getElementById('orar-list');

addClassBtn.addEventListener('click', () => {
    const course = prompt("Introdu numele cursului:");
    const time = prompt("Introdu ora cursului (ex: 10:00 - 12:00):");
    
    if (course && time) {
        const listItem = document.createElement('li');
        listItem.textContent = `${course} - ${time}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Șterge";
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });
        
        listItem.appendChild(deleteBtn);
        orarList.appendChild(listItem);
    }
});
