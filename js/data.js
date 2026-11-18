/* ------------------------------------------------------------------
   SITE CONTENT
   Edit this file to add or change projects and athletes.
   No other file needs to change.

   PROJECT FIELDS
   id       short name used in links (work.html#id)
   title    project name
   cat      one of: brand | campaign | community | systems | competition
            (leave "" if it does not fit one yet)
   tag      small label shown on the right
   summary  one line shown under the title
   body     full write-up (HTML allowed). Leave "" to show "Write-up coming soon".
   upcoming true for a deal that has not happened yet; shows "Upcoming deal" instead
   links    [{ label, url }]
   img      optional photo for the project panel, e.g. "assets/ltd.jpg"
   video    optional short clip for the panel, e.g. "assets/ltd.mp4" (plays muted, looping)
   embed    optional Instagram post/reel URL to show in the panel. If left out, the
            first Instagram link in `links` is used. Set embed: false to show none.
   logo     optional brand logo, shown on a cream plate (home panel and under the write-up)
   logoBg   "dark" for a white logo, "white" for a logo with a white background; leave out for cream
   photo    optional photo shown with the write-up (and as the home panel image) in
            addition to an embed or deck; photoAlt describes it
   deck     optional Canva presentation link; shown in the panel through its view link
   embedRatio  only if the cropped post shows extra white space: the post's
            height divided by width (square post = 1, default 1.25)
   featured a number to show on the home page; 1 is listed first
   date     "YYYY-MM" or "YYYY-MM-DD"; the Work page lists newest first. Upcoming deals use a future date.
------------------------------------------------------------------- */

