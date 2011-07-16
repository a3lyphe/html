_
=
this
?
this
:
window
;//

_['_']
=
{}
;//

_['HYPE']
=
{}
;//renamed to HYPE from HTML to make it universal for HTML,HTML(versioned),SVG, MATHML, etc.


_['HYPE']['doctype']
=
function(v)
{
	return V=document.doctype?V:null;
}()
;//separate doctype and DOCTYPE to make definitions modular and later loadable asynchronously, for the moment just to sort them visually

_['HYPE']['DOCTYPE']
=
function(v)
{
	var MARKUP
	return document.implementation.createDocumentType
	(
		'svg:svg'//TEASER::QualifiedName
		,
		'-//W3C//DTD SVG 1.1//EN'//PUBLIC::PublicIdentifier
		,
		'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'//SYSTEM::SystemIdentifier
	)
	;
}()
;//hype-doctype

_['HYPE']['DOCTYPES']
=
{
	'HTML':{}//
	,
	'SVG':{}//
}
;//hype-doctypes[html|svg]

_['HYPE']['DOCTYPES']['SVG']
=
{
	'TEASER':['svg','svg']
	,
	'PUBLIC':['-','//','W3C','//','DTD',' ','SVG',' ','1','.','1','//','EN']
	,
	'SYSTEM':['http',':','//','www','.','w3','.','org','/','Graphics','/','SVG','/','1','.','1','/','svg','1','1','.','dtd']
}
;//hype-doctypes-svg

_['HYPE']['GAGS']
=
{
	'HTML':{}//
}
;//hype-gags[html]

_['HYPE']['GAGS']['HTML']['5']
=
{
	'ACTUAL':
	[
		'ARTICLE','ASIDE','AUDIO','BB','CANVAS','COMMAND','DATAGRID','DATALIST','DETAILS','DIALOG','EMBED','FIGURE','FOOTER','HEADER','HGROUP','MARK','METER','NAV','OUTPUT','PROGRESS','RUBY','RP','RT','SECTION','SOURCE','TIME','VIDEO'
	]
	,
	'BEFORE':
	[
		'A','ABBR','ADDRESS','AREA','B','BASE','BDO','BLOCKQUOTE','BODY','BR','BUTTON','CAPTION','CITE','CODE','COL','COLGROUP','DD','DEL','DIV','DFN','DL','DT','EM','FIELDSET','FORM','H1','H2','H3','H4','H5','H6','HEAD','HR','HTML','I','IFRAME','IMG','INPUT','INS','KBD','LABEL','LEGEND','LI','LINK','MAP','MENU','META','NOSCRIPT','OBJECT','OL','OPTGROUP','OPTION','P','PARAM','PRE','Q','SAMP','SCRIPT','SELECT','SMALL','SPAN','STRONG','STYLE','SUB','SUP','TABLE','TBODY','TD','TEXTAREA','TFOOT','TH','THEAD','TITLE','TR','UL','VAR'
	]
	,
	'BEYOND':
	[
		'ACRONYM','APPLET','BASEFONT','BIG','CENTER','DIR','FONT','FRAME','FRAMESET','ISINDEX','NOFRAMES','S','STRIKE','TT','U','XMP'
	]
}
;//hype-gags-html[5[actual|before|beyond]]::the html-5-tags that HYPE do deliver[ACTUAL|BEFORE] and do not deliver [BEYOND] ...

_['HYPE']['LAGS']
=
{
	'HTML':{}//
}
;//hype-lags[html]

