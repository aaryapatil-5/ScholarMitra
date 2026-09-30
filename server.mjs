import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'public');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{
  const p=(req.url||'/').split('?')[0]; const file=path.join(root,p==='/'?'index.html':p);
  fs.readFile(file,(e,d)=>{if(e){res.writeHead(404);return res.end('Not found')};res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'text/plain'});res.end(d)})
}).listen(5173,'127.0.0.1',()=>console.log('\nScholarMitra running at http://localhost:5173\n'));
