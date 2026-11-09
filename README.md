# Coastal Brew Café - Website Project

## Student Information
- **Student Name:** Kairen Sundrasen Govender
- **Student Number:** ST10518923
- **Course:** Web Development - WEDE5020
- **Group:** 1

## Project Overview
Coastal Brew Café is an independent coffee shop located in Durban, South Africa. The café serves specialty coffee, freshly baked pastries, and sandwiches in a relaxed environment. This website project aims to establish a professional online presence for the café, providing customers with essential information and encouraging new visitors to experience the café.

## Website Goals and Objectives
### Primary Goal
To design and develop a professional, user-friendly website that reflects the café's welcoming atmosphere and promotes its products and services.

### Objectives
- Increase the café's online visibility
- Provide customers with information about the menu, location, and operating hours
- Improve customer engagement through an attractive and responsive design
- Create a website that is accessible across desktop and mobile devices

## Timeline and Milestones

| Milestone | Date |
|-----------|------|
| Project Proposal Submission | 29 July 2026 |
| Research and Planning | 30 July - 10 August 2026 |
| Sitemap and Wireframes | 11-17 August 2026 |
| HTML Development | 18-31 August 2026 |
| **Part 1 Submission** | **1 September 2026** |
| CSS Styling and Responsiveness | September 2026 |
| **Part 2 Submission** | **5 October 2026** |
| JavaScript, SEO and Testing | October 2026 |
| **Part 3 Submission** | **October 2026** |

## Sitemap
<img width="777" height="530" alt="image" src="https://github.com/user-attachments/assets/aef4526b-a934-479c-b848-4b57d64f6ff0" />

---

## Changelog & Feedback Implementation

| Date | Version | Changes |
|------|---------|---------|
| 29 July 2026 | v1.0 | Initial repository setup |
| 10 August 2026 | v1.3 | Integrated content and navigation |
| 4 October 2026 | v2.0 | Implemented CSS styling, responsiveness, and applied Part 1 feedback. |
| 20 October 2026 | v3.0 | Implemented JavaScript interactive elements, SEO, Google Maps, and applied Part 2 feedback. |

### Part 1 Feedback Implementation
*   **Not linking external CSS correctly** -> I have linked `css-assets/scripts.css` in the `<head>` of all HTML pages.
*   **Not including a CSS Reset** -> I have added the universal selector `* { margin: 0; padding: 0; box-sizing: border-box; }` at the top of my CSS file.

### Part 2 Feedback Implementation (Resolution & Responsiveness)
According to the feedback received from my lecturer regarding adjusting the resolution to fit other screens:
*   **Issue:** Website did not scale properly on mobile devices, tablets, or minimized computer tabs.
*   **How it was fixed:** 
    1.  Applied `flex-wrap: wrap` to the header to prevent it from breaking when the browser tab is minimized.
    2.  Implemented comprehensive `@media` queries for three breakpoints: Desktop (1024px+), Tablets (768px), and Mobile (480px).
    3.  Used responsive units (`rem`, `%`) and set `max-width: 100%` on all images so they scale fluidly.
    4.  Changed grid layouts from 3-columns to 2-columns to 1-column progressively as the screen size decreases.
    5.  Added a JavaScript-driven "Hamburger Menu" for mobile devices so the navigation menu is accessible without taking up screen space.

### Part 3 Enhancements (JavaScript, SEO, Forms, Maps)
1.  **Interactive Elements:** Implemented a fully functional Lightbox Image Gallery using JavaScript (DOM manipulation) on the homepage.
2.  **Interactive Maps:** Integrated functional Google Maps iframes on the Contact page for both Umhlanga and Durban North locations.
3.  **Dynamic Content:** Added a JavaScript snippet to dynamically generate and display the current date in the website footer.
4.  **Form Validation:** Added JavaScript to the Enquiry and Contact forms to validate user input before submission, displaying inline error messages if fields are left empty.
5.  **SEO:** Added unique meta descriptions, keyword tags, and page titles to all HTML pages. Optimized images with descriptive `alt` attributes.

---

## References
- Canva. (2026) *Canva*. Available at: https://www.canva.com/ (Accessed: 29 July 2026).
- Figma. (2026) *Figma*. Available at: https://www.figma.com/ (Accessed: 29 July 2026).
- Google Fonts. (2026) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 29 July 2026).
- Pexels. (2026) *Free Stock Photos*. Available at: https://www.pexels.com/ (Accessed: 29 July 2026).
- Unsplash. (2026) *Free High Resolution Images*. Available at: https://unsplash.com/ (Accessed: 29 July 2026).
- W3Schools. (2026) *HTML, CSS, and JavaScript Tutorials*. Available at: https://www.w3schools.com/ (Accessed: 20 October 2026).