const fs = require('fs');
const path = require('path');

const catalogsDir = path.join(__dirname, '../catalogs');

function validateCatalogs() {
  let hasError = false;
  
  if (!fs.existsSync(catalogsDir)) {
    console.log('No catalogs directory found. Skipping validation.');
    return;
  }

  const files = fs.readdirSync(catalogsDir).filter(f => f.endsWith('.json'));
  
  files.forEach(file => {
    const filePath = path.join(catalogsDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      
      if (!data.name || !Array.isArray(data.skills)) {
        console.error(`❌ Validation failed for ${file}: Missing 'name' or 'skills' array.`);
        hasError = true;
      } else {
        data.skills.forEach((skill, index) => {
          if (!skill.id || !skill.tags) {
            console.error(`❌ Validation failed for ${file} at skill [${index}]: Missing 'id' or 'tags'.`);
            hasError = true;
          }
        });
        if (!hasError) console.log(`✅ ${file} is valid.`);
      }
    } catch (e) {
      console.error(`❌ Failed to parse ${file}: ${e.message}`);
      hasError = true;
    }
  });

  if (hasError) {
    process.exit(1);
  }
}

validateCatalogs();