window.PROJECTS = [
  /* ---------- NEW: fill in summary, body and links ---------- */
  {
    id: "ltd-2", date: "2026-11", logo: "assets/logos/ltd.svg", logoAlt: "Lane Transit District logo", featured: 1, title: "LTD Fall 2026 Campaign", cat: "brand", tag: "Brand Partnership",
    summary: "The follow-up to spring: three athletes, four shoots, and a push to get students on the Umo app.",
    body: `<strong>Led LTD's fall campaign from start to finish</strong>, continuing last spring's partnership. The goal: highlight the <strong>Umo app</strong> and get students to redeem their free student pass.<br><br>I worked directly with LTD's VP of Marketing throughout. I pitched three athletes with a fit breakdown and evaluation for each: <strong>Luke Morgan, Markus Dixon, and Avery Jennings</strong>. Once compensation was set, I coordinated every form for each athlete, from vendor and contractor forms to POs, contracts, invoices, and tax forms.<br><br>Internally, I led the team meetings and <strong>coordinated three solo shoots</strong>, directing creatives on the content LTD wanted. I also organized the <strong>final group shoot</strong> with all three athletes, our creatives, and PR, set on a chartered bus provided by LTD. I built the content schedule our PR team follows for posts and captions, and directed research on a <strong>before-and-after case study</strong> built from each athlete's metrics and LTD's own. Content rolls out through <strong>December 12</strong>.`,
    links: [
      { label: "Luke's post", url: "https://www.instagram.com/p/DflihmMmyes/" },
      { label: "Markus's post", url: "https://www.instagram.com/p/Df0c056D7pY/" },
      { label: "Avery's reel", url: "https://www.instagram.com/reel/Df3N183yKlC/" }
    ]
  },
  {
    id: "wlg", date: "2026-06", logo: "assets/logos/will-leather-goods.png", logoAlt: "Will Leather Goods logo", title: "Will Leather Goods", cat: "brand", tag: "Brand Activation",
    summary: "A Father's Day activation that became Luke Morgan's first NIL deal.",
    body: `A Father's Day brand activation, and <strong>Luke Morgan's first NIL deal</strong>. Luke chose a bag from Will Leather Goods as his compensation.<br><br>I managed Luke through the whole project: coordinating with the lead account manager on his availability, his contract, and his product choice, getting him to the shoot, and helping with behind-the-scenes content. I had him submit the deal through <strong>NIL Go</strong> to keep it compliant, and made sure his post went up on time.`,
    links: [{ label: "Luke and Trent's reel", url: "https://www.instagram.com/reel/DZq3pCjMRG8/" }]
  },
  {
    id: "textyle", date: "2026-05-20", logo: "assets/logos/textyle.png", logoAlt: "Textyle logo", featured: 3, title: "TEXTYLE", cat: "brand", tag: "Brand Partnership",
    summary: "A partnership I sourced myself: three athletes, two shoots, and every contract detail walked through with the owners.",
    body: `<strong>Sourced this partnership myself</strong>, from the first conversation to signed contracts. I met with Textyle's owners in person and on calls to build out what they wanted from an athlete partnership.<br><br>I pitched three athletes to promote the store's style and bring more people through the door: <strong>Burke-Lee Mabeus, Riley Taylor, and Aaliyah McCormick</strong>. I scheduled and coordinated two shoots, one with Aaliyah and one with Burke-Lee and Riley. I handled the contracts, walked the owners through every detail, and made sure each athlete received their compensation.<br><br>The best part was the casting. <strong>Getting the right athletes on board</strong> is what made this one work.`,
    links: [{ label: "Aaliyah's reel", url: "https://www.instagram.com/reel/DYfNl2hpO1t/" }]
  },
  {
    id: "myplayer", date: "2027-02", photo: "assets/myplayer.jpg", photoAlt: "MyPlayer athlete merchandise", upcoming: true, title: "MYPLAYER", cat: "", tag: "",
    summary: "", body: "", links: []
  },
  {
    id: "power-of-pink", date: "2026-10", photo: "assets/power-of-pink.jpg", photoAlt: "Power of Pink Breast Cancer Walk poster, presented by Country Financial, James Conners Agency", title: "Power of Pink Walk", cat: "community", tag: "Community",
    embedRatio: 1, /* square post */
    summary: "Brought the women's lacrosse team out to an annual breast cancer awareness walk at Autzen Stadium.",
    body: `An annual breast cancer awareness walk in and around <strong>Autzen Stadium</strong>, run by James Conners and Country Financial. I was brought in to get athletes there and help promote the event.<br><br>I brought out <strong>Liv Kozitza and her teammates on the women's lacrosse team</strong>, who shared story posts to show their support. I also organized a creative to capture photos on the day, and took part in the walk myself.<br><br>It turned into a great community event, and a meaningful addition to the brand portfolios of the athletes and Oregon Accelerator.`,
    links: [{ label: "Power of Pink's post", url: "https://www.instagram.com/p/DeF6fq5uLmk/" }]
  },
  {
    id: "kp-case-comp", date: "2026-05-10", logo: "assets/logos/kaiser-permanente.png", logoAlt: "Kaiser Permanente logo", logoBg: "white", featured: 4, title: "Kaiser Permanente Case Competition", cat: "competition", tag: "Competition · Winner",
    deck: "https://www.canva.com/design/DAHJBmxdS7E/MqOCkRjToOQaRE90n2m5IA/view",
    photo: "assets/kp-case-comp.jpg", photoAlt: "Presenting the Kaiser Permanente x OA pitch with my team",
    summary: "Won Oregon Accelerator's internal case competition with a Gen Z activation pitched to Kaiser Permanente.",
    body: `An internal Oregon Accelerator competition: teams had about a month to pitch <strong>Kaiser Permanente</strong> a brand activation that would drive more sign-ups from Gen Z.<br><br>I brought the research: what KP had done before to build community engagement, which athletes would fit best, and why the idea works for both the athletes and KP. I also fine-tuned the logistics of the activation itself, the <strong>Thrive Campus Tour</strong>, a pop-up health and wellness event named after KP's Thrive City.<br><br>I presented with my team in front of all of Oregon Accelerator and a panel of judges. They called ours the most thorough pitch, and <strong>we won</strong>.`,
    links: [{ label: "View the pitch deck", url: "https://www.canva.com/design/DAHJBmxdS7E/MqOCkRjToOQaRE90n2m5IA/view" }]
  },
  {
    id: "gld", date: "2027-01", logo: "assets/logos/the-gld-shop.png", logoAlt: "The GLD Shop logo", logoBg: "white", upcoming: true, title: "The GLD Shop", cat: "", tag: "",
    summary: "", body: "", links: []
  },

  /* ---------- EXISTING ---------- */
  {
    id: "ltd", date: "2026-04", logo: "assets/logos/ltd.svg", logoAlt: "Lane Transit District logo", title: "LTD Spring 2026 Campaign", cat: "brand", tag: "Brand Partnership",
    embed: "https://www.instagram.com/p/DXQWmgjFPR0/", embedRatio: 1.333, /* Oregon Accelerator's post with all four athletes */
    summary: "Four athletes, one transit system, and a student ridership push I ran end to end.",
    body: `<strong>Led all coordination for LTD's (Lane Transit District) student awareness campaign</strong>, one of the <strong>larger campaigns I've managed</strong>, given the volume of deliverables tied to each of the four athletes involved. Partnered with Eugene's public transportation system to drive student ridership through athlete-led content, serving as the <strong>direct point of contact with the brand</strong> while keeping our internal team (AMs, creative, and athletes) fully aligned throughout. Contributed creative direction for the shoot, coordinated on-site logistics for all four athletes, managed posting schedules, and oversaw the <strong>paid compensation process</strong> for every athlete involved.`,
    links: [
      { label: "Full campaign post", url: "https://www.instagram.com/p/DXQWmgjFPR0/" },
      { label: "Morgan's post", url: "https://www.instagram.com/p/DXK9k21j1c3/" },
      { label: "Niya's reel", url: "https://www.instagram.com/reel/DXLM_fMkwyb/" },
      { label: "Matt's post", url: "https://www.instagram.com/p/DW3269CFBS3/" },
      { label: "Mia's reel", url: "https://www.instagram.com/reel/DXXlBU9kiEW/" }
    ]
  },
  {
    id: "built-by-the-journey", date: "2026-03", logo: "assets/logos/oregon-accelerator.png", logoAlt: "Oregon Accelerator logo", logoBg: "dark", featured: 2, title: "Women Empowerment Campaign", cat: "campaign", tag: "Campaign Strategy",
    embed: "https://www.instagram.com/reel/DVpRbdCJxWo/", /* campaign trailer */
    embedRatio: 0.5625, /* widescreen video */
    summary: "“Built by the Journey,” a mini docuseries on women athletes at Oregon.",
    body: `<strong>Led the entire campaign</strong>, a mini docuseries under the slogan <strong>"Built by the Journey"</strong>, highlighting women athletes at Oregon and featuring <strong>Aaliyah McCormick, Avery Jennings, and Izzy Sawyer</strong>. Made casting decisions, served as the main point of contact between athletes, the creative team, and PR. Expanded the campaign by adding a blog component, with <strong>Kai Greer and Liv Kozitza</strong> contributing written features. Personally directed each athlete on what to share and how to present their stories.`,
    links: [
      { label: "Trailer", url: "https://www.instagram.com/reel/DVpRbdCJxWo/" },
      { label: "Aaliyah's episode", url: "https://www.instagram.com/reel/DVrZ8CiEk3j/" },
      { label: "Avery's episode", url: "https://www.instagram.com/reel/DVtwba_AXZK/" },
      { label: "Izzy's episode", url: "https://www.instagram.com/reel/DVw2w0nAWkr/" },
      { label: "Read the blog", url: "https://www.oregonaccelerator.com/blog-1/take-a-look-at-uo-female-athletes-stories-built-by-the-journey" }
    ]
  },
  {
    id: "discover-u", date: "2026-05-05", title: "Discover U", cat: "community", tag: "Volunteer · Event",
    logo: "assets/logos/oregon-athletics.jpg", logoAlt: "Oregon Ducks athletics logo",
    photo: "assets/discover-u.jpg", photoAlt: "The Discover U stage and audience at the event",
    summary: "Volunteered as a Room Producer at a career event for Oregon football players.",
    body: `Volunteered as a <strong>Room Producer</strong> at Discover U, an event where Oregon football players hear from industry speakers about their long-term goals and careers after college.<br><br>I ran the room for two presenters, <strong>Kelly Johnson (ESPN, Disney)</strong> and <strong>Nabil Kanso (USI Insurance Services)</strong>: organizing the slide deck, making sure the technology worked, and keeping the speakers ready, on time, and in the right place.<br><br>At the end of the event, I helped <strong>pitch Oregon Accelerator</strong> to new football athletes.`,
    links: []
  },
  {
    id: "port-of-subs", date: "2025-11", logo: "assets/logos/port-of-subs.png", logoAlt: "Port of Subs logo", logoBg: "dark", title: "Port of Subs", cat: "brand", tag: "Brand Partnership",
    summary: "My first deal, a year-long partnership, and the contract clause I wouldn't give up.",
    body: `The longest campaign I've ever worked toward: a <strong>year-long partnership with Port of Subs</strong> spanning reels, carousels, and stories across multiple athletes. This was also <strong>my first deal</strong>, and I ran it from the ground up: cold pitched the brand, got them interested, and built the campaign myself. Assembled a roster starting with <strong>Luke Basso and Rachel Pallo</strong>, then transitioned to <strong>Trent Ferguson</strong> as the campaign evolved. Led every brand-facing meeting, walking through deliverable structure and negotiating compensation for each athlete involved.<br><br>It fell apart over a contract dispute. Port of Subs didn't want to give athletes the right to delete their posts after the termination date, a standard NIL clause. I countered with a solution: athletes would keep the posts live after termination for an additional monthly fee, because <strong>you can't use an athlete's NIL for free once a contract ends</strong>. They passed. The campaign never launched, but this negotiation taught me more than most deals that do close. NIL is a layered space with real legal stakes, and <strong>protecting the athlete has to be the non-negotiable</strong>, no matter how big the brand or how close the deal is to the finish line.`,
    links: []
  },
  {
    id: "space-age-fuel", date: "2026-01-20", logo: "assets/logos/space-age-fuel.png", logoAlt: "Space Age Fuel logo", title: "Space Age Fuel", cat: "brand", tag: "Brand Activation",
    summary: "Pitched a giveaway activation and scoped a $100K+ budget with my team.",
    body: `Co-created and personally presented the campaign pitch for Space Age Fuel's partnership with <strong>DOAF and Oregon Accelerator</strong>. Proposed a giveaway activation where athletes promote Space Age Fuel in exchange for DOAF gear, alongside contributing to the snack draft concept. While the campaign ultimately stalled before launch, the project gave me hands-on experience <strong>managing a $100K+ budget alongside my team</strong>: allocating spend across discounted game-day gas pricing, giveaway prizing, athlete compensation tiers, and execution timelines. It sharpened my ability to scope large-scale activations and weigh ROI tradeoffs at a high level.`,
    links: []
  },
  {
    id: "cluckin-dog", date: "2026-02-24", logo: "assets/logos/cluckin-dog.jpg", logoAlt: "Cluckin' Dog logo", logoBg: "white", title: "Cluckin Dog", cat: "brand", tag: "Brand Partnership",
    summary: "Built the relationship with the owner and landed the deal for Kai Greer.",
    body: `Established the relationship with the brand owner and discussed activation goals. Successfully secured the partnership for my athlete <strong>Kai Greer</strong>. Directed the creative vision for the shoot, attended and organized on-site logistics, and coordinated with the <strong>PR team</strong> to finalize and publish the promotional post.`,
    links: [{ label: "Kai's post", url: "https://www.instagram.com/p/DVPZmv2Enc0/" }]
  },
  {
    id: "igyb", date: "2026-02-25", logo: "assets/logos/igyb.png", logoAlt: "IGYB logo", title: "IGYB", cat: "brand", tag: "NIL Activation",
    summary: "Pitched Kai's fit, handled scheduling and merch, and was on site for the shoot.",
    body: `Secured a spot for <strong>Kai</strong> in this activation by pitching her fit to the lead account manager. Managed all athlete communication around availability and scheduling. Connected her directly with the AM and the brand, and coordinated <strong>merchandise delivery</strong> for the shoot. <strong>Attended the shoot on-site</strong> to support logistics and make sure Kai was comfortable and dialed in throughout.`,
    links: [{ label: "Kai's reel", url: "https://www.instagram.com/reel/DVQqzXcD8Jq/" }]
  },
  {
    id: "bckr", date: "2025-12-10", logo: "assets/logos/bckr.svg", logoAlt: "BCKR logo", logoBg: "dark", title: "BCKR", cat: "brand", tag: "Brand Partnership",
    embed: "https://www.instagram.com/reel/DSfrbcWD8ys/", /* Liv's reel */
    summary: "Two athletes, two reels, and a compliance check on every piece of content.",
    body: `Secured this activation for <strong>Kai and Liv</strong>, coordinating with the lead AM and both athletes on timing, deliverables, and expectations. Managed logistics including free jacket merchandise and directed athletes through reel creation for the brand. <strong>Reviewed all athlete content before posting to ensure full compliance with contract deliverables and brand requirements.</strong>`,
    links: [
      { label: "Kai's reel", url: "https://www.instagram.com/reel/DSdTESyknXs/" },
      { label: "Liv's reel", url: "https://www.instagram.com/reel/DSfrbcWD8ys/" }
    ]
  },
  {
    id: "valentines", date: "2026-02-14", logo: "assets/logos/oregon-accelerator.png", logoAlt: "Oregon Accelerator logo", logoBg: "dark", title: "Valentine's Day Event", cat: "community", tag: "Community",
    summary: "Athletes made handmade cards for elderly community members. Every card got delivered.",
    body: `Co-led the Valentine's Day activation alongside another Account Manager: a community event where athletes created handmade cards for elderly community members. Set up the activation space, coordinated athlete participation, and helped capture content for social media promotion. <strong>Followed through after the event to ensure every card was actually delivered to recipients</strong>, closing the loop on the activation from start to finish.`,
    links: [{ label: "Watch the activation", url: "https://www.instagram.com/reel/DUwmzMNDwEC/" }]
  },
  {
    id: "warriors-tour", date: "2025-07", logo: "assets/logos/club-de-tenis-andres-gimeno.jpg", logoAlt: "Club de Tenis Andrés Gimeno logo", logoBg: "white", title: "Warriors Tour Tennis", cat: "campaign", tag: "Event Marketing",
    summary: "Marketing for a tennis tour stop at Club de Tenis Andrés Gimeno in Barcelona.",
    body: `Led the marketing efforts for the Warriors Tour Tennis event at <strong>Club de Tenis Andrés Gimeno in Barcelona</strong>. Created promotional videos and developed content strategies to drive attendance and sponsor visibility. Managed social media campaigns and produced multimedia assets for event promotion.`,
    links: [{ label: "Event reel", url: "https://www.instagram.com/reel/DMxRHqzod6t/" }]
  },
  {
    id: "outreach-workflow", date: "2026-07", logo: "assets/logos/the-team.svg", logoAlt: "THE·TEAM logo", title: "Automated Outreach Workflow", cat: "systems", tag: "Systems & Tools",
    summary: "A workflow that matches brands to athletes, finds the right contact and drafts the pitch. It landed me more deals, and better ones.",
    body: `Built an automated outreach workflow during my summer at <strong>THE·TEAM</strong> to take the manual work out of brand prospecting. On each run it <strong>surfaces five new local and regional brands</strong> matched to an athlete's hometown and interests, skips any brand already in the tracker, and prioritizes the athletes with the fewest prospects. It then <strong>finds the right marketing contact</strong> at each brand, drafts a personalized pitch email in my own format, and logs everything to the outreach tracker with a status. I designed it so that <strong>nothing sends on its own</strong>: every email is reviewed and sent by me. The result was <strong>more deals, and better ones</strong>: because the system cross-checks each brand against the athlete before a pitch goes out, the partnerships I landed were stronger fits. I built it with agentic AI tools rather than traditional code.`,
    links: []
  },
  {
    id: "outreach-tracker", date: "2025-12-20", logo: "assets/logos/oregon-accelerator.png", logoAlt: "Oregon Accelerator logo", logoBg: "dark", title: "Outreach Tracker", cat: "systems", tag: "Systems & Tools",
    summary: "A tracking site I built so account managers stop pitching the same brand twice.",
    body: `<strong>Spearheaded the reinvention of Oregon Accelerator's outreach process</strong> by vibe-coding a custom outreach tracking website, designed to prevent duplicate outreach, let each AM log and track brand contacts, and provide an analytics dashboard for smarter targeting. The initiative ultimately paved the way for the agency's adoption of <strong>HDBND</strong>, a more advanced platform built by Jeff that centralizes athlete data and surfaces insights on where each athlete best fits in the NIL landscape.`,
    links: [{ label: "HDBND", url: "https://hdbnd.com/" }]
  },
  {
    id: "am-handbook", date: "2026-01-10", logo: "assets/logos/oregon-accelerator.png", logoAlt: "Oregon Accelerator logo", logoBg: "dark", featured: 5, title: "Account Manager Handbook", cat: "systems", tag: "Operations",
    summary: "A step-by-step reference for account managers running campaigns.",
    body: `Used my <strong>agentic engineering skills</strong> to vibe-code the AM Handbook from scratch, identifying a gap in how account managers handled projects and building a structured reference guide to solve it. The handbook serves as a step-by-step resource for AMs navigating campaign workflows, brand communication, and project management.`,
    links: [{ label: "Open the handbook", url: "https://www.notion.so/Oregon-Accelerator-AM-Project-Handbook-2f7856760f17805fb8b0d0ca0e4f869d#2f7856760f1781069d9eda6267995a31" }]
  }

];

