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
            `;
            box.style.backgroundColor = colors[colorIndex];
            container.appendChild(box);
            colorIndex = (colorIndex + 1) % colors.length;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
