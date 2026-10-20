import './style.css'
import TH from './assets/th.jpg'
import { getJet3DInstance } from './jet3d'
import JET from './assets/jet.png'
import PG from './assets/pg.jpg'
import JB from './assets/jb.jpg'
import JS from './assets/js.jpg'

import bgPlane from './assets/bg_plane.jpg'
import headerAircraft from './assets/header_aircraft.png'
import partEngine from './assets/part_engine.png'
import partHydraulic from './assets/part_hydraulic.png'
import partGear from './assets/part_gear.png'
import partEcu from './assets/part_ecu.png'
import partFuelPump from './assets/part_fuel_pump.png'
import partValve from './assets/part_valve.png'
import partApu from './assets/part_apu.png'
import partTire from './assets/part_tire.png'
import partHarness from './assets/part_harness.png'
import partBrakes from './assets/part_brakes.png'
import partOilFilter from './assets/part_oil_filter.png'
import partServo from './assets/part_servo.png'
import partFilterKit from './assets/part_filter_kit.png'
import partOxygen from './assets/part_oxygen.png'
import partWing from './assets/part_wing.png'
import partNav from './assets/part_nav.png'

const IC={cmd:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',ac:'<path d="M12 2l2 7 8 5v2l-8-2-1 5 3 2v1l-4-1-4 1v-1l3-2-1-5-8 2v-2l8-5z"/>',ready:'<path d="M3 12a9 9 0 0118 0M12 12l4-4M5 19h14"/>',spares:'<path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>',x:'<circle cx="12" cy="12" r="9"/>',sensors:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',maint:'<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-3 3-2.5-.5-.5-2.5z"/>',twin:'<path d="M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>',reports:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/>',sources:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',models:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',fleet:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',preds:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',home:'<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>',docs:'<path d="M2 4h7a3 3 0 013 3v13a2 2 0 00-2-2H2zM22 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8z"/>',set:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',dl:'<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',therm:'<path d="M14 14.8V5a2 2 0 00-4 0v9.8a4 4 0 104 0z"/>',fan:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7s2 4-4 7zM14 12c4 0 7 1 7 4s-4 2-7-4zM12 14c0 4-1 7-4 7s-2-4 4-7zM10 12c-4 0-7-1-7-4s4-2 7 4z"/>',cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',chk:'<path d="M5 12l5 5 9-10"/>',warn:'<path d="M12 3l10 18H2zM12 10v5M12 18h.01"/>',chat:'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',bot:'<path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zM4 11a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7zm5 3v2m6-2v2"/>'};
const ic=k=>`<svg class="i" viewBox="0 0 24 24">${IC[k]||IC.x}</svg>`;
const BASES={A:[120,100],B:[440,80],C:[150,235],D:[470,230]},bk=Object.keys(BASES);let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const AC=Array.from({length:84},(_,i)=>{const n=i+1,b=bk[n%4];return{id:'AF-'+String(n).padStart(3,'0'),base:b,x:BASES[b][0]+(rnd()-.5)*120,y:BASES[b][1]+(rnd()-.5)*90,st:'HEALTHY'}});
[17,12,60].forEach(n=>AC[n-1].st='CRITICAL');[23,41,5,33,70].forEach(n=>AC[n-1].st='ATTENTION');[8,29,47,55,66].forEach(n=>AC[n-1].st='MAINT');
const Q:any[][]=[['AF-017','Engine','Compressor degradation',76,'18 cycles','CRITICAL'],['AF-023','Hydraulics','Pressure instability',62,'31 cycles','ATTENTION'],['AF-041','Electrical','Voltage anomaly',48,'52 cycles','WATCH'],['AF-012','Avionics','Sensor drift',41,'60 cycles','WATCH']];
interface State {
  dx: number; dq: number; tg: { c: number; w: number; i: number }
  ff: string; fs: string; re: number; tab: string; comp: string; sx: string
  drawer: number | boolean; modal: any; toast: string; view: string
  sel: string | null; t: number; approved: boolean; filter: string
  mv?: string;
  at?: any; rt?: any; sc?: any; twc?: any; sv?: any; dtab?: any; rac?: any; ddoc?: any
  vw?: any; up?: any; rot?: any; ex?: any; dz?: any; dp?: any; cu?: any; twt?: any
  rs?: any; rl?: any; rf?: any; ps?: any; pq?: any; pc?: any; di?: any; adv?: any
  lv?: any; chat?: any; rper?: any;
  maintSearch?: string; maintFilterAc?: string; maintFilterPriority?: string; maintFilterType?: string; maintFilterAssignee?: string;
  maintPage?: number; maintVmode?: string;
  chatAc?: string;
  chatTyping?: boolean;
}

const S:State={dx:0,dq:-1,tg:{c:1,w:1,i:0},ff:'ALL',fs:'id',re:0,tab:'Pending',comp:'Compressor',sx:'AF-017',drawer:0,modal:0,toast:'',view:'chat',sel:null,t:0,approved:false,filter:'ALL',mv:'wo',maintSearch:'',maintFilterAc:'ALL',maintFilterPriority:'ALL',maintFilterType:'ALL',maintFilterAssignee:'ALL',maintPage:1,maintVmode:'kanban',chatAc:'ALL',chatTyping:false,chat:[
  {
    role: 'assistant',
    text: "Commander, I am **AeroFleet AI Assistant**, synchronized in real time with telemetry streams across all 84 aircraft, technical maintenance documentation (ATA 2200), spares inventory ERP, and depot hangar bay availability.\n\nSelect an operational scenario below or ask any question regarding aircraft degradation, Remaining Useful Life (RUL), part supply, or maintenance procedures.",
    time: '14:30 IST',
    metrics: [
      { label: 'Monitored Fleet', value: '84 Aircraft', color: '#1f66d1' },
      { label: 'Active Snags', value: '3 Critical / 5 Watch', color: '#d12e37' },
      { label: 'Telemetry Health', value: '98.4% Normal', color: '#12915f' },
      { label: 'Mission Readiness', value: '78.6% Ready', color: '#12915f' }
    ],
    recommendation: "Priority attention required for AF-017 (Engine #1 vibration spike). Scheduling borescope inspection will prevent unscheduled AOG grounding.",
    actions: [
      { label: 'Diagnose AF-017 Compressor', action: 'prompt:What is the current health status and RUL for AF-017?' },
      { label: 'Review Critical Maintenance Queue', action: 'prompt:Which aircraft currently require immediate maintenance?' },
      { label: 'Check Part B-17 Inventory', action: 'prompt:Check stock and lead time for Compressor Blade Kit B-17' }
    ],
    sources: ['HUMS Telemetry Broker', 'IETM ATA 72-30', 'Spares ERP Inventory']
  }
]},$:(s:string)=>any=s=>document.querySelector(s);
const col=s=>({HEALTHY:'var(--gn)',ATTENTION:'var(--am)',CRITICAL:'var(--rd)',MAINT:'var(--gy)',WATCH:'var(--ac)'}[s]);
const NAV:any[][]=[['cmd','Overview'],['fleet','Fleet'],['ac','Aircraft'],['sensors','Telemetry'],['preds','Predictions'],['maint','Maintenance'],['spares','Spare Parts'],['twin','Digital Twin'],['ready','Fleet Readiness'],['reports','Reports'],['models','Model Health']];
const counts=()=>{const c={HEALTHY:0,ATTENTION:0,CRITICAL:0,MAINT:0};AC.forEach(a=>c[a.st]++);return c};
const vib=t=>.42+(t>6?Math.pow((t-6)/14,1.4)*.55:0)+Math.sin(t*2.3)*.015,tmp=t=>72.4+(t>8?(t-8)*.35:0),anomaly=()=>S.t>=14;
function ring(p,c,sz=92,lbl=''){const r=sz/2-8,C=2*Math.PI*r;return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" role="img" aria-label="${p}%"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="rgba(15,23,42,.07)" stroke-width="7"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${C*p/100} ${C}" transform="rotate(-90 ${sz/2} ${sz/2})"/><text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" fill="#0e1726" font-size="${sz/4.2}" font-weight="600">${p}%</text></svg>`}
let uid=0;function area(f:(i:number)=>number,n:number,lo:number,hi:number,thr:number,c='#2250d8'){const W=320,H=90,id='g'+uid++,p:number[][]=[];for(let i=0;i<n;i++)p.push([i/(n-1)*W,H-(f(i)-lo)/(hi-lo)*H]);
const ln=p.map(x=>x.map(v=>v.toFixed(1)).join(',')).join(' '),ty=H-(thr-lo)/(hi-lo)*H,l=p[n-1],hot=f(n-1)>thr;
return`<svg viewBox="0 0 ${W} ${H+6}" width="100%" height="100" role="img" aria-label="trend"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".35"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient></defs>${[0,.33,.66,1].map(g=>`<line x1="0" x2="${W}" y1="${g*H}" y2="${g*H}" stroke="rgba(15,23,42,.05)"/>`).join('')}<line x1="0" x2="${W}" y1="${ty}" y2="${ty}" stroke="var(--am)" stroke-opacity=".5" stroke-dasharray="4 4"/><polygon points="0,${H} ${ln} ${W},${H}" fill="url(#${id})"/><polyline points="${ln}" fill="none" stroke="${hot?'var(--rd)':c}" stroke-width="2" stroke-linejoin="round"/><circle cx="${l[0]}" cy="${l[1]}" r="4.5" fill="${hot?'var(--rd)':c}" stroke="#ffffff" stroke-width="2"/></svg>`}
function spk(col:string,k:number){const p:string[]=[];for(let i=0;i<14;i++)p.push((i*9.2).toFixed(0)+','+(12+Math.sin(i*1.7+k)*5+Math.sin(i*.6+k*2)*3).toFixed(1));return`<svg viewBox="0 0 120 24" width="120" height="22"><polyline points="${p.join(' ')}" fill="none" stroke="${col}" stroke-width="1.5"/></svg>`}
function cmd(){const c=counts(),ap=S.approved,ready=84-c.ATTENTION-c.CRITICAL-c.MAINT,risk=c.ATTENTION+c.CRITICAL-(ap?1:0),mt=c.MAINT+(ap?1:0),pct=Math.round(ready/84*100);
const kc=(i:string,col:string,v:any,l:string,d?:string)=>`<div class="kc"><div class="ki" style="background:${col}1f;color:${col}">${ic(i)}</div><div><b>${v}</b><small>${l}</small>${d||''}</div>${spk(col,+v||2)}</div>`;
const co=(t,sub,lab,col,pos,i)=>`<div class="co ${pos}"><div class="ci">${ic(i)}</div><div><b>${t}</b><small>${sub}</small><span style="color:${col}"><i style="background:${col}"></i>${lab}</span>${spk(col,t.length)}</div></div>`;
const rows:any[][]=[['P1','AF-017','Engine',76,'18 cycles','Inspect','Critical'],['P1','AF-023','Hydraulics',62,'31 cycles','Schedule','Attention'],['P2','AF-041','Electrical',48,'52 cycles','Monitor','Watch'],['P2','AF-056','Engine',46,'67 cycles','Plan','Watch'],['P3','AF-072','Avionics',38,'94 cycles','Inspect','Monitor'],['P3','AF-089','Flight Control',35,'102 cycles','Monitor','Monitor']];
const ev:any[][]=[['warn','#d12e37','14:28','AF-017','Engine vibration trend above threshold','RMS: 2.4 g (↑ 32%)'],['warn','#e48a14','11:16','AF-041','Electrical system temperature deviation','Generator temp: 118°C (↑ 12%)'],['sig','#1f66d1','09:42','AF-103','Routine inspection completed','No major issues found']];
return`<div class="eb">— OVERVIEW</div><div style="display:flex;align-items:flex-start"><div style="flex:1"><h1>Fleet Command Center</h1><p class="sub" style="font-size:17px">Health, maintenance and readiness at a glance.</p></div><div class="dm"><span>DEMO DATA</span><small>Prototype view using public + simulated data</small></div></div>
<div class="card kp"><div class="kc fr"><div style="width:100%"><b style="font-size:15px">Fleet Readiness</b><div class="big">${pct}%</div><div class="prg"><i style="width:${pct}%"></i></div><small>${ready} of 84 aircraft mission ready</small></div></div>${kc('ac','#1f66d1',84,'Total Aircraft')}${kc('chk','#12915f',ready,'Mission Ready','<em class="up g">↑ 3%</em>')}${kc('warn','#e48a14',risk,'At Risk','<em class="up r">↑ 2%</em>')}${kc('maint','#1f66d1',mt,'Under Maintenance')}</div>
<div class="g cmdg" style="grid-template-columns:1.05fr 1fr;margin-top:16px"><div class="card"><h3 style="margin-bottom:2px"><span>Aircraft Health Overview<small style="display:block;color:var(--mu);font-weight:400;font-size:12.5px">Subsystem status and latest telemetry indicators</small></span><span class="sel">AF-017 ⌄</span></h3>
${jetPanel(0)}
<div class="sigr" data-id="AF-017" tabindex="0"><span style="color:#d12e37">${ic('sensors')}</span><div style="flex:1"><b>Latest Signal (AF-017)</b><small>Engine vibration trend above threshold<br>RMS: 2.4 g (↑ 32%) • 14:28 IST</small></div><div style="text-align:center"><span class="sp c">Anomaly Detected</span><small style="display:block;margin-top:4px">Model confidence 0.87 (demo)</small></div></div></div>
<div class="card" style="padding:0"><h3 style="padding:20px 20px 0"><span>Priority Maintenance Queue<small style="display:block;color:var(--mu);font-weight:400;font-size:12.5px">AI-identified issues requiring attention</small></span><a style="color:var(--ac);font-weight:500;font-size:13px;cursor:pointer" data-go="maint">View All →</a></h3>
<table class="qt"><thead><tr>${['Priority','Aircraft','System','Risk','RUL','Action','Status',''].map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>{const d=ap&&r[1]==='AF-017';return`<tr data-id="${r[1]}" tabindex="0"><td><span class="pb2 ${r[0]}">${r[0]}</span></td><td><b>${r[1]}</b></td><td>${r[2]}</td><td style="color:${r[3]>=60?'#d12e37':r[3]>=40?'#e48a14':'inherit'};font-weight:500">${r[3]}%</td><td>${r[4]}</td><td>${d?'Scheduled':r[5]}</td><td><span class="sp ${d?'s':r[6][0].toLowerCase()}">${d?'Scheduled':r[6]}</span></td><td style="color:var(--mu)">›</td></tr>`}).join('')}</tbody></table></div></div>
<div class="card" style="margin-top:16px"><h3 style="justify-content:flex-start;gap:12px">Recent Operational Events<small style="color:var(--mu);font-weight:400">Latest alerts, maintenance actions and system updates</small><a style="margin-left:auto;color:var(--ac);font-weight:500;font-size:13px">View All →</a></h3><div class="evs">${ev.map(e=>`<div class="evt"><div class="ei" style="background:${e[1]}">${ic(e[0])}</div><div><b>${e[2]}</b><small>${e[3]}</small></div><div><b style="font-weight:500">${e[4]}</b><small>${e[5]}</small></div></div>`).join('')}</div></div>`}
function acOld(){const id=S.sel;if(!id)return'<div class="hint">Select an aircraft to inspect health telemetry.</div>';
const n=Math.max(3,Math.min(S.t+1,40)),an=anomaly(),ap=S.approved,hl=an?74:82;
const m:any[][]=[['Engine temp',tmp(S.t).toFixed(1)+' °C',S.t>16],['Vibration RMS',vib(S.t).toFixed(2)+' g',vib(S.t)>.6],['RPM','8,420',0],['Oil pressure','Normal',0],['Current','18.2 A',0],['Voltage','22.8 V',0]];
const T:any[][]=[['14:32','Vibration spike detected',S.t>=10],['15:04','Temperature deviation detected',S.t>=12],['15:16','Repeated vibration pattern confirmed',S.t>=13],['15:21','Model risk increased to 76%',an],['15:23','Maintenance recommendation generated',an]].filter(x=>x[2]);
const why:any[][]=[['Vibration trend',32],['Temperature trend',18],['Operating cycles',21],['Similar failure history',29]];
const sub:any[][]=[['Propulsion',an?74:81,'left:0;top:60px'],['Hydraulics',88,'left:0;bottom:50px'],['Electrical',93,'right:0;top:150px'],['Flight control',96,'right:0;top:40px'],['Avionics',95,'left:calc(50% - 45px);top:-6px'],['Structure',91,'right:0;bottom:40px']];
const st=ap?7:an?4:S.t>=12?1:0,LP=['Observe','Detect','Predict','Explain','Recommend','Approve','Maintain','Improve availability'].map((x,i)=>`<span class="${i<=st?'on':''}${i===st?' cur':''}">${x}</span>`).join('<i></i>');const pill=ap?'SCHEDULED':an?'CRITICAL':'ATTENTION',pl=ap?'Inspection scheduled':an?'Critical':'Attention';
return`<div style="display:flex;justify-content:flex-end;margin-bottom:12px"><button class="btn gh" id="replay">Restart telemetry demo</button></div><div class="loop">${LP}</div><div class="mets">${m.map(x=>`<div class="met ${x[2]?'w':''}"><small>${x[0]}</small><b>${x[1]}</b><small style="color:${x[2]?'var(--am)':'var(--gn)'}">${x[2]?'Warning':'Normal'}</small></div>`).join('')}</div>
<div class="g g2e" style="margin-bottom:16px"><div class="card"><h3>Aircraft health<span class="tag">Overall ${hl}%</span></h3>${jetPanel(an)}</div>
<div class="card"><h3>Live telemetry<span class="tag">Simulated</span></h3><small style="color:var(--mu)">Vibration RMS (g) · limit 0.60</small>${area(i=>vib(Math.max(0,S.t-n+1+i)),n,.3,1.1,.6)}<small style="color:var(--mu)">Engine temperature (°C) · limit 79</small>${area(i=>tmp(Math.max(0,S.t-n+1+i)),n,70,82,79,'#12936a')}</div></div>
<div class="g g2e"><div class="card"><h3>Predictive health engine<span class="tag">Demo model output</span></h3>${an?`<div style="display:flex;gap:20px;align-items:center;margin-bottom:16px">${ring(76,'var(--rd)',100)}<div class="kv" style="flex:1;margin:0"><div><small>Engine health</small><b>82% → 74%</b></div><div><small>Estimated RUL</small><b>18–26 cycles</b></div><div><small>Confidence</small><b>0.84</b></div><div><small>Trend</small><b style="color:var(--am)">Degrading</b></div></div></div><small style="color:var(--mu)">Why the model flagged this</small>${why.map(w=>`<div style="display:flex;justify-content:space-between;margin-top:10px"><span>${w[0]}</span><b style="font-weight:600">+${w[1]}%</b></div><div class="meter" style="margin-top:4px"><i style="width:${w[1]*2.8}%;background:var(--ac)"></i></div>`).join('')}`:`<p style="color:var(--mu);margin:0">No anomaly yet. Engine health is 82% and the model is watching vibration and temperature.</p>`}
<h3 style="margin-top:22px">Anomaly history</h3><div class="tl">${T.length?T.map(x=>`<div><time>${x[0]}</time>${x[1]}</div>`).join(''):'<span style="color:var(--mu)">No anomalies detected.</span>'}</div></div>
<div class="card ${an?'rec':''}"><h3>Recommended maintenance</h3>${an?`<p style="margin:0 0 16px;font-size:15px">Possible compressor degradation. Inspect the engine before the next operational cycle.</p><div class="kv"><div><small>Expected downtime</small><b>6.4 hours</b></div><div><small>Part required</small><b>B-17 · 2 in stock, 1 reserved</b></div><div><small>If deferred</small><b style="color:var(--am)">Elevated failure probability</b></div><div><small>Alternative</small><b>Continue with monitoring</b></div></div>
<div style="background:var(--p2);border-radius:14px;padding:14px;margin-bottom:16px"><small style="color:var(--mu)">Impact on fleet availability</small><div style="display:flex;gap:24px;margin-top:6px"><div>Without action<br><b style="color:var(--rd);font-size:18px">84.5% ↓</b></div><div>With inspection<br><b style="color:var(--gn);font-size:18px">+1 aircraft</b></div></div></div>
${ap?'<span class="pill SCHEDULED">Approved · inspection scheduled</span>':'<div style="display:flex;gap:10px"><button class="btn pri" id="ok">Approve inspection</button><button class="btn gh" id="def">Defer with justification</button></div>'}<p style="color:var(--mu);font-size:12px;margin:12px 0 0">Every maintenance action needs human approval.</p>`:`<p style="color:var(--mu);margin:0">A recommendation appears here when the model detects a failure risk.</p>`}</div></div>`}

const pl=(s,t)=>`<span class="pill ${s}">${t}</span>`,PLANE='M100 14l8 56 72 50v14l-72-24-2 53 22 18v8l-28-6-28 6v-8l22-18-2-53-72 24v-14l72-50z';
const tbl=(h,r)=>`<table class="qt"><thead><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${r.map(a=>`<tr>${a.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const M:any[][]=[['AF-017','Engine inspection','P1','R. Nair','6.4 h','Part B-17','Pending'],['AF-023','Hydraulic pressure check','P2','S. Iyer','3.0 h','Seal kit H-04','Pending'],['AF-032','Pump replacement','P2','A. Rao','5.5 h','Pump P-17','Pending'],['AF-041','Electrical harness test','P3','M. Das','2.0 h','—','In progress'],['AF-008','200 h service','P3','K. Shah','8.0 h','Filter kit','Completed']];
const T0=Date.now(),TL=['10:00','14:00','18:00','22:00','02:00','06:00','10:00'],LV:Record<string,number[]>={v:[],t:[],o:[],r:[]};
(function(){for(let i=0;i<60;i++){const x=i/59;LV.v.push(1.7+Math.sin(i*.7)*.18+Math.sin(i*2.1)*.12+x*.5);LV.t.push(560+Math.sin(i*.5)*50+Math.sin(i*1.9)*30+x*220);LV.o.push(40+Math.sin(i*.8)*3+Math.sin(i*2.3)*2);LV.r.push(12000+Math.sin(i*.6)*500+Math.sin(i*2)*300+x*400)}LV.v[59]=2.4;LV.t[59]=812;LV.o[59]=42;LV.r[59]=12400})();
function stream(){const g=(a,t,s,lo,hi)=>{const p=a[a.length-1];a.push(Math.max(lo,Math.min(hi,p+(t-p)*.15+(Math.random()-.5)*s)));a.shift()};g(LV.v,2.4,.25,.5,3.8);g(LV.t,800,40,300,980);g(LV.o,41,3,25,70);g(LV.r,12300,380,10000,15500)}
function ch(t,ik,c,d,lo,hi,tk,fm,u,b){const W=460,H=214,x0=46,x1=452,y0=12,y1=182,n=d.length,Y=v=>y1-(v-lo)/(hi-lo)*(y1-y0),X=j=>x0+j/(n-1)*(x1-x0),p=d.map((v,j)=>X(j).toFixed(1)+','+Y(v).toFixed(1)).join(' '),id='lg'+(uid++),l=d[n-1],tag=fm(l)+u,w=tag.length*6.3+14;
return`<div class="card" style="padding:14px 16px"><div class="ch"><span style="color:${c}">${ic(ik)}</span><b>${t}</b><span class="sel2">Last 24 hours ⌄</span></div><svg viewBox="0 0 ${W} ${H}" width="100%"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".28"/><stop offset="1" stop-color="${c}" stop-opacity=".02"/></linearGradient></defs>${tk.map(v=>`<line x1="${x0}" x2="${x1}" y1="${Y(v)}" y2="${Y(v)}" stroke="rgba(15,28,46,.07)"/><text x="${x0-6}" y="${Y(v)+3}" text-anchor="end" font-size="9.5">${fm(v)}</text>`).join('')}${TL.map((s,j)=>`<line x1="${x0+j*(x1-x0)/6}" x2="${x0+j*(x1-x0)/6}" y1="${y0}" y2="${y1}" stroke="rgba(15,28,46,.05)"/><text x="${x0+j*(x1-x0)/6}" y="200" text-anchor="middle" font-size="9.5">${s}</text>`).join('')}<line x1="${x0}" x2="${x1}" y1="${Y(b)}" y2="${Y(b)}" stroke="${c}" stroke-opacity=".6" stroke-dasharray="4 4"/><polygon points="${x0},${y1} ${p} ${x1},${y1}" fill="url(#${id})"/><polyline points="${p}" fill="none" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"/><rect x="${x1-w+6}" y="${Math.max(2,Y(l)-28)}" width="${w}" height="17" rx="4" fill="${c}"/><text x="${x1-w/2+6}" y="${Math.max(2,Y(l)-28)+12}" text-anchor="middle" font-size="10.5" font-weight="600" style="fill:#fff">${tag}</text><circle cx="${x1}" cy="${Y(l)}" r="3.5" fill="#fff" stroke="${c}" stroke-width="2"/></svg></div>`}
const kc2=(ik,bg,c,t,v,u,dl,dc,rg,sp)=>`<div class="card k2"><div class="ki2" style="background:${bg};color:${c}">${ic(ik)}</div><div><small>${t}</small><div><b>${v}</b> <span>${u}</span> <em style="color:${dc}">${dl}</em></div><small>${rg}</small></div>${spk(c,sp)}</div>`;
function liveBody(){const L=LV,l=a=>a[a.length-1],up=134+Math.floor((Date.now()-T0)/60000),H:any[][]=[['Engine',32,'#f0566a','set','#fde4e6'],['Hydraulics',68,'#8bb8f0','drop','#e4eefc'],['Electrical',82,'#12a35f','bolt','#d9f2e6'],['Flight Control',61,'#f59e0b','ac','#fdeed2'],['Avionics',77,'#1f66d1','sensors','#e1ebfc']],E:any[][]=[['10:32:14','Vibration (RMS)','2.4 g','High','Vibration above normal range','#d12e37'],['10:31:02','Temperature','812 °C','High','Temperature rising trend','#d12e37'],['10:28:47','Engine RPM','12,400 rpm','Normal','Stable within range','inherit'],['10:25:11','Oil Pressure','42 psi','Normal','Normal operation','#12915f'],['10:20:03','Current Draw','18.2 A','High','Higher than baseline','#d12e37']];
return`<div class="k4">${kc2('sensors','#fde4e6','#e5252f','Vibration (RMS)',l(L.v).toFixed(1),'g','↑ 32%','#d12e37','Normal: 0.5 – 1.5 g',3)}${kc2('therm','#fde4e6','#e5252f','Temperature',Math.round(l(L.t)),'°C','↑ 18%','#d12e37','Normal: 200 – 750 °C',5)}${kc2('drop','#d9f2e6','#12a35f','Oil Pressure',Math.round(l(L.o)),'psi','↓ 8%','#12915f','Normal: 35 – 60 psi',7)}${kc2('fan','#e1ebfc','#1f66d1','Engine RPM',(Math.round(l(L.r)/100)*100).toLocaleString('en-US'),'rpm','↑ 5%','#12915f','Normal: 11,000 – 13,000 rpm',9)}</div>
<div class="lg"><div class="rcol"><div class="card"><h3>Component Health (Live)</h3>${H.map(h=>`<div class="hb"><span class="ico2" style="background:${h[4]};color:${h[2]}">${ic(h[3])}</span><span style="width:96px">${h[0]}</span><div class="meter"><i style="width:${h[1]}%;background:${h[2]}"></i></div><b style="width:36px;text-align:right;font-weight:500">${h[1]}%</b></div>`).join('')}</div>
<div class="card"><h3>Live Status<span style="color:#12915f;font-size:13px;font-weight:500">● Streaming</span></h3><div class="ls"><div>Data Source</div><div>ESP32 IoT Demonstrator</div><div>Protocol</div><div>MQTT</div><div>Update Rate</div><div>1 sec</div><div>Latency</div><div>120 ms</div><div>Uptime</div><div>${Math.floor(up/60)} h ${up%60} m</div></div></div></div>
${ch('Vibration (g)','sensors','#e5252f',L.v,0,4,[0,1,2,3,4],v=>v.toFixed(1),' g',1.6)}${ch('Temperature (°C)','therm','#f59e0b',L.t,0,1000,[0,200,400,600,800,1000],v=>Math.round(v),' °C',450)}${ch('Oil Pressure (psi)','drop','#1f66d1',L.o,0,80,[0,20,40,60,80],v=>Math.round(v),' psi',45)}${ch('Engine RPM','fan','#12a35f',L.r,8000,16000,[8000,10000,12000,14000,16000],v=>(Math.round(v/100)*100).toLocaleString('en-US'),' rpm',11500)}
<div class="card ev" style="padding:0"><h3 style="padding:18px 20px 0">Recent Telemetry Events</h3>${tbl(['Time','Parameter','Value','Status','Description'],E.map(e=>[e[0],e[1],`<span style="color:${e[5]}">${e[2]}</span>`,`<span class="hi ${e[3]==='High'?'r':'g'}">${e[3]}</span>`,e[4]]))}</div>
<div class="card"><h3>Anomaly Detection</h3><div class="al2 r" data-id="AF-017" tabindex="0"><span style="color:#d12e37">${ic('warn')}</span><div style="flex:1;font-size:13px"><b>Potential anomaly detected in engine vibration.</b><br><span style="color:var(--mu)">AI model estimates 76% probability of degradation within next 20 cycles.</span></div>›</div><div class="al2 a" data-go="maint" tabindex="0"><span style="color:#e48a14">${ic('maint')}</span><div style="flex:1;font-size:13px"><b>Recommended Action</b><br>Inspect engine (Part: B-17)<br><span style="color:var(--mu)">Schedule before next operational cycle.</span></div>›</div></div></div>`}
function sensors(){return`<div style="display:flex;align-items:flex-start;gap:16px"><div style="flex:1"><h1>Live Telemetry</h1><p class="sub">Real-time aircraft health data and sensor signals · simulated</p></div><div class="card" style="display:flex;align-items:center;gap:22px;padding:10px 18px"><img src="${TH}" alt="" style="height:44px;mix-blend-mode:multiply"><div><select class="hs" data-sel="sx" style="border:0;padding:0;font-weight:700;font-size:15px;background:none">${['AF-017','AF-023','AF-041','AF-012'].map(x=>`<option ${S.sx===x?'selected':''}>${x}</option>`).join('')}</select><small style="display:block;color:var(--mu)">Tejas Mk1A</small></div>${[['Flight Hours','421 h'],['Cycles','318'],['Last Flight','5 Oct 2026, 10:42']].map(x=>`<div><small style="color:var(--mu)">${x[0]}</small><br><b>${x[1]}</b></div>`).join('')}<span class="sp s">● Online</span></div></div><div id="lv" style="margin-top:6px">${liveBody()}</div>`}
setInterval(()=>{stream();if(S.view==='sensors'){const e=$('#lv');if(e){e.innerHTML=liveBody();e.querySelectorAll('[data-id]').forEach(x=>x.onclick=()=>{S.sel=x.dataset.id;S.view='ac';render()});e.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>{S.view=x.dataset.go;render()})}}},1500);
function spares2(){return''}
const TW={Aircraft:[91,'—','—','Nominal'],Engine:[74,'72.4 °C','0.42 g','Degrading'],Combustion:[88,'640 °C','0.21 g','Nominal'],Compressor:[69,'418 °C','0.61 g','Degrading'],Turbine:[86,'810 °C','0.30 g','Nominal']},TP={Aircraft:[142,150],Engine:[130,262],Combustion:[130,240],Compressor:[130,218],Turbine:[130,284]};

const CH:any[][]=[['Engine',32,'Degrading','#d12e37','set','#fde4e6','#e5252f','↑ '],['Hydraulics',68,'Stable','#6b7a94','drop','#fdeed2','#f59e0b',''],['Electrical',82,'Stable','#6b7a94','bolt','#d9f2e6','#12a35f',''],['Flight Control',61,'Monitor','#e48a14','set','#fdeed2','#f59e0b',''],['Avionics',77,'Stable','#6b7a94','models','#d9f2e6','#12a35f',''],['Airframe',89,'Healthy','#12915f','ac','#e1ebfc','#12a35f','']];
const HS:any[][]=[['Avionics',50.7,16.7,12,9],['Engine',85.9,32.7,10,9],['Flight Control',89.1,54.7,12,9],['Hydraulics',69.3,81.3,12,9],['Electrical',49.5,85.1,12,9]];
const TR=Array.from({length:31},(_,i)=>i<12?91+Math.sin(i*1.3)*2:i<18?91-(i-11)*4+Math.sin(i*2)*1.5:67+Math.sin(i*1.7)*3);TR[30]=72;
const RULS:any[][]=[['Engine','set','#f0566a','18 – 26 cycles',22],['Hydraulics','drop','#12a35f','> 100 cycles',83],['Electrical','bolt','#12a35f','> 100 cycles',83],['Flight Control','set','#f59e0b','60 – 90 cycles',75],['Avionics','models','#12a35f','> 100 cycles',83]];
const SC:any[][]=[['Load Increase','Increase load by','%',50,20,v=>[['Engine Temperature','↑ +'+Math.round(v*2.4)+' °C'],['Vibration (RMS)','↑ +'+Math.round(v*1.3)+'%'],['RUL (Engine)','↓ '+Math.round(v*.3)+' – '+Math.round(v*.5)+' cycles']]],['Temperature Rise','Increase ambient temp by','°C',30,10,v=>[['Engine Temperature','↑ +'+Math.round(v*.9)+' °C'],['Oil Pressure','↓ '+Math.round(v*.4)+'%'],['RUL (Engine)','↓ '+Math.round(v*.2)+' – '+Math.round(v*.4)+' cycles']]],['Component Failure','Degradation severity','%',100,30,v=>[['Fleet Availability','↓ '+(v*.05).toFixed(1)+'%'],['Added Downtime','↑ +'+Math.round(v*.4)+' h'],['RUL (Engine)','↓ '+Math.round(v*.6)+' – '+Math.round(v*.9)+' cycles']]]];
Object.assign(S,{twt:0,twc:'Engine',sc:0,sv:20,ex:0,rot:0});
const simRes=()=>{const ls=[.4,.3,.75][S.sc]*S.sv,af=Math.max(0,Math.round(22-ls));return`<div class="imp">${SC[S.sc][5](S.sv).map(r=>`<div><span>${r[0]}</span><span class="r">${r[1]}</span></div>`).join('')}</div><small style="color:var(--mu)">Engine RUL: 22 → ${af} cycles</small><div class="meter" style="margin:4px 0"><i style="width:${22/30*100}%;background:#9aa6b8"></i></div><div class="meter"><i style="width:${af/30*100}%;background:#d12e37"></i></div>`},svTxt=()=>'+'+S.sv+SC[S.sc][2];
function twinB(){const ci=CH.find(x=>x[0]===S.twc)||CH[0],TB=['3D Model','Component Health','Degradation & RUL','Simulation','Maintenance Insights'];
const model0=`<div id="jet-3d-mount" class="card tw3w" style="padding:0;background:#06101f;height:430px;min-height:430px;position:relative;overflow:hidden;border-radius:12px;"></div>`;
const model=S.vw===1?sysV():S.vw===2?mapV():model0;
const health=`<div class="card hcw"><h3>Component Health<a style="color:#1f66d1;font-size:13px;font-weight:500;cursor:pointer" data-tw="1">View Details →</a></h3><div class="hgrid">${CH.map((h,i)=>`<div class="hc ${h[0]===S.twc?'sel':''}" data-tc="${h[0]}" tabindex="0"><div class="ki2" style="background:${h[5]};color:${h[6]}">${ic(h[4])}</div><div><small style="font-weight:500">${h[0]}</small><b>${h[1]}%</b><small style="color:${h[3]};font-size:12px">${h[7]}${h[2]}</small></div>${spk(h[6],i+2).replace('<svg ','<svg class="sp2" ')}</div>`).join('')}</div></div>`;
const x0=44,x1=452,y0=10,y1=158,Y=v=>y1-v/100*(y1-y0),X=i=>x0+i/30*(x1-x0),seg=TR.slice(1).map((v,i)=>{const m=(v+TR[i])/2;return`<line x1="${X(i)}" y1="${Y(TR[i])}" x2="${X(i+1)}" y2="${Y(v)}" stroke="${m>=80?'#12a35f':m>=50?'#f59e0b':'#d12e37'}" stroke-width="2" stroke-linecap="round"/>`}).join('');
const trend=`<div class="card"><h3>Health Trend (Overall)<span class="sel2" style="font-weight:500">Last 30 days ⌄</span></h3><svg viewBox="0 0 460 200" width="100%"><defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#12a35f" stop-opacity=".22"/><stop offset="1" stop-color="#f59e0b" stop-opacity=".1"/></linearGradient></defs>${[0,20,40,60,80,100].map(v=>`<line x1="${x0}" x2="${x1}" y1="${Y(v)}" y2="${Y(v)}" stroke="rgba(15,28,46,.07)"/><text x="${x0-6}" y="${Y(v)+3}" text-anchor="end" font-size="9.5">${v}</text>`).join('')}${['5 Sep','10 Sep','15 Sep','20 Sep','25 Sep','30 Sep','5 Oct'].map((t,j)=>`<text x="${x0+j*(x1-x0)/6}" y="178" text-anchor="middle" font-size="9.5">${t}</text>`).join('')}<line x1="${x0}" x2="${x1}" y1="${Y(70)}" y2="${Y(70)}" stroke="#f59e0b" stroke-dasharray="4 4"/><line x1="${x0}" x2="${x1}" y1="${Y(40)}" y2="${Y(40)}" stroke="#d12e37" stroke-opacity=".6" stroke-dasharray="4 4"/><polygon points="${x0},${y1} ${TR.map((v,i)=>X(i)+','+Y(v)).join(' ')} ${x1},${y1}" fill="url(#tg)"/>${seg}<rect x="${x1-18}" y="${Y(72)-28}" width="36" height="17" rx="4" fill="#d12e37"/><text x="${x1}" y="${Y(72)-16}" text-anchor="middle" font-size="10.5" font-weight="600" style="fill:#fff">72%</text><circle cx="${x1}" cy="${Y(72)}" r="3.5" fill="#fff" stroke="#d12e37" stroke-width="2"/></svg><div style="display:flex;gap:18px;font-size:12.5px;justify-content:center">${[['Healthy','#12a35f'],['Monitor','#f59e0b'],['At Risk','#d12e37']].map(l=>`<span><i style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${l[1]}"></i> ${l[0]}</span>`).join('')}</div></div>`;
const rul=`<div class="card"><h3>Remaining Useful Life (RUL)</h3>${RULS.map(r=>`<div class="rl"><span class="ico2" style="background:#f3f5f9;color:${r[2]}">${ic(r[1])}</span><span style="width:96px;font-size:13px">${r[0]}</span><div style="flex:1"><small>${r[3]}</small><div class="meter"><i style="width:${r[4]}%;background:${r[2]}"></i></div></div></div>`).join('')}</div>`;
const sim=`<div class="card"><h3>What-If Simulation</h3><div class="seg">${SC.map((c,i)=>`<button class="${S.sc===i?'on':''}" data-sc="${i}">${c[0]}</button>`).join('')}</div><div style="display:flex;align-items:center;gap:12px;font-size:13px;margin-bottom:12px"><span style="width:110px">${SC[S.sc][1]}</span><input type="range" min="0" max="${SC[S.sc][3]}" value="${S.sv}" data-sl aria-label="${SC[S.sc][1]}"><b id="sv" style="border:1px solid var(--bd);border-radius:8px;padding:5px 10px">${svTxt()}</b></div><div style="background:var(--p2);border-radius:10px;padding:10px 14px"><b style="font-size:13px">Predicted Impact</b><div id="sr">${simRes()}</div></div><button class="btn pri" data-t="Simulation complete" style="width:100%;margin-top:14px;padding:13px">▶ Run Simulation</button></div>`;
const ins=`<div class="card"><h3>Maintenance Insights</h3>${[['Engine','Inspect compressor stage 3 before the next operational cycle. Part B-17 is in stock.','+1 aircraft availability'],['Flight Control','Monitor actuator lag and schedule a check within 60 cycles.','+0.8% readiness'],['Hydraulics','Seal check recommended. Seal kit H-04 is in stock (6 available).','−3 h downtime risk']].map(r=>`<div class="q" data-go="maint" tabindex="0"><div class="ci" style="background:#0c6b63">${ic('maint')}</div><div class="mid"><b>${r[0]}</b><small>${r[1]}</small></div><span class="sp s">${r[2]}</span></div>`).join('')}</div>`;
const body=[`<div class="tw">${model}${health}</div><div class="tw2">${trend}${rul}${sim}</div>`,health,`<div class="tw2" style="grid-template-columns:1fr 1fr">${trend}${rul}</div>`,`<div class="tw2" style="grid-template-columns:1fr 1fr;margin-top:0">${sim}${rul}</div>`,ins][S.twt];
return body}
function ov(){const A:any[][]=[['CRITICAL','AF-017','Engine vibration anomaly detected'],['ATTENTION','AF-023','Hydraulic pressure trend deteriorating'],['WATCH','AF-041','Scheduled maintenance due tomorrow']];
$('#ov').innerHTML=(S.drawer?`<div class="bk" data-x></div><div class="dr"><h3>Alerts<span class="tag">${A.length} active</span></h3>${A.map(a=>`<div class="al">${pl(a[0],a[0]==='ATTENTION'?'Warning':a[0]==='WATCH'?'Info':'Critical')}<b style="display:block;margin-top:6px">${a[1]}</b><small>${a[2]}</small></div>`).join('')}</div>`:'')+(S.modal?`<div class="bk" data-x></div><div class="modal"><h3>Schedule maintenance</h3><label>Aircraft</label><select id="fa">${['AF-017','AF-023','AF-032','AF-041'].map(x=>`<option>${x}</option>`).join('')}</select><label>Issue</label><input id="fi" value="Engine inspection"><label>Priority</label><select id="fp"><option>P1</option><option>P2</option><option>P3</option></select><div style="display:flex;gap:10px;margin-top:20px"><button class="btn pri" id="fs">Schedule</button><button class="btn gh" data-x>Cancel</button></div></div>`:'')+(S.toast?`<div class="toast">${S.toast}</div>`:'')}
function bind2(){const d=document;d.querySelectorAll('[data-dtab]').forEach(b=>b.onclick=()=>{S.dtab=+b.dataset.dtab;render()});d.querySelectorAll('[data-dd]').forEach(b=>b.onclick=()=>{S.ddoc=+b.dataset.dd;S.dp=12;render()});d.querySelectorAll('[data-di]').forEach(b=>b.onclick=()=>{S.di=+b.dataset.di;render()});d.querySelectorAll('[data-dz]').forEach(b=>b.onclick=()=>{S.dz=Math.max(50,Math.min(200,S.dz+ +b.dataset.dz));render()});d.querySelectorAll('[data-dp]').forEach(b=>b.onclick=()=>{S.dp=Math.max(1,Math.min(DOCS[S.ddoc][2],S.dp+ +b.dataset.dp));render()});const fu=d.getElementById('fu');if(fu){fu.onchange=()=>addFiles(fu.files);d.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>fu.click())}d.querySelectorAll('[data-drop]').forEach(z=>{z.ondragover=e=>e.preventDefault();z.ondrop=e=>{e.preventDefault();addFiles(e.dataTransfer.files)}});const chatIn=d.getElementById('chat-input') as HTMLInputElement;
  const sendUserChat=(text?:string)=>{
    const q=(text!==undefined?text:(chatIn?chatIn.value:'')).trim();
    if(!q)return;
    if(chatIn)chatIn.value='';
    const now=new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})+' IST';
    if(!S.chat)S.chat=[];
    S.chat.push({role:'user',text:q,time:now});
    S.chatTyping=true;
    render();
    const f1=d.getElementById('chat-feed');if(f1)f1.scrollTop=f1.scrollHeight;
    setTimeout(()=>{
      S.chatTyping=false;
      const resp=getAiResponse(q,S.chatAc||'ALL');
      S.chat.push({role:'assistant',text:resp.text,time:new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})+' IST',metrics:resp.metrics,recommendation:resp.recommendation,actions:resp.actions,sources:resp.sources});
      render();
      const f2=d.getElementById('chat-feed');if(f2)f2.scrollTop=f2.scrollHeight;
    },320);
  };
  if(chatIn){chatIn.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();sendUserChat();}};}
  const chatSendBtn=d.getElementById('chat-send');if(chatSendBtn)chatSendBtn.onclick=()=>sendUserChat();
  d.querySelectorAll('[data-cp]').forEach(b=>{b.onclick=()=>{const p=(b as HTMLElement).dataset.cp;if(p)sendUserChat(p);};});
  const chatClr=d.getElementById('chat-clear');if(chatClr)chatClr.onclick=()=>{S.chat=[];render();};
  const chatExp=d.getElementById('chat-export');if(chatExp)chatExp.onclick=()=>{S.toast='Conversation briefing copied to clipboard';navigator.clipboard?.writeText(JSON.stringify(S.chat,null,2));ov();setTimeout(()=>{S.toast='';ov();bind2();},2200);};
  const acSc=d.getElementById('chat-ac-scope') as HTMLSelectElement;if(acSc)acSc.onchange=()=>{S.chatAc=acSc.value;render();};
  d.querySelectorAll('[data-ca]').forEach(b=>{b.onclick=()=>{
    const act=(b as HTMLElement).dataset.ca;if(!act)return;
    if(act.startsWith('prompt:')){sendUserChat(act.slice(7));}
    else if(act.startsWith('schedule:')){const tail=act.split(':')[1]||'AF-017';S.modal=1;const fi=d.getElementById('fi') as HTMLInputElement;if(fi)fi.value=`Inspection for ${tail}`;render();}
    else if(act.startsWith('view:sensors:')){const tail=act.split(':')[2]||'AF-017';S.sel=tail;S.view='sensors';render();}
    else if(act.startsWith('view:ac:')){const tail=act.split(':')[2]||'AF-017';S.sel=tail;S.view='ac';render();}
    else if(act.startsWith('view:')){S.view=act.slice(5);render();}
  };});d.querySelectorAll('[data-vw]').forEach(b=>b.onclick=()=>{S.vw=+b.dataset.vw;render()});d.querySelectorAll('[data-act]').forEach(b=>b.onchange=()=>{const v=b.value;if(v.startsWith('Schedule'))S.modal=1;else if(v.startsWith('Generate'))S.view='reports';else if(v.startsWith('Open'))S.view='sensors';render()});d.querySelectorAll('[data-psq]').forEach(b=>b.onchange=()=>{S.pq=b.value;render()});d.querySelectorAll('[data-tc]').forEach(b=>b.onclick=()=>{S.twc=b.dataset.tc;render()});d.querySelectorAll('[data-twt]').forEach(b=>b.onclick=()=>{S.at=+b.dataset.twt;render()});d.querySelectorAll('[data-tw]').forEach(b=>b.onclick=()=>{S.at=+b.dataset.tw;render()});d.querySelectorAll('[data-tb]').forEach(b=>b.onclick=()=>{const k=b.dataset.tb;if(k==='rot')S.rot^=1;else if(k==='ex')S.ex^=1;else{S.rot=0;S.ex=0;S.twc='Engine'}render()});d.querySelectorAll('[data-sc]').forEach(b=>b.onclick=()=>{S.sc=+b.dataset.sc;S.sv=SC[S.sc][4];render()});d.querySelectorAll('[data-sl]').forEach(b=>b.oninput=()=>{S.sv=+b.value;const e=document.getElementById('sr');if(e)e.innerHTML=simRes();const v=document.getElementById('sv');if(v)v.textContent=svTxt()});d.querySelectorAll('[data-sel]').forEach(b=>b.onchange=()=>{S[b.dataset.sel]=b.value;render()});d.querySelectorAll('[data-rt]').forEach(b=>b.onclick=()=>{S.rt=+b.dataset.rt;render()});d.querySelectorAll('[data-adv]').forEach(b=>b.onclick=()=>{S.adv^=1;render()});d.querySelectorAll('[data-rsq]').forEach(b=>b.onchange=()=>{S.rs=b.value;render()});d.querySelectorAll('[data-gen]').forEach(b=>b.onclick=()=>{const t=RT[S.rt],nw=new Date(),all=S.rt===1||S.rt===3||S.rt===4||S.rac==='All Fleets';S.rl.unshift(['RPT-2026-0'+(25+S.rl.length-5),t[0]+(all?'':' - '+S.rac),S.rt,all?'All Fleets':S.rac,'5 Oct 2026, '+nw.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})]);S.toast='Report generated (demo)';render();setTimeout(()=>{S.toast='';ov();bind2()},2200)});d.querySelectorAll('[data-dx]').forEach(b=>b.onclick=()=>{S.dx=+b.dataset.dx;render()});d.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{S.dq=+b.dataset.q;render()});d.querySelectorAll('[data-tg]').forEach(b=>b.onclick=()=>{S.tg[b.dataset.tg]^=1;render()});d.querySelectorAll('[data-ff]').forEach(b=>b.onclick=()=>{S.ff=b.dataset.ff;render()});d.querySelectorAll('[data-fs]').forEach(b=>b.onclick=()=>{S.fs=S.fs==='id'?'h':'id';render()});d.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{S.view=b.dataset.go;render()});d.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{S.tab=b.dataset.tab;render()});d.querySelectorAll('[data-mv]').forEach(b=>b.onclick=()=>{S.mv=b.dataset.mv;render()});d.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{S.comp=b.dataset.c;render()});d.querySelectorAll('[data-sx]').forEach(b=>b.onclick=()=>{S.sx=b.dataset.sx;render()});
