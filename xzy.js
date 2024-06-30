
    document.getElementById('search').addEventListener('input', function () {
            const searchValue = this.value.toLowerCase();
    const linkItems = document.querySelectorAll('.link-item');
            linkItems.forEach(item => {
                const text = item.innerText.toLowerCase();
    if (text.includes(searchValue)) {
        item.style.display = 'flex';
                } else {
        item.style.display = 'none';
                }
            });
        });
