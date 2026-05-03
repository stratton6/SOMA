// letter.js — letter page logic

// ── Date on letter ──────────────────────────────────────────────
(function setDate() {
  const el = document.getElementById('letterDate');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
})();

// ── Admin panel (access by adding ?admin to URL) ─────────────────
(function checkAdmin() {
  if (window.location.search.includes('admin')) {
    showAdmin();
  }
})();

// ── Selected reaction ────────────────────────────────────────────
let selectedReaction = null;

function selectReaction(btn) {
  document.querySelectorAll('.reaction-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedReaction = btn.textContent.trim();
}

// ── Save feedback ────────────────────────────────────────────────
function saveFeedback() {
  const text = document.getElementById('feedbackText').value.trim();
  const conf  = document.getElementById('confirmation');

  if (!text && !selectedReaction) {
    // Nothing to save — gentle nudge
    document.getElementById('feedbackText').style.borderColor = 'rgba(232,80,106,0.6)';
    setTimeout(() => {
      document.getElementById('feedbackText').style.borderColor = '';
    }, 1500);
    return;
  }

  // Build entry
  const entry = {
    timestamp:  new Date().toISOString(),
    reaction:   selectedReaction || '—',
    message:    text || '(no message)',
  };

  // Retrieve existing entries
  const existing = JSON.parse(localStorage.getItem('sarah_feedback') || '[]');
  existing.push(entry);
  localStorage.setItem('sarah_feedback', JSON.stringify(existing));

  // Show confirmation
  conf.classList.add('show');

  // Disable to prevent duplicate sends
  document.querySelector('.send-btn').disabled  = true;
  document.querySelector('.send-btn').textContent = 'sent ✦';
  document.getElementById('feedbackText').disabled = true;
  document.querySelectorAll('.reaction-btn').forEach(b => b.disabled = true);
}

// ── Admin panel ──────────────────────────────────────────────────
function showAdmin() {
  const panel   = document.getElementById('adminPanel');
  const entries = JSON.parse(localStorage.getItem('sarah_feedback') || '[]');
  const container = document.getElementById('adminEntries');

  panel.style.display = 'block';

  if (entries.length === 0) {
    container.innerHTML = '<p class="no-entries">No replies yet... 🌸</p>';
    return;
  }

  container.innerHTML = '';

  // Most recent first
  [...entries].reverse().forEach((e, i) => {
    const date = new Date(e.timestamp).toLocaleString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
      <div class="meta">#${entries.length - i} · ${date}</div>
      ${e.reaction !== '—' ? `<div class="reaction-tag">${e.reaction}</div>` : ''}
      <div>${e.message}</div>
    `;
    container.appendChild(div);
  });
}

function closeAdmin() {
  document.getElementById('adminPanel').style.display = 'none';
}

function clearAll() {
  if (confirm('Clear all entries? This cannot be undone.')) {
    localStorage.removeItem('sarah_feedback');
    document.getElementById('adminEntries').innerHTML = '<p class="no-entries">Cleared.</p>';
  }
}