/**
 * Creative Corner Data (V2: Feminine • Scrapbook • Personal)
 * 
 * Casual doodles, sketches, visual ideas, and short little thoughts.
 * Easy to edit: replace doodles with image paths in /public/images/doodles/
 * or update the little thoughts write-ups!
 */

export const creativeCategories = [
  { id: "all", label: "All Items 🎀" },
  { id: "art", label: "Artwork & Instagram 🎨" },
  { id: "doodles", label: "Doodles & Sketches ✏️" },
  { id: "writing", label: "Little Thoughts 📖" }
];

export const artInstagramInfo = {
  handle: "@smruti_art",
  profileUrl: "https://www.instagram.com/", // Add your specific art handle URL
  tagline: "Sketches, margin doodles & traditional artwork",
  bio: "Sharing traditional pencil sketches, botanical illustrations, ink studies, and creative margin art alongside my coding journey. ♡"
};

export const artworks = [
  {
    id: "art-1",
    title: "Botanical Floral Study",
    caption: "fineliner & soft watercolor wash 🌸",
    category: "art",
    medium: "Pen & Ink on Cold Press",
    note: "Detailed floral and botanical study drawn during quiet weekend study sessions.",
    tag: "Traditional Art",
    tapeColor: "washi-tape-pink",
    rotation: "-rotate-1",
    color: "#EFB3C8",
    image: null, // Add your image path e.g. "/images/art/botanical.jpg" or an external URL!
    instagramUrl: "https://www.instagram.com/"
  },
  {
    id: "art-2",
    title: "Cozy Workspace Still Life",
    caption: "pencils, sketchbook & tea ♡",
    category: "art",
    medium: "Graphite on Paper",
    note: "A peaceful desk still-life featuring my favorite stationery, markers, and study notebooks.",
    tag: "Sketchbook",
    tapeColor: "washi-tape-lavender",
    rotation: "rotate-1",
    color: "#C9B8DE",
    image: null,
    instagramUrl: "https://www.instagram.com/"
  },
  {
    id: "art-3",
    title: "Starry Night Windowpane",
    caption: "ink & stippling detail ✨",
    category: "art",
    medium: "Micron Pen & Gel Ink",
    note: "Night sky illustration with fine stippling gradients and constellation markings.",
    tag: "Ink Study",
    tapeColor: "washi-tape-pink",
    rotation: "-rotate-1.5",
    color: "#D98FA9",
    image: null,
    instagramUrl: "https://www.instagram.com/"
  }
];

export const doodles = [
  {
    id: "doodle-1",
    title: "Tea & Spring Boot Flowchart",
    caption: "made while procrastinating ♡",
    category: "doodles",
    medium: "Pencil & Gel Pen",
    note: "Doodling coffee steam and drawing a quick controller-service diagram in my notebook margins.",
    tag: "Sketchbook",
    tapeColor: "washi-tape-pink",
    rotation: "-rotate-1",
    color: "#EFB3C8",
    image: null // Replace with "/images/doodles/doodle1.png" when you have a photo of your drawing!
  },
  {
    id: "doodle-2",
    title: "Sunday Desk Space",
    caption: "little sketchbook moment 🌸",
    category: "doodles",
    medium: "Micron 0.3mm",
    note: "Notebook, favorite pastel highlighters, headphones, and a cozy evening study desk.",
    tag: "Desk Study",
    tapeColor: "washi-tape-lavender",
    rotation: "rotate-1.5",
    color: "#C9B8DE",
    image: null
  },
  {
    id: "doodle-3",
    title: "Botanical Margin Vines",
    caption: "random doodle ♡",
    category: "doodles",
    medium: "Fineliner on Paper",
    note: "Drawing leaves and tiny flowers while watching DSA recursion video tutorials.",
    tag: "Margin Art",
    tapeColor: "washi-tape-pink",
    rotation: "-rotate-2",
    color: "#D98FA9",
    image: null
  },
  {
    id: "doodle-4",
    title: "Quiet Window & Stars",
    caption: "just felt like drawing this ✨",
    category: "doodles",
    medium: "Pencil Study",
    note: "A cozy window ledge with starry night sky and a little potted succulent.",
    tag: "Freehand",
    tapeColor: "washi-tape-lavender",
    rotation: "rotate-1",
    color: "#C9B8DE",
    image: null
  }
];

export const littleThoughts = [
  {
    id: "thought-1",
    title: "On writing code and drawing lines",
    date: "A small reflection",
    category: "writing",
    tag: "Art × Code 🎀",
    excerpt: "Both start with a blank space. A fresh file in VS Code feels remarkably similar to a blank page in a sketchbook...",
    content: "Both start with a blank space. A fresh file in VS Code feels remarkably similar to a blank page in a sketchbook.\n\nIn drawing, you sketch light guidelines before committing to dark ink lines. In backend design, you map out entity models, relationships, and request structures before writing endpoints.\n\nHaving structure doesn't limit creativity — it gives it a stable foundation to stand on."
  },
  {
    id: "thought-2",
    title: "Keeping a paper notebook beside my keyboard",
    date: "Study habit note",
    category: "writing",
    tag: "Habits 🌷",
    excerpt: "Before touching the keyboard, sketching out pointer movements and API request flows with a pencil makes everything clearer...",
    content: "Before typing any code, I usually reach for a notebook and a pencil.\n\nTracing two-pointer boundaries, drawing tree nodes, or mapping out REST endpoints by hand makes the logic so much easier to understand before jumping straight into Java.\n\nThere is something grounding about thinking on paper first."
  },
  {
    id: "thought-3",
    title: "The quiet joy of a working backend service",
    date: "Learning note",
    category: "writing",
    tag: "Backend 💻",
    excerpt: "When a REST endpoint finally returns a clean 200 OK with formatted JSON, it brings a very specific kind of peace...",
    content: "When a REST endpoint finally returns a clean 200 OK with properly formatted JSON after debugging controller mappings and service logic, it brings a very specific kind of peace.\n\nBackend development feels like building the unseen plumbing and gears that make an entire system run smoothly. It's disciplined, logical, and deeply rewarding."
  }
];
