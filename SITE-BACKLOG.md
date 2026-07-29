# isakrs.com backlog

This is the working backlog for the richer personal site refresh. Keep GitHub Pages unless a future feature needs server-side processing, private authentication, or dynamic image handling.

## Public-link improvements already started

- Add company links for Vipps MobilePay, Yara, Antler, Oda, Cognite, and Blank.
- Add proof links for the Amazon Web Services Yara article, FINN jobb Awards, the Aftenposten/Yara recruitment campaign, the Oda thesis, the Oda paper, MasterThesis, Revolve NTNU, `GeodesicsInHeat`, and `modern-data-platform-example`.
- Add a profile photo to the hero.
- Add a first homepage photo slideshow from local web-ready image copies.
- Replace the homepage slideshow with a smaller profile-photo hover preview to keep the landing page more professional.
- Move the visual accent away from Vipps orange and toward a warmer ivory and sage palette.
- Use Max Schrøder's site as inspiration for keeping the base design restrained while letting real work visuals carry more of the personality.
- Use Siddhartha Chaudhuri's site as inspiration for a more work-focused proof archive: dense, dated, link-rich, and centered on concrete outputs.

## Needs private assets or decisions

- Visual proof pass:
  - Prioritize work artifacts over decorative photography: Oda simulator video, Yara campaign screenshots, Yara machine learning architecture or article visuals, Vipps Wrapped screenshots or an architecture sketch if shareable, Revolve car photos, and IIT Bombay geometry-processing images.
  - Keep the homepage professional by using only a few selected personal photos in the profile-hover preview.
  - Move larger personal photo sets to a later spare-time page rather than the main landing page.
  - If original work media cannot be shared, create small explanatory diagrams or cropped public screenshots instead of using stock-like visuals.
- Work archive pass:
  - Consider a compact `/work/` or `/archive/` page inspired by academic publication lists: date, title, short contribution, artifact links, and optional thumbnail.
  - Use this for older but meaningful work that should not crowd the homepage, such as Revolve, IIT Bombay, Blank, Oda, and early research or student projects.
  - Keep the homepage as the curated version; let the archive hold the full trail of proof.
  - Keep generic skills off the homepage. If skills need to reappear, make them project tags or archive filters tied to concrete work.
- LinkedIn pass:
  - Find the best Vipps hackathon post.
  - Find Yara campaign posts and manager posts from Taimur, Kyrre, Marcus, Ajeet, and Thomas.
  - Find the public Antler post where Isak is pictured or tagged, if it exists and still feels relevant.
  - Find posts from Oda colleagues if they are public and relevant.
- Google Photos pass:
  - Optional: use Google Photos later to replace or expand the first local slideshow set.
  - Prefer images that show range: engineering, outdoors, travel, presenting, friends, and work contexts.
  - Consider a dedicated `/spare-time/` page for the full photo set once the strongest images are selected.
- Oda:
  - Find or export a simulator video.
  - The `MasterThesis` repository is public and linked from the homepage.
  - Consider a dedicated `/oda/` subpage with the video, thesis, paper, and a short explanation of the optimization result.
  - `CaseDiscrete` is a public discrete-optimization repository for minimizing warehouse walking distance. It probably belongs as supporting material on `/oda/` or `/archive/`, not as a separate homepage card.
- Data platform writing:
  - `modern-data-platform-example` is public and linked from the homepage.
  - Continue improving it with clearer architecture diagrams, validation examples, and a short implementation walkthrough.
- IIT Bombay:
  - Add screenshots or images from the geometry-processing project.
  - Find the professor webpage connected to the project.
  - Consider a small project page if there are enough images.
- Revolve NTNU:
  - Revolve is kept as a smaller earlier-foundation note on the homepage, not a selected proof card.
  - The current link points to the official Revolve Garage page for the KOG Arctos R electric race car.
  - Add the relevant year/team page if available.
  - Add images and consider a dedicated subpage if the visual material is strong enough.
- Admetsys:
  - Keep off the homepage for now; it does not feel representative enough of the public career narrative.
  - Add the YouTube presentation link only if creating an archive or early-career page later.
- Older CV archive:
  - Consider a small `/revolve/` page with the KOG Arctos R work, cost analyst role, and Formula Student Cost Event podium context.
  - Consider a short Admetsys archive item only if the public presentation or video is found.
  - Consider whether student assistant work in Algorithms and Data Structures, ENT3R mentoring, and Oslo Commerce School debate team belong on an "early foundations" page rather than the main homepage.

## Possible structure

- Keep the homepage concise.
- Add project subpages only where there is enough media and context:
  - `/oda/`
  - `/revolve/`
  - `/iit-bombay/`
  - `/data-platform/`
- Keep media local in `assets/` for durable GitHub Pages hosting. Use YouTube or Google Drive embeds only where the source already lives there.
