// Lazy load results - show 10 at a time
document.addEventListener('DOMContentLoaded', function() {
  const resultItems = document.querySelectorAll('.result-item');
  const itemsPerPage = 10;
  let currentlyShown = 0;
  
  function showMore() {
    for (let i = currentlyShown; i < Math.min(currentlyShown + itemsPerPage, resultItems.length); i++) {
      resultItems[i].style.display = 'grid';
    }
    currentlyShown += itemsPerPage;
    
    // Hide load more button if all items shown
    if (currentlyShown >= resultItems.length) {
      document.getElementById('loadMoreBtn')?.remove();
    } else {
      updateButtonText();
    }
  }
  
  function updateButtonText() {
    const remaining = resultItems.length - currentlyShown;
    const btn = document.getElementById('loadMoreBtn');
    if (btn) {
      btn.querySelector('span').textContent = `Load More Results (${Math.min(itemsPerPage, remaining)} more)`;
    }
  }
  
  // Initially hide all results
  resultItems.forEach(item => item.style.display = 'none');
  
  // Show first batch
  showMore();
  
  // Add load more button
  const resultsGrid = document.querySelector('.results-grid');
  if (resultsGrid && resultItems.length > itemsPerPage) {
    const loadMoreDiv = document.createElement('div');
    loadMoreDiv.style.cssText = 'text-align: center; margin: 3rem 0;';
    loadMoreDiv.innerHTML = '<button id="loadMoreBtn" class="btn btn-primary"><span>Load More Results (10 more)</span></button>';
    resultsGrid.after(loadMoreDiv);
    
    document.getElementById('loadMoreBtn').addEventListener('click', showMore);
  }
});