_['HYPE']['LAGS']['HTML']['5']
=
{
	'LOCALS':
	[
		'en-EN','en-US','de-DE',''
	]
	,
	'VOCALS':
	[
		'ARIA'
	]
	,
	'TARGET':
	[
		['MICROSOFT'
			,
			['INTERNETEXPLORER'
				,
				['NUMBER'
					,
					['4'
						,
						['0']//
					]
					,
					['5'
						,
						['0']//
						,
						['5']//
					]//
					,
					['6'
						,
						['0']//
					]
					,
					['7'
						,
						['0']//
					]
					,
					['8'
						,
						['0']//
					]
					,
					['9'
						,
						['0']//
					]
				]//hype-lags-html-5-target-microsoft-interexplorer-version
			]//hype-lags-html-5-target-microsoft-internetexplorer
		]//hype-lags-html-5-target-microsoft
		,
		['MOZILLA'
			,//
			['FIREFOX'
				,
				['NUMBER'
					['1'
						,
						['0']//
					]
					,
					['2'
						,
						['0']//
					]
					,
					['3'
						,
						['0']//
						,
						['5']//
						,
						['6']//
						,
						['7']//
					]
					,
					['4'
						,
						['0']//
					]
					,
					['5'
						,
						['0']//
					]
				]
			]//hype-lags-html-5-target-mozilla-firefox-number
			,
			['FENNEC'
				,
				['NUMBER'
					,
					['1'
						,
						['0']//
					]
				]//hype-lags-html-5-target-mozilla-fennec-number
			]//hype-lags-html-5-target-mozilla-fennec
		]//hype-lags-html-5-target-mozilla
		,
		['OPERA',
			['DESKTOP'
				,
				['NUMBER'
					['9'
						,
						['0']//
					]
				]//hype-lags-html-5-target-opera-desktop-number
			]//hype-lags-html-5-target-opera-desktop
			,
			['MOBILE'
				,
				['NUMBER'
					['9'
						,
						['0']//
					]
				]//hype-lags-html-5-target-opera-mobile-number
			]//hype-lags-html-5-target-opera-mobile
		]
	]
}
;//hype-lags-html-5[LOCALS|VOCALS|TARGET]::the html-5 -rendering-platforms, -screen-readers and -locales that are known to HYPE and it does lag on by lacking support for ...


_['HYPE']['TAGS']
=
{
	'HTML':{}//
}
;//hype-tags[html]

