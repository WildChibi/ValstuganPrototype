import './style.css'
import centerpartietLogo from '../Bilder/centerpartiet.png'
import kristdemokraternaLogo from '../Bilder/kristdemokraterna.png'
import liberalernaLogo from '../Bilder/Liberalerna.png'
import miljopartietLogo from '../Bilder/miljöpartiet.png'
import moderaternaLogo from '../Bilder/moderaterna.png'
import socialdemokraternaLogo from '../Bilder/socialdemokraterna.png'
import sverigedemokraternaLogo from '../Bilder/sverigedemokraterna.png'
import vansterpartietLogo from '../Bilder/vänsterpartiet.png'

document.querySelector('#app').innerHTML = `
<header class="topbar">
  <button class="menu-button" id="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Öppna meny">
    <span class="menu-lines" aria-hidden="true"><i></i><i></i><i></i></span>
    <span>Meny</span>
  </button>
  <a class="wordmark" href="#top" aria-label="Valstugan, startsida"><span class="wordmark-mark">V</span> valstugan</a>
  <span class="topbar-note">En plats för dina valfrågor</span>
</header>

<nav class="site-menu" id="site-menu" aria-label="Huvudmeny" hidden>
  <a href="#top">Hem <span>01</span></a>
  <a href="#conversation">Fråga valstugan <span>02</span></a>
  <a href="#party-section">Prata med ett parti <span>03</span></a>
  <a href="https://www.val.se/" target="_blank" rel="noreferrer">Valmyndigheten <span>↗</span></a>
</nav>

<main id="top">
  <section class="page welcome active" aria-labelledby="welcome-title">
    <div class="welcome-copy">
      <p class="eyebrow"><span class="status-dot"></span> Din digitala valstuga</p>
      <h1 id="welcome-title">Det börjar<br>med en <em>fråga.</em></h1>
      <p class="intro">Vad undrar du om valet? Skriv till oss så hjälps vi åt att reda ut det.</p>
      <div class="home-actions">
        <a class="home-button home-button-primary" href="#conversation">Chatta med en opartisk chatt <span aria-hidden="true">↓</span></a>
        <a class="home-button home-button-secondary" href="#party-section">Chatta med ett parti <span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <div class="ballot-art" aria-hidden="true">
      <div class="art-caption">DIN RÖST<br>DIN VARDAG</div>
      <div class="ballot-card"><span class="ballot-check">✓</span><span class="ballot-line"></span><span class="ballot-line short"></span></div>
      <div class="art-stamp">S<br>26</div>
      <span class="art-spark">✳</span>
    </div>
    <div class="side-note">SAMTAL SOM<br>GÖR SKILLNAD</div>
  </section>

  <section class="page conversation" id="conversation" aria-labelledby="chat-title" aria-hidden="true">
    <div class="conversation-heading">
      <div><p class="eyebrow">FRÅGA, FUNDERA, FÖRSTÅ</p><h2 id="chat-title">Vad har du på hjärtat?</h2></div>
      <span class="assistant-status"><span class="status-dot"></span> Assistenten är här</span>
    </div>
    <div class="chat-log" id="chat-log" aria-live="polite" aria-label="Konversation">
      <div class="message assistant-message"><span class="message-avatar">V</span><p>Hej! Jag är Valstugans digitala assistent. Vad vill du veta om valet?<a class="source-bubble" href="https://www.val.se/" target="_blank" rel="noreferrer">Källa: Valmyndigheten ↗</a></p></div>
    </div>
    <form class="chat-form" id="chat-form">
      <label class="sr-only" for="chat-input">Skriv din fråga</label>
      <input id="chat-input" name="message" type="text" placeholder="Skriv din fråga här …" autocomplete="off" required>
      <span class="input-hint">Tryck Enter för att skicka</span>
      <button class="send-button" type="submit" aria-label="Skicka fråga" title="Skicka fråga"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg></button>
    </form>
    <p class="chat-disclaimer">Det här är en prototyp. För officiell information, besök <a href="https://www.val.se/" target="_blank" rel="noreferrer">val.se</a>.</p>
  </section>

  <section class="page party-section" id="party-section" aria-labelledby="party-title" aria-hidden="true">
    <div class="party-panel" id="party-picker">
      <div class="party-heading">
        <h2 id="party-title">Prata med ett parti</h2>
        <p>Välj det parti du vill skriva till.</p>
      </div>
      <div class="party-grid" role="group" aria-label="Välj ett parti">
        <button class="party-option" type="button" data-party="Socialdemokraterna" aria-pressed="false"><img class="party-logo" src="${socialdemokraternaLogo}" alt=""><span>Socialdemokraterna</span></button>
        <button class="party-option" type="button" data-party="Moderaterna" aria-pressed="false"><img class="party-logo" src="${moderaternaLogo}" alt=""><span>Moderaterna</span></button>
        <button class="party-option" type="button" data-party="Sverigedemokraterna" aria-pressed="false"><img class="party-logo" src="${sverigedemokraternaLogo}" alt=""><span>Sverigedemokraterna</span></button>
        <button class="party-option" type="button" data-party="Centerpartiet" aria-pressed="false"><img class="party-logo" src="${centerpartietLogo}" alt=""><span>Centerpartiet</span></button>
        <button class="party-option" type="button" data-party="Vänsterpartiet" aria-pressed="false"><img class="party-logo" src="${vansterpartietLogo}" alt=""><span>Vänsterpartiet</span></button>
        <button class="party-option" type="button" data-party="Kristdemokraterna" aria-pressed="false"><img class="party-logo" src="${kristdemokraternaLogo}" alt=""><span>Kristdemokraterna</span></button>
        <button class="party-option" type="button" data-party="Liberalerna" aria-pressed="false"><img class="party-logo" src="${liberalernaLogo}" alt=""><span>Liberalerna</span></button>
        <button class="party-option" type="button" data-party="Miljöpartiet" aria-pressed="false"><img class="party-logo" src="${miljopartietLogo}" alt=""><span>Miljöpartiet</span></button>
      </div>
    </div>
    <div class="party-chat" id="party-chat" aria-labelledby="party-chat-title" hidden>
      <button class="party-back" id="party-back" type="button"><span aria-hidden="true">←</span> Välj ett annat parti</button>
      <div class="party-chat-brand">
        <img id="party-chat-logo" src="" alt="">
        <h2 id="party-chat-title"></h2>
      </div>
      <span class="assistant-status"><span class="status-dot"></span> Partiets frågestuga</span>
      <div class="chat-log party-chat-log" id="party-chat-log" aria-live="polite" aria-label="Konversation med partiet"></div>
      <form class="chat-form" id="party-chat-form">
        <label class="sr-only" for="party-chat-input">Skriv ditt meddelande</label>
        <input id="party-chat-input" name="message" type="text" placeholder="Skriv ditt meddelande här …" autocomplete="off" required>
        <span class="input-hint">Tryck Enter för att skicka</span>
        <button class="send-button" type="submit" aria-label="Skicka meddelande" title="Skicka meddelande"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg></button>
      </form>
      <p class="party-disclaimer">Det här är en prototyp. Ditt meddelande skickas inte till partiet.</p>
    </div>
  </section>
</main>
`