d.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{S.toast=b.dataset.t+' (demo)';ov();setTimeout(()=>{S.toast='';ov();bind2()},2200);bind2()});d.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{S.modal=1;ov();bind2()});d.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{S.drawer=S.modal=0;ov();bind2()});
const fs=d.getElementById('fs');if(fs)fs.onclick=()=>{M.unshift([d.getElementById('fa').value,d.getElementById('fi').value,d.getElementById('fp').value,'Unassigned','4.0 h','TBD','Scheduled']);S.modal=0;S.tab='Scheduled';render()};
const mount=d.getElementById('jet-3d-mount');
if(mount){
  const jet=getJet3DInstance();
  if(jet.element.parentElement!==mount){
    mount.appendChild(jet.element);
  }
  jet.setSystem(S.twc||'Engine');
  jet.setRotate(Boolean(S.rot));
  jet.setExplode(Boolean(S.ex));
  setTimeout(()=>jet.resize(),50);
  jet.onSelectSystem(sys=>{
    S.twc=sys;
    d.querySelectorAll('.hc').forEach(el=>{
      el.classList.toggle('sel',(el as HTMLElement).dataset.tc===sys);
    });
  });
  jet.onStateChange(st=>{
    S.rot=st.rot?1:0;
    S.ex=st.ex?1:0;
    S.twc=st.sys;
    d.querySelectorAll('.hc').forEach(el=>{
      el.classList.toggle('sel',(el as HTMLElement).dataset.tc===st.sys);
    });
  });
}}

