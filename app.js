document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('fileList');
    const searchInput = document.getElementById('searchInput');
    const chips = document.querySelectorAll('.chip');
    let files = [];
    let currentCategory = 'all';

    fetch('files.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load');
            return response.json();
        })
        .then(data => {
            files = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            render();
        })
        .catch(err => {
            fileList.innerHTML = '<p class="error">Unable to load file list. Please check your connection or try again later.</p>';
        });

    function render() {
        const query = searchInput.value.toLowerCase();
        const filtered = files.filter(f => {
            const matchesCat = currentCategory === 'all' || f.category === currentCategory;
            const matchesSearch = f.name.toLowerCase().includes(query) || 
                                  f.notes.toLowerCase().includes(query) || 
                                  f.version.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            fileList.innerHTML = '<p class="empty">No files match your search.</p>';
            return;
        }

        fileList.innerHTML = filtered.map(f => `
            <article class="card">
                <h3>${escapeHtml(f.name)}</h3>
                <dl>
                    <dt>Version</dt><dd>${escapeHtml(f.version)}</dd>
                    <dt>Android</dt><dd>${escapeHtml(f.android)}</dd>
                    <dt>Date</dt><dd>${escapeHtml(f.date)}</dd>
                    <dt>Size</dt><dd>${escapeHtml(f.size)}</dd>
                    <dt>Maintainer</dt><dd>${escapeHtml(f.maintainer)}</dd>
                </dl>
                <p>${escapeHtml(f.notes)}</p>
                <div class="actions">
                    <a href="${escapeHtml(f.mega)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download (MEGA)</a>
                    ${f.sha256 ? `<button class="btn btn-secondary" onclick="copySha256('${escapeHtml(f.sha256)}', this)">Copy SHA256</button>` : ''}
                </div>
            </article>
        `).join('');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    window.copySha256 = function(sha, btn) {
        navigator.clipboard.writeText(sha).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy SHA256', 2000);
        });
    };

    searchInput.addEventListener('input', render);
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.cat;
            render();
        });
    });
});