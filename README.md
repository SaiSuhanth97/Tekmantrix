# TEKMANTRIX website

A self-contained, responsive static website for **tekmantrix.com**. No installation, build, framework, tracking, third-party fonts or backend is required. Open `index.html` for a local preview.

## Content and maintenance

- `index.html`: page content and search/social metadata.
- `styles.css`: layout, colours, responsive rules and reduced-motion support.
- `script.js`: mobile navigation and AI explorer.
- `assets/tekmantrix-logo.png`: latest TEKMANTRiX Logo.png supplied by the user, unchanged.
- `CNAME`: confirmed custom domain. `robots.txt` and `sitemap.xml` use the same domain.

The service descriptions, process and Insights are proposed website copy, not evidence of delivered projects. Review the offered service scope before publication. AI examples are explicitly illustrative. No credentials, customers, testimonials, performance numbers, staff biographies or contact details have been invented.

The Contact section includes the approved public email, reachus@tekmantrix.com; registered address, Utukuru, Mudinepalli Mandal, Eluru District, Andhra Pradesh, India; and Global support scope. Edit these directly in index.html. Email links work without JavaScript and open the visitor’s email app; they are not a submission service. No visitor data is collected by this site. Global support does not imply 24/7 availability or a response-time commitment.

## Publish on GitHub Pages

1. Create a repository, for example `tekmantrix-website`. A public repository works with GitHub Free.
2. Upload the **contents** of this folder to the root of its `main` branch. `index.html` must be at the root, not inside another folder. Include `.nojekyll` and `assets/`.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
4. For a temporary GitHub-only launch, omit `CNAME` and leave the Custom domain field empty. The URL will be `https://YOUR-ACCOUNT.github.io/tekmantrix-website/`. Relative assets support this path. Set canonical, Open Graph and sitemap URLs to that address if it is the intended long-term location.
5. For the intended domain, follow the section below. Future commits to the publishing branch update the site.

Reference: [GitHub publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Connect tekmantrix.com through Hostinger

GitHub hosts the files; Hostinger manages DNS. Confirm Hostinger is the authoritative DNS provider before editing its zone.

1. Verify domain ownership in your GitHub account's Pages settings using its supplied TXT record. Keep that record.
2. Set repository **Settings → Pages → Custom domain** to `tekmantrix.com` **before** changing DNS. Keep the included `CNAME` file.
3. In Hostinger, open **Domains → Domain portfolio → Manage → DNS / Nameservers**. Add these records (replace `YOUR-ACCOUNT` with your GitHub user or organisation name):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-ACCOUNT.github.io |

Use the default TTL. The `www` target contains no protocol or repository path. Replace conflicting website A/AAAA/ALIAS or www records; preserve mail MX and verification/SPF/DKIM/DMARC TXT records. Do not add wildcard records.

4. Allow DNS propagation (up to 24 hours). Once GitHub's DNS check succeeds and the certificate is ready, enable **Enforce HTTPS**.
5. Check both `https://tekmantrix.com` and `https://www.tekmantrix.com`. With both configured, GitHub redirects www to the chosen apex domain.

References: [GitHub custom domains and current DNS values](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Hostinger DNS management](https://support.hostinger.com/en/articles/1583249-how-to-manage-dns-records-at-hostinger). Instructions checked 17 October 2026. No account or DNS settings were changed as part of this delivery.

## Launch review

- Approve the service copy and confirm the published contact details.
- Confirm the domain belongs to you and replace YOUR-ACCOUNT in the DNS instructions.
- Check navigation, AI options, expandable Insights, keyboard focus and narrow-screen layout.
- Test the public HTTPS site after publication. This delivery does not claim a live deployment.

Accessibility features include semantic headings and landmarks, a skip link, visible keyboard focus, labelled buttons with state, native disclosure elements, and a reduced-motion preference. These are not a claim of a formal accessibility audit.

