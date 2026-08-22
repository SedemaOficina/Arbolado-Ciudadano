import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const DOCS = process.argv[2];
const files = [];
(function walk(d){ for(const e of fs.readdirSync(d,{withFileTypes:true})){
  const p = path.join(d,e.name);
  if(e.isDirectory()){ if(!['assets','_source'].includes(e.name)) walk(p); }
  else if(e.name.endsWith('.html')) files.push(p);
}})(DOCS);

const RE = /<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/;

class DCLogic {
  constructor(props){ this.props = props||{}; }
  setState(){}
}

for(const f of files.sort()){
  const src = fs.readFileSync(f,'utf8');
  const m = src.match(RE);
  const rel = path.relative(DOCS,f);
  if(!m || !m[1].trim()){ console.log(`\n### ${rel}\n(sin lógica)`); continue; }
  const propsRaw = (src.match(/data-props="([^"]*)"/)||[])[1];
  let propsDef = {};
  if(propsRaw){ try{ propsDef = JSON.parse(propsRaw.replace(/&quot;/g,'"')); }catch(e){} }
  const props = {};
  for(const [k,v] of Object.entries(propsDef)) if(k!=='$preview') props[k]=v.default;

  const ctx = vm.createContext({ DCLogic, console, JSON, Math, Date, Object, Array, String, Number, Boolean, RegExp });
  try{
    vm.runInContext(m[1] + '\n;globalThis.__C = Component;', ctx, {filename:rel});
    const C = ctx.__C;
    const inst = new C(props);
    const vals = inst.renderVals ? inst.renderVals() : {};
    const shape = {};
    for(const [k,v] of Object.entries(vals)){
      if(typeof v === 'function') shape[k] = 'FN';
      else if(Array.isArray(v)) shape[k] = `ARRAY[${v.length}] keys=${v.length?Object.keys(v[0]||{}).join('|'):''}`;
      else shape[k] = `${typeof v}: ${JSON.stringify(v)}`.slice(0,90);
    }
    console.log(`\n### ${rel}\nstate=${JSON.stringify(inst.state||{})}`);
    for(const [k,v] of Object.entries(shape)) console.log(`   ${k} -> ${v}`);
  }catch(e){ console.log(`\n### ${rel}\nERROR: ${e.message}`); }
}
