document.addEventListener('DOMContentLoaded', () => {
    const fileList = document.getElementById('fileList');
    const searchInput = document.getElementById('searchInput');
    const tabs = document.querySelectorAll('.tab');
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
                <div class="card-top">
                    <div class="card-left">
                        <h3 class="name">${escapeHtml(f.name)}</h3>
                        <div class="meta">
                            <span>${escapeHtml(f.version)}</span>
                            <span>Android ${escapeHtml(f.android)}</span>
                            <span>${escapeHtml(f.date)}</span>
                            <span>${escapeHtml(f.size)}</span>
                            <span>${escapeHtml(f.maintainer)}</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="${escapeHtml(f.mega)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Download (MEGA)</a>
                        ${f.sha256 ? `<button class="btn" onclick="copySha256('${escapeHtml(f.sha256)}', this)">Copy SHA256</button>` : ''}
                    </div>
                </div>
                <p class="notes">${escapeHtml(f.notes)}</p>
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

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.removeAttribute('aria-selected');
            });
            tab.setAttribute('aria-selected', 'true');
            currentCategory = tab.dataset.cat;
            render();
        });
    });

    // Keyboard navigation for tabs
    tabs.forEach((tab, i) => {
        tab.addEventListener('keydown', e => {
            let target = null;
            if (e.key === 'ArrowRight') target = tabs[(i + 1) % tabs.length];
            else if (e.key === 'ArrowLeft') target = tabs[(i - 1 + tabs.length) % tabs.length];
            else if (e.key === 'Home') target = tabs[0];
            else if (e.key === 'End') target = tabs[tabs.length - 1];
            if (target) { e.preventDefault(); target.focus(); target.click(); }
        });
    });
});