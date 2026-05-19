async function loginPi() {

  const res = await fetch('/api/auth');
  const data = await res.json();

  document.getElementById('result').innerHTML = `
    <h2>${data.message}</h2>
  `;

}

async function loadPrice() {

  const res = await fetch('/api/price');
  const data = await res.json();

  document.getElementById('result').innerHTML = `

    <div class="card">
      <h2>${data.token}</h2>
      <p>Price: $${data.price}</p>
      <p>Market Cap: $${data.marketcap}</p>
      <p>Holders: ${data.holders}</p>
    </div>

  `;

}

async function loadMeme() {

  const res = await fetch('/api/meme-ai');
  const data = await res.json();

  document.getElementById('result').innerHTML = `

    <div class="card">
      <h2>AI Meme</h2>
      <p>${data.meme}</p>
    </div>

  `;

}

async function loadHolders() {

  window.location.href = '/dashboard.html';

}