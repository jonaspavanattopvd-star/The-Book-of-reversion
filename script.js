// Minimal JS: keyboard navigation and simple progress
document.addEventListener('DOMContentLoaded', function(){
  // allow left/right arrow navigation if reader controls exist
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  if(prev) prev.addEventListener('click', ()=>{ window.location.href = prev.dataset.href; });
  if(next) next.addEventListener('click', ()=>{ window.location.href = next.dataset.href; });

  // reading progress (if .chapter-content exists)
  const content = document.querySelector('.chapter-content');
  const bar = document.getElementById('progress');
  if(content && bar){
    document.addEventListener('scroll', ()=>{
      const rect = content.getBoundingClientRect();
      const h = content.scrollHeight - window.innerHeight;
      const sc = Math.min(1, Math.max(0, window.scrollY / h));
      bar.style.width = (sc*100) + '%';
    });
  }
});
