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
              <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H11.25V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H12.75V8Z" fill="#000000"></path></svg>
            `;
            box.style.backgroundColor = colors[colorIndex];
            container.appendChild(box);
            colorIndex = (colorIndex + 1) % colors.length;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
