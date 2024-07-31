function offDisplay() {
    document.getElementById("offdisplay").style.display = "none";
    document.getElementById("ondisplay").style.display = "block";
}

let currentMessage = 1;

document.getElementById('next').addEventListener('click', function () {
    document.getElementById(`messageall_${currentMessage}`).classList.add('hidden');
    currentMessage++;
    document.getElementById(`messageall_${currentMessage}`).classList.remove('hidden');
    updateButtons();
});

document.getElementById('prev').addEventListener('click', function () {
    document.getElementById(`messageall_${currentMessage}`).classList.add('hidden');
    currentMessage--;
    document.getElementById(`messageall_${currentMessage}`).classList.remove('hidden');
    updateButtons();
});

function updateButtons() {
    document.getElementById('prev').style.display = currentMessage === 1 ? 'none' : 'block';
    document.getElementById('next').style.display = currentMessage === 3 ? 'none' : 'block';
}
