import { TRAIL_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initModal();
});

// ==================== ACCORDION LOGIC FOR 8 PLACES ====================
function initAccordion() {
  const headers = document.querySelectorAll('[data-toggle]');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-toggle');
      const placeItem = document.getElementById(targetId);
      if (placeItem) {
        placeItem.classList.toggle('expanded');
      }
    });
  });
}

// ==================== MODAL / LIGHTBOX ====================
function initModal() {
  const modal = document.getElementById('figma-modal');
  const closeBtn = document.getElementById('figma-modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
}

function openModal() {
  const modal = document.getElementById('figma-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('figma-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global functions attached to window for HTML onclick triggers
window.openAudioGuide = function(placeId) {
  const place = TRAIL_DATA.places.find(p => p.id === placeId);
  if (!place) return;

  const body = document.getElementById('figma-modal-body');
  if (!body) return;

  body.innerHTML = `
    <div style="text-align: center;">
      <div style="width: 100%; height: 320px; border-radius: 18px; overflow: hidden; margin-bottom: 1.5rem;">
        <img src="${place.photo}" alt="${place.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <h3 class="font-brush" style="font-size: 2.8rem; margin-bottom: 0.5rem; color: #273a1e;">${place.name}</h3>
      <p style="font-weight: 700; color: #ff7f50; margin-bottom: 1.5rem; font-size: 1.15rem;">${place.address}</p>
      
      <div style="background: #faf8f5; border-radius: 16px; padding: 1.5rem; border: 2px solid #e5dccb; text-align: left; margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="font-size: 2rem;">🎧</span>
          <div>
            <strong>${place.audioTitle}</strong><br>
            <span style="font-size: 0.9rem; color: #5a6456;">Голос эко-тропы: читатели и волонтёры Детской библиотеки № 4</span>
          </div>
        </div>
        <p style="font-size: 1.1rem; line-height: 1.6; color: #232820;">
          ${place.fullDesc}
        </p>
      </div>

      <button onclick="window.playAudioCue()" style="padding: 0.85rem 2rem; background: #ff7f50; color: #fff; font-size: 1.1rem; font-weight: 700; border: none; border-radius: 9999px; cursor: pointer; box-shadow: 0 8px 20px rgba(255,127,80,0.35);">
        🔔 Прослушать звуковой фрагмент
      </button>
    </div>
  `;
  openModal();
};

window.openDrawingModal = function(artKey) {
  const mapKeyToData = {
    'anemone': {
      title: 'Ветреница лютиковидная',
      author: 'Кира Бычкова, 8 лет',
      event: 'Встреча «Все растения важны», 17 апреля 2026 г.',
      img: '/assets/a04a0a7caa5c91502b9c135d827f76fbf2f8eb83.webp'
    },
    'viola': {
      title: 'Виола (Анютины глазки)',
      author: 'Луна Усикенц, 10 лет',
      event: 'Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/f4a53a1a1cba3b88972c30d3f9c2e58c782a30b5.webp'
    },
    'maple': {
      title: 'Клён остролистный',
      author: 'Лев Никитин, 8 лет',
      event: 'Встреча «Все растения важны», 17 апреля 2026 г.',
      img: '/assets/bf7d1732ae811a55a9d7c3e36c52c2885261638a.webp'
    },
    'crocus': {
      title: 'Крокус весенний',
      author: 'Луна Усикенц, 10 лет',
      event: 'Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/e19854d470b3c75568ad1c316cafa592b80069d5.webp'
    },
    'ots': {
      title: 'Сквер Георга Отса',
      author: 'Даша Багаева, 15 лет',
      event: 'Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/57e132118aa4a0a9fbdda88400bcd524194098d7.webp'
    },
    'mama': {
      title: 'Сквер «Мама»',
      author: 'Даша Багаева, 15 лет',
      event: 'Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/4439574bfb54ec36e8fa479b26f566567ff1ad95.webp'
    },
    'gurdin': {
      title: 'Гурдин сквер',
      author: 'Даша Багаева, 15 лет',
      event: 'Волонтёр, Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/8d5a9d5a12c85d2e8275893c1186a919767909c4.webp'
    },
    'cemetery': {
      title: 'Большеохтинское кладбище',
      author: 'Даша Багаева, 15 лет',
      event: 'Волонтёр, Ботанический фото-челлендж «Кто живёт в моём дворе», с июня по август 2026 г.',
      img: '/assets/c9931462d94bafca50bc2061ece77cd5ad63bfea.webp'
    }
  };

  const item = mapKeyToData[artKey];
  if (!item) return;

  const body = document.getElementById('figma-modal-body');
  if (!body) return;

  body.innerHTML = `
    <div style="text-align: center;">
      <div style="max-height: 480px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; background: #faf8f5; border-radius: 18px; padding: 1rem;">
        <img src="${item.img}" alt="${item.title}" style="max-width: 100%; max-height: 450px; object-fit: contain;">
      </div>
      <h3 class="font-brush" style="font-size: 2.8rem; margin-bottom: 0.25rem; color: #273a1e;">${item.title}</h3>
      <p style="font-family: var(--font-kurland); font-size: 1.35rem; color: #ff7f50; font-weight: 700; margin-bottom: 0.5rem;">
        ${item.author}
      </p>
      <p style="font-size: 1rem; color: #5a6456; max-width: 600px; margin: 0 auto;">
        ${item.event}
      </p>
    </div>
  `;
  openModal();
};

window.playAudioCue = function() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (e) {
    console.warn(e);
  }
};
