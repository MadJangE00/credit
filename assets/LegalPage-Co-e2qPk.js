import{r as we,j as ee,P as me}from"./index-DZEK3xCb.js";function D(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $=D();function ae(n){$=n}var P={exec:()=>null};function p(n,e=""){let r=typeof n=="string"?n:n.source,s={replace:(t,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(x.caret,"$1"),r=r.replace(t,l),s},getRegex:()=>new RegExp(r,e)};return s}var ye=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},Se=/^(?:[ \t]*(?:\n|$))+/,$e=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Re=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Te=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,G=/(?:[*+-]|\d{1,9}[.)])/,oe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ce=p(oe).replace(/bull/g,G).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ze=p(oe).replace(/bull/g,G).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),O=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ae=/^[^\n]+/,N=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Pe=p(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",N).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),_e=p(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,G).getRegex(),C="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Q=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ie=p("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Q).replace("tag",C).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),he=p(O).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C).getRegex(),ve=p(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",he).getRegex(),W={blockquote:ve,code:$e,def:Pe,fences:Re,heading:Te,hr:_,html:Ie,lheading:ce,list:_e,newline:Se,paragraph:he,table:P,text:Ae},te=p("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C).getRegex(),Le={...W,lheading:ze,table:te,paragraph:p(O).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",te).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C).getRegex()},Ee={...W,html:p(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Q).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:p(O).replace("hr",_).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ce).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ce=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Be=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,pe=/^( {2,}|\\)\n(?!\s*$)/,qe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,B=/[\p{P}\p{S}]/u,F=/[\s\p{P}\p{S}]/u,ue=/[^\s\p{P}\p{S}]/u,Ze=p(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,F).getRegex(),ge=/(?!~)[\p{P}\p{S}]/u,He=/(?!~)[\s\p{P}\p{S}]/u,je=/(?:[^\s\p{P}\p{S}]|~)/u,Me=p(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ye?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ke=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,De=p(ke,"u").replace(/punct/g,B).getRegex(),Ge=p(ke,"u").replace(/punct/g,ge).getRegex(),fe="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Oe=p(fe,"gu").replace(/notPunctSpace/g,ue).replace(/punctSpace/g,F).replace(/punct/g,B).getRegex(),Ne=p(fe,"gu").replace(/notPunctSpace/g,je).replace(/punctSpace/g,He).replace(/punct/g,ge).getRegex(),Qe=p("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ue).replace(/punctSpace/g,F).replace(/punct/g,B).getRegex(),We=p(/\\(punct)/,"gu").replace(/punct/g,B).getRegex(),Fe=p(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Xe=p(Q).replace("(?:-->|$)","-->").getRegex(),Ue=p("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Xe).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),v=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Je=p(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",v).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),de=p(/^!?\[(label)\]\[(ref)\]/).replace("label",v).replace("ref",N).getRegex(),xe=p(/^!?\[(ref)\](?:\[\])?/).replace("ref",N).getRegex(),Ke=p("reflink|nolink(?!\\()","g").replace("reflink",de).replace("nolink",xe).getRegex(),ne=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,X={_backpedal:P,anyPunctuation:We,autolink:Fe,blockSkip:Me,br:pe,code:Be,del:P,emStrongLDelim:De,emStrongRDelimAst:Oe,emStrongRDelimUnd:Qe,escape:Ce,link:Je,nolink:xe,punctuation:Ze,reflink:de,reflinkSearch:Ke,tag:Ue,text:qe,url:P},Ve={...X,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",v).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v).getRegex()},H={...X,emStrongRDelimAst:Ne,emStrongLDelim:Ge,url:p(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ne).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:p(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ne).getRegex()},Ye={...H,br:p(pe).replace("{2,}","*").getRegex(),text:p(H.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},I={normal:W,gfm:Le,pedantic:Ee},T={normal:X,gfm:H,breaks:Ye,pedantic:Ve},et={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=n=>et[n];function y(n,e){if(e){if(x.escapeTest.test(n))return n.replace(x.escapeReplace,re)}else if(x.escapeTestNoEncode.test(n))return n.replace(x.escapeReplaceNoEncode,re);return n}function se(n){try{n=encodeURI(n).replace(x.percentDecode,"%")}catch{return null}return n}function le(n,e){let r=n.replace(x.findPipe,(i,l,o)=>{let a=!1,h=l;for(;--h>=0&&o[h]==="\\";)a=!a;return a?"|":" |"}),s=r.split(x.splitPipe),t=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;t<s.length;t++)s[t]=s[t].trim().replace(x.slashPipe,"|");return s}function z(n,e,r){let s=n.length;if(s===0)return"";let t=0;for(;t<s&&n.charAt(s-t-1)===e;)t++;return n.slice(0,s-t)}function tt(n,e){if(n.indexOf(e[1])===-1)return-1;let r=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])r++;else if(n[s]===e[1]&&(r--,r<0))return s;return r>0?-2:-1}function ie(n,e,r,s,t){let i=e.href,l=e.title||null,o=n[1].replace(t.other.outputLinkReplace,"$1");s.state.inLink=!0;let a={type:n[0].charAt(0)==="!"?"image":"link",raw:r,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,a}function nt(n,e,r){let s=n.match(r.other.indentCodeCompensation);if(s===null)return e;let t=s[1];return e.split(`
`).map(i=>{let l=i.match(r.other.beginningSpace);if(l===null)return i;let[o]=l;return o.length>=t.length?i.slice(t.length):i}).join(`
`)}var L=class{options;rules;lexer;constructor(n){this.options=n||$}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:z(r,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let r=e[0],s=nt(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let s=z(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:z(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let r=z(e[0],`
`).split(`
`),s="",t="",i=[];for(;r.length>0;){let l=!1,o=[],a;for(a=0;a<r.length;a++)if(this.rules.other.blockquoteStart.test(r[a]))o.push(r[a]),l=!0;else if(!l)o.push(r[a]);else break;r=r.slice(a);let h=o.join(`
`),c=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${h}`:h,t=t?`${t}
${c}`:c;let k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=k,r.length===0)break;let u=i.at(-1);if(u?.type==="code")break;if(u?.type==="blockquote"){let d=u,f=d.raw+`
`+r.join(`
`),b=this.blockquote(f);i[i.length-1]=b,s=s.substring(0,s.length-d.raw.length)+b.raw,t=t.substring(0,t.length-d.text.length)+b.text;break}else if(u?.type==="list"){let d=u,f=d.raw+`
`+r.join(`
`),b=this.list(f);i[i.length-1]=b,s=s.substring(0,s.length-u.raw.length)+b.raw,t=t.substring(0,t.length-d.raw.length)+b.raw,r=f.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let r=e[1].trim(),s=r.length>1,t={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let i=this.rules.other.listItemRegex(r),l=!1;for(;n;){let a=!1,h="",c="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;h=e[0],n=n.substring(h.length);let k=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,q=>" ".repeat(3*q.length)),u=n.split(`
`,1)[0],d=!k.trim(),f=0;if(this.options.pedantic?(f=2,c=k.trimStart()):d?f=e[1].length+1:(f=e[2].search(this.rules.other.nonSpaceChar),f=f>4?1:f,c=k.slice(f),f+=e[1].length),d&&this.rules.other.blankLine.test(u)&&(h+=u+`
`,n=n.substring(u.length+1),a=!0),!a){let q=this.rules.other.nextBulletRegex(f),K=this.rules.other.hrRegex(f),V=this.rules.other.fencesBeginRegex(f),Y=this.rules.other.headingBeginRegex(f),be=this.rules.other.htmlBeginRegex(f);for(;n;){let Z=n.split(`
`,1)[0],R;if(u=Z,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),R=u):R=u.replace(this.rules.other.tabCharGlobal,"    "),V.test(u)||Y.test(u)||be.test(u)||q.test(u)||K.test(u))break;if(R.search(this.rules.other.nonSpaceChar)>=f||!u.trim())c+=`
`+R.slice(f);else{if(d||k.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||V.test(k)||Y.test(k)||K.test(k))break;c+=`
`+u}!d&&!u.trim()&&(d=!0),h+=Z+`
`,n=n.substring(Z.length+1),k=R.slice(f)}}t.loose||(l?t.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(l=!0));let b=null,J;this.options.gfm&&(b=this.rules.other.listIsTask.exec(c),b&&(J=b[0]!=="[ ] ",c=c.replace(this.rules.other.listReplaceTask,""))),t.items.push({type:"list_item",raw:h,task:!!b,checked:J,loose:!1,text:c,tokens:[]}),t.raw+=h}let o=t.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let a=0;a<t.items.length;a++)if(this.lexer.state.top=!1,t.items[a].tokens=this.lexer.blockTokens(t.items[a].text,[]),!t.loose){let h=t.items[a].tokens.filter(k=>k.type==="space"),c=h.length>0&&h.some(k=>this.rules.other.anyLine.test(k.raw));t.loose=c}if(t.loose)for(let a=0;a<t.items.length;a++)t.items[a].loose=!0;return t}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:s,title:t}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=le(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<r.length;l++)i.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:i.align[l]});for(let l of t)i.rows.push(le(l,i.header.length).map((o,a)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[a]})));return i}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let i=z(r.slice(0,-1),"\\");if((r.length-i.length)%2===0)return}else{let i=tt(e[2],"()");if(i===-2)return;if(i>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],t="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],t=i[3])}else t=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),ie(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=e[s.toLowerCase()];if(!t){let i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ie(r,t,r[0],this.lexer,this.rules)}}emStrong(n,e,r=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let t=[...s[0]].length-1,i,l,o=t,a=0,h=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*n.length+t);(s=h.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(l=[...i].length,s[3]||s[4]){o+=l;continue}else if((s[5]||s[6])&&t%3&&!((t+l)%3)){a+=l;continue}if(o-=l,o>0)continue;l=Math.min(l,l+o+a);let c=[...s[0]][0].length,k=n.slice(0,t+s.index+c+l);if(Math.min(t,l)%2){let d=k.slice(1,-1);return{type:"em",raw:k,text:d,tokens:this.lexer.inlineTokens(d)}}let u=k.slice(2,-2);return{type:"strong",raw:k,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),t=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&t&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){let e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let r,s;return e[2]==="@"?(r=e[1],s="mailto:"+r):(r=e[1],s=r),{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let t;do t=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(t!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},w=class j{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:x,block:I.normal,inline:T.normal};this.options.pedantic?(r.block=I.pedantic,r.inline=T.pedantic):this.options.gfm&&(r.block=I.gfm,this.options.breaks?r.inline=T.breaks:r.inline=T.gfm),this.tokenizer.rules=r}static get rules(){return{block:I,inline:T}}static lex(e,r){return new j(r).lex(e)}static lexInline(e,r){return new j(r).inlineTokens(e)}lex(e){e=e.replace(x.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],s=!1){for(this.options.pedantic&&(e=e.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));e;){let t;if(this.options.extensions?.block?.some(l=>(t=l.call({lexer:this},e,r))?(e=e.substring(t.raw.length),r.push(t),!0):!1))continue;if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length);let l=r.at(-1);t.raw.length===1&&l!==void 0?l.raw+=`
`:r.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length);let l=r.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+t.raw,l.text+=`
`+t.text,this.inlineQueue.at(-1).src=l.text):r.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length);let l=r.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+t.raw,l.text+=`
`+t.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title},r.push(t));continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),r.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),r.push(t);continue}let i=e;if(this.options.extensions?.startBlock){let l=1/0,o=e.slice(1),a;this.options.extensions.startBlock.forEach(h=>{a=h.call({lexer:this},o),typeof a=="number"&&a>=0&&(l=Math.min(l,a))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(t=this.tokenizer.paragraph(i))){let l=r.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+t.raw,l.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(t),s=i.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length);let l=r.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+t.raw,l.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):r.push(t);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let s=e,t=null;if(this.tokens.links){let a=Object.keys(this.tokens.links);if(a.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,t.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(t=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=t[2]?t[2].length:0,s=s.slice(0,t.index+i)+"["+"a".repeat(t[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,o="";for(;e;){l||(o=""),l=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,r))?(e=e.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=r.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}if(a=this.tokenizer.emStrong(e,s,o)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.del(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),r.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),r.push(a);continue}let h=e;if(this.options.extensions?.startInline){let c=1/0,k=e.slice(1),u;this.options.extensions.startInline.forEach(d=>{u=d.call({lexer:this},k),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(h=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(h)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(o=a.raw.slice(-1)),l=!0;let c=r.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return r}},E=class{options;parser;constructor(n){this.options=n||$}space(n){return""}code({text:n,lang:e,escaped:r}){let s=(e||"").match(x.notSpaceStart)?.[0],t=n.replace(x.endingNewline,"")+`
`;return s?'<pre><code class="language-'+y(s)+'">'+(r?t:y(t,!0))+`</code></pre>
`:"<pre><code>"+(r?t:y(t,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,r=n.start,s="";for(let l=0;l<n.items.length;l++){let o=n.items[l];s+=this.listitem(o)}let t=e?"ol":"ul",i=e&&r!==1?' start="'+r+'"':"";return"<"+t+i+`>
`+s+"</"+t+`>
`}listitem(n){let e="";if(n.task){let r=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+y(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",r="";for(let t=0;t<n.header.length;t++)r+=this.tablecell(n.header[t]);e+=this.tablerow({text:r});let s="";for(let t=0;t<n.rows.length;t++){let i=n.rows[t];r="";for(let l=0;l<i.length;l++)r+=this.tablecell(i[l]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${y(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:r}){let s=this.parser.parseInline(r),t=se(n);if(t===null)return s;n=t;let i='<a href="'+n+'"';return e&&(i+=' title="'+y(e)+'"'),i+=">"+s+"</a>",i}image({href:n,title:e,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let t=se(n);if(t===null)return y(r);n=t;let i=`<img src="${n}" alt="${r}"`;return e&&(i+=` title="${y(e)}"`),i+=">",i}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:y(n.text)}},U=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},m=class M{options;renderer;textRenderer;constructor(e){this.options=e||$,this.options.renderer=this.options.renderer||new E,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new U}static parse(e,r){return new M(r).parse(e)}static parseInline(e,r){return new M(r).parseInline(e)}parse(e,r=!0){let s="";for(let t=0;t<e.length;t++){let i=e[t];if(this.options.extensions?.renderers?.[i.type]){let o=i,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){s+=a||"";continue}}let l=i;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"def":{s+=this.renderer.def(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let o=l,a=this.renderer.text(o);for(;t+1<e.length&&e[t+1].type==="text";)o=e[++t],a+=`
`+this.renderer.text(o);r?s+=this.renderer.paragraph({type:"paragraph",raw:a,text:a,tokens:[{type:"text",raw:a,text:a,escaped:!0}]}):s+=a;continue}default:{let o='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}parseInline(e,r=this.renderer){let s="";for(let t=0;t<e.length;t++){let i=e[t];if(this.options.extensions?.renderers?.[i.type]){let o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=o||"";continue}}let l=i;switch(l.type){case"escape":{s+=r.text(l);break}case"html":{s+=r.html(l);break}case"link":{s+=r.link(l);break}case"image":{s+=r.image(l);break}case"strong":{s+=r.strong(l);break}case"em":{s+=r.em(l);break}case"codespan":{s+=r.codespan(l);break}case"br":{s+=r.br(l);break}case"del":{s+=r.del(l);break}case"text":{s+=r.text(l);break}default:{let o='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}},A=class{options;block;constructor(n){this.options=n||$}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?w.lex:w.lexInline}provideParser(){return this.block?m.parse:m.parseInline}},rt=class{defaults=D();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=m;Renderer=E;TextRenderer=U;Lexer=w;Tokenizer=L;Hooks=A;constructor(...n){this.use(...n)}walkTokens(n,e){let r=[];for(let s of n)switch(r=r.concat(e.call(this,s)),s.type){case"table":{let t=s;for(let i of t.header)r=r.concat(this.walkTokens(i.tokens,e));for(let i of t.rows)for(let l of i)r=r.concat(this.walkTokens(l.tokens,e));break}case"list":{let t=s;r=r.concat(this.walkTokens(t.items,e));break}default:{let t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach(i=>{let l=t[i].flat(1/0);r=r.concat(this.walkTokens(l,e))}):t.tokens&&(r=r.concat(this.walkTokens(t.tokens,e)))}}return r}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let i=e.renderers[t.name];i?e.renderers[t.name]=function(...l){let o=t.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:e.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[t.level];i?i.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&(t.level==="block"?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:t.level==="inline"&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),s.extensions=e),r.renderer){let t=this.defaults.renderer||new E(this.defaults);for(let i in r.renderer){if(!(i in t))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let l=i,o=r.renderer[l],a=t[l];t[l]=(...h)=>{let c=o.apply(t,h);return c===!1&&(c=a.apply(t,h)),c||""}}s.renderer=t}if(r.tokenizer){let t=this.defaults.tokenizer||new L(this.defaults);for(let i in r.tokenizer){if(!(i in t))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let l=i,o=r.tokenizer[l],a=t[l];t[l]=(...h)=>{let c=o.apply(t,h);return c===!1&&(c=a.apply(t,h)),c}}s.tokenizer=t}if(r.hooks){let t=this.defaults.hooks||new A;for(let i in r.hooks){if(!(i in t))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let l=i,o=r.hooks[l],a=t[l];A.passThroughHooks.has(i)?t[l]=h=>{if(this.defaults.async&&A.passThroughHooksRespectAsync.has(i))return(async()=>{let k=await o.call(t,h);return a.call(t,k)})();let c=o.call(t,h);return a.call(t,c)}:t[l]=(...h)=>{if(this.defaults.async)return(async()=>{let k=await o.apply(t,h);return k===!1&&(k=await a.apply(t,h)),k})();let c=o.apply(t,h);return c===!1&&(c=a.apply(t,h)),c}}s.hooks=t}if(r.walkTokens){let t=this.defaults.walkTokens,i=r.walkTokens;s.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),t&&(o=o.concat(t.call(this,l))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return w.lex(n,e??this.defaults)}parser(n,e){return m.parse(n,e??this.defaults)}parseMarkdown(n){return(e,r)=>{let s={...r},t={...this.defaults,...s},i=this.onError(!!t.silent,!!t.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(t.hooks&&(t.hooks.options=t,t.hooks.block=n),t.async)return(async()=>{let l=t.hooks?await t.hooks.preprocess(e):e,o=await(t.hooks?await t.hooks.provideLexer():n?w.lex:w.lexInline)(l,t),a=t.hooks?await t.hooks.processAllTokens(o):o;t.walkTokens&&await Promise.all(this.walkTokens(a,t.walkTokens));let h=await(t.hooks?await t.hooks.provideParser():n?m.parse:m.parseInline)(a,t);return t.hooks?await t.hooks.postprocess(h):h})().catch(i);try{t.hooks&&(e=t.hooks.preprocess(e));let l=(t.hooks?t.hooks.provideLexer():n?w.lex:w.lexInline)(e,t);t.hooks&&(l=t.hooks.processAllTokens(l)),t.walkTokens&&this.walkTokens(l,t.walkTokens);let o=(t.hooks?t.hooks.provideParser():n?m.parse:m.parseInline)(l,t);return t.hooks&&(o=t.hooks.postprocess(o)),o}catch(l){return i(l)}}}onError(n,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+y(r.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(r);throw r}}},S=new rt;function g(n,e){return S.parse(n,e)}g.options=g.setOptions=function(n){return S.setOptions(n),g.defaults=S.defaults,ae(g.defaults),g};g.getDefaults=D;g.defaults=$;g.use=function(...n){return S.use(...n),g.defaults=S.defaults,ae(g.defaults),g};g.walkTokens=function(n,e){return S.walkTokens(n,e)};g.parseInline=S.parseInline;g.Parser=m;g.parser=m.parse;g.Renderer=E;g.TextRenderer=U;g.Lexer=w;g.lexer=w.lex;g.Tokenizer=L;g.Hooks=A;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;m.parse;w.lex;const st=`<!-- 첫 버전 2026-10-21 (조정자 초안, 사용자 확인 — 결정 C13). 법률 자문이 아님. 남은 검토 거리는 legal/README.md.
     앱은 첫 "# " 제목부터 보여 준다(이 주석은 화면에 나오지 않음). 고치면 app.settings의 버전과 시행일을 함께 올린다. -->

# 크레딧 이용약관

- 시행일: 2026-10-21

## 제1장 총칙

### 제1조 (목적)

이 약관은 크레딧 운영팀(이하 "회사")이 제공하는 크레딧 서비스(이하 "서비스")의 이용 조건과 절차, 회사와 회원의 권리·의무를 정합니다.

### 제2조 (용어의 정의)

1. **회원**: 이 약관에 동의하고 카카오 계정으로 가입한 사람.
2. **운영자**: 회사가 지정해 프로젝트 승인, 등급 결정, 이의 판정을 맡는 사람.
3. **프로젝트**: 회원들이 함께 만드는 작품(영상 등) 하나. 회원이 신청하고 운영자가 승인하면 열립니다.
4. **리더**: 프로젝트를 신청한 회원. 참여자를 초대하고 기본 비율과 정산을 조정합니다.
5. **참여자**: 프로젝트에 참여한 회원. 작품 완성 전에 참여했다가 떠났거나 리더가 내보낸 회원도 그 프로젝트의 정산 참여자로 남습니다.
6. **기본 비율**: 참여자 모두가 확인한 역할별 몫의 비율. 합은 100%입니다.
7. **기여 기록**: 참여자가 남긴 한 일의 기록. 정산을 조정하거나 이의를 판정할 때 근거가 됩니다.
8. **보상 풀**: 완성된 작품에 운영자가 정한 등급의 포인트 총량.
9. **정산**: 보상 풀을 비율대로 나누는 절차와 그 결과. 고칠 때마다 새 버전이 생깁니다.
10. **포인트**: 정산으로 받는 서비스 안의 시험용 점수(제11조).

### 제3조 (약관의 게시와 변경)

① 회사는 이 약관을 서비스 화면에 게시합니다.

② 회사는 관련 법령을 어기지 않는 범위에서 약관을 바꿀 수 있으며, 바꾸면 시행 7일 전(회원에게 불리하거나 중요한 변경은 30일 전)부터 서비스 안에 알립니다.

③ 회원이 바뀐 약관에 동의하지 않으면 탈퇴할 수 있습니다. 바뀐 약관이 시행된 뒤 다시 동의해야 서비스를 계속 이용할 수 있습니다.

## 제2장 이용계약

### 제4조 (가입)

① 가입은 카카오 로그인 후 닉네임을 정하고, 만 14세 이상임을 확인하고, 이 약관과 개인정보 처리방침에 동의하면 이루어집니다.

② 만 14세 미만은 가입할 수 없습니다. 만 14세 미만으로 확인되면 회사는 그 계정을 지울 수 있습니다.

③ 카카오 계정 하나로 회원 한 명만 가입할 수 있습니다.

### 제5조 (계정의 관리)

회원은 자기 카카오 계정을 안전하게 관리해야 하며, 다른 사람에게 계정을 빌려주거나 넘길 수 없습니다.

## 제3장 서비스의 이용

### 제6조 (서비스의 내용)

① 서비스는 작품 프로젝트에 참여한 사람들의 기여를 기록하고, 완성된 작품의 보상 풀을 합의한 비율대로 포인트로 나누는 기능을 제공합니다.

② 서비스는 **1단계 시험 서비스**입니다. 회사는 정산 규칙이 공정하게 받아들여지는지 확인하기 위해 운영하며, 그 결과에 따라 기능과 규칙을 바꾸거나 서비스를 끝낼 수 있습니다(제16조).

③ 서비스는 실제 판매 수익을 나누지 않습니다. 작품으로 실제 수익이 생겨 나누려면 참여자끼리 서비스 밖에서 따로 약정해야 하며, 회사는 이에 관여하지 않습니다.

### 제7조 (프로젝트 신청과 승인)

① 회원은 프로젝트를 신청할 수 있고, 신청한 회원이 리더가 됩니다. 승인을 기다리는 신청은 한 사람당 3개까지입니다.

② 운영자는 신청을 확인해 승인하거나, 이유를 밝혀 승인하지 않을 수 있습니다.

③ 리더는 승인 전후로 프로젝트를 취소할 수 있습니다. 다만 완성 처리한 뒤에는 취소할 수 없습니다.

### 제8조 (참여자와 기본 비율)

① 리더는 초대 링크(7일 동안 여러 사람이 쓸 수 있음)로 참여자를 초대합니다. 한 프로젝트에는 20명까지 참여할 수 있습니다.

② 참여자는 작품 완성 전까지 스스로 떠날 수 있고, 리더는 참여자를 내보낼 수 있습니다. 리더가 내보낸 회원은 같은 프로젝트에 다시 참여할 수 없습니다. 떠나거나 내보낸 회원도 정산 참여자로 남아 정산을 보고 이의를 낼 수 있습니다.

③ 리더는 모든 참여자(떠난 사람 포함)의 역할과 기본 비율을 정하고, 남아 있는 참여자 **모두가 확인**해야 합의된 것으로 봅니다. 참여자나 비율이 바뀌면 다시 확인합니다.

④ 리더는 기본 비율이 합의된 프로젝트만 완성 처리할 수 있습니다. 완성 처리한 뒤에는 참여자와 기본 비율을 바꿀 수 없습니다.

### 제9조 (기여 기록)

① 참여자는 자기가 한 일을 기록할 수 있습니다. 기록은 고치거나 지울 수 없고, 틀린 기록은 정정 기록을 더해 바로잡습니다.

② 기여 기록은 비율을 자동으로 정하지 않으며, 리더의 조정과 운영자의 판정에서 근거로 씁니다.

### 제10조 (정산)

① 작품이 완성되면 운영자가 등급을 정해 보상 풀을 정하고, 기본 비율로 정산 초안이 만들어집니다.

② 리더는 초안에서 각 참여자의 비율을 기본 비율보다 10%p 넘게 바꿀 수 없으며, 바꾼 사람마다 이유를 적어야 합니다. 리더가 자기 몫을 바꾸면 남아 있는 다른 참여자 과반의 승인을 받아야 공개됩니다.

③ 공개된 정산은 7일 동안 참여자가 확인하거나 이의를 낼 수 있습니다. 참여자 모두가 확인하면 7일을 기다리지 않고 바로 확정됩니다.

④ 이의는 운영자가 판정합니다. 이의를 받아들이면 운영자가 비율을 고쳐 새 버전을 공개하며, 확인 기간 7일이 새로 시작됩니다. 운영자가 고치는 비율에는 제2항의 10%p 제한이 없습니다. 서비스 안에서 운영자의 판정이 최종입니다.

⑤ 확정되면 포인트를 지급합니다. 확정된 뒤 잘못이 발견되면 운영자가 정정 정산을 공개할 수 있으며, 확정될 때 이미 받은 포인트와의 차이만큼 더 지급하거나 거둡니다.

⑥ 포인트를 나눌 때 생기는 나머지는 나머지가 큰 사람부터 1점씩 주고, 같으면 먼저 참여한 사람에게 줍니다.

## 제4장 포인트

### 제11조 (포인트의 성격)

① 포인트는 정산 결과를 나타내는 서비스 안의 **시험용 점수**이며, **금전적 가치가 없습니다**.

② 포인트는 현금·상품·다른 포인트로 바꾸거나 환불받을 수 없고, 다른 사람에게 넘기거나 팔 수 없습니다.

③ 회사는 포인트와 관련해 회원에게 어떤 금전적 보상도 약속하지 않습니다.

④ 탈퇴하면 남은 포인트는 소멸합니다(제15조).

### 제12조 (오류의 정정)

회사는 포인트 지급이나 정산에 오류가 있으면 정정 정산이나 정정 기록으로 바로잡을 수 있습니다. 장부 기록 자체는 고치거나 지우지 않습니다.

## 제5장 회원의 의무

### 제13조 (금지 행위)

회원은 다음 행위를 해서는 안 됩니다.

1. 하지 않은 일을 기여로 기록하거나 증빙을 꾸미는 행위
2. 여러 계정을 만들거나 남의 계정을 써서 비율 확인·승인·이의를 조작하는 행위
3. 다른 참여자를 속이거나 압박해 비율에 동의하게 하는 행위
4. 다른 사람의 개인정보·저작물을 무단으로 올리는 행위
5. 서비스의 정상 운영을 방해하는 행위

### 제14조 (이용 제한)

회사는 회원이 제13조를 어기면 해당 기록을 정정하거나, 서비스 이용을 제한할 수 있습니다. 이용을 제한할 때는 이유를 알리며, 회원은 jiniixz@naver.com으로 소명할 수 있습니다.

## 제6장 탈퇴와 서비스 종료

### 제15조 (탈퇴)

① 회원은 내 정보 화면에서 언제든지 탈퇴할 수 있으며, 탈퇴는 바로 처리되고 되돌릴 수 없습니다. 같은 카카오 계정으로 다시 오면 새로 가입합니다.

② 리더로서 끝나지 않은 프로젝트(신청 중·진행 중·완성 후 정산 전)가 있으면 탈퇴할 수 없습니다. 정산을 마치거나 프로젝트를 취소한 뒤 탈퇴할 수 있습니다.

③ 탈퇴하면 진행 중인 프로젝트에서는 떠난 것으로 처리되고, 남은 포인트는 소멸합니다. 탈퇴 뒤에 확정되는 정산의 몫도 지급하지 않습니다.

④ 이미 완성된 작품의 정산·포인트 장부·기여 기록은 다른 참여자의 몫과 합계가 맞도록 지우지 않고 "탈퇴한 참여자"라는 이름으로 남습니다(개인정보 처리방침 제3조).

### 제16조 (서비스의 변경과 종료)

① 회사는 1단계 시험 운영의 결과에 따라 서비스의 기능과 규칙을 바꾸거나 서비스를 끝낼 수 있으며, 시행 30일 전에 서비스 안에 알립니다.

② 서비스가 끝나면 포인트는 소멸합니다. 포인트는 금전적 가치가 없으므로(제11조) 이에 대한 보상은 없습니다.

## 제7장 기타

### 제17조 (책임의 제한)

① 회사는 천재지변, 수탁자(호스팅 업체 등)의 장애 등 회사가 통제할 수 없는 사유로 서비스를 제공하지 못한 데 대해 책임을 지지 않습니다. 다만 회사의 고의나 중대한 과실이 있으면 그렇지 않습니다.

② 회사는 참여자끼리 서비스 밖에서 맺은 약정(실제 수익 배분 등)에 관여하지 않으며, 그에 대한 책임을 지지 않습니다.

### 제18조 (분쟁의 해결)

이 약관과 서비스 이용에 관한 분쟁은 대한민국 법을 따르며, 소송이 필요하면 「민사소송법」에 따른 관할 법원에 제기합니다.

## 부칙

이 약관은 2026-10-21부터 시행합니다.
`,lt=`<!-- 첫 버전 2026-10-21 (조정자 초안, 사용자 확인 — 결정 C13). 법률 자문이 아님. 남은 검토 거리는 legal/README.md.
     앱은 첫 "# " 제목부터 보여 준다(이 주석은 화면에 나오지 않음). 고치면 app.settings의 버전과 시행일을 함께 올린다. -->

# 크레딧 개인정보 처리방침

크레딧 운영팀(이하 "회사")은 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 관련 고충을 원활하게 처리하기 위해 이 처리방침을 둡니다.

- 시행일: 2026-10-21
- 연락처: jiniixz@naver.com

## 한눈에 보기

| 구분 | 내용 |
|---|---|
| 처리하는 항목 | 카카오 회원번호, 카카오 닉네임, 서비스 닉네임, 약관 동의·만 14세 확인 기록, 프로젝트·기여 기록·정산·포인트 내역, 접속 기록(제2조) |
| 처리 목적 | 로그인, 작품 프로젝트의 기여 기록과 포인트 정산, 분쟁 대응(제1조) |
| 보유 기간 | 탈퇴하면 로그인 계정·닉네임·동의 기록은 바로 지움. 정산·포인트·기여 기록은 이름 없이 남김(제3조) |
| 제3자 제공 | 없음(제5조) |
| 처리 위탁 | 있음 — Supabase, GitHub(제6조) |
| 국외 이전 | 있음 — Supabase(저장은 서울), GitHub(제7조) |
| 광고·행태 분석 도구 | 사용하지 않음 |
| 고충 처리 | jiniixz@naver.com(제12조) |

## 제1조 개인정보의 처리 목적

회사는 다음 목적으로만 개인정보를 처리하며, 목적이 바뀌면 「개인정보 보호법」 제18조에 따라 필요한 조치를 합니다.

1. **회원 가입과 로그인**: 카카오 로그인으로 회원을 확인하고 로그인을 유지합니다.
2. **서비스 제공**: 작품 프로젝트의 신청·승인, 참여자 초대, 역할과 기본 비율의 합의, 기여 기록, 보상 풀의 등급 결정, 정산(리더 조정·승인·확인·이의 제기·운영자 판정), 포인트 지급과 내역 관리.
3. **분쟁 대응과 부정 이용 방지**: 정산 이의 판정, 기록 조작·부정 이용 확인, 운영자 행위 기록.
4. **고지**: 약관·처리방침 변경, 서비스 변경·종료 안내.

회사는 개인정보를 광고, 마케팅, 맞춤형 광고를 위한 행태 분석에 이용하지 않습니다.

## 제2조 처리하는 개인정보의 항목, 처리 근거와 수집 방법

### 1. 서비스 제공(이용계약의 이행)을 위해 처리하는 개인정보

아래 정보는 이용약관에 따른 서비스 제공에 꼭 필요하므로 「개인정보 보호법」 제15조 제1항 제4호(계약의 체결·이행)에 따라 처리합니다. 가입 화면에서 이 내용을 안내하고 확인을 받습니다.

| 구분 | 항목 | 목적 | 보유 기간 |
|---|---|---|---|
| 로그인 계정 | 카카오 회원번호(카카오가 이 서비스에 주는 식별값), 카카오 닉네임 | 로그인, 같은 사람인지 확인. 카카오 닉네임은 가입 화면의 닉네임 칸을 미리 채우는 데만 씀 | 탈퇴하면 바로 삭제 |
| 회원 정보 | 서비스 닉네임, 가입 일시, 약관·처리방침 동의 버전과 일시, 만 14세 이상 확인 일시, 운영자 여부 | 회원 관리, 다른 참여자에게 닉네임 표시, 동의 증명 | 탈퇴하면 바로 삭제(닉네임은 "탈퇴한 참여자"로 바뀜) |
| 서비스 이용 기록 | 신청하거나 참여한 프로젝트, 역할, 기본 비율과 확인 기록, 초대 링크, 기여 기록(설명·증빙 링크), 정산 비율·사유·포인트, 승인·확인·이의 제기 내용과 판정, 포인트 거래 내역, 운영자 행위 기록 | 서비스 제공, 정산·포인트 장부 관리, 분쟁 대응 | 탈퇴 뒤에도 이름 없이 보관(제3조 제2항) |
| 자동으로 생성되는 정보 | 접속 IP 주소, 접속 일시, 브라우저·기기 종류, 서비스 요청·오류 기록 | 보안, 부정 이용 방지, 장애 대응 | 수탁자가 정한 기간 |

### 2. 동의를 받아 처리하는 개인정보(선택)

없습니다.

### 3. 수집 방법

- 카카오 로그인: 회원이 카카오 로그인 화면에서 동의한 항목(닉네임)과 카카오 회원번호를 카카오로부터 받습니다.
- 회원이 직접 입력: 가입·프로젝트 신청·기여 기록·정산·이의 제기 화면.
- 자동 생성: 서비스를 이용하는 과정에서 서버와 웹사이트 호스팅 업체가 기록합니다.

### 4. 처리하지 않는 정보

회사는 이메일, 전화번호, 프로필 사진, 주민등록번호 등 고유식별정보, 민감정보, 위치정보, 결제정보를 수집하지 않습니다.

### 5. 다른 사람에게 보이는 정보

| 보는 사람 | 보이는 정보 |
|---|---|
| 같은 프로젝트의 참여자(중간에 떠났거나 리더가 내보낸 사람 포함)와 운영자 | 닉네임, 역할, 기본 비율과 확인 여부, 기여 기록, 정산 비율·사유·포인트와 확인 여부 |
| 이의를 낸 사람, 그 프로젝트의 리더, 운영자 | 이의 내용과 판정 |
| 초대 링크를 받은 사람(로그인한 회원) | 프로젝트 제목, 리더 닉네임, 지금 참여 인원 |
| 본인과 운영자 | 포인트 잔액과 거래 내역. 운영자는 장부 관리를 위해서만 봄 |

## 제3조 개인정보의 처리 및 보유 기간

① 회사는 제2조의 보유 기간 동안만 개인정보를 처리합니다.

② 탈퇴하면 로그인 계정(카카오 회원번호·카카오 닉네임), 서비스 닉네임, 동의 기록, 운영자 자격을 바로 지우고, 남은 포인트는 소멸합니다. 다만 이미 함께 만든 작품의 **정산·포인트 장부·기여 기록**은 다른 참여자의 몫과 합계가 맞아야 하고 정산 분쟁의 근거가 되므로 지우지 않고, 닉네임을 "탈퇴한 참여자"로 바꿔 누구인지 알 수 없게 한 채 서비스를 운영하는 동안 보관합니다.

③ 법령이 보관을 요구하는 경우에는 그 법령이 정한 기간 동안 보관합니다. 지금은 해당하는 법령이 없습니다(포인트는 현금 가치가 없는 시험용 점수입니다 — 이용약관 제11조).

## 제4조 개인정보의 파기 절차 및 방법

① 보유 기간이 끝나거나 처리 목적이 달성되면 지체 없이 파기합니다. 탈퇴는 신청 즉시 처리되며 되돌릴 수 없습니다.

② 전자적 파일은 복구할 수 없는 방법으로 삭제합니다. 수탁자의 백업에 남은 정보는 그 백업의 보관 기간이 끝나면 함께 지워집니다.

## 제5조 개인정보의 제3자 제공

회사는 개인정보를 제3자에게 제공하지 않습니다. 법령에 특별한 규정이 있는 경우는 예외입니다.

## 제6조 개인정보 처리업무의 위탁

① 회사는 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁합니다.

| 수탁자 | 위탁 업무 |
|---|---|
| Supabase Pte. Ltd.(싱가포르) | 회원 인증(로그인 처리), 데이터베이스 저장, 서버 기능과 예약 작업 실행, 서비스 로그 관리. 재처리자: Amazon Web Services, Inc.(서울 리전 인프라) 등 Supabase가 공개한 재처리자 |
| GitHub, Inc.(미국) | 웹사이트 호스팅과 전송(GitHub Pages), 보안을 위한 접속 기록 처리 |

② 회사는 수탁자와 맺은 이용약관과 데이터 처리 부속 계약(DPA)으로 위탁 목적 외 처리 금지, 보호조치, 재위탁 제한, 관리·감독, 손해배상 등을 정하고, 수탁자가 개인정보를 안전하게 처리하는지 감독합니다.

③ 카카오(주식회사 카카오)는 회원이 카카오 로그인 화면에서 동의한 항목을 회사에 제공하는 곳으로, 회사가 처리를 맡기는 수탁자가 아닙니다.

④ 위탁 업무의 내용이나 수탁자가 바뀌면 지체 없이 이 처리방침으로 공개합니다.

## 제7조 개인정보의 국외 이전

① 회사는 서비스 제공(이용계약의 이행)을 위한 처리위탁·보관으로서 「개인정보 보호법」 제28조의8 제1항 제3호 가목에 따라 아래 사항을 공개하고 개인정보를 국외로 이전합니다.

② Supabase의 데이터베이스는 대한민국(서울 리전)에 있습니다. 다만 수탁자가 국외 법인이고 장애 대응·기술 지원·로그 처리 과정에서 국외에서 접근하거나 처리될 수 있으므로 국외 이전으로 보고 알립니다.

**1) Supabase Pte. Ltd.**

| 구분 | 내용 |
|---|---|
| 이전받는 자와 연락처 | Supabase Pte. Ltd. / privacy@supabase.com |
| 이전되는 국가 | 저장 위치: 대한민국(서울). 운영·지원을 위한 접근: 싱가포르(법인 소재지) 등 |
| 이전 일시와 방법 | 서비스를 이용할 때마다 수시로, 암호화된 네트워크(TLS)로 전송·저장 |
| 이전되는 항목 | 제2조 제1항의 모든 항목 |
| 이전받는 자의 이용 목적 | 회원 인증, 데이터 저장, 서버 기능 실행, 로그 관리 등 위탁 업무 수행 |
| 이전받는 자의 보유·이용 기간 | 제3조의 보유 기간이 끝날 때까지 또는 위탁 계약이 끝날 때까지 |

**2) GitHub, Inc.**

| 구분 | 내용 |
|---|---|
| 이전받는 자와 연락처 | GitHub, Inc. / https://support.github.com/contact/privacy |
| 이전되는 국가 | 미국(법인 소재지) 및 GitHub Pages를 전송하는 데이터센터가 있는 국가 |
| 이전 일시와 방법 | 서비스에 접속할 때마다 수시로, 암호화된 네트워크(TLS)로 전송 |
| 이전되는 항목 | 접속 IP 주소, 접속 일시, 요청한 주소, 브라우저·기기 정보 |
| 이전받는 자의 이용 목적 | 웹사이트 전송, 디도스·봇 차단 등 보안 |
| 이전받는 자의 보유·이용 기간 | 서비스 이용 계약이 끝날 때까지. 접속 기록은 GitHub 정책에서 정한 기간 |

③ 국외 이전을 원하지 않으면 회원 가입을 하지 않거나 탈퇴할 수 있습니다. 다만 국외 이전 없이는 서비스를 제공할 수 없습니다.

## 제8조 정보주체의 권리·의무와 행사 방법

① 회원은 언제든지 개인정보의 열람, 정정·삭제, 처리정지, 동의 철회를 요구할 수 있습니다.

② 서비스 화면에서 직접 할 수 있는 것: 내 정보에서 포인트 내역 보기, 탈퇴(로그인 계정·닉네임·동의 기록 삭제). 그 밖의 요구는 jiniixz@naver.com으로 하면 지체 없이(10일 이내) 처리하고 결과를 알립니다.

③ 다른 참여자의 몫과 합계가 걸린 정산·장부·기여 기록은 정정·삭제 요구가 있어도 그대로 지울 수 없는 경우가 있으며, 이때는 그 이유를 알리고 운영자 판정·정정 정산으로 바로잡습니다.

④ 대리인을 통해서도 권리를 행사할 수 있으며, 이때는 위임장을 제출해야 합니다.

## 제9조 만 14세 미만 아동의 개인정보

회사는 만 14세 미만 아동의 가입을 받지 않습니다. 가입 화면에서 만 14세 이상인지 확인하며, 만 14세 미만으로 확인되면 그 계정을 지웁니다.

## 제10조 개인정보의 안전성 확보 조치

1. 접근 권한 최소화: 회원은 자기가 참여한 프로젝트의 정보만 볼 수 있고, 모든 저장·변경은 서버의 규칙 검사를 거칩니다.
2. 운영자 행위 기록: 승인·등급·판정·정정 등 운영자 행위를 지울 수 없는 기록으로 남깁니다.
3. 전송 구간 암호화: 모든 통신은 HTTPS(TLS)로 암호화합니다.
4. 비밀 키 관리: 서버 관리 키와 카카오 비밀 키는 앱과 저장소에 넣지 않고, 서비스 설정에만 보관합니다.
5. 포인트 장부 보호: 장부 기록은 고치거나 지울 수 없고, 모든 거래의 합이 0인지 자동으로 검사합니다.

## 제11조 쿠키와 브라우저 저장소

① 회사는 쿠키를 쓰지 않습니다.

② 브라우저 저장소(localStorage)에 로그인 유지 정보와, 카카오 로그인 중에 쓰는 일회용 확인 값(10분 뒤 사라짐)을 저장합니다. 로그아웃하면 로그인 유지 정보가 지워집니다. 브라우저 설정에서 저장소를 지울 수 있지만, 그러면 다시 로그인해야 합니다.

③ 방문 분석·광고 도구는 쓰지 않습니다.

## 제12조 개인정보 보호책임자와 고충 처리 담당

| 구분 | 내용 |
|---|---|
| 개인정보 보호책임자 | EugeneJang |
| 연락처 | jiniixz@naver.com |

개인정보 관련 문의, 불만, 피해 구제는 위 연락처로 하면 지체 없이 답변합니다.

## 제13조 권익침해 구제 방법

개인정보 침해에 대한 신고나 상담이 필요하면 아래 기관에 문의할 수 있습니다.

- 개인정보분쟁조정위원회: (국번 없이) 1833-6972, www.kopico.go.kr
- 개인정보침해신고센터: (국번 없이) 118, privacy.kisa.or.kr
- 대검찰청: (국번 없이) 1301, www.spo.go.kr
- 경찰청: (국번 없이) 182, ecrm.police.go.kr

## 제14조 개인정보 처리방침의 변경

이 처리방침을 바꾸면 시행 7일 전에 서비스 안에 알립니다. 회원의 권리에 중요한 변경은 시행 30일 전에 알리고, 필요하면 다시 동의를 받습니다.

## 부칙

이 처리방침은 2026-10-21부터 시행합니다.
`,it="_doc_x7v20_1",at={doc:it},ot={terms:{title:"이용약관",source:st},privacy:{title:"개인정보 처리방침",source:lt}};function ct(n){const e=n.search(/^# /m);return e>=0?n.slice(e):n}function pt({doc:n}){const{title:e,source:r}=ot[n],s=we.useMemo(()=>g.parse(ct(r),{async:!1}),[r]);return ee.jsx(me,{title:e,back:"/",children:ee.jsx("article",{className:at.doc,dangerouslySetInnerHTML:{__html:s}})})}export{pt as default};