const coF=(t,sub,lab,col,pos,i)=>`<div class="co ${pos}"><div class="ci">${ic(i)}</div><div><b>${t}</b><small>${sub}</small><span style="color:${col}"><i style="background:${col}"></i>${lab}</span>${spk(col,t.length)}</div></div>`;
function jetPanel(an){const pc=an?'#d12e37':'#12915f';const GN='#0d9163',OR='#fc8a0e',RD='#d21923',dot=(x:number,y:number,c:string,g:string)=>`<circle cx="${x}" cy="${y}" r="15.5" fill="url(#${g})"/><circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="${c}" stroke-width="1"/><circle cx="${x}" cy="${y}" r="6.9" fill="${c}"/>`,hg=(id:string,c:string)=>`<radialGradient id="${id}"><stop offset=".5" stop-color="${c}" stop-opacity=".3"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`;return`<div class="jw"><div class="jet"><img src="${JET}" width="284" height="325" alt="Aircraft top-down view"><svg viewBox="0 0 284 325" width="284" height="325" style="position:absolute;left:0;top:0;overflow:visible"><defs>${hg('jh-g',GN)}${hg('jh-o',OR)}${hg('jh-r',RD)}</defs><g fill="none" stroke="#9db0c7"><path d="M96 118L52 72H-6"/><path d="M178 112L222 72H290"/><path d="M82 214L40 258H-6"/><path d="M194 202L230 258H290"/></g>${dot(100.2,121.6,GN,'jh-g')}${dot(173.5,117.4,OR,'jh-o')}${dot(189.8,199.4,RD,'jh-r')}${dot(86.2,215.5,GN,'jh-g')}${an?'<circle class="pulse" cx="100.2" cy="121.6" r="9" fill="none" stroke="#d12e37" stroke-width="2"/>':''}<circle class="pulse" cx="173.5" cy="117.4" r="9" fill="none" stroke="#f08a1c" stroke-width="2"/><circle class="pulse" cx="189.8" cy="199.4" r="9" fill="none" stroke="#d12e37" stroke-width="2"/></svg></div>${coF('Propulsion','Vibration, EGT, RPM',an?'Degrading':'Healthy',pc,'ctl','sensors')}${coF('Hydraulics','Pressure, Flow, Temp','Watch','#e48a14','ctr','models')}${coF('Electrical','Voltage, Current, Gen','Healthy','#12915f','cbl','sensors')}${coF('Flight Control','Actuator Position, Load','Critical','#d12e37','cbr','twin')}</div>`}
const kp5=a=>`<div class="card kp">${a.map(x=>`<div class="kc"><div class="ki" style="background:${x[0]}1f;color:${x[0]}">${ic(x[1])}</div><div><b>${x[2]}</b><small>${x[3]}</small>${x[4]||''}</div>${spk(x[0],parseFloat(x[2])||3)}</div>`).join('')}</div>`;
const hd=(t,u,x='')=>`<div style="display:flex;align-items:flex-start"><div style="flex:1"><div class="eb">— ${t.toUpperCase()}</div><h1>${t}</h1><p class="sub">${u}</p></div>${x}</div>`;
const spc={HEALTHY:['s','Mission ready'],ATTENTION:['a','Attention'],CRITICAL:['c','Critical'],MAINT:['m','In maintenance']};
function preds(){
  const R:any[][]=[['AF-017','Engine','Compressor degradation',76,'18–26 cycles','0.84','Degrading'],['AF-023','Hydraulics','Pressure instability',62,'31 cycles','0.78','Degrading'],['AF-041','Electrical','Voltage anomaly',48,'52 cycles','0.71','Stable'],['AF-056','Engine','Bearing wear trend',46,'67 cycles','0.69','Degrading'],['AF-072','Avionics','Sensor drift',38,'94 cycles','0.66','Stable'],['AF-089','Flight Control','Actuator lag',35,'102 cycles','0.64','Stable']];
  const mo=['May','Jun','Jul','Aug','Sep','Oct'],A=[210,205,225,215,230,220],B=[210,180,150,128,110,96];
  const bars=mo.map((m,i)=>{const x=i*58+14,ha=A[i]/240*140,hb=B[i]/240*140;return`<rect x="${x}" y="${150-ha}" width="20" height="${ha}" rx="3" fill="#c9d2de"/><rect x="${x+23}" y="${150-hb}" width="20" height="${hb}" rx="3" fill="#1f66d1"/><text x="${x+10}" y="168" font-size="11">${m}</text>`}).join('');
  return hd('Predictions','Failure risk and remaining useful life across the fleet · demo data','<div class="dm"><span>DEMO MODEL OUTPUT</span></div>')+kp5([['#d12e37','warn',3,'Critical predictions'],['#e48a14','sensors',5,'Degrading trends'],['#1f66d1','models','11.4 days','Mean detection lead time'],['#12915f','chk','6.2%','False alarm rate']])+`<div class="g cmdg" style="grid-template-columns:1.4fr 1fr;margin-top:16px"><div class="card" style="padding:0"><h3 style="padding:20px 20px 0">Fleet failure-risk ranking</h3>${tbl(['Aircraft','System','Predicted issue','Risk','RUL','Conf.','Trend'],R.map(r=>[`<b style="cursor:pointer;color:var(--ac)" data-id="${r[0]}">${r[0]}</b>`,r[1],r[2],`<div style="display:flex;gap:8px;align-items:center;width:110px"><div class="meter" style="flex:1"><i style="width:${r[3]}%;background:${r[3]>=60?'var(--rd)':r[3]>=40?'var(--am)':'var(--ac)'}"></i></div>${r[3]}%</div>`,r[4],r[5],`<span class="sp ${r[6]==='Degrading'?'a':'m'}">${r[6]}</span>`]))}</div>
<div class="card"><h3>Reactive vs predictive maintenance<span class="tag">Simulated projection</span></h3><svg viewBox="0 0 360 180" width="100%">${bars}</svg><div style="display:flex;gap:16px;font-size:12.5px;color:var(--mu)"><span><i style="display:inline-block;width:10px;height:10px;background:#c9d2de;border-radius:2px"></i> Reactive: unplanned downtime (h)</span><span><i style="display:inline-block;width:10px;height:10px;background:#1f66d1;border-radius:2px"></i> With AeroFleet</span></div><p style="margin:14px 0 0"><b style="font-size:22px;color:var(--gn)">−56%</b> unplanned downtime hours by October in this simulation.</p></div></div>
<div class="card" style="margin-top:16px;padding:0"><h3 style="padding:20px 20px 0">Model health<span class="tag">4 models in production · 1 drift alert · median latency 65 ms</span></h3>${tbl(['Model','Validation score','Last trained','Data volume','Latency','Feature drift'],[['<b>Anomaly detection</b>','F1 0.91','2 Oct 2026','1.2M readings','42 ms',pl('HEALTHY','Low')],['<b>RUL prediction</b>','MAE 3.1 cycles','2 Oct 2026','340k cycles','65 ms',pl('HEALTHY','Low')],['<b>Failure risk</b>','AUC 0.93','30 Sep 2026','210k records','38 ms',pl('ATTENTION','Moderate')],['<b>Fleet availability forecast</b>','MAPE 4.2%','28 Sep 2026','84 aircraft × 2 yr','120 ms',pl('HEALTHY','Low')]])}</div>`}