_['HYPE']['TAGS']['HTML']=
{
	'ARTICLE':
	function(v)
	{
		return document.createElement('ARTICLE');
	}()
	,
	'ASIDE':
	function(v)
	{
		return document.createElement('ASIDE');
	}()
	,
	'AUDIO':
	function(v)
	{
		return document.createElement('AUDIO');
	}()
	,
	'BB':
	function(v)
	{
		return document.createElement('BB');
	}()
	,
	'CANVAS':
	function(v)
	{
		return document.createElement('CANVAS');
	}()
	,
	'COMMAND':
	function(v)
	{
		return document.createElement('COMMAND');
	}()
	,
	'DATAGRID':
	function(v)
	{
		return document.createElement('DATAGRID');
	}()
	,
	'DATALIST':
	function(v)
	{
		return document.createElement('DATALIST');
	}()
	,
	'DETAILS':
	function(v)
	{
		return document.createElement('DETAILS');
	}()
	,
	'DIALOG':
	function(v)
	{
		return document.createElement('DIALOG');
	}()
	,
	'EMBED':
	function(v)
	{
		return document.createElement('EMBED');
	}()
	,
	'FIGURE':
	function(v)
	{
		return document.createElement('FIGURE');
	}()
	,
	'FOOTER':
	function(v)
	{
		return document.createElement('FOOTER');
	}()
	,
	'HEADER':
	function(v)
	{
		return document.createElement('HEADER');
	}()
	,
	'HGROUP':
	function(v)
	{
		return document.createElement('HGROUP');
	}()
	,
	'MARK':
	function(v)
	{
		return document.createElement('MARK');
	}()
	,
	'METER':
	function(v)
	{
		return document.createElement('METER');
	}()
	,
	'NAV':
	function(v)
	{
		return document.createElement('NAV');
	}()
	,
	'OUTPUT':
	function(v)
	{
		return document.createElement('OUTPUT');
	}()
	,
	'PROGRESS':
	function(v)
	{
		return document.createElement('PROGRESS');
	}()
	,
	'RUBY':
	function(v)
	{
		return document.createElement('RUBY');
	}()
	,
	'RP':
	function(v)
	{
		return document.createElement('RP');
	}()
	,
	'RT':
	function(v)
	{
		return document.createElement('RT');
	}()
	,
	'SECTION':
	function(v)
	{
		return document.createElement('SECTION');
	}()
	,
	'SOURCE':
	function(v)
	{
		return document.createElement('SOURCE');
	}()
	,
	'TIME':
	function(v)
	{
		return document.createElement('TIME');
	}()
	,
	'VIDEO':
	function(v)
	{
		return document.createElement('VIDEO');
	}()
	,
	'A':
	function(v)
	{
		return document.createElement('A');
	}()
	,
	'ABBR':
	function(v)
	{
		return document.createElement('ABBR');
	}()
	,
	'ADDRESS':
	function(v)
	{
		return document.createElement('ADDRESS');
	}()
	,
	'AREA':
	function(v)
	{
		return document.createElement('AREA');
	}()
	,
	'B':
	function(v)
	{
		return document.createElement('B');
	}()
	,
	'BASE':
	function(v)
	{
		return document.createElement('BASE');
	}()
	,
	'BDO':
	function(v)
	{
		return document.createElement('BDO');
	}()
	,
	'BLOCKQUOTE':
	function(v)
	{
		return document.createElement('BLOCKQUOTE');
	}()
	,
	'BODY':
	function(v)
	{
		return document.createElement('BODY');
	}()
	,
	'BR':
	function(v)
	{
		return document.createElement('BR');
	}()
	,
	'BUTTON':
	function(v)
	{
		return document.createElement('BUTTON');
	}()
	,
	'CAPTION':
	function(v)
	{
		return document.createElement('CAPTION');
	}()
	,
	'CITE':
	function(v)
	{
		return document.createElement('CITE');
	}()
	,
	'CODE':
	function(v)
	{
		return document.createElement('CODE');
	}()
	,
	'COL':
	function(v)
	{
		return document.createElement('COL');
	}()
	,
	'COLGROUP':
	function(v)
	{
		return document.createElement('COLGROUP');
	}()
	,
	'DD':
	function(v)
	{
		return document.createElement('DD');
	}()
	,
	'DEL':
	function(v)
	{
		return document.createElement('DEL');
	}()
	,
	'DIV':
	function(v)
	{
		return document.createElement('DIV');
	}()
	,
	'DFN':
	function(v)
	{
		return document.createElement('DFN');
	}()
	,
	'DL':
	function(v)
	{
		return document.createElement('DL');
	}()
	,
	'DT':
	function(v)
	{
		return document.createElement('DT');
	}()
	,
	'EM':
	function(v)
	{
		return document.createElement('EM');
	}()
	,
	'FIELDSET':
	function(v)
	{
		return document.createElement('FIELDSET');
	}()
	,
	'FORM':
	function(v)
	{
		return document.createElement('FORM');
	}()
	,
	'H1':
	function(v)
	{
		return document.createElement('H1');
	}()
	,
	'H2':
	function(v)
	{
		return document.createElement('H2');
	}()
	,
	'H3':
	function(v)
	{
		return document.createElement('H3');
	}()
	,
	'H4':
	function(v)
	{
		return document.createElement('H4');
	}()
	,
	'H5':
	function(v)
	{
		return document.createElement('H5');
	}()
	,
	'H6':
	function(v)
	{
		return document.createElement('H6');
	}()
	,
	'HEAD':
	function(v)
	{
		return document.createElement('HEAD');
	}()
	,
	'HR':
	function(v)
	{
		return document.createElement('HR');
	}()
	,
	'HTML':
	function(v)
	{
		return document.createElement('HTML');
	}()
	,
	'I':
	function(v)
	{
		return document.createElement('I');
	}()
	,
	'IFRAME':
	function(v)
	{
		return document.createElement('IFRAME');
	}()
	,
	'IMG':
	function(v)
	{
		return document.createElement('IMG');
	}()
	,
	'INPUT':
	function(v)
	{
		return document.createElement('INPUT');
	}()
	,
	'INS':
	function(v)
	{
		return document.createElement('INS');
	}()
	,
	'KBD':
	function(v)
	{
		return document.createElement('KBD');
	}()
	,
	'LABEL':
	function(v)
	{
		return document.createElement('LABEL');
	}()
	,
	'LEGEND':
	function(v)
	{
		return document.createElement('LEGEND');
	}()
	,
	'LI':
	function(v)
	{
		return document.createElement('LI');
	}()
	,
	'LINK':
	function(v)
	{
		return document.createElement('LINK');
	}()
	,
	'MAP':
	function(v)
	{
		return document.createElement('MAP');
	}()
	,
	'MENU':
	function(v)
	{
		return document.createElement('MENU');
	}()
	,
	'META':
	function(v)
	{
		return document.createElement('META');
	}()
	,
	'NOSCRIPT':
	function(v)
	{
		return document.createElement('NOSCRIPT');
	}()
	,
	'OBJECT':
	function(v)
	{
		return document.createElement('OBJECT');
	}()
	,
	'OL':
	function(v)
	{
		return document.createElement('OL');
	}()
	,
	'OPTGROUP':
	function(v)
	{
		return document.createElement('OPTGROUP');
	}()
	,
	'OPTION':
	function(v)
	{
		return document.createElement('OPTION');
	}()
	,
	'P':
	function(v)
	{
		return document.createElement('P');
	}()
	,
	'PARAM':
	function(v)
	{
		return document.createElement('PARAM');
	}()
	,
	'PRE':
	function(v)
	{
		return document.createElement('PRE');
	}()
	,
	'Q':
	function(v)
	{
		return document.createElement('Q');
	}()
	,
	'SAMP':
	function(v)
	{
		return document.createElement('SAMP');
	}()
	,
	'SCRIPT':
	function(v)
	{
		return document.createElement('SCRIPT');
	}()
	,
	'SELECT':
	function(v)
	{
		return document.createElement('SELECT');
	}()
	,
	'SMALL':
	function(v)
	{
		return document.createElement('SMALL');
	}()
	,
	'SPAN':
	function(v)
	{
		return document.createElement('SPAN');
	}()
	,
	'STRONG':
	function(v)
	{
		return document.createElement('STRONG');
	}()
	,
	'STYLE':
	function(v)
	{
		return document.createElement('STYLE');
	}()
	,
	'SUB':
	function(v)
	{
		return document.createElement('SUB');
	}()
	,
	'SUP':
	function(v)
	{
		return document.createElement('SUP');
	}()
	,
	'TABLE':
	function(v)
	{
		return document.createElement('TABLE');
	}()
	,
	'TBODY':
	function(v)
	{
		return document.createElement('TBODY');
	}()
	,
	'TD':
	function(v)
	{
		return document.createElement('TD');
	}()
	,
	'TEXTAREA':
	function(v)
	{
		return document.createElement('TEXTAREA');
	}()
	,
	'TFOOT':
	function(v)
	{
		return document.createElement('TFOOT');
	}()
	,
	'TH':
	function(v)
	{
		return document.createElement('TH');
	}()
	,
	'THEAD':
	function(v)
	{
		return document.createElement('THEAD');
	}()
	,
	'TITLE':
	function(v)
	{
		return document.createElement('TITLE');
	}()
	,
	'TR':
	function(v)
	{
		return document.createElement('TR');
	}()
	,
	'UL':
	function(v)
	{
		return document.createElement('UL');
	}()
	,
	'VAR':
	function(v)
	{
		return document.createElement('VAR');
	}()
	,
	'!DOCTYPE':
	function(v)
	{
		return document.createElement('DOCTYPE');
	}()
}
;//self-hype-tags

for each
(
	var
	[name,value]
	in
	document.getElementsByTagName
	('SCRIPT')
)
{
	document.write("Name: " + name + ", Value: " + value + "<br>\n");
}


_['_']
=
{}
;//global-buffer



_['_']['TAG']
=
{}
;//global-buffer::TAG

_['_']['TAGS']
=
''
;//global-buffer::TAGS

for each(_['_']['TAG'] in _['HYPE']['TAGS']['HTML'])
{
	_['_']['TAGS']
	+=
	_['_']['TAG']
	;
}

alert(_['_']['TAGS']);