const menuToggle = document.querySelector('#menu-toggle')
const siteMenu = document.querySelector('#site-menu')
const pages = [...document.querySelectorAll('main > .page')]
const chatForm = document.querySelector('#chat-form')
const chatInput = document.querySelector('#chat-input')
const chatLog = document.querySelector('#chat-log')
const partyOptions = document.querySelectorAll('.party-option')
const partyPicker = document.querySelector('#party-picker')
const partyChat = document.querySelector('#party-chat')
const partyBack = document.querySelector('#party-back')
const partyChatLogo = document.querySelector('#party-chat-logo')
const partyChatTitle = document.querySelector('#party-chat-title')
const partyChatLog = document.querySelector('#party-chat-log')
const partyChatForm = document.querySelector('#party-chat-form')
const partyChatInput = document.querySelector('#party-chat-input')
const partyTints = {
  Socialdemokraterna: '#f5d6d1',
  Moderaterna: '#d9e6f2',
  Sverigedemokraterna: '#f5e7af',
  Centerpartiet: '#dcebd7',
  Vänsterpartiet: '#f5d6d1',
  Kristdemokraterna: '#d9e6f2',
  Liberalerna: '#d9e6f2',
  Miljöpartiet: '#dcebd7',
}
const partySources = {
  Socialdemokraterna: { logo: socialdemokraternaLogo, url: 'https://www.socialdemokraterna.se/' },
  Moderaterna: { logo: moderaternaLogo, url: 'https://moderaterna.se/' },
  Sverigedemokraterna: { logo: sverigedemokraternaLogo, url: 'https://sd.se/' },
  Centerpartiet: { logo: centerpartietLogo, url: 'https://www.centerpartiet.se/' },
  Vänsterpartiet: { logo: vansterpartietLogo, url: 'https://www.vansterpartiet.se/' },
  Kristdemokraterna: { logo: kristdemokraternaLogo, url: 'https://kristdemokraterna.se/' },
  Liberalerna: { logo: liberalernaLogo, url: 'https://www.liberalerna.se/' },
  Miljöpartiet: { logo: miljopartietLogo, url: 'https://www.mp.se/' },
}
let selectedParty = ''

