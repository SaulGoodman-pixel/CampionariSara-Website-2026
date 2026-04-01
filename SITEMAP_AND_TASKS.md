# Sitemap & Tasks - Campionari Sara Group

## 1. Sitemap Structure (URIs)

| Page | IT URL | EN URL | Priority |
| :--- | :--- | :--- | :--- |
| **Home** | `/it/` | `/en/` | High |
| **Company** | `/it/azienda` | `/en/company` | High |
| **How we work** | `/it/come-lavoriamo` | `/en/how-we-work` | Medium |
| **Products** | `/it/prodotti` | `/en/products` | High |
| **Consultancy** | `/it/consulenza` | `/en/consultancy` | Medium |
| **News** | `/it/news` | `/en/news` | Low |
| **Contacts** | `/it/contatti` | `/en/contacts` | High |

---

## 2. Page Content Strategy & Microcopy

### Global Elements
*   **Header**: Logo (Left), Nav (Center/Right), Lang Switch (IT/EN), CTA Button ("Richiedi Preventivo" / "Get a Quote")
*   **Footer**: Logo, Quick Links, Address [TODO_ADDRESS], P.IVA, Contacts, Socials (?), Legal Links.

### Home (`/`)
*   **H1**: Campionari Sara Group
*   **Hero Sub**: "Da 40 anni, il riferimento per qualità e affidabilità nei campionari tessili."
*   **CTA**: [Scopri i prodotti] [Contattaci]
*   **H2: L'Eccellenza Italiana**: Breve intro su 40 anni di esperienza e Made in Italy.
*   **H2: Cosa Facciamo**: Grid visuale (Campionari, Tirelle, Cartelle colori, Legatoria).
*   **H2: Global Reach**: "Know-how esportato in tutto il mondo: Arabia Saudita, India, Cina, Spagna, Messico."
*   **H2: Perché Sceglierci**: Filiera completa interna, nessun outsourcing.
*   **CTA Block**: "Hai un progetto in mente?" -> [Parla con noi]

### Company (`/azienda`)
*   **H1**: La Nostra Storia
*   **Intro**: 40 anni di leadership nel settore campionari tessili.
*   **H2: Filiera Completa (Key Differentiator)**:
    *   *Copy*: "Dall’idea al prodotto finito. Gestiamo internamente Confezione, Legatoria, Serigrafia, Stampa a caldo, Stampa digitale e Ufficio Grafico."
*   **H2: Reparto Creativo**: Soluzioni ad hoc e propositività.
*   **H2: Vision**: Qualità, Rapidità, Affidabilità.

### How we work (`/come-lavoriamo`)
*   **H1**: Il Processo Produttivo
*   **H2**: Dall'idea alla Consegna
    *   Step 1: Consulenza & Prototipazione
    *   Step 2: Produzione (Reparti interni)
    *   Step 3: Controllo Qualità
    *   Step 4: Logistica & Spedizione
*   **H2**: Capacità Produttiva
    *   *Copy*: "Gestione di grandi volumi con la stessa cura del dettaglio artigianale."

### Products (`/prodotti`)
*   **H1**: I Nostri Prodotti
*   **Intro**: Soluzioni espositive per tessuti, pelli e materiali.
*   **Product List (Grid with Images)**:
    1.  **Campionari Tessili**: *Books, Binders.*
    2.  **Tirelle**: *Hangers, Swatches.*
    3.  **Cartelle Colori**: *Color cards.*
    4.  **Memos**: *Small samples.*
    5.  **Legatoria**: *Copertine personalizzate, Cavallotti.*
*   **CTA**: "Vuoi personalizzare il tuo campionario?" -> [Richiedi Info]

### Consultancy (`/consulenza`)
*   **H1**: Divisione Consulenza & Engineering
*   **Intro**: "Non solo produzione: portiamo il nostro know-how nella tua azienda."
*   **H2**: I Servizi
    *   Consulenza tecnica e organizzativa
    *   Acquisto e produzione macchinari
    *   Fornitura materiali di consumo e ricambi
    *   Assistenza post-vendita

### News (`/news`)
*   **H1**: News & Eventi
*   **Layout**: Grid di articoli (Fairs, Press, Updates).
*   *Note*: Sezione da popolare con [TODO_NEWS_STYLE].

### ## Contacts / Contatti

