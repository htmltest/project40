(function($) {

    $(document).ready(function() {

        $('.new-sections').each(function() {
            var curLength = $(this).find('.new-sections-item').length;
            if (curLength > 1) {
                $(this).find('.new-sections-item:gt(' + (Math.round(curLength / 2) - 1) + ')').addClass('right');
            }
        });

        $('.new-sections-tabs-menu a').eq(0).click(function(e) {
            $('.new-sections').removeClass('backside');

            $('.new-sections-tabs-menu a').removeClass('active');
            $(this).addClass('active');

            $('.new-sections-item').toggleClass('right');

            e.preventDefault();
        });

        $('.new-sections-tabs-menu a').eq(1).click(function(e) {
            $('.new-sections').addClass('backside');

            $('.new-sections-tabs-menu a').removeClass('active');
            $(this).addClass('active');

            $('.new-sections-item').toggleClass('right');

            e.preventDefault();
        });

    });

    $(window).load(function() {

        $('.new-sections-item-detail').each(function() {
            var curBlock = $(this);
            curBlock.css({'margin-top': -curBlock.outerHeight() / 2});
        });

    });

})(jQuery);

function ChangeFlatPrice(p)
{
	var price=document.getElementById('price');
	var price_otd=document.getElementById('price_otd');
	var flat_price=document.getElementById('flat_price');
	var price_=document.getElementById('price_');
	var price_otd_=document.getElementById('price_otd_');
	
	if(p==0)
	{
		flat_price.innerHTML=price.value;
		price_.className="act";
		price_otd_.className="";
	}

	if(p==1)
	{
		flat_price.innerHTML=price_otd.value;
		price_.className="";
		price_otd_.className="act";
	}
}

function ShowKorpusPopUp(ids, t, l)
{
	var current_popup=document.getElementById('current_popup');
	var o=document.getElementById('korpus'+ids);

	if(current_popup.value!='' && current_popup.value!=ids) document.getElementById('korpus'+current_popup.value).style.display='none';
	
	if(o.style.display=='block')
	{
		o.style.display='none';
		current_popup.value='';
	}
	else
	{
		o.style.display='block';
		o.style.marginTop=t-(parseFloat(o.offsetHeight)/2)+34+"px";
		if(l>=600) o.style.marginLeft=l-480+"px";
		else o.style.marginLeft=l+20+"px";
		current_popup.value=ids;
	}
}

function ShowKorpusPopUpTR(ids, t, l)
{
	var current_popup=document.getElementById('current_popup');
	var o=document.getElementById('korpusTR'+ids);

	if(current_popup.value!='' && current_popup.value!=ids) document.getElementById('korpusTR'+current_popup.value).style.display='none';
	
	if(o.style.display=='block')
	{
		o.style.display='none';
		current_popup.value='';
	}
	else
	{
		o.style.display='block';
		o.style.marginTop=t-(parseFloat(o.offsetHeight)/2)+34+"px";
		if(l>=600) o.style.marginLeft=l-480+"px";
		else o.style.marginLeft=l+20+"px";
		current_popup.value=ids;
	}
}

function ChangeCanvas(p)
{
	var o=document.getElementById('canvas3d');
	var s=document.getElementById('canvasplan');
	
	var bo=document.getElementById('btn3d');
	var bs=document.getElementById('btnplan');
	var planlegend=document.getElementById('planlegend');
	var treedlegend=document.getElementById('treedlegend');
	var plt=document.getElementById('plan-legend-tbl');
	
	if(p=='3d')
	{
		o.style.display='block';
		s.style.display='none';		
		bo.className='act';
		bs.className='';	
		if(plt) plt.style.marginTop='717px';
		planlegend.style.display='none';
		treedlegend.style.display='block';
	}
	else
	{
		o.style.display='none';
		s.style.display='block';	
		bo.className='';
		bs.className='act';	
		planlegend.style.display='block';
		treedlegend.style.display='none';
		if(plt) plt.style.marginTop='1117px';
	}
}

function ChangeCanvasUg(p)
{
	var o=document.getElementById('canvas3d');
	var s=document.getElementById('canvasplan');
	
	var bo=document.getElementById('btn3d');
	var bs=document.getElementById('btnplan');
	var planlegend=document.getElementById('planlegend');
	var treedlegend=document.getElementById('treedlegend');
	var plt=document.getElementById('plan-legend-tbl');
	
	if(p=='3d')
	{
		o.style.display='block';
		s.style.display='none';		
		bo.className='act';
		bs.className='';	
		if(plt) plt.style.marginTop='717px';
		planlegend.style.display='none';
		treedlegend.style.display='block';
	}
	else
	{
		o.style.display='none';
		s.style.display='block';	
		bo.className='';
		bs.className='act';	
		planlegend.style.display='block';
		treedlegend.style.display='none';
		if(plt) plt.style.marginTop='1017px';
	}
}

