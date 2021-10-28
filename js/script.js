// increase number
let counter = document.querySelector('#counter')
let btns = document.querySelectorAll('.btn')

let count = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('btn-success')) {
            count++
        } else if (styles.contains('btn-danger')) {
            count--
        } else {
            count = 0;
        }
    
        // if (count > 0) {
        //     counter.styles.color = 'green';
        // }
    
        // if (count < 0) {
        //     counter.styles.color = 'red';
        // }

        // if (count === 0) {
        //     counter.styles.color = 'black';
        // }

        counter.textContent = count;

    })
})