function activatePage(hash, updateHistory = true) {
  const page = hash === '#top'
    ? pages[0]
    : pages.find((candidate) => `#${candidate.id}` === hash)

  if (!page) return

  document.documentElement.style.setProperty(
    '--page-background',
    page.id === 'party-section' && selectedParty ? partyTints[selectedParty] : '#f5f2e9',
  )

  pages.forEach((candidate) => {
    const isActive = candidate === page
    candidate.classList.toggle('active', isActive)
    candidate.setAttribute('aria-hidden', String(!isActive))
    candidate.inert = !isActive
    candidate.scrollTop = 0
  })

  if (updateHistory && window.location.hash !== hash) {
    window.history.pushState(null, '', hash)
  }
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]')
  if (!link) return

  const hash = link.getAttribute('href')
  if (!pages.some((page) => hash === '#top' || `#${page.id}` === hash)) return

  event.preventDefault()
  activatePage(hash)
})

window.addEventListener('popstate', () => {
  activatePage(window.location.hash || '#top', false)
})

activatePage(window.location.hash || '#top', false)

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Öppna meny' : 'Stäng meny')
  siteMenu.hidden = isOpen
})

siteMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    siteMenu.hidden = true
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Öppna meny')
  }
})

chatForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const question = chatInput.value.trim()
  if (!question) return

  appendMessage(question, 'user-message')
  chatInput.value = ''
  window.setTimeout(() => {
    appendMessage('Tack för din fråga! Jag är en prototyp och kan inte hämta aktuell valinformation ännu. På val.se hittar du verifierade svar från Valmyndigheten.', 'assistant-message')
  }, 350)
})

partyOptions.forEach((option) => {
  option.addEventListener('click', () => {
    selectedParty = option.dataset.party
    const partySource = partySources[selectedParty]
    document.documentElement.style.setProperty('--page-background', partyTints[selectedParty])
    partyOptions.forEach((partyOption) => {
      partyOption.setAttribute('aria-pressed', String(partyOption === option))
    })
    partyChatLogo.src = partySource.logo
    partyChatLogo.alt = `${selectedParty}s logotyp`
    partyChatTitle.textContent = `${selectedParty} Frågestuga`
    partyChatLog.replaceChildren()
    appendMessage(`Hej! Här kan du ställa frågor om ${selectedParty}. Vad undrar du?`, 'assistant-message', partyChatLog, partySource.url, selectedParty)
    partyPicker.hidden = true
    partyChat.hidden = false
    partyChatInput.focus()
  })
})

partyBack.addEventListener('click', () => {
  partyChat.hidden = true
  partyPicker.hidden = false
  selectedParty = ''
  document.documentElement.style.setProperty('--page-background', '#f5f2e9')
  partyOptions.forEach((option) => option.setAttribute('aria-pressed', 'false'))
})

partyChatForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const question = partyChatInput.value.trim()
  if (!selectedParty || !question) return

  appendMessage(question, 'user-message', partyChatLog)
  partyChatInput.value = ''
  window.setTimeout(() => {
    appendMessage(`Tack för din fråga. Det här är en prototyp och svaret kommer inte från ${selectedParty}. Läs mer på partiets webbplats.`, 'assistant-message', partyChatLog, partySources[selectedParty].url, selectedParty)
  }, 350)
})

function appendMessage(text, className, targetLog = chatLog, sourceUrl = 'https://www.val.se/', sourceName = 'Valmyndigheten') {
  const message = document.createElement('div')
  message.className = `message ${className}`

  if (className === 'assistant-message') {
    const avatar = document.createElement('span')
    avatar.className = 'message-avatar'
    avatar.textContent = 'V'
    message.append(avatar)
  }

  const paragraph = document.createElement('p')
  paragraph.textContent = text

  if (className === 'assistant-message') {
    const source = document.createElement('a')
    source.className = 'source-bubble'
    source.href = sourceUrl
    source.target = '_blank'
    source.rel = 'noreferrer'
    source.textContent = `Källa: ${sourceName} ↗`
    paragraph.append(source)
  }

  message.append(paragraph)
  targetLog.append(message)
  message.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}