function SetSell(pr)
{
	var s=document.getElementById(pr+"sell");
	var str=document.getElementById(pr+"str");
	var cur=document.getElementById("cursell");
	
	if(cur.value!='')
	{
		document.getElementById(cur.value+"sell").className=cur.value;
		document.getElementById(cur.value+"str").src='local/layout/images/empty.gif';
		document.getElementById("div"+cur.value).style.display='none';
	}
	
	s.className=pr+'-act';
	str.src='local/layout/images/sell_str.gif';
	cur.value=pr;
	document.getElementById("div"+pr).style.display='block';
}

function SetKorpusSearch(p, pa)
{
	var korpus_param=document.getElementById("korpus_param");
	var korpus1=document.getElementById("korpuss1");
	var korpus2=document.getElementById("korpuss2");
	
	if(p==1)
	{
		korpus_param.value=1;
		korpus1.src="local/layout/images/"+pa+"/radio_act.gif";
		korpus2.src="local/layout/images/"+pa+"/radio.gif";
	}
	
	if(p==2)
	{
		korpus_param.value=2;
		korpus1.src="local/layout/images/"+pa+"/radio.gif";
		korpus2.src="local/layout/images/"+pa+"/radio_act.gif";
	}
}

function SelectAll(pa)
{
	if(arr.length>0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("korpus"+arr[i])) document.getElementById("korpus"+arr[i]).value=1;
			if(document.getElementById("korpuspic"+arr[i])) document.getElementById("korpuspic"+arr[i]).src="local/layout/images/"+pa+"/map_radio_act.png";
		}
	}
	
	SetSelected();
}

function DiSelectAll(pa)
{
	if(arr.length>0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("korpus"+arr[i])) document.getElementById("korpus"+arr[i]).value=0;
			if(document.getElementById("korpuspic"+arr[i])) document.getElementById("korpuspic"+arr[i]).src="local/layout/images/"+pa+"/map_radio.png";
		}
	}
	
	SetSelected();
}

function SetSelected()
{
	var s=document.getElementById("selected");
	var sf=document.getElementById("selectedfrm");
	
	if(arr.length>0)
	{
		var co=0;
		
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("korpus"+arr[i]))
			{
				if(document.getElementById("korpus"+arr[i]).value==1) co++;
			}
		}
		
		s.innerHTML=co;
		sf.innerHTML=co;
	}
}

function SetSearchKorpus(pa, path)
{
	var o=document.getElementById("korpus"+pa);
	var p=document.getElementById("korpuspic"+pa);

	if(o.value==1)
	{
		o.value=0;
		p.src="local/layout/images/"+path+"/map_radio.png";
	}
	else
	{
		o.value=1;
		p.src="local/layout/images/"+path+"/map_radio_act.png";
	}
	
	SetSelected();
}

function SetSqSearch(p, pa)
{
	var sq_param=document.getElementById("sq_param");
	var sq1=document.getElementById("sq1");
	var sq2=document.getElementById("sq2");
	
	if(p==1)
	{
		sq_param.value=1;
		sq1.src="local/layout/images/"+pa+"/radio_act.gif";
		sq2.src="local/layout/images/"+pa+"/radio.gif";
	}
	
	if(p==2)
	{
		sq_param.value=2;
		sq1.src="local/layout/images/"+pa+"/radio.gif";
		sq2.src="local/layout/images/"+pa+"/radio_act.gif";
	}
}

function SetPriceSearch(p, pa)
{
	var price_param=document.getElementById("price_param");
	var price1=document.getElementById("price1");
	var price2=document.getElementById("price2");
	
	if(p==1)
	{
		price_param.value=1;
		price1.src="local/layout/images/"+pa+"/radio_act.gif";
		price2.src="local/layout/images/"+pa+"/radio.gif";
	}
	
	if(p==2)
	{
		price_param.value=2;
		price1.src="local/layout/images/"+pa+"/radio.gif";
		price2.src="local/layout/images/"+pa+"/radio_act.gif";
	}
}

