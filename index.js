let state = {
    progress: 0
}


function handleDecrement(event) {
    if (state.progress === 0) {
        return
    }

    state.progress -= 10;
    let progressBar = document.querySelector('#progress-bar')    
    progressBar.style.width = `${state.progress}%`;

}

function handleIncrement (event) {
    if (state.progress === 100) {
        return
    }

    state.progress += 10;
    let progressBar = document.querySelector('#progress-bar')
    progressBar.style.width = `${state.progress}%`;
}





function readyDOM() {
    let decBtn = document.querySelector('#decBtn');
    let incBtn = document.querySelector('#incBtn');

    decBtn.addEventListener('click', handleDecrement);
    incBtn.addEventListener('click', handleIncrement);

}

readyDOM();