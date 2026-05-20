/* AI 工具对比站 - 前端交互 */
(function() {
  'use strict';

  // 首页搜索功能
  const searchInput = document.getElementById('hero-search');
  if (searchInput) {
    const toolData = window.__TOOLS_DATA__ || [];
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      if (!query || query.length < 1) {
        if (searchResults) searchResults.innerHTML = '';
        return;
      }
      const matches = toolData.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.company.toLowerCase().includes(query) ||
        t.tagline.toLowerCase().includes(query)
      ).slice(0, 5);

      if (searchResults) {
        if (matches.length === 0) {
          searchResults.innerHTML = '<div class="search-empty">未找到匹配的工具</div>';
        } else {
          searchResults.innerHTML = matches.map(t =>
            `<a href="tools/${t.slug}.html" class="search-item">
              <span class="search-item-name">${t.name}</span>
              <span class="search-item-desc">${t.tagline}</span>
            </a>`
          ).join('');
        }
      }
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim().toLowerCase();
        const match = toolData.find(t => t.name.toLowerCase() === query || t.slug === query);
        if (match) {
          window.location.href = 'tools/' + match.slug + '.html';
        }
      }
    });

    // 点击外部关闭搜索结果
    document.addEventListener('click', function(e) {
      if (searchResults && !searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.innerHTML = '';
      }
    });
  }

  // 分类页筛选
  const filterBtns = document.querySelectorAll('[data-filter]');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const cards = document.querySelectorAll('.tool-card[data-category]');
        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 对比表格交互 - 高亮胜出项
  const compareCells = document.querySelectorAll('.compare-table td[data-winner]');
  compareCells.forEach(cell => {
    if (cell.dataset.winner === 'true') {
      cell.classList.add('winner-cell');
    }
  });

})();