function SetFlorSearch(p, pa)
{
	var flor_param=document.getElementById("flor_param");
	var flor1=document.getElementById("flor1");
	var flor2=document.getElementById("flor2");
	var flor3=document.getElementById("flor3");
	
	if(p==1)
	{
		flor_param.value=1;
		flor1.src="local/layout/images/"+pa+"/radio_act.gif";
		flor2.src="local/layout/images/"+pa+"/radio.gif";
		flor3.src="local/layout/images/"+pa+"/radio.gif";
		
		document.getElementById("s2").className="select";
		document.getElementById("s3_1").className="select";
		document.getElementById("s3_2").className="select";
	}
	
	if(p==2)
	{
		flor_param.value=2;
		flor1.src="local/layout/images/"+pa+"/radio.gif";
		flor2.src="local/layout/images/"+pa+"/radio_act.gif";
		flor3.src="local/layout/images/"+pa+"/radio.gif";
		
		document.getElementById("s2").className="select-act";
		document.getElementById("s3_1").className="select";
		document.getElementById("s3_2").className="select";
	}
	
	if(p==3)
	{
		flor_param.value=3;
		flor1.src="local/layout/images/"+pa+"/radio.gif";
		flor2.src="local/layout/images/"+pa+"/radio.gif";
		flor3.src="local/layout/images/"+pa+"/radio_act.gif";
		
		document.getElementById("s2").className="select";
		document.getElementById("s3_1").className="select-act";
		document.getElementById("s3_2").className="select-act";
	}
}

function SetKomnatSearch(p, o, pa)
{
	var s=document.getElementById("k"+p);
	
	if(s.value==2)
	{
		s.value=1;
		o.src="local/layout/images/"+pa+"/checkbox_act.gif";
	}
	else
	{
		s.value=2;
		o.src="local/layout/images/"+pa+"/checkbox.gif";
	}
}

function CheckFlor()
{
	var flor_param=document.getElementById("flor_param");
	var from=document.getElementById("fromflor");
	var to=document.getElementById("toflor");

	if(flor_param.value==3)
	{
		var f=parseFloat(from.options[from.options.selectedIndex].value);
		var t=parseFloat(to.options[to.options.selectedIndex].value);

		if(f>=t) alert("Неверно выбран диапазон этажей");
		return false;
	}
	
	return true;
}

function SetKV()
{
	var s=document.getElementById("komnat");
	var n=s.options[s.options.selectedIndex].value;
	
	if(n=='')
	{
		for(var i=0;i<kk.length;i++)
		{
			document.getElementById("k"+kk[i]).value=1;
		}
	}
	else
	{
		for(var i=0;i<kk.length;i++)
		{
			document.getElementById("k"+kk[i]).value=2;
		}
		
		document.getElementById("k"+n).value=1;
	}
	
	document.forms['fullsearch'].submit();
}

// front 
function ShowSl(p, arr, obj, h, mar, path)
{
	if(arr.length!=0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("s"+arr[i])) document.getElementById("s"+arr[i]).style.display='block';
		}	
	}
	else 
	{
		if(document.getElementById("s"+p)) document.getElementById("s"+p).style.display='block';
	}
	
	var l=parseFloat(obj.offsetWidth);
	var m=parseFloat(obj.style.marginLeft);
	var h_=Math.ceil(h/2);
	var m_=Math.ceil(mar/2);
	
	var o=document.getElementById("flat-tbl-korpus"+p);
	var le=document.getElementById("left"+p);
	var re=document.getElementById("right"+p);

	if(o)
	{
		o.style.marginTop=h_-(parseFloat(o.offsetHeight)/2)+m_+54+"px";
	
		if(arr.length!=0)
		{
			if(l+m>=600) 
			{
				le.src='local/layout/images/empty.gif';
				re.src='local/layout/images/'+path+'/popup_str4.png';
				o.style.marginLeft=m-270+"px";
			}
			else 
			{
				le.src='local/layout/images/'+path+'/popup_str2.png';
				re.src='local/layout/images/empty.gif';
				o.style.marginLeft=l+m-10+"px";
			}
		}
		else
		{
			le.src='local/layout/images/empty.gif';
			re.src='local/layout/images/empty.gif';
			o.style.marginLeft=320+"px";
		}
	
		o.onmouseover=function (e) {
			ShowSl(p, arr, obj, h, mar, path);
		}	
	
		o.onmouseout=function (e) {
			HideSl(p, arr);
		}	
	}
}