**H1 (IT):** Contattaci  
**Sub (IT):** Raccontaci il tuo progetto: ti rispondiamo rapidamente con una proposta chiara.

**H1 (EN):** Contact us  
**Sub (EN):** Share your project: we’ll get back to you quickly with a clear proposal.

### Sezioni (ordine consigliato)

**1) CTA sopra la piega (IT)**
- Titolo: Richiedi un preventivo
- Microcopy: Inviaci specifiche, quantità e tempistiche. Possiamo suggerire anche soluzioni alternative.
- Pulsanti:
  - **Richiedi preventivo** (scroll al form)
  - **WhatsApp** ([TODO_WA_NUMBER])

**1) Above-the-fold CTA (EN)**
- Title: Request a quotation
- Microcopy: Send specs, quantities and timeline. We can also propose alternative solutions.
- Buttons:
  - **Request a quote** (scroll to form)
  - **WhatsApp** ([TODO_WA_NUMBER])

**2) Form preventivo (IT/EN)**
Campi:
- Nome e Cognome / Full name
- Azienda / Company
- Email
- Telefono (opzionale) / Phone (optional)
- Tipologia progetto (dropdown): Campionari / Tirelle / Cartelle colori / Memos / Legatoria / Altro
- Messaggio
- Upload file (opzionale): PDF/IMG/ZIP
CTA: **Invia richiesta** / **Send request**

**Privacy (Obbligatoria / Required)**
- Checkbox (Required): **Ho letto e accetto la Privacy Policy** (link a `/it/privacy` e `/en/privacy`)
  - *Validation *: Se non selezionata, blocca l'invio e mostra errore: "Accetta la Privacy Policy per continuare."
- Checkbox (Required): **I have read and accept the Privacy Policy** (link to `/it/privacy` and `/en/privacy`)
  - *Validation *: If not selected, block submit and show error: "Please accept the Privacy Policy to proceed."
- Testo breve / Short note: “I dati verranno utilizzati esclusivamente per rispondere alla richiesta. / Your data will be used solely to respond to your request.”

**3) Contatti diretti**
Email:
- amministrazione@campionarisara.com
- davide.foroni@campionarisara.com

---

## 3. Operational Checklist (Step-by-Step)

### Phase 1: Setup & Design System
1.  [ ] **Project Init**: Initialize Git repo, Vite project (React/Vue TBD), TailwindCSS setup.
2.  [ ] **I18n Setup**: Configure routing for `/it/` and `/en/` and translation dictionary structure.
3.  [ ] **Design Foundation (Minotti Style)**:
    *   Define Color Palette: Neturals, Greys, Beige, accent Gold/Bronz text? (Premium feel).
    *   Typography: Elegant Sans-serif (e.g., Inter, Jost, or similar).
    *   UI Components: Buttons (Minimal outline/solid), Inputs, Cards.

### Phase 2: Core Structure & Layout
4.  [ ] **Layout Implementation**: Create Main Layout (Responsive Header, Footer).
5.  [ ] **Navigation Logic**: Implement Language Switcher and Mobile Menu.
6.  [ ] **Routing**: Create empty views for all pages in Sitemap.

### Phase 3: Page Implementation (Content First)
7.  [ ] **Home Page**: Build Hero, Feature Grid, CTA sections.
8.  [ ] **Company & How We Work**: Build text/image layouts.
9.  [ ] **Products & Consultancy**: Implement product grids and service lists.
10. [ ] **News**: Create blog index template (mock data initially).
11. [ ] **Contact Page**: Build Form (validation only) and Info layout.

### Phase 4: Functionality & Assets
12. [ ] **Contact Form**: Connect to backend/email service (Netlify Forms / EmailJS / PHP script).
13. [ ] **Assets**: Gather and optimize images (use placeholders until provided).
14. [ ] **Maps**: Embed Google Maps with placeholder address.
15. [ ] **Consent**: Implement Cookie Banner + Privacy Placeholder pages.

### Phase 5: Polish & Performace
16. [ ] **Responsive Check**: Verify mobile/tablet rendering.
17. [ ] **SEO Basics**: Set Meta Titles, Descriptions for all pages (IT/EN).
18. [ ] **Performance**: Image optimization (WebP), Lazy loading.
19. [ ] **Final Review**: Check all links, translation accuracy.

### Phase 6: Deploy
20. [ ] **Staging Deploy**: Upload to staging env for client review.
21. [ ] **Production Launch**: Final domain configuration.
