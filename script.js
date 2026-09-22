(function(){
function format(sec, fmt){
    sec = Math.max(0, sec);
    var h = Math.floor(sec/3600);
    var m = Math.floor((sec%3600)/60);
    var s = Math.floor(sec%60);
    function pad(n){ return String(n).padStart(2,'0'); }
    if(fmt === 'ms'){ return pad(m + h*60) + ':' + pad(s); }
    return pad(h) + ':' + pad(m) + ':' + pad(s);
  }

  var timers = Array.prototype.slice.call(document.querySelectorAll('[data-seconds]')).map(function(el){
    return { el: el, remaining: parseInt(el.getAttribute('data-seconds'), 10), fmt: el.getAttribute('data-format') || 'hms' };
  });

  function tick(){
    timers.forEach(function(t){
      if(t.remaining > 0){ t.remaining -= 1; }
      t.el.textContent = format(t.remaining, t.fmt);
    });
  }
  setInterval(tick, 1000);

  var options = document.querySelectorAll('.split-option');
  var soloVisual = document.getElementById('split-visual-solo');
  var groupVisual = document.getElementById('split-visual-group');
  options.forEach(function(btn){
    btn.addEventListener('click', function(){
      options.forEach(function(b){ b.setAttribute('aria-pressed','false'); });
      btn.setAttribute('aria-pressed','true');
      var target = btn.getAttribute('data-target');
      if(target === 'group'){
        soloVisual.style.display = 'none';
        groupVisual.style.display = 'block';
      } else {
        soloVisual.style.display = 'block';
        groupVisual.style.display = 'none';
      }
    });
  });
})();