window.PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "brand", label: "Brand partnerships" },
  { key: "campaign", label: "Campaigns & events" },
  { key: "community", label: "Community" },
  { key: "systems", label: "Systems & tools" },
  { key: "competition", label: "Competitions" }
];

window.ATHLETES = [
  { name: "Luke Basso", sport: "Football", meta: "Lake Oswego, OR", handle: "lukebasso5", img: "assets/img2.jpg", pdf: "assets/athlete1.pdf",
    stats: [["3,673", "Followers"], ["142.9K", "IG views"], ["16%", "In Eugene"]] },
  { name: "Kai Greer", sport: "Beach Volleyball", meta: "Houston, TX", handle: "kai.greer", img: "assets/img5.jpg", pdf: "assets/athlete4.pdf",
    stats: [["888", "Followers"], ["10.8K", "Content views"], ["18.17%", "Engagement"]] },
  { name: "Liv Kozitza", sport: "Women's Lacrosse", meta: "Portland, OR", handle: "olivia.kozitza", img: "assets/img4.jpg", pdf: "assets/athlete3.pdf",
    stats: [["1.7K", "Followers"], ["18K", "Monthly views"], ["9.9%", "Engagement"]] },
  { name: "Rachel Pallo", sport: "Women's Lacrosse", meta: "Lone Tree, CO", handle: "rachpallo", img: "assets/img3.jpg", pdf: "assets/athlete2.pdf",
    stats: [["1.8K", "Followers"], ["21.3K", "Monthly views"], ["17%", "Engagement"]] },
  { name: "Burke-Lee Mabeus", sport: "Baseball", meta: "San Clemente, CA", handle: "burkeleemabeus", img: "assets/img6.jpg", pdf: "assets/athlete5.pdf",
    stats: [["2.9K", "Followers"], ["7.7K", "Engagements"], ["17%", "Engagement"]] },
  { name: "Luke Morgan", sport: "Baseball", meta: "Grants Pass, OR", handle: "lukemorgan.05", img: "assets/img7.jpg", pdf: "assets/athlete6.pdf",
    stats: [["830", "Followers"], ["2,854", "30-day views"], ["52.77%", "Engagement"]] }
];
