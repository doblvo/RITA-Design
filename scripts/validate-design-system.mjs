import fs from "node:fs";
import path from "node:path";
const root=process.cwd(), required=["tokens/design-tokens.json","tokens/semantic-map.json","icons/registry.json","components/inventory.json","domain/pti-mappings.json","domain/cedex-schema.json","domain/part-rules.json","domain/status-model.json"];
const errors=[];
for(const file of required){const full=path.join(root,file);if(!fs.existsSync(full))errors.push(`Missing ${file}`);else try{JSON.parse(fs.readFileSync(full,"utf8"))}catch(e){errors.push(`Invalid JSON ${file}: ${e.message}`)}}
const t=JSON.parse(fs.readFileSync(path.join(root,"tokens/design-tokens.json"),"utf8"));
for(const n of ["glacier","glacierBright","copper","ink","slate","ice","white","border"])if(!/^#[0-9A-F]{6}$/i.test(t.color.raw[n]))errors.push(`Invalid color token ${n}`);
if(t.domain.maxPhotosPerCedex!==5)errors.push("maxPhotosPerCedex must remain 5");
if(JSON.stringify(t.domain.ptiCore)!==JSON.stringify(["RAPS","SHORT","LONG","CA"]))errors.push("ptiCore policy changed");
if(!t.domain.excludedPti.includes("RUNNING")||!t.domain.excludedPti.includes("SUPER FREEZER"))errors.push("excluded PTI policy changed");
const icons=JSON.parse(fs.readFileSync(path.join(root,"icons/registry.json"),"utf8"));
const components=JSON.parse(fs.readFileSync(path.join(root,"components/inventory.json"),"utf8"));
if(icons.icons.length<30)errors.push("Icon registry must keep broad vocabulary");
if(components.components.length<30)errors.push("Component inventory must keep broad vocabulary");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log(`RITA Design System valid: ${icons.icons.length} icons, ${components.components.length} components, ${required.length} JSON contracts`);