function HideSl(p, arr)
{
	if(arr.length!=0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("s"+arr[i])) document.getElementById("s"+arr[i]).style.display='none';
		}	
	}
	else 
	{
		if(document.getElementById("s"+p)) document.getElementById("s"+p).style.display='none';
	}
	
	if(document.getElementById("flat-tbl-korpus"+p)) document.getElementById("flat-tbl-korpus"+p).style.marginLeft="-4000px";
}

// back 
function ShowSlb(p, arr, obj, h, mar, path)
{
	if(arr.length!=0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("s_"+arr[i])) document.getElementById("s_"+arr[i]).style.display='block';
		}	
	}
	else 
	{
		if(document.getElementById("s_"+p)) document.getElementById("s_"+p).style.display='block';
	}
	
	var l=parseFloat(obj.offsetWidth);
	var m=parseFloat(obj.style.marginLeft);
	var h_=Math.ceil(h/2);
	var m_=Math.ceil(mar/2);
	
	var o=document.getElementById("flat-tbl-korpus"+p);
	var le=document.getElementById("left"+p);
	var re=document.getElementById("right"+p);

	if(o)
	{
		o.style.marginTop=h_-(parseFloat(o.offsetHeight)/2)+m_+54+"px";
	
		if(arr.length!=0)
		{
			if(l+m>=600) 
			{
				le.src='local/layout/images/empty.gif';
				re.src='local/layout/images/'+path+'/popup_str4.png';
				o.style.marginLeft=m-270+"px";
			}
			else 
			{
				le.src='local/layout/images/'+path+'/popup_str2.png';
				re.src='local/layout/images/empty.gif';
				o.style.marginLeft=l+m-10+"px";
			}
		}
		else
		{
			le.src='local/layout/images/empty.gif';
			re.src='local/layout/images/empty.gif';
			o.style.marginLeft=320+"px";
		}
	
		o.onmouseover=function (e) {
			ShowSlb(p, arr, obj, h, mar, path);
		}	
	
		o.onmouseout=function (e) {
			HideSlb(p, arr);
		}	
	}
}

function HideSlb(p, arr)
{
	if(arr.length!=0)
	{
		for(var i=0;i<arr.length;i++)
		{
			if(document.getElementById("s_"+arr[i])) document.getElementById("s_"+arr[i]).style.display='none';
		}	
	}
	else 
	{
		if(document.getElementById("s_"+p)) document.getElementById("s_"+p).style.display='none';
	}
	
	if(document.getElementById("flat-tbl-korpus"+p)) document.getElementById("flat-tbl-korpus"+p).style.marginLeft="-4000px";
}

function ShowFront(u,w,h)
{
	document.getElementById("house").style.backgroundImage="url('"+u+"')";
	document.getElementById("house").style.backgroundRepeat="no-repeat";
	document.getElementById("house").style.backgroundPosition=h+"px "+w+"px";
	document.getElementById("front").style.display='block';
	document.getElementById("btnfront").className='btn-act';
	document.getElementById("back").style.display='none';
	document.getElementById("btnback").className='btn';
}

function ShowBack(u,w,h)
{
	document.getElementById("house").style.backgroundImage="url('"+u+"')";
	document.getElementById("house").style.backgroundRepeat="no-repeat";
	document.getElementById("house").style.backgroundPosition=h+"px "+w+"px";
	document.getElementById("front").style.display='none';
	document.getElementById("btnfront").className='btn';
	document.getElementById("back").style.display='block';
	document.getElementById("btnback").className='btn-act';
}

function ShowBasketPlan(ids, s)
{
	var o=document.getElementById("basketpopup"+ids);
	var hs=Math.ceil(parseFloat(s.offsetHeight)/2)
	o.style.display='block';

	var h=Math.ceil(parseFloat(o.offsetHeight)/2);

	o.style.marginTop=hs-h+"px";	
}

function HideBasketPlan(ids)
{
	document.getElementById("basketpopup"+ids).style.display='none';
}

function ShowFormMap()
{
	document.getElementById("map").style.display='block';
	document.getElementById("notmap").style.display='none';
}

function HideFormMap()
{
	document.getElementById("map").style.display='none';
	document.getElementById("notmap").style.display='block';

}

function ShowKorpusOnMap()
{
	var k=document.getElementById("karta-flat-btn");
	var kt=document.getElementById("karta-flat-btn-txt");
	var km=document.getElementById("korpus-map");
	
	if(km.style.display=='none')
	{
		km.style.display='block';
		k.className='karta-flat-btn-act';
		kt.innerHTML='Закрыть карту';
	}
	else
	{
		km.style.display='none';
		k.className='karta-flat-btn';
		kt.innerHTML='Корпус на карте';
	}
}

