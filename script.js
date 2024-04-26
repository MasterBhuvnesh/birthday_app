{/* <script>
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');
            const colors = ['#ffd2bf', '#9ff5ce', '#f3b8ee', '#d8bcff', '#a2e2fd', '#feb8b8'];
            let colorIndex = 0;

            data.forEach((item, index) => {
                const box = document.createElement('div');
                box.className = 'box';
                box.innerHTML = `
                    <p>${item.name}</p>
                    <span class="date">${item.date}</span>
                `;
                box.style.backgroundColor = colors[colorIndex];
                container.appendChild(box);
                colorIndex = (colorIndex + 1) % colors.length;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
</script>  */}












fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => {
            const dateA = new Date(`2024 ${a.date}`);
            const dateB = new Date(`2024 ${b.date}`);
            return dateA - dateB;
        });

        const container = document.getElementById('container');
        const colors = ['#ffd2bf', '#9ff5ce', '#f3b8ee', '#d8bcff', '#a2e2fd', '#feb8b8'];
        let colorIndex = 0;

        data.forEach((item, index) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.innerHTML = `
                <p>${item.name}</p>
                <span class="date">${item.date}</span>
                <button class="box-btn">
                <svg " viewBox="0 0 24 24" stroke-width="1.5"  xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14.3632 5.65156L15.8431 4.17157C16.6242 3.39052 17.8905 3.39052 18.6716 4.17157L20.0858 5.58579C20.8668 6.36683 20.8668 7.63316 20.0858 8.41421L18.6058 9.8942M14.3632 5.65156L4.74749 15.2672C4.41542 15.5993 4.21079 16.0376 4.16947 16.5054L3.92738 19.2459C3.87261 19.8659 4.39148 20.3848 5.0115 20.33L7.75191 20.0879C8.21972 20.0466 8.65806 19.8419 8.99013 19.5099L18.6058 9.8942M14.3632 5.65156L18.6058 9.8942" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
             
            `;
            box.style.backgroundColor = colors[colorIndex];
            container.appendChild(box);
            colorIndex = (colorIndex + 1) % colors.length;
        });
    })
    .catch(error => console.error('Error fetching data:', error));

