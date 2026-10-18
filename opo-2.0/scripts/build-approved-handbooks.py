from pathlib import Path
import json,html
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,Table,TableStyle,PageBreak,KeepTogether
from reportlab.lib.enums import TA_LEFT
import os
app=Path(__file__).resolve().parents[1];out=Path(os.environ.get('OPO_HANDBOOK_OUTPUT',str(app/'docs/handbooks')));out.mkdir(parents=True,exist_ok=True)
font=Path(os.environ.get('OPO_CJK_FONT','C:/Windows/Fonts/msyh.ttc'));bold=Path(os.environ.get('OPO_CJK_BOLD_FONT','C:/Windows/Fonts/msyhbd.ttc'))
if font.exists() and bold.exists():
 pdfmetrics.registerFont(TTFont('OPOCN',str(font),subfontIndex=0));pdfmetrics.registerFont(TTFont('OPOCNB',str(bold),subfontIndex=0))
else:
 from reportlab.pdfbase.cidfonts import UnicodeCIDFont
 pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'));pdfmetrics.registerFont(UnicodeCIDFont('HeiseiMin-W3'))
 # Supply OPO_CJK_FONT and OPO_CJK_BOLD_FONT for reproducible embedded CJK fonts.
 for name,source in [('OPOCN','STSong-Light'),('OPOCNB','STSong-Light')]:pdfmetrics._fonts[name]=pdfmetrics._fonts[source]
normal=ParagraphStyle('normal',fontName='OPOCN',fontSize=10,leading=16.5,spaceAfter=10,wordWrap='CJK',textColor=colors.HexColor('#263447'))
h1=ParagraphStyle('h1',parent=normal,fontName='OPOCNB',fontSize=20,leading=29,spaceAfter=16,textColor=colors.HexColor('#172334'))
h2=ParagraphStyle('h2',parent=normal,fontName='OPOCNB',fontSize=15,leading=24,spaceAfter=13,textColor=colors.HexColor('#db2927'))
cell=ParagraphStyle('cell',parent=normal,fontSize=9,leading=14,spaceAfter=0)
small=ParagraphStyle('small',parent=normal,fontSize=9,leading=14,textColor=colors.HexColor('#68798c'))
pages=json.loads((app/'docs/handbook-content.json').read_text(encoding='utf-8'))
for key,title,name in [('manual','OPO2.0使用操作手册','OPO2.0使用操作手册-20261019.pdf'),('checklist','OPO2.0上线资料与链上开发清单','OPO2.0上线资料与链上开发清单-20261019.pdf')]:
 story=[]
 for i,(heading,blocks) in enumerate(pages[key]):
  if i:story.append(PageBreak())
  if i==0:story +=[Paragraph(title,h1),Paragraph('2026年10月19日  已确认框架候选版  |  真实资金功能尚未启用',small),Spacer(1,12)]
  story.append(Paragraph(str(i+1)+'  '+html.escape(heading),h2))
  for block in blocks:
   if isinstance(block,str):story.append(Paragraph(html.escape(block),normal))
   else:
    rows=[[Paragraph(html.escape(str(v)),cell) for v in row] for row in block['table']]
    n=len(rows[0]);widths=[94,104,307] if n==3 else [505/n]*n
    t=Table(rows,colWidths=widths,repeatRows=1,hAlign='LEFT');t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#fff0ed')),('LINEBELOW',(0,0),(-1,0),.8,colors.HexColor('#f0bbb2')),('LINEBELOW',(0,1),(-1,-1),.35,colors.HexColor('#dce2e9')),('VALIGN',(0,0),(-1,-1),'TOP'),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7)]));story +=[t,Spacer(1,12)]
 def footer(canvas,doc):
  canvas.saveState();canvas.setStrokeColor(colors.HexColor('#dce2e9'));canvas.line(45,37,550,37);canvas.setFont('OPOCN',8);canvas.setFillColor(colors.HexColor('#6b7787'));canvas.drawString(45,25,'OPO 2.0  |  模拟框架与上线准备  |  2026-10-19');canvas.drawRightString(550,25,str(doc.page));canvas.restoreState()
 doc=SimpleDocTemplate(str(out/name),pagesize=(595.28,841.89),rightMargin=45,leftMargin=45,topMargin=43,bottomMargin=49,title=title,author='OPO')
 doc.build(story,onFirstPage=footer,onLaterPages=footer)
 print(name,(out/name).stat().st_size)
# Render every page for inspection and check extracted text.
import pypdfium2 as pdfium
from pypdf import PdfReader
qa=app/'test-results/handbook-pdf';qa.mkdir(exist_ok=True)
report=[]
for path in out.glob('OPO2.0*20261019.pdf'):
 d=pdfium.PdfDocument(str(path));texts=[];reader=PdfReader(path)
 for i,page in enumerate(d):
  texts.append(reader.pages[i].extract_text());page.render(scale=1).to_pil().save(qa/(path.stem+'-'+str(i+1)+'.png'))
 text='\n'.join(texts)
 assert '\ufffd' not in text
 report.append({'file':str(path),'pages':len(d),'characters':len(text),'emptyPages':[i+1 for i,t in enumerate(texts) if len(t.strip())<50]})
(app/'test-results/handbook-pdf-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(report,ensure_ascii=False))