function getAiResponse(q: string, acFilter: string) {
  const lq = q.toLowerCase();
  
  if (lq.includes('af-017') || (acFilter === 'AF-017' && !lq.includes('af-023') && !lq.includes('af-041')) || lq.includes('compressor') || lq.includes('vibration') || lq.includes('blade')) {
    return {
      text: "### Comprehensive Diagnostic Report: Aircraft AF-017\n\n**Subsystem:** Propulsion / Engine #1 · Compressor Stage 3  \n**Status:** **CRITICAL** (Anomaly Confidence: 94.2%)\n\n#### Root Cause & Telemetry Corroboration:\n- **HUMS Telemetry (`VIB_ENG_02`):** Vibration harmonic rise to **2.4 g RMS** (+32% above nominal threshold of 1.5 g) during climb power settings.\n- **Exhaust Gas Temperature:** Peaked at **812 °C** under high throttle.\n- **Pilot Technical Logbook:** Pilot Snag `SN-2291` reports slight high-frequency airframe shudder on climb-out.\n- **Remaining Useful Life (RUL):** Predicted at **18–26 flight cycles** before blade tip erosion violates dispatch airworthiness.\n\n#### Supply Chain & Depot Logistics:\n- **Spare Part:** **Compressor Blade Kit B-17** is verified in stock (**2 units available**) at Base A Main Store (Bin E-14).\n- **Depot Slot:** Engine Overhaul Division (EOD) Depot A Bay 2 has a reserved 6.4-hour inspection window.",
      metrics: [
        { label: 'RMS Vibration', value: '2.4 g (+32%)', color: '#d12e37' },
        { label: 'Exhaust Temp', value: '812 °C (Elevated)', color: '#e48a14' },
        { label: 'Predicted RUL', value: '18–26 Cycles', color: '#d12e37' },
        { label: 'Part B-17 Stock', value: '2 Units (Base A)', color: '#12915f' }
      ],
      recommendation: "Approve targeted borescope inspection and pre-allocate Blade Kit B-17 immediately. Proactive servicing recovers +9.2% fleet readiness and prevents an estimated 144-hour catastrophic AOG engine teardown.",
      actions: [
        { label: '📅 Schedule Maintenance for AF-017', action: 'schedule:AF-017', icon: 'maint' },
        { label: '📈 Inspect Live Telemetry', action: 'view:sensors:AF-017', icon: 'sensors' },
        { label: '✈️ Open Aircraft AF-017 Digital Twin', action: 'view:ac:AF-017', icon: 'ac' },
        { label: '📦 View Part B-17 in Spares ERP', action: 'view:spares', icon: 'spares' }
      ],
      sources: ['HUMS Stream VIB_ENG_02', 'Pilot Log SN-2291', 'IETM Manual Sec 5.2', 'Central ERP Store A']
    };
  }

  if (lq.includes('af-023') || (acFilter === 'AF-023') || lq.includes('hydraulic') || lq.includes('actuator') || lq.includes('seal')) {
    return {
      text: "### Diagnostic Analysis: Aircraft AF-023\n\n**Subsystem:** Flight Control Hydraulics / System 2  \n**Status:** **ATTENTION** (Severity Level 2)\n\n#### Findings & Anomaly Corroboration:\n- **Telemetry (`HYD_PRS_02`):** System 2 pressure experienced a transient sag down to **2,650 psi** during taxi and flap deployment (350 psi drop from nominal 3,000 psi operating pressure).\n- **Ground Debrief:** Post-flight line walkaround log `SN-2284` recorded a slight hydraulic fluid weep around the primary flight control actuator rod gland.\n- **Remaining Useful Life (RUL):** Calculated at **31 cycles** before seal degradation breaches minimum pressure tolerances.\n\n#### Logistics & Resolution:\n- **Spare Part:** **Actuator Seal Kit H-04** is verified in stock (**6 units**) in Base B Component Store (Bin H-02).\n- **Maintenance Agency:** Hydraulics & Accessories Workshop (Base B Test Rig 1) has technician availability.",
      metrics: [
        { label: 'Hydraulic Pressure', value: '2,650 psi (↓350)', color: '#e48a14' },
        { label: 'Seal Condition', value: 'Weeping Observed', color: '#e48a14' },
        { label: 'Estimated RUL', value: '~31 Cycles', color: '#e48a14' },
        { label: 'Seal Kit H-04', value: '6 In Stock (Base B)', color: '#12915f' }
      ],
      recommendation: "Schedule an actuator seal inspection within 15 cycles to replace the worn seal gland using Kit H-04. Prevents unexpected in-flight hydraulic system abort.",
      actions: [
        { label: '📅 Schedule Seal Replacement', action: 'schedule:AF-023', icon: 'maint' },
        { label: '📈 View Hydraulic Telemetry', action: 'view:sensors:AF-023', icon: 'sensors' },
        { label: '📦 Check Seal Kit in Spares', action: 'view:spares', icon: 'spares' }
      ],
      sources: ['Telemetry Feed HYD_PRS_02', 'Line Maintenance Log SN-2284', 'Hydraulic Schematic DWG-31']
    };
  }

  if (lq.includes('af-041') || (acFilter === 'AF-041') || lq.includes('electrical') || lq.includes('voltage') || lq.includes('generator') || lq.includes('harness')) {
    return {
      text: "### Telemetry & Maintenance Assessment: Aircraft AF-041\n\n**Subsystem:** Electrical Power Generation / DC Distribution Bus  \n**Status:** **WATCH** (Non-Critical Anomaly)\n\n#### Diagnostics:\n- **Telemetry (`VOLT_BUS_01`):** Generator output drifted to **22.1 V** during ground run (baseline 24.0 V).\n- **Technical Record:** Work card `SN-2279` noted oxidation on generator harness connector pins. Connector cleaned and re-seated.\n- **Estimated RUL:** **52 cycles** before voltage sag re-occurs.\n- **Spares Availability:** **Wiring Harness E-22** has **4 units in stock** at Base C Store (Bin EL-09).",
      metrics: [
        { label: 'DC Bus Voltage', value: '22.1 V (Baseline 24.0)', color: '#1f66d1' },
        { label: 'Estimated RUL', value: '52 Cycles', color: '#1f66d1' },
        { label: 'Harness E-22', value: '4 In Stock (Base C)', color: '#12915f' }
      ],
      recommendation: "Continue automated telemetry monitoring across subsequent 2 sorties. If voltage sag persists below 22.0 V, deploy Wiring Harness E-22 from Base C.",
      actions: [
        { label: '✈️ Inspect Aircraft AF-041', action: 'view:ac:AF-041', icon: 'ac' },
        { label: '📈 Open DC Bus Telemetry', action: 'view:sensors:AF-041', icon: 'sensors' }
      ],
      sources: ['VOLT_BUS_01 Telemetry', 'Debrief SN-2279', 'Wiring Diagram E-12']
    };
  }

  if (lq.includes('urgent') || lq.includes('critical') || lq.includes('queue') || lq.includes('priority') || lq.includes('pending') || lq.includes('schedule maintenance')) {
    return {
      text: "### Fleet Urgent Maintenance & Risk Triage\n\nCurrently, **84 total aircraft** are tracked across Bases A, B, C, and D. **3 aircraft require critical intervention** and **5 are under watch/attention**:\n\n1. **AF-017 (Engine #1 Compressor):** **CRITICAL** · Vibration 2.4 g · RUL 18 cycles · **Action: Approve borescope & Blade Kit B-17 replacement immediately**.\n2. **AF-012 (Avionics Sensor Drift):** **CRITICAL** · Nav drift · RUL 41 cycles · Action: Recalibrate IMU bus.\n3. **AF-060 (Landing Gear Actuator):** **CRITICAL** · Hydraulic cycle lag · Action: Depot overhaul.\n4. **AF-023 (Hydraulic System 2):** **ATTENTION** · Pressure sag 2,650 psi · RUL 31 cycles · Seal Kit H-04 ready.\n5. **AF-041 (DC Bus Voltage):** **WATCH** · Voltage drift 22.1 V · RUL 52 cycles · Harness E-22 in stock.\n\n#### Fleet Impact:\nAddressing AF-017 now prevents 144 hours of unscheduled downtime and lifts fleet availability back above the **85% target threshold**.",
      metrics: [
        { label: 'Critical Aircraft', value: '3 Tails', color: '#d12e37' },
        { label: 'Attention Aircraft', value: '5 Tails', color: '#e48a14' },
        { label: 'Mission Ready', value: '66 Aircraft (78.6%)', color: '#12915f' },
        { label: 'Readiness Gain', value: '+9.2% on Approval', color: '#12915f' }
      ],
      recommendation: "Prioritize work order issuance for AF-017 on the Maintenance Kanban board. All required parts and depot slots are pre-cleared.",
      actions: [
        { label: '🛠️ Go to Maintenance Kanban', action: 'view:maint', icon: 'maint' },
        { label: '📊 View Fleet Availability Impact', action: 'view:avail', icon: 'clock' },
        { label: '✈️ Inspect AF-017 Profile', action: 'view:ac:AF-017', icon: 'ac' }
      ],
      sources: ['Fleet Health Registry', 'Maintenance Scheduling Engine', 'Availability Forecaster']
    };
  }

  if (lq.includes('spare') || lq.includes('part') || lq.includes('inventory') || lq.includes('b-17') || lq.includes('h-04') || lq.includes('e-22') || lq.includes('stock')) {
    return {
      text: "### Spares Inventory & Supply Chain Status\n\nCentral ERP query across all 4 forward supply depots (Bases A, B, C, D):\n\n- **ENG-B17 (Compressor Blade Kit B-17):** **2 units in stock** (Base A Store, Bin E-14). ⚠️ Buffer low.\n- **HYD-H04 (Actuator Seal Kit H-04):** **6 units in stock** (Base B Store, Bin H-02). ✅ Optimal.\n- **ELEC-E22 (Wiring Harness E-22):** **4 units in stock** (Base C Store, Bin EL-09). ✅ Available.\n- **FLT-3019 (Flight Control Actuator):** **1 unit in stock** (Central Depot Store). ⚠️ 1 Reserved.\n- **ENG-FLT01 (Synthetic Oil Filter Kit):** **18 units in stock** across forward air bases.\n\nAll parts are OEM-certified for Tejas Mk1A with full airworthiness trace documentation.",
      metrics: [
        { label: 'Tracked Part Numbers', value: '2,486 P/Ns', color: '#1f66d1' },
        { label: 'Reorder Alerts', value: '42 Items', color: '#e48a14' },
        { label: 'Stock Accuracy', value: '97.0%', color: '#12915f' },
        { label: 'Part B-17 On-Hand', value: '2 Kits', color: '#12915f' }
      ],
      recommendation: "Part B-17 is on-site at Base A for immediate issue to AF-017. Initiate automatic replenishment order for 2 additional B-17 kits from OEM buffer.",
      actions: [
        { label: '📦 Open Spare Parts Inventory', action: 'view:spares', icon: 'spares' },
        { label: '🛠️ Check Maintenance Allocations', action: 'view:maint', icon: 'maint' }
      ],
      sources: ['Central Spares ERP Feed', 'Depot Bin Allocation Matrix', 'OEM Lead-time Catalog']
    };
  }

  if (lq.includes('readiness') || lq.includes('availability') || lq.includes('fleet') || lq.includes('sortie') || lq.includes('summary')) {
    return {
      text: "### Fleet Availability & Sortie Readiness Briefing\n\n**Overall Fleet Readiness:** **78.6%** (66 of 84 aircraft fully mission-capable).\n\n#### Distribution by Base:\n- **Base A (Northern Air Command):** 21 aircraft · 17 Ready · 1 Critical (AF-017) · 1 Scheduled\n- **Base B (Western Sector):** 21 aircraft · 16 Ready · 1 Attention (AF-023) · 2 Scheduled\n- **Base C (Eastern Range):** 21 aircraft · 17 Ready · 1 Watch (AF-041) · 1 Scheduled\n- **Base D (Southern Command):** 21 aircraft · 16 Ready · 1 Critical (AF-060) · 1 Scheduled\n\n#### Predictive Trajectory:\nWithout predictive intervention, projected availability drops to **72.1%** by month-end due to secondary cascading damage on AF-017 and AF-023. Implementing AeroFleet's recommended schedule maintains availability at **86.4%**.",
      metrics: [
        { label: 'Mission Ready', value: '66 / 84 Aircraft', color: '#12915f' },
        { label: 'Availability Rate', value: '78.6%', color: '#1f66d1' },
        { label: 'Target Availability', value: '85.0%', color: '#64748b' },
        { label: 'Unplanned Downtime', value: '−56% with AI', color: '#12915f' }
      ],
      recommendation: "Maintain scheduled turnarounds on Base A and Base B. Approve the pending inspection on AF-017 to recover 1 fighter to combat readiness.",
      actions: [
        { label: '⏳ Open Fleet Availability Dashboard', action: 'view:avail', icon: 'clock' },
        { label: '📊 View Fleet Command Center', action: 'view:cmd', icon: 'cmd' }
      ],
      sources: ['Base Squadron Logs', 'AeroFleet Availability Engine', 'Mission Operations Command']
    };
  }

  if (lq.includes('compliance') || lq.includes('directive') || lq.includes('ad') || lq.includes('manual') || lq.includes('document')) {
    return {
      text: "### Airworthiness & Technical Documentation Compliance\n\n**Key Directives & Manual Citations:\n\n1. **Airworthiness Directive AD-2026-09 (`Airworthiness_Directive.pdf`):**\n   - **Requirement:** Mandatory inspection of flight control actuators (FLT-3019).\n   - **Deadline:** Within **60 cycles** from issuance.\n   - **Applicable Fleet:** AF-020 through AF-060.\n   - **Status:** **Action Due** (Compliance tracking active).\n\n2. **Tejas Mk1A Maintenance Manual (`Tejas_Mk1A_Maintenance_Manual.pdf`):**\n   - **Section 5.2 (Page 12):** Engine Borescope Inspection procedure and compressor stage 3 blade wear tolerances (maximum allowable tip loss: 1.2 mm).\n   - **Section 8.4:** Hydraulic seal replacement cycle interval (600 cycles).\n\n3. **Flight Operations Guide (`Flight_Operations_Guide.pdf`):**\n   - Mandatory pre-flight health check and post-flight telemetry upload protocol.",
      metrics: [
        { label: 'Doc Compliance', value: '96% Compliant', color: '#12915f' },
        { label: 'Action Items Due', value: '1 AD Directive', color: '#e48a14' },
        { label: 'Documents Active', value: '5 Technical Manuals', color: '#1f66d1' }
      ],
      recommendation: "Ensure flight control actuator inspection cards are appended to AF-023 during its upcoming hydraulic seal servicing window.",
      actions: [
        { label: '📄 Open Technical Documents', action: 'view:docs', icon: 'docs' },
        { label: '🛠️ View Maintenance Kanban', action: 'view:maint', icon: 'maint' }
      ],
      sources: ['AD-2026-09 Regulatory Doc', 'Tejas Mk1A IETM Sec 5.2', 'Flight Ops Manual']
    };
  }

  return {
    text: `### Aviation Intelligence Analysis\n\nRegarding your inquiry: *"**${q}**"*\n\nAeroFleet Copilot has evaluated active telemetry, historical defect logs, and depot logistics across the fleet:\n\n- **Fleet Sensor State:** High-speed streaming is normal across 81 aircraft; 3 aircraft exhibit elevated harmonic vibrations or voltage variations.\n- **Maintenance Context:** Active work orders are prioritized on the Kanban board. No secondary airframe structural faults detected.\n- **Technical Manual Reference:** Standard operating procedures comply with Tejas Mk1A IETM specification standards.\n\nHow would you like to proceed? Select an inquiry below or specify a tail number (e.g., AF-017, AF-023, AF-041).`,
    metrics: [
      { label: 'Analyzed Telemetry', value: '1.84M Points', color: '#1f66d1' },
      { label: 'Cross-Referenced', value: '4 Databases', color: '#12915f' }
    ],
    recommendation: "Inspect AF-017 diagnostic report or review the maintenance Kanban board to inspect active job cards.",
    actions: [
      { label: '🔍 Diagnose AF-017 (Critical)', action: 'prompt:What is the current health status and RUL for AF-017?', icon: 'warn' },
      { label: '🛠️ View Maintenance Board', action: 'view:maint', icon: 'maint' },
      { label: '📊 Check Fleet Readiness', action: 'prompt:What is the current fleet operational readiness?', icon: 'clock' }
    ],
    sources: ['Fleet Telemetry Broker', 'IETM Master Database', 'Depot ERP']
  };
}

