// // Load All Messages -->
document.body.onload = loadMessages(null);
let update;

// Show Data
async function loadMessages(id) {
    const respond = await fetch('http://localhost:5500/api/messages');
    const messages = await respond.json();

    if(id == null){
        const table = document.querySelector('table');
        const thead = table.insertRow(0);
        thead.innerHTML = 'MESSAGES';

        const fieldName = table.insertRow();
        fieldName.insertCell(0).innerHTML = '<th>#</th>';
        fieldName.insertCell(1).innerHTML = '<th>Name</th>';
        fieldName.insertCell(2).innerHTML = '<th>Email</th>';
        fieldName.insertCell(3).innerHTML = '<th>Telephone</th>';
        fieldName.insertCell(4).innerHTML = '<th>Message</th>';

        messages.forEach(message => {
            const tbody = table.insertRow();
            tbody.insertCell(0).innerText = message.id;
            tbody.insertCell(1).innerText = message.name;
            tbody.insertCell(2).innerText = message.email;
            tbody.insertCell(3).innerText = message.phone;
            tbody.insertCell(4).innerText = message.message;
            tbody.insertCell(5).innerHTML = `<button id='update' onclick='loadMessages(${message.id})'>Update</button>`;
            tbody.insertCell(6).innerHTML = `<button id='delete' onclick='deleteMessage(${message.id})'>Delete</button>`;
        });

        table.insertRow().innerHTML = '<span>&copy; 2026 Messaging Platform </span>';
    }else if(id != null){
        const name = document.querySelector('#fullname');
        const email = document.querySelector('#email');
        const tel = document.querySelector('#tel');
        const message = document.querySelector('#message');

        messages.forEach(m =>{
            if(m.id == id){
                name.value = m.name;
                email.value = m.email;
                tel.value = m.phone;
                message.value = m.message;
            }
        });

        update = id;
    }
//     // <button type="button" title="Reload Messages" onclick="loadMessages()">&circlearrowright;</button>
}

// Send And Update Data
async function sendMessage() {
    const id = update;
    const name = document.querySelector('#fullname').value;
    const email = document.querySelector('input[type="email"]').value;
    const tel = document.querySelector('input[type="tel"]').value;
    const message = document.getElementById('message').value;

    if(update == null){
        // Send Message
        try{
            alert('Sending Message...');
            await fetch('http://localhost:5500/submit', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({name, email, tel, message})
            });
            loadMessages(null);
            e.target.reset();
        }catch(err){
            alert(err.message);
        }
    }else if(update != null){
        // Update Message
        alert('Updating Message...');
        try{
            await fetch('http://localhost:5500/submit', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({id, name, email, tel, message})
            });
            loadMessages(null);
            e.target.reset();
            update = null;
        }catch(err){
            alert(err.message);
        }
    }
}

// Delete Message
async function deleteMessage(id){
    try{
        await fetch('http://localhost:5500/delete', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id})
        });
        loadMessages();
    }catch(e){
        alert(e.message);
        return false;
    }
}