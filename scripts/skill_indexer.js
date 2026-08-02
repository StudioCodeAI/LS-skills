const fs = require('fs');
const path = require('path');

// Um script de ingestão inicial (Proof of Concept)
// Espera-se rodar via: npm run ingest --url="https://raw.githubusercontent.com/.../SKILL.md" --category="development"

const args = process.argv.slice(2);
let url = '';
let category = '';

args.forEach(arg => {
  if (arg.startsWith('--url=')) url = arg.split('=')[1];
  if (arg.startsWith('--category=')) category = arg.split('=')[1];
});

if (!url || !category) {
  console.error("Usage: npm run ingest --url=\"...\" --category=\"...\"");
  process.exit(1);
}

const catalogPath = path.join(__dirname, `../catalogs/${category}.json`);

function ingest() {
  console.log(`📡 Ingesting from: ${url}`);
  // In a real automated setup, we would fetch the URL, use an LLM via Core5/9Router to generate tags,
  // and append to the catalog. For now, we mock the addition.
  
  let catalog = { name: `${category} Catalog`, description: `Auto-generated catalog for ${category}`, skills: [] };
  
  if (fs.existsSync(catalogPath)) {
    catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  }
  
  const skillId = `auto-ingested-${Date.now()}`;
  
  catalog.skills.push({
    id: skillId,
    tags: ["auto-ingested", category],
    source_url: url,
    description: "Skill automatically ingested via CLI."
  });
  
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf8');
  console.log(`✅ Ingested skill [${skillId}] into ${category}.json`);
}

ingest();