function parseMarkdown(md: string): string {
  return md
    .replace(/^### (.*$)/gim, '<h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 8px">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 style="font-size:13.5px;font-weight:700;color:#1e293b;margin:12px 0 6px">$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li style="margin-bottom:4px">$1</li>')
    .replace(/\n\n/g, '<div style="height:8px"></div>');
}

function chat() {
  const msgs = S.chat || [];
  const curAc = S.chatAc || 'ALL';

  return `
    <div class="chat-page">
      <!-- Chat Hero Header -->
      <div class="chat-hero">
        <div class="chat-hero-left">
          <div class="chat-badge">
            <i class="chat-badge-dot"></i>
            <span>FLEET INTELLIGENCE AI COPILOT</span>
          </div>
          <h1 class="chat-title">AeroFleet AI Assistant</h1>
          <p class="chat-sub">
            Real-time conversational maintenance decision support · Grounded in 84 aircraft telemetry feeds, IETM ATA 2200, and spares ERP
          </p>
        </div>
        <div class="chat-hero-right">
          <select class="chat-ac-select" id="chat-ac-scope" title="Filter Aircraft Context">
            <option value="ALL" ${curAc === 'ALL' ? 'selected' : ''}>🎯 Scope: All Fleet (84 Aircraft)</option>
            <option value="AF-017" ${curAc === 'AF-017' ? 'selected' : ''}>✈️ Scope: AF-017 (Propulsion Critical)</option>
            <option value="AF-023" ${curAc === 'AF-023' ? 'selected' : ''}>✈️ Scope: AF-023 (Hydraulics Warning)</option>
            <option value="AF-041" ${curAc === 'AF-041' ? 'selected' : ''}>✈️ Scope: AF-041 (DC Bus Watch)</option>
          </select>
          <button class="chat-hero-btn" id="chat-clear" title="Clear conversation history">
            ${ic('dl')} Clear
          </button>
          <button class="chat-hero-btn" id="chat-export" title="Export conversation briefing">
            ${ic('reports')} Export
          </button>
        </div>
      </div>

      <!-- Quick Suggestion Chips -->
      <div class="chat-chips-bar">
        <span style="font-size:12px;color:var(--mu);font-weight:600;display:inline-flex;align-items:center;gap:4px;margin-right:2px">
          💡 Quick Inquiries:
        </span>
        <button class="chat-chip" data-cp="What is the current health status and RUL for AF-017?">
          🔍 AF-017 Compressor & RUL
        </button>
        <button class="chat-chip" data-cp="Which aircraft currently require immediate maintenance?">
          ⚠️ Critical Maintenance Queue
        </button>
        <button class="chat-chip" data-cp="Check stock and lead time for Compressor Blade Kit B-17">
          📦 Part B-17 Stock & Logistics
        </button>
        <button class="chat-chip" data-cp="Correlate AF-023 pilot snag with hydraulic telemetry">
          ⚡ AF-023 Hydraulic Snag Triage
        </button>
        <button class="chat-chip" data-cp="Summarize operational readiness and urgent risks across the fleet">
          📊 Fleet Readiness Summary
        </button>
        <button class="chat-chip" data-cp="What are the mandatory airworthiness directive compliance deadlines?">
          🛡️ Airworthiness Directives
        </button>
      </div>

      <!-- Main Message Feed -->
      <div class="chat-feed" id="chat-feed">
        ${msgs.map(m => `
          <div class="chat-msg ${m.role}">
            <div class="chat-avatar">
              ${m.role === 'assistant' ? ic('bot') : 'AS'}
            </div>
            <div class="chat-body">
              <div class="chat-meta">
                <b>${m.role === 'assistant' ? 'AeroFleet Copilot' : 'AeroFleet Specialist'}</b>
                <small>${m.time || '14:30 IST'}</small>
              </div>
              <div class="chat-bubble ${m.role}">
                <div>${parseMarkdown(m.text)}</div>

                ${m.metrics && m.metrics.length ? `
                  <div class="chat-metrics-grid">
                    ${m.metrics.map(mt => `
                      <div class="chat-metric-badge" style="border-left-color:${mt.color || '#1f66d1'}">
                        <small>${mt.label}</small>
                        <b style="color:${mt.color || '#0f172a'}">${mt.value}</b>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                ${m.recommendation ? `
                  <div class="chat-rec-box">
                    <b>🎯 Operational Recommendation:</b> ${m.recommendation}
                  </div>
                ` : ''}

                ${m.actions && m.actions.length ? `
                  <div class="chat-actions-row">
                    ${m.actions.map(act => `
                      <button class="chat-action-btn" data-ca="${act.action}">
                        ${act.icon ? ic(act.icon) : ''}
                        ${act.label}
                      </button>
                    `).join('')}
                  </div>
                ` : ''}

                ${m.sources && m.sources.length ? `
                  <div class="chat-sources-row">
                    <span>Grounded Sources:</span>
                    ${m.sources.map(src => `<span class="chat-source-tag">${src}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}

        ${S.chatTyping ? `
          <div class="chat-typing">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <em>AeroFleet AI analyzing fleet telemetry & records...</em>
          </div>
        ` : ''}
      </div>

      <!-- Chat Input Floating Dock -->
      <div class="chat-input-bar">
        <span style="font-size:12px;font-weight:700;color:#1f66d1;background:#eff6ff;padding:4px 8px;border-radius:6px;display:inline-flex;align-items:center;gap:4px">
          ${ic('bot')} AI
        </span>
        <input 
          id="chat-input" 
          class="chat-input-field" 
          placeholder="Ask AeroFleet AI about aircraft telemetry, predictive RUL, spares inventory, or maintenance procedures..." 
          autocomplete="off"
        />
        <button class="chat-send-btn" id="chat-send">
          ${ic('ready')} Send
        </button>
      </div>
      <div class="chat-hint">
        Press <b>Enter ↵</b> to send · Context: <b>${curAc === 'ALL' ? 'Fleet-Wide (84 Aircraft)' : curAc}</b> · Grounded in HUMS, Tech Logs & ERP
      </div>
    </div>
  `;
}

function avail(){
  const ap=S.approved;
  const r:any[][]=[['Engine failures',34,'#d12e37'],['Parts shortages',26,'#e48a14'],['Scheduled maintenance',21,'#1f66d1'],['Hydraulic issues',11,'#12915f'],['Other',8,'#8b97ab']];
  const W=[84.5,83.1,81.9,80.2,78.8,77.4,76.0];
  const G=ap?[84.5,85.3,86.1,86.9,87.4,87.8,88.2]:[84.5,85.0,85.6,86.1,86.5,86.9,87.2];
  const pt=a=>a.map((v,i)=>`${20+i*52},${150-(v-74)/16*140}`).join(' ');
  const AV=Array.from({length:30},(_,i)=>79+i*.18+Math.sin(i*.7)*1.5);AV[29]=84.5;
  const MT:any[][]=[['Engine',410,'#f0566a'],['Hydraulics',620,'#3b82f6'],['Electrical',780,'#12a35f'],['Avionics',900,'#8b5cf6']];
  const baseData=[{b:'A',h:1720},{b:'B',h:1590},{b:'C',h:1610},{b:'D',h:1500}];
  const utilRows:any[][]=[
    ['AF-017','Base A','142 h','68%','67 h','Engine vibration anomaly',pl('CRITICAL','Critical')],
    ['AF-023','Base B','158 h','72%','58 h','Hydraulic pressure instability',pl('ATTENTION','Attention')],
    ['AF-041','Base C','176 h','79%','46 h','Generator harness drift',pl('WATCH','Watch')],
    ['AF-012','Base D','184 h','82%','40 h','Avionics sensor drift',pl('WATCH','Watch')],
    ['AF-032','Base B','165 h','74%','54 h','Hydraulic pump replacement',pl('ATTENTION','Attention')],
    ['AF-005','Base A','192 h','86%','31 h','High sortie rate',pl('HEALTHY','Healthy')],
    ['AF-044','Base C','204 h','91%','20 h','Nominal operation',pl('HEALTHY','Healthy')],
    ['AF-071','Base D','88 h','39%','136 h','Depot reserve / under-utilized',pl('ATTENTION','Under-used')]
  ].map(row=>[`<span class="act" data-id="${row[0]}" style="cursor:pointer;font-weight:700;color:var(--ac)">${row[0]}</span>`,row[1],row[2],row[3],row[4],row[5],row[6]]);

  return hd('Availability & Utilisation','What is reducing availability, how aircraft time is used, and what to fix first · demo data')+kp5([['#1f66d1','ac',84,'Total aircraft'],['#12915f','chk',71,'Available'],['#1f66d1','maint',ap?6:5,'Maintenance'],['#e48a14','warn',ap?7:8,'At risk'],['#0c6b63','models','84.5%','Availability rate']])+`<div class="g cmdg" style="grid-template-columns:1fr 1fr;margin-top:16px"><div class="card"><h3>What is reducing availability?</h3>${r.map(x=>`<div style="display:flex;justify-content:space-between;margin-top:12px"><span>${x[0]}</span><b>${x[1]}%</b></div><div class="meter" style="margin-top:5px"><i style="width:${x[1]*2.6}%;background:${x[2]}"></i></div>`).join('')}<p style="color:var(--mu);font-size:12.5px;margin:14px 0 0;line-height:1.4">Parts shortages are avoidable: earlier prediction gives time to order and move spares before an aircraft is grounded.</p></div>
<div class="card"><h3>Optimization recommendations</h3>${[['Repair AF-017 first','Availability gain','+1 aircraft'],['Reallocate spare P-17 from Base B','Downtime reduction','12 h'],['Shift maintenance slot for AF-041','Readiness gain','+0.8%']].map(([a,b,c],i)=>`<div class="q"><div class="ci" style="background:#0c6b63">${i+1}</div><div class="mid"><b>${a}</b><small>${b}</small></div><span class="sp s">${c}</span></div>`).join('')}</div></div>
<div class="g cmdg" style="grid-template-columns:1fr 1fr;margin-top:16px"><div class="card"><h3>7-day availability forecast<span class="tag">Simulated</span></h3><svg viewBox="0 0 360 170" width="100%" height="180">${[0,1,2,3].map(i=>`<line x1="20" x2="350" y1="${10+i*46}" y2="${10+i*46}" stroke="rgba(15,28,46,.07)"/>`).join('')}<polyline points="${pt(W)}" fill="none" stroke="#d12e37" stroke-width="2" stroke-dasharray="5 4"/><polyline points="${pt(G)}" fill="none" stroke="#12915f" stroke-width="2.5"/>${[1,2,3,4,5,6,7].map((d,i)=>`<text x="${20+i*52}" y="166" font-size="10" text-anchor="middle">D${d}</text>`).join('')}</svg><div style="display:flex;gap:24px;font-size:12.5px;margin-top:4px"><span style="color:var(--rd)">- - Without intervention: ${W[6]}%</span><span style="color:var(--gn)">— With recommended maintenance${ap?' (approved)':''}: ${G[6]}%</span></div></div>
<div class="card"><h3>Fleet availability, last 30 days<span class="tag">Simulated</span></h3>${area(i=>AV[i],30,76,90,999,'#12a35f')}<small style="color:var(--mu);display:block;margin-top:8px">Availability rose steadily as predicted faults were fixed early.</small></div></div>
<div style="margin-top:16px">${kp5([['#12915f','chk','74%','Fleet utilisation'],['#1f66d1','sensors','6,420 h','Flying hours, 30 days'],['#0c6b63','ac','3,812','Sorties flown'],['#e48a14','clock','2,148 h','Downtime hours']])}</div>
<div class="g cmdg" style="grid-template-columns:1.2fr 1fr;margin-top:16px"><div class="card"><h3>Flying hours by base<span class="tag">0 to 2,000 h</span></h3><svg viewBox="0 0 380 180" width="100%">${[0,500,1000,1500,2000].map(v=>{const y=145-(v/2000)*125;return`<line x1="42" x2="360" y1="${y}" y2="${y}" stroke="rgba(15,28,46,.07)"/><text x="36" y="${y+3}" text-anchor="end" font-size="9.5" fill="var(--mu)">${v}</text>`}).join('')}${baseData.map((b,i)=>{const x=62+i*74,h=(b.h/2000)*125,y=145-h;return`<rect x="${x}" y="${y}" width="40" height="${h}" rx="3" fill="#1f66d1"/><text x="${x+20}" y="${y-5}" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f1c2e">${b.h}</text><text x="${x+20}" y="162" text-anchor="middle" font-size="11" fill="var(--mu)">Base ${b.b}</text>`}).join('')}</svg></div>
<div class="card"><h3>MTBF by system (hours)</h3>${MT.map(m=>`<div style="display:flex;justify-content:space-between;margin-top:12px"><span>${m[0]}</span><b>${m[1]} h</b></div><div class="meter" style="margin-top:5px"><i style="width:${m[1]/10}%;background:${m[2]}"></i></div>`).join('')}</div></div>
<div class="card" style="margin-top:16px;padding:0"><h3 style="padding:20px 20px 0">Aircraft utilisation</h3>${tbl(['Aircraft','Base','Flying hours','Utilisation','Downtime','Main reason','Status'],utilRows)}</div>`}
Object.assign(S,{pc:'All Components',ps:'All Status',pq:''});
function spares(){const re=S.re,P:any[][]=[['ENG-1045','Turbine Blade','Engine',12,20,'Critical','Main Store'],['HYD-2032','Seal Kit','Hydraulics',48,50,'Low Stock','Main Store'],['ELEC-0771','Control Module','Electrical',126,30,'In Stock','Main Store'],['FLT-3019','Actuator','Flight Control',8,15,'Critical','Secondary'],['AVN-5521','Navigation Unit','Avionics',34,25,'In Stock','Main Store'],['AIR-8110','Access Panel','Airframe',62,40,'In Stock','Secondary'],['ENG-6672','Fuel Nozzle','Engine',0,10,'Out of Stock','Main Store'],['HYD-4450','Pump Assembly','Hydraulics',22,25,'Low Stock','Main Store'],['HYD-P17','Hydraulic Pump P-17','Hydraulics',re?1:0,2,re?'Low Stock':'Out of Stock','Base B reserve']];
const cls={'Critical':'r','Low Stock':'a','In Stock':'g','Out of Stock':'r'},F=P.filter(p=>(S.pc==='All Components'||p[2]===S.pc)&&(S.ps==='All Status'||p[5]===S.ps)&&(p[0]+p[1]).toLowerCase().includes(S.pq.toLowerCase()));
const MO=['Apr','May','Jun','Jul','Aug','Sep'],SR:any[][]=[['Hydraulics','#3b82f6',[20,28,18,30,26,30]],['Electrical','#12a35f',[14,22,14,22,18,22]],['Flight Control','#f59e0b',[6,10,9,10,10,9]],['Engine','#f0566a',[5,8,8,8,7,7]],['Avionics','#8b5cf6',[7,9,9,9,8,6]],['Others','#9aa6b8',[5,6,7,5,5,4]]],Yb=v=>160-v*1.5;
const bars=MO.map((m,i)=>{let acc=0;return SR.map(r=>{const h=r[2][i]*1.5,y=160-(acc+r[2][i])*1.5;acc+=r[2][i];return`<rect x="${52+i*58}" y="${y}" width="40" height="${h}" fill="${r[1]}"/>`}).join('')+`<text x="${72+i*58}" y="176" text-anchor="middle" font-size="10.5">${m}</text>`}).join('');
const DN:any[][]=[['In Stock',68,'#12a35f'],['Low Stock',15,'#f59e0b'],['Critical',7,'#d12e37'],['On Order',6,'#3b82f6'],['Reserved',4,'#8b5cf6']];let off=0;const R=52,C=2*Math.PI*R,arcs=DN.map(d=>{const o=`<circle cx="75" cy="75" r="${R}" fill="none" stroke="${d[2]}" stroke-width="20" stroke-dasharray="${C*d[1]/100} ${C}" stroke-dashoffset="${-C*off/100}" transform="rotate(-90 75 75)"/>`;off+=d[1];return o}).join('');
const CS:any[][]=[['Engine',72,'#f0566a','set','#fde4e6'],['Hydraulics',58,'#60a5fa','drop','#e4eefc'],['Electrical',81,'#12a35f','bolt','#d9f2e6'],['Flight Control',65,'#f59e0b','set','#fdeed2'],['Avionics',74,'#8b5cf6','models','#ece6fd'],['Airframe',88,'#1f66d1','ac','#e1ebfc']];
const AL=[re?['HYD-P17 Hydraulic Pump (AF-032)','Reallocated from Base B','1 / 2','g']:['HYD-P17 Hydraulic Pump (AF-032)','Downtime risk +12 h','0 / 2','r','re'],['ENG-6672 Fuel Nozzle','Engine','0 / 10','r'],['FLT-3019 Actuator','Flight Control','8 / 15','r'],['HYD-2032 Seal Kit','Hydraulics','48 / 50','a'],['AVN-9102 Comm Module','Avionics','12 / 20','a']],PO:any[][]=[['PO-2026-018','8 items','42,50,000','15 Oct 2026'],['PO-2026-017','12 items','78,20,000','22 Oct 2026'],['PO-2026-016','5 items','18,40,000','28 Oct 2026']];
const kc=(ik,bg,c,t,v,d,dc,n,sp)=>`<div class="card k2"><div class="ki2" style="background:${bg};color:${c}">${ic(ik)}</div><div><small>${t}</small><div><b>${v}</b><em style="color:${dc}">${d}</em></div><small style="font-size:11.5px">${n}</small></div>${spk(c,sp)}</div>`;
return`<div style="display:flex;align-items:flex-start;gap:16px"><div style="flex:1"><h1>Spare Parts</h1><p class="sub">Inventory, availability and demand for aircraft maintenance</p></div><div class="card" style="display:flex;align-items:center;gap:22px;padding:10px 18px"><img src="${TH}" alt="" style="height:44px;mix-blend-mode:multiply"><div><b style="font-size:15px">All Fleets</b><small style="display:block;color:var(--mu)">84 Aircraft</small></div>${[['Total Parts','2,486'],['Low Stock','186'],['Critical Shortage','42'],['Pending Orders','18']].map(x=>`<div><small style="color:var(--mu)">${x[0]}</small><br><b style="font-size:19px">${x[1]}</b></div>`).join('')}</div></div>
<div class="k4" style="margin-top:6px">${kc('spares','#e1ebfc','#1f66d1','Total Inventory','2,486','↑ 8%','#12915f','Across all aircraft and components',3)}${kc('therm','#fde4e6','#e5252f','Low Stock Items','186','↑ 12%','#d12e37','Below reorder threshold',5)}${kc('warn','#fdeed2','#e48a14','Critical Shortages',re?'41':'42','↑ 35%','#d12e37','Immediate replenishment required',7)}${kc('cart','#e1ebfc','#1f66d1','Pending Orders','18','↓ 10%','#12915f','Total value: ₹1.8 Crore',9)}</div>
<div class="g" style="grid-template-columns:1.7fr 1fr .9fr;margin-top:16px"><div class="card"><div class="ch"><b>Parts Consumption Trend</b><span class="sel2">Last 6 months ⌄</span></div><div style="display:flex;align-items:center;gap:10px"><svg viewBox="0 0 420 190" style="flex:1" width="100%">${[0,25,50,75,100].map(v=>`<line x1="44" x2="410" y1="${Yb(v)}" y2="${Yb(v)}" stroke="rgba(15,28,46,.07)"/><text x="38" y="${Yb(v)+3}" text-anchor="end" font-size="10">${v}</text>`).join('')}${bars}</svg><div style="font-size:12.5px;line-height:2">${SR.slice().reverse().map(r=>`<div><i style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${r[1]}"></i> ${r[0]}</div>`).join('')}</div></div></div>
<div class="card"><div class="ch"><b>Inventory Status</b></div><div style="display:flex;align-items:center;gap:14px"><svg viewBox="0 0 150 150" width="150" height="150">${arcs}<text x="75" y="75" text-anchor="middle" font-size="17" font-weight="700" style="fill:#0f1c2e">2,486</text><text x="75" y="90" text-anchor="middle" font-size="9.5">Total Parts</text></svg><div style="flex:1;font-size:12.5px">${DN.map(d=>`<div style="display:flex;justify-content:space-between;padding:4px 0"><span><i style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${d[2]}"></i> ${d[0]}</span><b style="font-weight:500">${d[1]}%</b></div>`).join('')}</div></div></div>
<div class="card"><div class="ch"><b>Stock Status by Component</b></div>${CS.map(c=>`<div class="hb" style="margin:11px 0"><span class="ico2" style="background:${c[4]};color:${c[2]}">${ic(c[3])}</span><span style="width:82px">${c[0]}</span><div class="meter"><i style="width:${c[1]}%;background:${c[2]}"></i></div><b style="width:34px;text-align:right;font-weight:500">${c[1]}%</b></div>`).join('')}</div></div>
<div class="g" style="grid-template-columns:1.9fr 1fr;margin-top:16px;align-items:start"><div class="card" style="padding:0"><div style="display:flex;align-items:center;gap:10px;padding:18px 20px 6px"><b style="font-size:16px;flex:1">Parts Inventory</b><input data-psq class="hs" value="${S.pq}" placeholder="Search parts… (Enter)" style="width:190px"><select class="hs" data-sel="pc">${['All Components','Engine','Hydraulics','Electrical','Flight Control','Avionics','Airframe'].map(x=>`<option ${S.pc===x?'selected':''}>${x}</option>`).join('')}</select><select class="hs" data-sel="ps">${['All Status','Critical','Low Stock','In Stock','Out of Stock'].map(x=>`<option ${S.ps===x?'selected':''}>${x}</option>`).join('')}</select><button class="btn gh" data-t="Advanced filters" style="color:#1f66d1">Filters</button></div>
${F.length?tbl(['Part Number','Part Name','Component','Current Stock','Reorder Level','Status','Location','Actions'],F.map(p=>[p[0],p[1],p[2],`<span style="color:${p[3]<p[4]?'#c0770a':'inherit'}">${p[3]}</span>`,`<span style="color:${p[3]<p[4]?'#e48a14':'inherit'}">${p[4]}</span>`,`<span class="hi ${cls[p[5]]}">${p[5]}</span>${p[5]==='Out of Stock'&&p[0]==='ENG-6672'?' <span style="color:#d12e37;margin-left:8px">On Order</span>':''}`,p[6],`<span class="act" data-t="Options for ${p[0]}" tabindex="0">⋮</span>`])):'<div class="hint">No parts match your filters.</div>'}</div>
<div style="display:flex;flex-direction:column;gap:16px"><div class="card"><h3>Low Stock Alerts<a style="color:#1f66d1;font-size:13px;font-weight:500">View All →</a></h3>${AL.map(x=>`<div class="hb" style="margin:10px 0"><span style="color:${x[3]==='g'?'#12a35f':x[3]==='r'?'#d12e37':'#e48a14'}">${ic(x[3]==='g'?'chk':'warn')}</span><div style="flex:1;font-size:13px"><b style="font-weight:500">${x[0]}</b><small style="display:block;color:var(--mu);font-size:11.5px">${x[1]}</small></div><b style="color:${x[3]==='g'?'#12915f':x[3]==='r'?'#d12e37':'#e48a14'};font-weight:500">${x[2]}</b></div>${x[4]?'<button class="btn pri" id="re" style="padding:8px 14px;font-size:12.5px;margin-bottom:6px">Reallocate from Base B</button>':''}`).join('')}</div>
<div class="card" style="padding:0"><h3 style="padding:18px 20px 0">Pending Purchase Orders<a style="color:#1f66d1;font-size:13px;font-weight:500">View All →</a></h3>${tbl(['PO Number','Items','Value (₹)','ETA'],PO)}</div></div></div>`}
const GR:any[][]=[
  [null,[
    ['cmd','Overview','home'],
    ['ac','Aircraft','ac'],
    ['sensors','Live Telemetry','sensors'],
    ['preds','Predictions','preds'],
    ['avail','Availability','ready'],
    ['maint','Maintenance','maint'],
    ['spares','Spare Parts','spares'],
    ['reports','Reports','reports']
  ]],
  ['Intelligence',[
    ['chat','AI Chat','chat'],
    ['docs','Technical Documents','docs']
  ]],
  ['System',[
    ['settings','Settings','set']
  ]]
];
function nav(){$('#nav').innerHTML=GR.map(([h,it],i)=>(i?'<div class="ng"></div>':'')+(h?`<h6>${h}</h6>`:'')+it.map(([k,l,c])=>`<button class="${S.view===k?'on':''}" data-v="${k}" title="${l}">${ic(c)}<span>${l}</span></button>`).join('')).join('');
$('#nav').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{S.view=b.dataset.v;if(S.view==='ac'&&!S.sel)S.sel='AF-017';render()})}
const LOG:any[][]=[['AF-017','03 Oct 2026','Pilot reports slight vibration on climb, engine #1. Borescope check scheduled; compressor stage 3 blade tip wear noted, within limits.',[['Component','Engine #1 · compressor stage 3'],['Fault','Blade tip wear, vibration on climb'],['Severity','Watch'],['Suggested action','Targeted engine inspection'],['Part','B-17'],['Linked telemetry','VIB_ENG_02 trend +32%']]],
['AF-023','02 Oct 2026','Hydraulic pressure fluctuation during taxi. System 2 dropped briefly to 2,650 psi. Seal weeping suspected at actuator.',[['Component','Hydraulic system 2 · actuator'],['Fault','Pressure instability, suspected seal weep'],['Severity','Attention'],['Suggested action','Schedule seal check'],['Part','Seal kit H-04'],['Linked telemetry','Pressure trend deteriorating']]],
['AF-041','01 Oct 2026','Generator output 22.1 V on ground run, within limits but lower than last check. Harness connector cleaned.',[['Component','Generator · harness connector'],['Fault','Voltage drift'],['Severity','Watch'],['Suggested action','Monitor, retest next cycle'],['Part','Wiring harness E-22'],['Linked telemetry','VOLT_BUS_01 slight decline']]]];

Object.assign(S,{dtab:0,ddoc:0,di:0,dz:100,dp:12,up:[]});
const DOCS:any[][]=[['Tejas_Mk1A_Maintenance_Manual.pdf','2.4 MB',120,'Aircraft','Maintenance Manual','5 Oct 2026','pdf','This maintenance manual covers Tejas Mk1A maintenance procedures, inspection intervals, troubleshooting guidelines and component specifications. It includes instructions for engine, hydraulic, electrical and avionics systems.',['Engine borescope inspection every 150 flight hours','Hydraulic seal replacement interval: 600 cycles','Compressor stage 3 wear limits are in section 5.2','Avionics bus check before each sortie block'],'Tejas Mk1A','AF-001 to AF-084 (demo)','15 Aug 2026'],
['Engine_Tech_Specs.pdf','1.8 MB',64,'Engine','Technical Specification','3 Oct 2026','pdf','Technical specification for the engine, with operating limits, vibration and temperature thresholds, and part numbers for compressor and turbine stages.',['Vibration alert threshold: 1.5 g RMS','EGT limit: 750 °C continuous','Compressor part B-17 interchange list','Oil pressure normal range: 35–60 psi'],'Tejas Mk1A engine','AF-001 to AF-084 (demo)','2 Sep 2026'],
['Hydraulic_System_Diagram.png','3.1 MB',1,'Hydraulics','System Diagram','1 Oct 2026','png','Schematic of hydraulic systems 1 and 2 with pumps, actuators, accumulators and pressure sensors.',['System 2 actuator supplies flight control surfaces','Pump P-17 feeds system 2','Seal kit H-04 covers actuator seals','Pressure sensor HYD_PRS_02 is the monitoring point'],'Tejas Mk1A','AF-001 to AF-084 (demo)','20 Jul 2026'],
['Airworthiness_Directive.pdf','1.2 MB',8,'Compliance','Regulatory Document','28 Sep 2026','pdf','Directive listing mandatory inspections and compliance deadlines for flight control actuators.',['Actuator inspection required within 60 cycles','Report findings within 7 days','Applies to flight control actuator FLT-3019','Compliance record must be signed off'],'Tejas Mk1A','AF-020 to AF-060 (demo)','28 Sep 2026'],
['Flight_Operations_Guide.pdf','2.0 MB',96,'Operations','Operations Manual','25 Sep 2026','pdf','Operating procedures, limits and checklists for flight operations and ground handling.',['Pre-flight health check is mandatory','Report abnormal vibration on climb','Ground run limits for generator voltage','Post-flight telemetry upload required'],'Tejas Mk1A','AF-001 to AF-084 (demo)','10 Jun 2026']];
const TGC={Aircraft:['#dbeafe','#1d56b8'],Engine:['#fde0e3','#c0252f'],Hydraulics:['#fdeed2','#9a5a00'],Compliance:['#e8defb','#6a3fc2'],Operations:['#d5f2e3','#0d7a50']},tg3=t=>`<span class="tag3" style="background:${TGC[t][0]};color:${TGC[t][1]}">${t}</span>`,ftI=e=>`<span class="ft ${e==='png'?'png':''}">${e==='png'?'PNG':'PDF'}</span>`;
const dpHTML=()=>{const now=Date.now(),U=S.up.slice().reverse().map(u=>[u.n,u.s,Math.min(100,Math.round((now-u.t)/30)),u.ext,'just now']),B=DOCS.slice(0,4).map((d,i)=>[d[0],d[1],100,d[6],['2 min ago','5 min ago','12 min ago','18 min ago'][i]]);return[...U,...B].slice(0,5).map(r=>`<div class="dpr">${ftI(r[3])}<div style="flex:1;min-width:0"><b style="font-weight:500;font-size:13px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r[0]}</b><small style="color:var(--mu)">${r[1]} • ${r[4]}</small></div><div class="meter" style="width:90px"><i style="width:${r[2]}%;background:#12a35f"></i></div><span style="width:38px;font-size:12px">${r[2]}%</span><span class="hi ${r[2]===100?'g':'a'}" style="background:${r[2]===100?'#d5f2e3':'#dbeafe'};color:${r[2]===100?'#0d7a50':'#1d56b8'}">${r[2]===100?'Completed':'Processing'}</span></div>`).join('')};
function addFiles(fl){[...fl].forEach(f=>S.up.push({n:f.name,s:(f.size/1048576).toFixed(1)+' MB',t:Date.now(),ext:f.name.split('.').pop().toLowerCase()}));render()}
function docs(){const d=DOCS[S.ddoc],TB=['Process Documents','Knowledge Base','Compliance & Validation'],K=(i,bg,c,v,l,dl,sp)=>`<div class="card k3"><div class="ki2" style="background:${bg};color:${c}">${ic(i)}</div><div><b>${v}</b><small>${l}</small></div>${dl?`<em style="color:#12915f">${dl}</em>`:''}${spk(c,sp)}</div>`;
const head=`<div style="display:flex;align-items:flex-start"><div style="flex:1"><h1>Technical Documents</h1><p class="sub" style="margin-bottom:8px">Technical manuals, airworthiness directives, and engineering documentation</p></div><a style="color:#1f66d1;font-weight:500;cursor:pointer;margin-top:14px" data-t="Upload, extract, review insights, then link them to aircraft and parts">▶ How it works?</a></div><div class="tabs2">${TB.map((t,i)=>`<button class="${S.dtab===i?'on':''}" data-dtab="${i}">${t}</button>`).join('')}</div>`;
if(S.dtab===1)return head+`<div class="g cmdg" style="grid-template-columns:repeat(3,1fr)">${LOG.map(l=>`<div class="card"><h3>${l[0]}<span class="tag">${l[1]}</span></h3><p style="color:var(--mu);margin:0 0 12px;font-size:13px">${l[2]}</p><dl class="ent" style="grid-template-columns:110px 1fr;font-size:13px">${l[3].slice(0,4).map(x=>`<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join('')}</dl><button class="btn pri" data-t="Work order drafted for ${l[0]}" style="margin-top:14px">Create work order</button></div>`).join('')}</div>`;
if(S.dtab===2)return head+kp5([['#12915f','chk','96%','Documentation complete'],['#e48a14','warn',1,'Action due'],['#1f66d1','docs',5,'Documents checked']])+`<div class="card" style="margin-top:16px;padding:0"><h3 style="padding:18px 20px 0">Compliance checks</h3>${tbl(['Requirement','Source document','Due','Status'],[['Flight control actuator inspection','Airworthiness_Directive.pdf','Within 60 cycles',pl('ATTENTION','Action due')],['Engine borescope inspection','Tejas_Mk1A_Maintenance_Manual.pdf','In 14 cycles',pl('WATCH','Upcoming')],['Hydraulic seal replacement interval','Tejas_Mk1A_Maintenance_Manual.pdf','600 cycles',pl('HEALTHY','Compliant')],['Post-flight telemetry upload','Flight_Operations_Guide.pdf','Every flight',pl('HEALTHY','Compliant')]])}</div>`;
const IT:any[][]=[['Aircraft Information','Model, Serial No., Variant','12 fields extracted','ac','#e1ebfc','#1f66d1'],['Maintenance Data','Tasks, Intervals, Procedures','28 fields extracted','maint','#d9f2e6','#12a35f'],['Component Details','Part Numbers, Specifications','18 fields extracted','set','#fdeed2','#e48a14'],['Compliance Information','ADs, SBs, Regulations','10 fields extracted','shield','#e0f3e8','#12a35f']],TI=['Summary','Key Points','Q&A','Related'],KI:any[][]=[['ac','Aircraft Model',d[9]],['docs','Document Type',d[4]],['sources','Applicable Serial Nos.',d[10]],['clock','Last Updated',d[11]],['reports','Total Pages',d[2]],['models','Language','English']];
const ins=[`<b style="font-size:13.5px">Document Summary</b><p style="color:var(--mu);font-size:13px;margin:6px 0 14px">${d[7]}</p><b style="font-size:13.5px">Key Information</b><div class="kvi">${KI.map(k=>`<div style="display:flex;gap:10px;align-items:center"><span class="ico2" style="background:#e8f0fd;color:#1f66d1">${ic(k[0])}</span><div><small style="color:var(--mu);font-size:11.5px">${k[1]}</small><b style="display:block;font-size:12.5px;font-weight:600">${k[2]}</b></div></div>`).join('')}</div>`,d[8].map(p=>`<div class="kf2" style="font-size:13px"><span style="color:#12a35f">${ic('chk')}</span>${p}</div>`).join(''),[['What inspections does this document require?',d[8][0]],['Which section covers the main procedure?','See page 12 (section 5.2) of this document.']].map(q=>`<p style="margin:0 0 12px;font-size:13px"><b>${q[0]}</b><br><span style="color:var(--mu)">${q[1]}</span></p>`).join(''),DOCS.filter((x,i)=>i!==S.ddoc).slice(0,3).map(x=>`<div class="q" style="padding:8px"><div>${ftI(x[6])}</div><div class="mid"><b style="font-weight:500;font-size:13px">${x[0]}</b><small>${x[4]}</small></div></div>`).join('')][S.di];
return head+`<div class="g cmdg k3g">${K('docs','#e1ebfc','#1f66d1',124+S.up.length,'Documents Processed','↑ +18%',2)}${K('sources','#d9f2e6','#12a35f','96%','Extraction Accuracy','',4)}${K('clock','#d9f2e6','#12a35f','28 sec','Avg. Processing Time','',6)}${K('docs','#e1ebfc','#1f66d1',8+0,'Document Types','',8)}</div>
<div class="dl"><div class="card"><h3>Upload Document</h3><div class="drop" data-drop><span style="color:#1f66d1">${ic('docs')}</span><p style="margin:8px 0 2px;font-weight:600">Drop files here or click to upload</p><small style="color:var(--mu)">PDF, DOCX, JPG, PNG (Max 50 MB) · stays in your browser</small><br><button class="btn pri" data-up style="margin-top:14px">Choose Files</button><input type="file" id="fu" multiple hidden></div></div>
<div class="card"><h3>Document Processing<a style="color:#1f66d1;font-size:13px;font-weight:500">View All →</a></h3><div id="dp">${dpHTML()}</div></div>
<div class="card"><h3>Extracted Information<a style="color:#1f66d1;font-size:13px;font-weight:500">View All →</a></h3><div class="g" style="grid-template-columns:1fr 1fr;gap:10px">${IT.map(i=>`<div class="exi"><span class="ico2" style="background:${i[4]};color:${i[5]};width:38px;height:38px">${ic(i[3])}</span><div><b style="font-size:12.5px">${i[0]}</b><small style="display:block;color:var(--mu);font-size:11px">${i[1]}</small><small style="display:block;font-size:11px;font-weight:500">${i[2]}</small></div></div>`).join('')}</div></div></div>
<div class="dl2"><div class="card"><h3>Document Library</h3><div style="display:flex;gap:8px;margin-bottom:10px"><input class="hs" placeholder="Search documents…" style="flex:1" disabled><button class="btn gh" data-t="Filters">⏷</button></div>${DOCS.map((x,i)=>`<div class="item ${i===S.ddoc?'sel':''}" data-dd="${i}" tabindex="0">${ftI(x[6])}<div style="flex:1;min-width:0"><b style="font-weight:500;font-size:13px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x[0]}</b><small style="color:var(--mu)">${x[4]} · ${x[5]}</small></div>${tg3(x[3])}</div>`).join('')}</div>
<div class="card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">${ftI(d[6])}<div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d[0]}</b><small style="color:var(--mu)">${d[1]} • ${d[2]} pages</small></div><button class="btn gh" data-t="Downloading ${d[0]}">Download</button><button class="btn pri" data-t="Opening viewer">Open in Viewer</button></div>
<div class="vbar"><button class="vbtn" data-dp="-1">‹</button><button class="vbtn" data-dp="1">›</button><span class="vbtn">${Math.min(S.dp,d[2])}</span><span style="color:var(--mu)">/ ${d[2]}</span><span style="flex:1"></span><button class="vbtn" data-dz="-25">−</button><span class="vbtn">${S.dz}%</span><button class="vbtn" data-dz="25">+</button></div>
<div class="vwrap"><div class="paper" style="transform:scale(${S.dz/100})"><b style="font-size:15px">Tejas Mk1A Maintenance Manual</b><small style="display:block;color:#66738a">Demo document · Section 5.2</small><img src="${PG}" alt="Engine and airframe technical drawing" style="width:100%;display:block;margin-top:4px"><b style="font-size:12px">5.2 Engine Maintenance Procedure</b>${[96,88,92,70].map(w=>`<div style="height:5px;background:#dfe4ec;border-radius:3px;margin-top:6px;width:${w}%"></div>`).join('')}</div></div></div>
<div class="card"><h3>AI Insights</h3><div class="seg" style="margin-bottom:12px">${TI.map((t,i)=>`<button class="${S.di===i?'on':''}" data-di="${i}">${t}</button>`).join('')}</div>${ins}</div></div>`}
setInterval(()=>{if(S.view==='docs'&&S.dtab===0&&S.up.some(u=>Date.now()-u.t<3300)){const e=document.getElementById('dp');if(e)e.innerHTML=dpHTML()}},300);
function settings(){const T:any[][]=[['c','Critical alerts','Immediate notification for predicted failures'],['w','Warning alerts','Degrading trends and threshold breaches'],['i','Info alerts','Scheduled maintenance and system updates']];
return hd('Settings','Data mode, alert thresholds and approvals')+`<div class="g cmdg" style="grid-template-columns:1fr 1fr"><div class="card"><h3>Notifications</h3>${T.map(t=>`<div class="q" style="cursor:default"><div class="mid"><b>${t[1]}</b><small>${t[2]}</small></div><button class="tg ${S.tg[t[0]]?'on':''}" data-tg="${t[0]}" aria-label="${t[1]}"></button></div>`).join('')}</div>
<div class="card"><h3>Data and approvals</h3><div class="q" style="cursor:default"><div class="mid"><b>Data mode</b><small>Live backend is not connected</small></div><span class="sp w">Demo / simulated</span></div><div class="q" style="cursor:default"><div class="mid"><b>Human approval for maintenance actions</b><small>Required for all critical actions</small></div><span class="sp s">Always on</span></div><div class="q" style="cursor:default"><div class="mid"><b>Alert thresholds</b><small>Vibration 0.60 g · Engine temp 79 °C</small></div><span class="sp m">Default</span></div></div></div>`}
document.getElementById('hth').src=TH;document.getElementById('hsx').onchange=e=>{S.sel=S.sx=e.target.value;render()};const tick=()=>{const n=new Date();document.getElementById('clk').textContent=n.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});document.getElementById('dt').textContent=n.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})};tick();setInterval(tick,20000);document.getElementById('cb').onclick=()=>document.body.classList.toggle('col')
// Responsive: on small screens the sidebar is an off-canvas menu opened from the header.
{const b=document.body,mq=matchMedia('(max-width:1024px)'),close=()=>b.classList.remove('nav-open')
const sync=()=>{if(mq.matches)b.classList.remove('col');else close()}
mq.addEventListener('change',sync);sync()
document.getElementById('mnav').onclick=()=>b.classList.toggle('nav-open')
document.getElementById('nvbk').onclick=close
document.getElementById('nav').addEventListener('click',close)
addEventListener('keydown',e=>{if(e.key==='Escape')close()})};
function agenciesBody(){
  const agencyRows:any[][]=[
    ['Base Repair Depot A','Depot Level','Base A',12,'4.2 days','92%',pl('HEALTHY','Available')],
    ['Base Repair Depot B','Depot Level','Base B',14,'5.6 days','78%',pl('ATTENTION','Near capacity')],
    ['Engine Overhaul Division','Specialized Depot','Base A',9,'6.8 days','81%',pl('CRITICAL','Full capacity')],
    ['Avionics Workshop','Specialist Lab','Base C',5,'2.9 days','95%',pl('HEALTHY','Available')],
    ['Hydraulics & Accessories','Component Depot','Base B',4,'3.8 days','88%',pl('HEALTHY','Optimal')],
    ['Airframe Repair Agency','Contractor Depot','Base D',3,'5.1 days','84%',pl('WATCH','Moderate')]
  ];
  const capacityMeters:any[][]=[
    ['Base Repair Depot A',72],
    ['Base Repair Depot B',91],
    ['Engine Overhaul Division',95],
    ['Avionics Workshop',55],
    ['Hydraulics & Accessories',64],
    ['Airframe Repair Agency',48]
  ];
  const openJobs:any[][]=[
    ['WO-4412','AF-017','Engine inspection','Engine Overhaul Division','Awaiting parts','12 Oct',pl('CRITICAL','At risk')],
    ['WO-4408','AF-023','Hydraulic actuator seal check','Hydraulics & Accessories','Teardown','10 Oct',pl('ATTENTION','Delayed')],
    ['WO-4395','AF-032','Pump P-17 replacement','Base Repair Depot B','Scheduled','14 Oct',pl('WATCH','Pending part')],
    ['WO-4389','AF-041','Generator harness bench test','Avionics Workshop','Testing','08 Oct',pl('HEALTHY','On schedule')],
    ['WO-4372','AF-008','200 h scheduled airframe service','Base Repair Depot A','Reassembly','07 Oct',pl('HEALTHY','On schedule')],
    ['WO-4360','AF-056','Bearing vibration investigation','Engine Overhaul Division','In queue','15 Oct',pl('WATCH','Queued')]
  ].map(r=>[r[0],`<span class="act" data-id="${r[1]}" style="cursor:pointer;font-weight:700;color:var(--ac)">${r[1]}</span>`,r[2],r[3],r[4],r[5],r[6]]);

  return kp5([['#1f66d1','maint',6,'Active agencies'],['#e48a14','warn',47,'Open jobs'],['#0c6b63','clock','4.8 days','Average turnaround'],['#12915f','chk','86%','On-time completion']])
    + `<div class="g cmdg" style="grid-template-columns:1.9fr 1fr;margin-top:16px;align-items:start">
        <div class="card" style="padding:0">
          <h3 style="padding:20px 20px 0">Agency performance</h3>
          ${tbl(['Agency','Type','Location','Open jobs','Avg turnaround','On time','Status'],agencyRows)}
        </div>
        <div class="card">
          <h3>Capacity in use</h3>
          ${capacityMeters.map(c=>`<div style="display:flex;justify-content:space-between;margin-top:12px"><span>${c[0]}</span><b>${c[1]}%</b></div><div class="meter" style="margin-top:5px"><i style="width:${c[1]}%;background:${c[1]>=90?'var(--am)':'var(--gn)'}"></i></div>`).join('')}
          <p style="color:var(--mu);font-size:12.5px;margin:16px 0 0;line-height:1.4">Engine Overhaul Division and Base Depot B are close to full: move non-urgent jobs to Depot A or Avionics Workshop.</p>
        </div>
      </div>
      <div class="card" style="margin-top:16px;padding:0">
        <h3 style="padding:20px 20px 0">Open jobs</h3>
        ${tbl(['Work order','Aircraft','Task','Agency','Stage','ETA','Status'],openJobs)}
      </div>`;
}

interface KanbanItem {
  id: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  title: string;
  part: string;
  img: string;
  assigneeInitial?: string;
  assigneeName?: string;
  assigneeBg?: string;
  duration?: string;
  tagType?: 'due_red' | 'due' | 'started' | 'completed';
  tagText?: string;
  col: 'pending' | 'scheduled' | 'inprogress' | 'completed';
  type?: string;
}

const KANBAN_ITEMS: KanbanItem[] = [
  // Column 1: Pending approval
  {
    id: 'AF-017',
    priority: 'P1',
    title: 'Engine inspection',
    part: 'Part: B-17',
    img: partEngine,
    assigneeInitial: 'R',
    assigneeName: 'R. Nair',
    assigneeBg: '#065f46',
    duration: '6.4 h',
    tagType: 'due_red',
    tagText: 'Due in 2 days',
    col: 'pending',
    type: 'Inspection'
  },
  {
    id: 'AF-023',
    priority: 'P2',
    title: 'Hydraulic pressure check',
    part: 'Part: Seal kit H-04',
    img: partHydraulic,
    assigneeInitial: 'S',
    assigneeName: 'S. Iyer',
    assigneeBg: '#0f766e',
    duration: '3.0 h',
    tagType: 'due',
    tagText: 'Due 21 Oct',
    col: 'pending',
    type: 'Inspection'
  },
  {
    id: 'AF-019',
    priority: 'P2',
    title: 'Landing gear inspection',
    part: 'Part: Actuator L-11',
    img: partGear,
    assigneeInitial: 'P',
    assigneeName: 'P. Mehta',
    assigneeBg: '#2563eb',
    duration: '4.5 h',
    tagType: 'due',
    tagText: 'Due 23 Oct',
    col: 'pending',
    type: 'Inspection'
  },
  {
    id: 'AF-005',
    priority: 'P2',
    title: 'Avionics ECU check',
    part: 'Part: ECU-21',
    img: partEcu,
    assigneeInitial: 'P',
    assigneeName: 'P. Mehta',
    assigneeBg: '#2563eb',
    duration: '3.5 h',
    tagType: 'due',
    tagText: 'Due 25 Oct',
    col: 'pending',
    type: 'Inspection'
  },

  // Column 2: Scheduled
  {
    id: 'AF-021',
    priority: 'P3',
    title: 'Fuel system test',
    part: 'Part: Fuel pump',
    img: partFuelPump,
    assigneeInitial: 'K',
    assigneeName: 'K. Shah',
    assigneeBg: '#2563eb',
    duration: '2.5 h',
    tagType: 'due',
    tagText: '16 Oct 2024, 09:00',
    col: 'scheduled',
    type: 'Test'
  },
  {
    id: 'AF-014',
    priority: 'P2',
    title: 'Cabin pressure check',
    part: 'Part: Valve CP-3',
    img: partValve,
    assigneeInitial: 'A',
    assigneeName: 'A. Verma',
    assigneeBg: '#0d9488',
    duration: '3.0 h',
    tagType: 'due',
    tagText: '16 Oct 2024, 11:30',
    col: 'scheduled',
    type: 'Inspection'
  },
  {
    id: 'AF-030',
    priority: 'P3',
    title: 'APU routine check',
    part: 'Part: APU filter',
    img: partApu,
    assigneeInitial: 'D',
    assigneeName: 'D. Kumar',
    assigneeBg: '#0284c7',
    duration: '4.0 h',
    tagType: 'due',
    tagText: '17 Oct 2024, 10:00',
    col: 'scheduled',
    type: 'Service'
  },
  {
    id: 'AF-011',
    priority: 'P4',
    title: 'Tire replacement',
    part: 'Part: Tire 46',
    img: partTire,
    assigneeInitial: 'N',
    assigneeName: 'N. Rao',
    assigneeBg: '#2563eb',
    duration: '2.0 h',
    tagType: 'due',
    tagText: '18 Oct 2024, 14:00',
    col: 'scheduled',
    type: 'Repair'
  },

  // Column 3: In progress
  {
    id: 'AF-041',
    priority: 'P3',
    title: 'Electrical harness test',
    part: 'No parts needed',
    img: partHarness,
    assigneeInitial: 'M',
    assigneeName: 'M. Das',
    assigneeBg: '#059669',
    duration: '2.0 h',
    tagType: 'started',
    tagText: 'Started today',
    col: 'inprogress',
    type: 'Test'
  },
  {
    id: 'AF-033',
    priority: 'P2',
    title: 'Brake system inspection',
    part: 'Part: Brake pad B-22',
    img: partBrakes,
    assigneeInitial: 'S',
    assigneeName: 'S. Khan',
    assigneeBg: '#0284c7',
    duration: '5.0 h',
    tagType: 'started',
    tagText: 'Started today',
    col: 'inprogress',
    type: 'Inspection'
  },
  {
    id: 'AF-018',
    priority: 'P1',
    title: 'Engine oil change',
    part: 'Part: Oil filter OF-9',
    img: partOilFilter,
    assigneeInitial: 'T',
    assigneeName: 'T. Singh',
    assigneeBg: '#1d4ed8',
    duration: '3.5 h',
    tagType: 'started',
    tagText: 'Started 15 Oct, 11:20',
    col: 'inprogress',
    type: 'Service'
  },
  {
    id: 'AF-026',
    priority: 'P3',
    title: 'Flight control check',
    part: 'Part: Servo S-14',
    img: partServo,
    assigneeInitial: 'J',
    assigneeName: 'J. Sen',
    assigneeBg: '#0284c7',
    duration: '3.0 h',
    tagType: 'started',
    tagText: 'Started today',
    col: 'inprogress',
    type: 'Inspection'
  },

  // Column 4: Completed
  {
    id: 'AF-008',
    priority: 'P3',
    title: '200 h service',
    part: 'Part: Filter kit',
    img: partFilterKit,
    assigneeInitial: 'K',
    assigneeName: 'K. Shah',
    assigneeBg: '#065f46',
    duration: '8.0 h',
    tagType: 'completed',
    tagText: 'Completed 14 Oct',
    col: 'completed',
    type: 'Service'
  },
  {
    id: 'AF-015',
    priority: 'P4',
    title: 'Oxygen system test',
    part: 'No parts needed',
    img: partOxygen,
    assigneeInitial: 'L',
    assigneeName: 'L. Gupta',
    assigneeBg: '#16a34a',
    duration: '2.5 h',
    tagType: 'completed',
    tagText: 'Completed 14 Oct',
    col: 'completed',
    type: 'Test'
  },
  {
    id: 'AF-007',
    priority: 'P2',
    title: 'Wing inspection',
    part: 'Part: Sealant S-8',
    img: partWing,
    assigneeInitial: 'V',
    assigneeName: 'V. Patel',
    assigneeBg: '#065f46',
    duration: '4.0 h',
    tagType: 'completed',
    tagText: 'Completed 13 Oct',
    col: 'completed',
    type: 'Inspection'
  },
  {
    id: 'AF-029',
    priority: 'P3',
    title: 'Navigation system check',
    part: 'Part: Antenna N-3',
    img: partNav,
    assigneeInitial: 'R',
    assigneeName: 'R. Sen',
    assigneeBg: '#2563eb',
    duration: '2.0 h',
    tagType: 'completed',
    tagText: 'Completed 12 Oct',
    col: 'completed',
    type: 'Inspection'
  }
];

function renderKanbanCard(item: KanbanItem): string {
  let tagHtml = '';
  if (item.tagType === 'due_red') {
    tagHtml = `<div class="maint-card-bottom due-red">
      <svg viewBox="0 0 24 24" class="i" style="width:13px;height:13px;color:#dc2626"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>${item.tagText}</span>
    </div>`;
  } else if (item.tagType === 'due') {
    tagHtml = `<div class="maint-card-bottom due-normal">
      <svg viewBox="0 0 24 24" class="i" style="width:13px;height:13px;color:#64748b"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>${item.tagText}</span>
    </div>`;
  } else if (item.tagType === 'started') {
    tagHtml = `<div class="maint-card-bottom started">
      <svg viewBox="0 0 24 24" class="i" style="width:13px;height:13px;color:#2563eb"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>
      <span>${item.tagText}</span>
    </div>`;
  } else if (item.tagType === 'completed') {
    tagHtml = `<div class="maint-card-bottom completed">
      <svg viewBox="0 0 24 24" class="i" style="width:13px;height:13px;color:#16a34a"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item.tagText}</span>
    </div>`;
  }

  const hasAssignee = !!item.assigneeName;
  const hasTime = !!item.duration;
  let metaHtml = '';
  if (hasAssignee || hasTime) {
    metaHtml = `
      <div class="maint-card-meta">
        <div class="maint-card-assignee">
          ${hasAssignee ? `<span class="maint-assignee-avatar" style="background:${item.assigneeBg}">${item.assigneeInitial}</span><span class="maint-assignee-name">${item.assigneeName}</span>` : ''}
        </div>
        ${hasTime ? `
          <div class="maint-card-time">
            <svg viewBox="0 0 24 24" class="i" style="width:13px;height:13px;color:#64748b"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${item.duration}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  return `
    <div class="maint-card" data-id="${item.id}" tabindex="0">
      <div class="maint-card-top">
        <b class="maint-card-ac">${item.id}</b>
        <span class="p-badge ${item.priority.toLowerCase()}">${item.priority}</span>
      </div>
      <div class="maint-card-mid">
        <div class="maint-card-info">
          <div class="maint-card-task">${item.title}</div>
          <div class="maint-card-part">${item.part}</div>
        </div>
        <img class="maint-card-thumb" src="${item.img}" alt="${item.title}" />
      </div>
      ${metaHtml}
      ${tagHtml}
    </div>
  `;
}

function getFilteredKanbanItems(): KanbanItem[] {
  let list = KANBAN_ITEMS;
  const q = (S.maintSearch || '').trim().toLowerCase();
  if (q) {
    list = list.filter(x =>
      x.id.toLowerCase().includes(q) ||
      x.title.toLowerCase().includes(q) ||
      x.part.toLowerCase().includes(q) ||
      (x.assigneeName || '').toLowerCase().includes(q)
    );
  }
  if (S.maintFilterAc && S.maintFilterAc !== 'ALL') {
    list = list.filter(x => x.id === S.maintFilterAc);
  }
  if (S.maintFilterPriority && S.maintFilterPriority !== 'ALL') {
    list = list.filter(x => x.priority === S.maintFilterPriority);
  }
  if (S.maintFilterType && S.maintFilterType !== 'ALL') {
    list = list.filter(x => x.type === S.maintFilterType);
  }
  if (S.maintFilterAssignee && S.maintFilterAssignee !== 'ALL') {
    list = list.filter(x => x.assigneeName === S.maintFilterAssignee);
  }
  return list;
}

function maint() {
  const mv = S.mv || 'wo';
  const vmode = S.maintVmode || 'kanban';

  // Hero header
  const heroHtml = `
    <div class="maint-hero">
      <div class="maint-hero-left">
        <div class="maint-breadcrumb">MAINTENANCE</div>
        <h1 class="maint-title">Maintenance</h1>
        <p class="maint-subtitle">Plan, approve and track maintenance work orders</p>
      </div>
      <div>
        <button class="maint-sched-btn" data-m>
          <svg viewBox="0 0 24 24" class="i" style="width:17px;height:17px"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Schedule maintenance
        </button>
      </div>
      <img class="maint-plane-watermark" src="${bgPlane}" alt="" />
    </div>
  `;

  // Tabs & View controls
  const navRowHtml = `
    <div class="maint-nav-bar">
      <div class="maint-tabs">
        <button class="maint-tab-btn ${mv === 'wo' ? 'active' : ''}" data-mv="wo">Work orders</button>
        <button class="maint-tab-btn ${mv === 'ag' ? 'active' : ''}" data-mv="ag">Maintenance agencies</button>
      </div>
      <div class="maint-view-group">
        <div class="maint-view-switcher">
          <button class="maint-vbtn ${vmode === 'kanban' ? 'active' : ''}" data-vm="kanban" title="Kanban view">
            <svg viewBox="0 0 24 24" class="i" style="width:15px;height:15px"><rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="14" y="3" width="7" height="12" rx="1.5"/></svg>
            Kanban
          </button>
          <button class="maint-vbtn ${vmode === 'table' ? 'active' : ''}" data-vm="table" title="Table view">
            <svg viewBox="0 0 24 24" class="i" style="width:15px;height:15px"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
            Table
          </button>
          <button class="maint-vbtn ${vmode === 'calendar' ? 'active' : ''}" data-vm="calendar" title="Calendar view">
            <svg viewBox="0 0 24 24" class="i" style="width:15px;height:15px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Calendar
          </button>
        </div>
        <button class="maint-filter-pill" id="maint-filters-toggle">
          <svg viewBox="0 0 24 24" class="i" style="width:15px;height:15px"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
          Filters
        </button>
      </div>
    </div>
  `;

  if (mv === 'ag') {
    return `<div class="maint-page">${heroHtml}${navRowHtml}${agenciesBody()}</div>`;
  }

  // 4 Top KPI Cards
  const kpisHtml = `
    <div class="maint-kpi-grid">
      <div class="maint-kpi-card">
        <div class="maint-kpi-icon" style="background:#fef3c7;color:#d97706">
          <svg viewBox="0 0 24 24" class="i" style="width:22px;height:22px"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="maint-kpi-content">
          <div class="maint-kpi-val">42</div>
          <div class="maint-kpi-lbl">Pending approval</div>
        </div>
        <div class="maint-kpi-spark">
          <svg viewBox="0 0 76 28" width="76" height="28" style="overflow:visible"><path d="M 0 16 C 14 19, 22 19, 32 14 C 42 9, 52 16, 62 13 C 68 11, 72 8, 76 6" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <div class="maint-kpi-card">
        <div class="maint-kpi-icon" style="background:#eff6ff;color:#2563eb">
          <svg viewBox="0 0 24 24" class="i" style="width:22px;height:22px"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div class="maint-kpi-content">
          <div class="maint-kpi-val">28</div>
          <div class="maint-kpi-lbl">Scheduled</div>
        </div>
        <div class="maint-kpi-spark">
          <svg viewBox="0 0 76 28" width="76" height="28" style="overflow:visible"><path d="M 0 18 C 12 21, 24 22, 34 16 C 44 10, 56 16, 66 14 C 70 12, 73 9, 76 7" fill="none" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <div class="maint-kpi-card">
        <div class="maint-kpi-icon" style="background:#ecfdf5;color:#059669">
          <svg viewBox="0 0 24 24" class="i" style="width:22px;height:22px"><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-3 3-2.5-.5-.5-2.5z"/></svg>
        </div>
        <div class="maint-kpi-content">
          <div class="maint-kpi-val">31</div>
          <div class="maint-kpi-lbl">In progress</div>
        </div>
        <div class="maint-kpi-spark">
          <svg viewBox="0 0 76 28" width="76" height="28" style="overflow:visible"><path d="M 0 18 C 14 20, 24 21, 36 15 C 46 10, 56 14, 66 12 C 70 10, 73 8, 76 6" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round"/></svg>
        </div>
      </div>

      <div class="maint-kpi-card">
        <div class="maint-kpi-icon" style="background:#ecfdf5;color:#059669;border-radius:50%">
          <svg viewBox="0 0 24 24" class="i" style="width:22px;height:22px"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="maint-kpi-content">
          <div class="maint-kpi-val">67</div>
          <div class="maint-kpi-lbl">Completed</div>
        </div>
        <div class="maint-kpi-spark">
          <svg viewBox="0 0 76 28" width="76" height="28" style="overflow:visible"><path d="M 0 17 C 14 19, 24 20, 36 14 C 46 9, 56 13, 66 11 C 70 9, 73 7, 76 5" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round"/></svg>
        </div>
      </div>
    </div>
  `;

  // Toolbar (Search & Filter selects)
  const toolbarHtml = `
    <div class="maint-toolbar">
      <div class="maint-search-box">
        <svg viewBox="0 0 24 24" class="i" style="width:16px;height:16px"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
        <input type="text" id="maint-search" value="${S.maintSearch || ''}" placeholder="Search work orders (e.g., engine, hydraulics, AF-017...)" />
      </div>
      <div class="maint-filter-selects">
        <div class="maint-sel-wrap">
          <select id="msel-ac" class="maint-select">
            <option value="ALL">All aircraft</option>
            <option value="AF-017" ${S.maintFilterAc === 'AF-017' ? 'selected' : ''}>AF-017</option>
            <option value="AF-023" ${S.maintFilterAc === 'AF-023' ? 'selected' : ''}>AF-023</option>
            <option value="AF-019" ${S.maintFilterAc === 'AF-019' ? 'selected' : ''}>AF-019</option>
            <option value="AF-005" ${S.maintFilterAc === 'AF-005' ? 'selected' : ''}>AF-005</option>
            <option value="AF-021" ${S.maintFilterAc === 'AF-021' ? 'selected' : ''}>AF-021</option>
            <option value="AF-014" ${S.maintFilterAc === 'AF-014' ? 'selected' : ''}>AF-014</option>
            <option value="AF-030" ${S.maintFilterAc === 'AF-030' ? 'selected' : ''}>AF-030</option>
            <option value="AF-011" ${S.maintFilterAc === 'AF-011' ? 'selected' : ''}>AF-011</option>
            <option value="AF-041" ${S.maintFilterAc === 'AF-041' ? 'selected' : ''}>AF-041</option>
            <option value="AF-033" ${S.maintFilterAc === 'AF-033' ? 'selected' : ''}>AF-033</option>
            <option value="AF-018" ${S.maintFilterAc === 'AF-018' ? 'selected' : ''}>AF-018</option>
            <option value="AF-026" ${S.maintFilterAc === 'AF-026' ? 'selected' : ''}>AF-026</option>
            <option value="AF-008" ${S.maintFilterAc === 'AF-008' ? 'selected' : ''}>AF-008</option>
            <option value="AF-015" ${S.maintFilterAc === 'AF-015' ? 'selected' : ''}>AF-015</option>
            <option value="AF-007" ${S.maintFilterAc === 'AF-007' ? 'selected' : ''}>AF-007</option>
            <option value="AF-029" ${S.maintFilterAc === 'AF-029' ? 'selected' : ''}>AF-029</option>
          </select>
        </div>
        <div class="maint-sel-wrap">
          <select id="msel-priority" class="maint-select">
            <option value="ALL">All priority</option>
            <option value="P1" ${S.maintFilterPriority === 'P1' ? 'selected' : ''}>P1</option>
            <option value="P2" ${S.maintFilterPriority === 'P2' ? 'selected' : ''}>P2</option>
            <option value="P3" ${S.maintFilterPriority === 'P3' ? 'selected' : ''}>P3</option>
            <option value="P4" ${S.maintFilterPriority === 'P4' ? 'selected' : ''}>P4</option>
          </select>
        </div>
        <div class="maint-sel-wrap">
          <select id="msel-type" class="maint-select">
            <option value="ALL">All types</option>
            <option value="Inspection" ${S.maintFilterType === 'Inspection' ? 'selected' : ''}>Inspection</option>
            <option value="Service" ${S.maintFilterType === 'Service' ? 'selected' : ''}>Service</option>
            <option value="Test" ${S.maintFilterType === 'Test' ? 'selected' : ''}>Test</option>
            <option value="Repair" ${S.maintFilterType === 'Repair' ? 'selected' : ''}>Repair</option>
          </select>
        </div>
        <div class="maint-sel-wrap">
          <select id="msel-assignee" class="maint-select">
            <option value="ALL">All assignees</option>
            <option value="R. Nair" ${S.maintFilterAssignee === 'R. Nair' ? 'selected' : ''}>R. Nair</option>
            <option value="S. Iyer" ${S.maintFilterAssignee === 'S. Iyer' ? 'selected' : ''}>S. Iyer</option>
            <option value="P. Mehta" ${S.maintFilterAssignee === 'P. Mehta' ? 'selected' : ''}>P. Mehta</option>
            <option value="K. Shah" ${S.maintFilterAssignee === 'K. Shah' ? 'selected' : ''}>K. Shah</option>
            <option value="M. Das" ${S.maintFilterAssignee === 'M. Das' ? 'selected' : ''}>M. Das</option>
            <option value="S. Khan" ${S.maintFilterAssignee === 'S. Khan' ? 'selected' : ''}>S. Khan</option>
            <option value="T. Singh" ${S.maintFilterAssignee === 'T. Singh' ? 'selected' : ''}>T. Singh</option>
          </select>
        </div>
      </div>
      <button class="maint-clear-btn" id="maint-clear-all">Clear all</button>
    </div>
  `;

  // Filtered Cards
  const items = getFilteredKanbanItems();
  const pendingItems = items.filter(x => x.col === 'pending');
  const scheduledItems = items.filter(x => x.col === 'scheduled');
  const inprogressItems = items.filter(x => x.col === 'inprogress');
  const completedItems = items.filter(x => x.col === 'completed');

  const boardHtml = `
    <div class="maint-kanban-board">
      <!-- Column 1: Pending approval -->
      <div class="maint-col">
        <div class="maint-col-header">
          <div class="maint-col-head-left">
            <i class="maint-col-dot" style="background:#f59e0b"></i>
            <span class="maint-col-title">Pending approval</span>
            <span class="maint-col-count">42</span>
          </div>
          <button class="maint-col-menu">⋮</button>
        </div>
        ${pendingItems.map(renderKanbanCard).join('') || '<div class="empty">No work orders</div>'}
      </div>

      <!-- Column 2: Scheduled -->
      <div class="maint-col">
        <div class="maint-col-header">
          <div class="maint-col-head-left">
            <i class="maint-col-dot" style="background:#2563eb"></i>
            <span class="maint-col-title">Scheduled</span>
            <span class="maint-col-count">28</span>
          </div>
          <button class="maint-col-menu">⋮</button>
        </div>
        ${scheduledItems.map(renderKanbanCard).join('') || '<div class="empty">No work orders</div>'}
      </div>

      <!-- Column 3: In progress -->
      <div class="maint-col">
        <div class="maint-col-header">
          <div class="maint-col-head-left">
            <i class="maint-col-dot" style="background:#10b981"></i>
            <span class="maint-col-title">In progress</span>
            <span class="maint-col-count">31</span>
          </div>
          <button class="maint-col-menu">⋮</button>
        </div>
        ${inprogressItems.map(renderKanbanCard).join('') || '<div class="empty">No work orders</div>'}
      </div>

      <!-- Column 4: Completed -->
      <div class="maint-col">
        <div class="maint-col-header">
          <div class="maint-col-head-left">
            <i class="maint-col-dot" style="background:#059669"></i>
            <span class="maint-col-title">Completed</span>
            <span class="maint-col-count">67</span>
          </div>
          <button class="maint-col-menu">⋮</button>
        </div>
        ${completedItems.map(renderKanbanCard).join('') || '<div class="empty">No work orders</div>'}
      </div>
    </div>
  `;

  // Pagination Footer
  const paginationHtml = `
    <div class="maint-pagination-bar">
      <div class="maint-pagination-info">Showing 1–10 of 168 work orders</div>
      <div class="maint-pagination-pages">
        <button class="maint-page-btn" data-pg="prev">‹</button>
        <button class="maint-page-btn ${S.maintPage === 1 ? 'active' : ''}" data-pg="1">1</button>
        <button class="maint-page-btn ${S.maintPage === 2 ? 'active' : ''}" data-pg="2">2</button>
        <button class="maint-page-btn ${S.maintPage === 3 ? 'active' : ''}" data-pg="3">3</button>
        <button class="maint-page-btn ${S.maintPage === 4 ? 'active' : ''}" data-pg="4">4</button>
        <button class="maint-page-btn ${S.maintPage === 5 ? 'active' : ''}" data-pg="5">5</button>
        <span class="maint-page-ellipsis">…</span>
        <button class="maint-page-btn ${S.maintPage === 17 ? 'active' : ''}" data-pg="17">17</button>
        <button class="maint-page-btn" data-pg="next">›</button>
      </div>
      <div class="maint-rows-per-col">
        <span>Rows per column:</span>
        <select class="maint-rows-select">
          <option value="10" selected>10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  `;

  return `<div class="maint-page">${heroHtml}${navRowHtml}${kpisHtml}${toolbarHtml}${boardHtml}${paginationHtml}</div>`;
}

const RT:any[][]=[['Aircraft Health Report','Complete health analysis, anomalies and recommendations','sensors','Health Report','h','#1f66d1'],['Maintenance Report','Work orders, history and maintenance status','maint','Maintenance','m','#2b3a4f'],['Anomaly Investigation','Detailed analysis of detected anomalies','warn','Anomaly','a','#d12e37'],['Fleet Readiness Report','Fleet health and operational readiness','models','Fleet Readiness','f','#1f66d1'],['Spare Parts Report','Spare availability and utilization analysis','spares','Spare Parts','p','#2b3a4f'],['Custom Report','Select specific data and parameters','reports','Custom','x','#2b3a4f']];
const PV:any[][]=[['Engine vibration levels have shown an upward trend over the last 10 flight hours. The model estimates a 76% probability of degradation in the next 20 cycles. Maintenance inspection is recommended before the next operational cycle.',[['warn','#d12e37','Vibration levels increasing (+32% from baseline)'],['sensors','#d12e37','Temperature trend +18%'],['chk','#12915f','Current pattern within range'],['models','#1f66d1','Estimated RUL: 18–26 cycles'],['maint','#2b3a4f','No related work orders in last 50 h']],'Perform detailed engine inspection (Part: B-17)'],
['One engine inspection is pending approval for this aircraft and needs part B-17. Expected downtime is 6.4 hours.',[['warn','#e48a14','1 inspection pending approval'],['chk','#12915f','Part B-17: 2 available, 1 reserved'],['sensors','#1f66d1','Expected downtime: 6.4 h'],['chk','#12915f','No overdue tasks']],'Approve and schedule the engine inspection'],
['A vibration spike on VIB_ENG_02 at 14:32 was followed by a temperature deviation at 15:04. The pattern was confirmed at 15:16 and risk rose to 76% at 15:21.',[['warn','#d12e37','Vibration spike +32%'],['sensors','#e48a14','Temperature deviation +18%'],['models','#1f66d1','Historical pattern similarity +29%'],['chk','#2b3a4f','Recommendation generated 15:23']],'Open root-cause review for compressor degradation'],
['Fleet availability is 84.5% (71 of 84 aircraft mission ready). Engine failures and parts shortages account for 60% of lost availability.',[['warn','#e48a14','8 aircraft at risk'],['maint','#1f66d1','5 aircraft in maintenance'],['warn','#d12e37','Engine failures: 34%'],['spares','#e48a14','Parts shortages: 26%']],'Repair AF-017 first for +1 aircraft availability'],
['One stock-out (Hydraulic Pump P-17) adds +12 h downtime risk for AF-032. Two further items are low on stock.',[['warn','#d12e37','P-17: 0 available, 1 reserved'],['chk','#12915f','B-17: 2 available'],['chk','#12915f','Seal kit H-04: 6 available'],['sensors','#1f66d1','Average lead time: 6.5 days']],'Reallocate P-17 from Base B'],
['Choose the datasets and parameters to include. This preview shows a blank template.',[['sensors','#2b3a4f','Telemetry'],['maint','#2b3a4f','Maintenance history'],['spares','#2b3a4f','Spares'],['models','#2b3a4f','Predictions']],'Configure parameters under Advanced options']];
const RL:any[][]=[['RPT-2026-024','Aircraft Health Report - AF-017',0,'AF-017','5 Oct 2026, 14:32'],['RPT-2026-023','Maintenance Report - Tejas Mk1A',1,'All Fleets','4 Oct 2026, 11:20'],['RPT-2026-022','Anomaly Investigation - AF-032',2,'AF-032','3 Oct 2026, 16:45'],['RPT-2026-021','Fleet Readiness Report',3,'All Fleets','1 Oct 2026, 10:10'],['RPT-2026-020','Spare Parts Utilization - Sept 2026',4,'All Fleets','29 Sep 2026, 09:15']];
Object.assign(S,{rt:0,rac:'AF-017',rper:'Last 30 days',rfmt:'PDF (Detailed)',adv:0,rs:'',rf:'All Types',rl:RL.slice()});
const sel=(k,o)=>`<select class="hs" data-sel="${k}" style="width:100%;padding:11px 12px">${o.map(x=>`<option ${S[k]===x?'selected':''}>${x}</option>`).join('')}</select>`;
function reports(){const t=RT[S.rt],p=PV[S.rt],fl=S.rt===0||S.rt===2,L=S.rl.filter(r=>(S.rf==='All Types'||RT[r[2]][3]===S.rf)&&(r[1]+r[0]).toLowerCase().includes(S.rs.toLowerCase()));
return`<div style="position:relative"><img class="rbn" src="${JB}" alt=""><div class="eb">— REPORTS</div><h1>Reports</h1><p class="sub">Create and download intelligent reports from AeroFleet data · demo</p></div>
<div class="g cmdg" style="grid-template-columns:1.05fr 1fr;align-items:start"><div class="card"><h3 style="display:block"><span style="display:block">Generate new report</span><small style="display:block;color:var(--mu);font-weight:400;font-size:13px;margin-top:2px">Select report type and configure details. The report is generated from the current demo data.</small></h3>
<div class="lbl" style="margin:14px 0 8px;color:var(--tx);font-size:13px;font-weight:600;text-transform:none;letter-spacing:0">Report type</div><div class="rts">${RT.map((r,i)=>`<div class="rt ${i===S.rt?'on':''}" data-rt="${i}" tabindex="0"><span style="color:${r[5]}">${ic(r[2])}</span><div><b>${r[0]}</b><small>${r[1]}</small></div></div>`).join('')}</div>
<div class="g" style="grid-template-columns:repeat(3,1fr);margin-top:16px"><div><div class="fl">Aircraft</div>${sel('rac',['AF-017','AF-023','AF-032','AF-041','All Fleets'])}</div><div><div class="fl">Time period</div>${sel('rper',['Last 7 days','Last 30 days','Last 90 days'])}</div><div><div class="fl">Format</div>${sel('rfmt',['PDF (Detailed)','PDF (Summary)','CSV'])}</div></div>
<div class="adv" data-adv tabindex="0">${ic('set')}<b>Advanced options</b><span style="color:var(--mu)">(Optional)</span><span style="margin-left:auto">${S.adv?'⌃':'⌄'}</span></div>${S.adv?'<div style="display:flex;gap:18px;padding:12px 4px;font-size:13px;flex-wrap:wrap">'+['Telemetry charts','AI explanation factors','Maintenance history','Spares impact'].map(x=>`<label><input type="checkbox" checked> ${x}</label>`).join('')+'</div>':''}
<button class="btn pri" data-gen style="display:block;width:280px;margin:18px auto 0;padding:15px">Generate report ›</button></div>
<div class="card"><h3>Report preview<span class="sp m" style="font-size:12px">Sample preview</span></h3><div class="doc"><div style="display:flex;align-items:center;gap:10px"><span style="color:#0c5f5a">${ic('ac')}</span><div style="flex:1"><b>AeroFleet</b><small style="display:block;font-size:9px;letter-spacing:.1em;color:var(--mu)">AIR POWER INTELLIGENCE</small></div><div style="text-align:right"><b style="font-size:11px">${t[0].toUpperCase()}</b><small style="display:block;font-size:10px;color:var(--mu)">Generated on: 5 Oct 2026, 14:32 IST</small></div></div>
<div style="display:flex;align-items:center;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);margin:12px 0;padding:10px 0;background:#f5f7fa;margin-inline:-18px;padding-inline:18px"><div style="flex:1"><b style="font-size:26px;font-weight:700">${fl?S.rac:t[0].split(' ')[0]+' '+(t[0].split(' ')[1]||'')}</b><small style="display:block;color:var(--mu)">${S.rac==='All Fleets'?'Tejas Mk1A fleet (demo)':'Tejas Mk1A'}</small></div><img src="${JS}" alt="" style="height:56px;mix-blend-mode:multiply"></div>
<div style="display:flex;gap:24px;font-size:12px;margin-bottom:12px"><div><small style="color:var(--mu)">Report period</small><br><b>${S.rper}</b></div><div><small style="color:var(--mu)">Total flight hours</small><br><b>48.2 h</b></div><div><small style="color:var(--mu)">Health status</small><br><b style="color:#e48a14">Attention required</b></div></div>
<div class="g" style="grid-template-columns:1fr 1fr;gap:18px"><div><b style="font-size:13px">Executive summary</b><p style="font-size:12px;color:var(--mu);margin:6px 0">${p[0]}</p></div><div><b style="font-size:13px">Key findings</b>${p[1].map(f=>`<div class="kf2"><span style="color:${f[1]}">${ic(f[0])}</span>${f[2]}</div>`).join('')}</div></div>
<b style="font-size:13px">AI recommendation</b><div class="rec2">${ic('maint')}<span>${p[2]}</span><span style="margin-left:auto">›</span></div><div style="display:flex;justify-content:space-between;font-size:10px;color:var(--mu);margin-top:12px"><span>Generated from simulated fleet and IoT demonstrator data. Not operational data.</span><span>Page 1 of 8</span></div></div></div></div>
<div class="card" style="margin-top:16px;padding:0"><h3 style="padding:20px 20px 0;gap:12px;justify-content:flex-start"><span>Recent reports</span><span style="margin-left:auto;display:flex;gap:10px"><input data-rsq value="${S.rs}" placeholder="Search reports… (press Enter)" class="hs" style="width:230px"><select class="hs" data-sel="rf">${['All Types',...RT.map(r=>r[3])].map(x=>`<option ${S.rf===x?'selected':''}>${x}</option>`).join('')}</select></span></h3>
${L.length?tbl(['Report ID','Title','Type','Aircraft','Date generated','Status','Actions'],L.map(r=>[r[0],`<b style="font-weight:500">${r[1]}</b>`,`<span class="tp ${RT[r[2]][4]}">${RT[r[2]][3]}</span>`,r[3],r[4],'<span style="color:#12915f">● </span>Completed',`<span class="act" data-t="Opening ${r[0]}" tabindex="0">${ic('eye')}</span><span class="act" data-t="Downloading ${r[0]}.pdf" tabindex="0">${ic('dl')}</span>`])):'<div class="hint">No reports match your filters.</div>'}</div>`}
Object.assign(S,{at:0,vw:0});
const sysV=()=>`<div class="card" style="min-height:395px"><h3>System View</h3>${['Aircraft','Engine','Combustion','Compressor','Turbine'].map((k,i)=>`<button class="node ${S.twc===k?'on':''}" data-tc="${k}" style="margin-left:${i*18}px;width:calc(100% - ${i*18}px)">${k}<b style="float:right;color:${TW[k][0]<80?'var(--am)':'var(--gn)'}">${TW[k][0]}%</b></button>`).join('')}<p style="color:var(--mu);font-size:12.5px">Select a component to highlight it across the twin.</p></div>`;
const mapV=()=>`<div class="card" style="min-height:395px"><h3>Map View<span class="tag">Fictional bases</span></h3><svg viewBox="0 0 600 320" width="100%"><defs><pattern id="mp" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(15,28,46,.12)"/></pattern></defs><rect width="600" height="320" rx="12" fill="url(#mp)"/>${bk.map(b=>`<rect x="${BASES[b][0]-7}" y="${BASES[b][1]-7}" width="14" height="14" fill="none" stroke="#1f66d1" stroke-width="1.5"/><text x="${BASES[b][0]}" y="${BASES[b][1]-14}" text-anchor="middle" font-size="12" font-weight="600">Base ${b}</text>`).join('')}<circle class="pulse" cx="${BASES.A[0]}" cy="${BASES.A[1]}" r="8" fill="none" stroke="#1f66d1" stroke-width="2"/><circle cx="${BASES.A[0]}" cy="${BASES.A[1]}" r="4.5" fill="#1f66d1"/></svg><small style="color:var(--mu)">${S.sel||'AF-017'} is currently at Base A (demo location).</small></div>`;
const FH:any[][]=[['FL-0418','4 Oct 2026','Training sortie','1.4 h','Base A','None'],['FL-0417','3 Oct 2026','Training sortie','1.1 h','Base A','Vibration spike'],['FL-0416','2 Oct 2026','Ground run','0.6 h','Base A','Voltage drift'],['FL-0415','30 Sep 2026','Training sortie','1.5 h','Base B','None'],['FL-0414','28 Sep 2026','Transit','2.0 h','Base B','None']],DOC:any[][]=[['Technical log · 03 Oct 2026','Pilot report, vibration on climb'],['Work order WO-1182','Engine inspection, pending approval'],['Borescope report · Aug 2026','No findings'],['Component life record','Engine #1, 318 cycles']];
function ac(){const id=S.sel||'AF-017';S.sel=id;const TB=['Integrated View','Subsystems','Degradation & RUL','Simulation (What-If)','Maintenance','Flight History','Documents'],ki=(i,c,l,v,d)=>`<div style="display:flex;gap:12px;align-items:center"><div class="ki2" style="background:${c}1f;color:${c};width:46px;height:46px">${ic(i)}</div><div><small style="color:var(--mu)">${l}</small><br><b style="font-size:19px">${v}</b><br><small style="color:#12915f">${d}</small></div></div>`,rg=(p,l,v,d)=>`<div style="display:flex;gap:12px;align-items:center">${ring(p,'#12a35f',56)}<div><small style="color:var(--mu)">${l}</small><br><b style="font-size:19px">${v}</b><br><small style="color:#12915f">${d}</small></div></div>`;
let body;if(S.at===1){body=subs()}else if(S.at<4){S.twt=S.at;body=(S.at===0?`<div class="vt">${['3D View','System View','Map View'].map((v,i)=>`<button class="${S.vw===i?'on':''}" data-vw="${i}">${v}</button>`).join('')}</div>`:'')+twinB()}else if(S.at===4){S.twt=4;body=acOld()+`<div style="margin-top:16px">${twinB()}</div>`}else if(S.at===5)body=`<div class="card" style="padding:0"><h3 style="padding:18px 20px 0">Flight history</h3>${tbl(['Flight','Date','Mission','Duration','Base','Anomalies'],FH.map(r=>[...r.slice(0,5),r[5]==='None'?'<span class="hi g">None</span>':`<span class="hi a">${r[5]}</span>`]))}</div>`;else body=`<div class="card"><h3>Documents</h3>${DOC.map(d=>`<div class="q" data-go="docs" tabindex="0"><div class="ci" style="background:#0c6b63">${ic('docs')}</div><div class="mid"><b>${d[0]}</b><small>${d[1]}</small></div>›</div>`).join('')}</div>`;
return`<div class="card" style="display:flex;align-items:center;gap:26px;padding:16px 22px;margin-bottom:14px"><div><div style="display:flex;align-items:center;gap:12px"><h1 style="font-size:34px">${id}</h1><span class="sp s" style="font-size:14px">● ${S.approved?'Maintenance scheduled':'Active'}</span></div><div style="color:var(--mu);margin-top:6px">Tejas Mk1A (demo profile) &nbsp;|&nbsp; Multirole fighter &nbsp;|&nbsp; Demo fleet</div></div><div class="ac-k" style="flex:1;display:flex;justify-content:space-around;align-items:center">${ki('sensors','#1f66d1','Flight Hours','1,248.6 hrs','↑ 12%')}${ki('bolt','#12a35f','Cycles','326','↑ 8%')}${rg(78,'Overall Health','78 / 100','Good Condition')}${rg(82,'Operational Readiness','82%','Mission Ready')}</div><select class="hs" data-act aria-label="Actions" style="padding:10px 12px;font-weight:600;width:110px"><option>Actions</option><option>Schedule maintenance</option><option>Generate report</option><option>Open live telemetry</option></select></div><div class="tabs2">${TB.map((t,i)=>`<button class="${S.at===i?'on':''}" data-twt="${i}">${t}</button>`).join('')}</div>${body}`}
const DT={Engine:['Compressor degradation','812 °C','2.4 g','18–26 cycles','Inspect compressor stage 3 before the next cycle'],Hydraulics:['Seal weep suspected','2,950 psi','0.31 g','> 100 cycles','Schedule a seal check (kit H-04 in stock)'],Electrical:['Voltage drift','22.1 V','0.18 g','> 100 cycles','Monitor and retest next cycle'],'Flight Control':['Actuator lag','Load 61%','0.35 g','60–90 cycles','Plan an actuator check within 60 cycles'],Avionics:['No active fault','38 °C','0.12 g','> 100 cycles','No action needed'],Airframe:['No active fault','—','0.20 g','> 150 cycles','Routine inspection only']};
function subs(){const c=CH.find(x=>x[0]===S.twc)||CH[0],d=DT[c[0]];
return`<div class="g cmdg" style="grid-template-columns:1.5fr 1fr;align-items:start"><div class="card hcw"><h3>Subsystems<span class="tag">Select to inspect</span></h3><div class="hgrid hg3">${CH.map((h,i)=>`<div class="hc ${h[0]===S.twc?'sel':''}" data-tc="${h[0]}" tabindex="0"><div class="ki2" style="background:${h[5]};color:${h[6]}">${ic(h[4])}</div><div><small style="font-weight:500">${h[0]}</small><b>${h[1]}%</b><small style="color:${h[3]};font-size:12px">${h[7]}${h[2]}</small></div>${spk(h[6],i+2).replace('<svg ','<svg class="sp2" ')}</div>`).join('')}</div></div>
<div class="card"><h3>${c[0]}<span class="sp ${c[1]<50?'c':c[1]<70?'a':'s'}">${c[2]}</span></h3><div style="display:flex;gap:18px;align-items:center">${ring(c[1],c[6],92)}<div class="kv" style="margin:0;flex:1"><div><small>Finding</small><b>${d[0]}</b></div><div><small>Temp / load</small><b>${d[1]}</b></div><div><small>Vibration</small><b>${d[2]}</b></div><div><small>Estimated RUL</small><b>${d[3]}</b></div></div></div><div style="background:var(--p2);border-radius:10px;padding:12px 14px;margin:16px 0 14px"><small style="color:var(--mu)">Recommended action</small><br><b>${d[4]}</b></div><button class="btn pri" data-m>Schedule maintenance</button></div></div>`}
function render(){nav();if(S.view==="cmd"){if(!S.cu){S.cu=1;setTimeout(countUp,0)}}else S.cu=0;$('#content').innerHTML=({cmd,ac,sensors,preds,avail,maint,spares,reports,chat,docs,settings}as Record<string,()=>string>)[S.view]?.()||cmd();bind();bind2();ov();{const k=S.view+S.sel;$('#content').className=S.lv!==k?'fx':'';S.lv=k}}
function bind(){
  const c=$('#content');
  c.querySelectorAll('[data-id]').forEach(e=>{
    const go=()=>{S.sel=e.dataset.id;S.view='ac';render()};
    e.onclick=go;
    e.onkeydown=k=>k.key==='Enter'&&go();
  });
  c.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{S.filter=b.dataset.f;render()});

  // Maintenance Controls
  const mSearch = document.getElementById('maint-search') as HTMLInputElement;
  if (mSearch) {
    mSearch.oninput = () => {
      S.maintSearch = mSearch.value;
      render();
      const cur = document.getElementById('maint-search') as HTMLInputElement;
      if (cur) {
        cur.focus();
        cur.selectionStart = cur.selectionEnd = cur.value.length;
      }
    };
  }
  const mAc = document.getElementById('msel-ac') as HTMLSelectElement;
  if (mAc) mAc.onchange = () => { S.maintFilterAc = mAc.value; render(); };
  const mPri = document.getElementById('msel-priority') as HTMLSelectElement;
  if (mPri) mPri.onchange = () => { S.maintFilterPriority = mPri.value; render(); };
  const mType = document.getElementById('msel-type') as HTMLSelectElement;
  if (mType) mType.onchange = () => { S.maintFilterType = mType.value; render(); };
  const mAss = document.getElementById('msel-assignee') as HTMLSelectElement;
  if (mAss) mAss.onchange = () => { S.maintFilterAssignee = mAss.value; render(); };
  const mClr = document.getElementById('maint-clear-all');
  if (mClr) mClr.onclick = () => {
    S.maintSearch = '';
    S.maintFilterAc = 'ALL';
    S.maintFilterPriority = 'ALL';
    S.maintFilterType = 'ALL';
    S.maintFilterAssignee = 'ALL';
    render();
  };
  c.querySelectorAll('[data-vm]').forEach(b => {
    b.onclick = () => {
      S.maintVmode = (b as HTMLElement).dataset.vm;
      render();
    };
  });
  c.querySelectorAll('[data-pg]').forEach(b => {
    b.onclick = () => {
      const pg = (b as HTMLElement).dataset.pg;
      if (pg === 'prev') S.maintPage = Math.max(1, (S.maintPage || 1) - 1);
      else if (pg === 'next') S.maintPage = Math.min(17, (S.maintPage || 1) + 1);
      else if (pg) S.maintPage = +pg;
      render();
    };
  });

  const ok=$('#ok');if(ok)ok.onclick=()=>{S.approved=true;render()};
  const d=$('#def');if(d)d.onclick=()=>{if(prompt('Justification for deferral (logged):'))alert('Deferral logged.')};
  const r=$('#replay');if(r)r.onclick=()=>{S.t=0;S.approved=false;render()};
  const re=$('#re');if(re)re.onclick=()=>{S.re=1;render()};
}

const hthImg = document.getElementById('hth') as HTMLImageElement;
if (hthImg) hthImg.src = headerAircraft;

$('#q').onkeydown=e=>{if(e.key!=='Enter')return;const v=e.target.value.trim().toUpperCase(),a=AC.find(x=>x.id===v);if(a){S.sel=a.id;S.view='ac'}else if(v.includes('P-17'))S.view='spares';else S.view='cmd';render()};
setInterval(()=>{if(S.view==='ac'&&S.at===4&&S.t<40&&!S.approved){S.t++;const y=$('#content').scrollTop;render();$('#content').scrollTop=y}},1000);
function countUp(){document.querySelectorAll('.kpi b,.kc b').forEach(e=>{const v=+e.textContent;if(!e.textContent.trim()||isNaN(v))return;const t0=performance.now(),f=n=>{const k=Math.min(1,(n-t0)/800);e.textContent=Math.round(v*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)})}
function runDemo(){S.approved=false;S.t=0;S.sel='AF-017';S.view='ac';S.at=4;render();let k=setInterval(()=>{if(S.t<15){S.t++;render()}else{clearInterval(k);$('#content').scrollTo({top:520,behavior:'smooth'});setTimeout(()=>{S.approved=true;render();setTimeout(()=>{S.view='cmd';S.cu=0;render()},3800)},4500)}},450)}
const rdEl = document.getElementById('rd');
if (rdEl) rdEl.onclick = runDemo;
// The bell button in index.html uses an inline onclick (S.drawer=true;ov();bind2()),
// which needs these on the global scope now that the code lives in a module.
Object.assign(window, { S, ov, bind2 });
render();
