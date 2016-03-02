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

function ShowKorpusPopUp2(ids, t, l)
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
		o.style.marginTop=t+34+"px";
		o.style.marginLeft=l-(parseFloat(o.offsetWidth)/2)+22+"px";
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

function ShowKorpusPopUpTR2(ids, t, l)
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
		o.style.marginTop=t+34+"px";
		o.style.marginLeft=l-(parseFloat(o.offsetWidth)/2)+22+"px";
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
	}
	else
	{
		km.style.display='none';
		k.className='karta-flat-btn';
	}
}


(function($) {

    $(document).ready(function() {

        $('.new-central-top-menu ul li div').click(function() {
            $('.new-central-top').toggleClass('open');
        });

        $('.new-central-top-title').click(function(e) {
            $('.new-central-top').toggleClass('open');
            e.preventDefault();
        });

        $('.flat-btn-print').click(function(e) {
            window.print();
            e.preventDefault();
        });

        $('.progress').each(function() {
            var curBlock = $(this);

            curBlock.find('.progress-ctrl-preview li:first').addClass('active');

            var monthsAll = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

            function searchInArray(el, arr) {
                var result = false;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == el) {
                        result = true;
                    }
                }
                return result;
            }

            var periodYears = [];

            curBlock.find('.progress-ctrl-preview li').each(function() {
                var curYear = Number($(this).data('year'));
                if (!searchInArray(curYear, periodYears)) {
                    periodYears.unshift(curYear);
                }
            });

            var firstMonth = Number(curBlock.find('.progress-ctrl-preview li:last').data('month'));
            var lastMonth = Number(curBlock.find('.progress-ctrl-preview li:first').data('month'));

            function hasDate(newYear, newMonth) {
                var result = false;
                curBlock.find('.progress-ctrl-preview li').each(function() {
                    var curYear = Number($(this).data('year'));
                    var curMonth = Number($(this).data('month'));
                    if (newYear == curYear && newMonth == curMonth) {
                        result = true;
                    }
                });
                return result;
            }

            var periodHTML = '';
            for (var i = 0; i < periodYears.length; i++) {
                periodHTML = '<li><span>' + periodYears[i] + '</span></li>' + periodHTML;

                var startMonth = 1;
                var endMonth = 12;
                if (i == 0) {
                    startMonth = firstMonth;
                }
                if (i == periodYears.length - 1) {
                    endMonth = lastMonth;
                }

                for (var j = startMonth; j <= endMonth; j++) {
                    if (hasDate(periodYears[i], j)) {
                        periodHTML = '<li><a href="#" data-year="' + periodYears[i] + '" data-month="' + j + '">' + monthsAll[j - 1] + '</a></li>' + periodHTML;
                    } else {
                        periodHTML = '<li>' + monthsAll[j - 1] + '</li>' + periodHTML;
                    }
                }
            }
            curBlock.find('.progress-ctrl-periods-inner').html('<ul>' + periodHTML + '</ul>');
            curBlock.find('.progress-ctrl-periods-inner a:first').parent().addClass('active');

            if (curBlock.find('.progress-ctrl-periods-inner ul').width() <= curBlock.find('.progress-ctrl-periods-inner').width()) {
                curBlock.find('.progress-ctrl-periods-next').css({'display': 'none'});
            }

            if (curBlock.find('.progress-ctrl-preview-inner ul').width() <= curBlock.find('.progress-ctrl-preview-inner').width()) {
                curBlock.find('.progress-ctrl-preview-next').css({'display': 'none'});
            }

            curBlock.find('.progress-big').data('disableAnimation', true);
            curBlock.find('.progress-big').data('curIndex', 0);
            curBlock.find('.progress-ctrl-periods').data('disableAnimation', true);
            curBlock.find('.progress-ctrl-periods').data('curIndex', 0);
            curBlock.find('.progress-ctrl-preview').data('disableAnimation', true);
            curBlock.find('.progress-ctrl-preview').data('curIndex', 0);

            curBlock.find('.progress-ctrl-periods-next').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-ctrl-periods').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-ctrl-periods ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-ctrl-periods').data('curIndex');
                    curIndex++;
                    curLeft -= curBlock.find('.progress-ctrl-periods li').eq(curIndex - 1).outerWidth();

                    curBlock.find('.progress-ctrl-periods-prev').css({'display': 'block'});
                    if (curBlock.find('.progress-ctrl-periods-inner ul').width() + curLeft <= curBlock.find('.progress-ctrl-periods-inner').width()) {
                        curBlock.find('.progress-ctrl-periods-next').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-periods').data('curIndex', curIndex);
                    curBlock.find('.progress-ctrl-periods').data('disableAnimation', false);
                    curBlock.find('.progress-ctrl-periods ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-ctrl-periods').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-ctrl-periods-prev').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-ctrl-periods').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-ctrl-periods ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-ctrl-periods').data('curIndex');
                    curIndex--;
                    curLeft += curBlock.find('.progress-ctrl-periods li').eq(curIndex).outerWidth();

                    curBlock.find('.progress-ctrl-periods-next').css({'display': 'block'});
                    if (curIndex == 0) {
                        curBlock.find('.progress-ctrl-periods-prev').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-periods').data('curIndex', curIndex);
                    curBlock.find('.progress-ctrl-periods').data('disableAnimation', false);
                    curBlock.find('.progress-ctrl-periods ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-ctrl-periods').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-ctrl-preview-next').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-ctrl-preview').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-ctrl-preview ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-ctrl-preview').data('curIndex');
                    curIndex++;
                    curLeft -= curBlock.find('.progress-ctrl-preview li').eq(curIndex - 1).outerWidth();

                    curBlock.find('.progress-ctrl-preview-prev').css({'display': 'block'});
                    if (curBlock.find('.progress-ctrl-preview-inner ul').width() + curLeft <= curBlock.find('.progress-ctrl-preview-inner').width()) {
                        curBlock.find('.progress-ctrl-preview-next').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-preview').data('curIndex', curIndex);
                    curBlock.find('.progress-ctrl-preview').data('disableAnimation', false);
                    curBlock.find('.progress-ctrl-preview ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-ctrl-preview').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-ctrl-preview-prev').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-ctrl-preview').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-ctrl-preview ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-ctrl-preview').data('curIndex');
                    curIndex--;
                    curLeft += curBlock.find('.progress-ctrl-preview li').eq(curIndex).outerWidth();

                    curBlock.find('.progress-ctrl-preview-next').css({'display': 'block'});
                    if (curIndex == 0) {
                        curBlock.find('.progress-ctrl-preview-prev').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-preview').data('curIndex', curIndex);
                    curBlock.find('.progress-ctrl-preview').data('disableAnimation', false);
                    curBlock.find('.progress-ctrl-preview ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-ctrl-preview').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-big-next').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-big').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-big ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-big').data('curIndex');
                    curIndex++;
                    curLeft -= curBlock.find('.progress-big li').eq(curIndex - 1).outerWidth();

                    curBlock.find('.progress-big-prev').css({'display': 'block'});
                    if (curBlock.find('.progress-big ul').width() + curLeft <= curBlock.find('.progress-big').width()) {
                        curBlock.find('.progress-big-next').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-preview-inner li.active').removeClass('active');
                    curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).addClass('active');
                    var previewIndex = curBlock.find('.progress-ctrl-preview').data('curIndex');
                    if (curIndex - previewIndex > 5) {
                        curBlock.find('.progress-ctrl-preview-next').click();
                    }
                    var periodYear = curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).data('year');
                    var periodMonth = curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).data('month');
                    var newIndex = -1;
                    curBlock.find('.progress-ctrl-periods li a').each(function() {
                        var curYear = Number($(this).data('year'));
                        var curMonth = Number($(this).data('month'));
                        if (newIndex == -1 && periodYear == curYear && periodMonth == curMonth) {
                            newIndex = curBlock.find('.progress-ctrl-periods li').index($(this).parent());
                        }
                    });
                    curBlock.find('.progress-ctrl-periods li.active').removeClass('active');
                    curBlock.find('.progress-ctrl-periods li').eq(newIndex).addClass('active');

                    curBlock.find('.progress-big').data('curIndex', curIndex);
                    curBlock.find('.progress-big').data('disableAnimation', false);
                    curBlock.find('.progress-big ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-big').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-big-prev').click(function(e) {
                var curBlock = $(this).parents().filter('.progress');

                if (curBlock.find('.progress-big').data('disableAnimation')) {
                    var curLeft = Number(curBlock.find('.progress-big ul').css('left').replace(/px/, ''));
                    var curIndex = curBlock.find('.progress-big').data('curIndex');
                    curIndex--;
                    curLeft += curBlock.find('.progress-big li').eq(curIndex).outerWidth();

                    curBlock.find('.progress-big-next').css({'display': 'block'});
                    if (curIndex == 0) {
                        curBlock.find('.progress-big-prev').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-preview-inner li.active').removeClass('active');
                    curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).addClass('active');
                    var previewIndex = curBlock.find('.progress-ctrl-preview').data('curIndex');
                    if (curIndex - previewIndex < 0) {
                        curBlock.find('.progress-ctrl-preview-prev').click();
                    }
                    var periodYear = curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).data('year');
                    var periodMonth = curBlock.find('.progress-ctrl-preview-inner li').eq(curIndex).data('month');
                    var newIndex = -1;
                    curBlock.find('.progress-ctrl-periods li a').each(function() {
                        var curYear = Number($(this).data('year'));
                        var curMonth = Number($(this).data('month'));
                        if (newIndex == -1 && periodYear == curYear && periodMonth == curMonth) {
                            newIndex = curBlock.find('.progress-ctrl-periods li').index($(this).parent());
                        }
                    });
                    curBlock.find('.progress-ctrl-periods li.active').removeClass('active');
                    curBlock.find('.progress-ctrl-periods li').eq(newIndex).addClass('active');

                    curBlock.find('.progress-big').data('curIndex', curIndex);
                    curBlock.find('.progress-big').data('disableAnimation', false);
                    curBlock.find('.progress-big ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-big').data('disableAnimation', true);
                    });
                }

                e.preventDefault();
            });

            curBlock.find('.progress-ctrl-preview-inner li a').click(function(e) {
                var curLi = $(this).parent();
                if (!curLi.hasClass('active') && curBlock.find('.progress-big').data('disableAnimation')) {
                    var curIndex = curBlock.find('.progress-ctrl-preview-inner li').index($(this).parent());
                    curBlock.find('.progress-ctrl-preview-inner li.active').removeClass('active');
                    curLi.addClass('active');

                    var curLeft = -curIndex * curBlock.find('.progress-big li').eq(curIndex).outerWidth();

                    if (curIndex == 0) {
                        curBlock.find('.progress-big-prev').css({'display': 'none'});
                    } else {
                        curBlock.find('.progress-big-prev').css({'display': 'block'});
                    }
                    if (curBlock.find('.progress-big ul').width() + curLeft <= curBlock.find('.progress-big').width()) {
                        curBlock.find('.progress-big-next').css({'display': 'none'});
                    } else {
                        curBlock.find('.progress-big-next').css({'display': 'block'});
                    }

                    var periodYear = curLi.data('year');
                    var periodMonth = curLi.data('month');
                    var newIndex = -1;
                    curBlock.find('.progress-ctrl-periods li a').each(function() {
                        var curYear = Number($(this).data('year'));
                        var curMonth = Number($(this).data('month'));
                        if (newIndex == -1 && periodYear == curYear && periodMonth == curMonth) {
                            newIndex = curBlock.find('.progress-ctrl-periods li').index($(this).parent());
                        }
                    });
                    curBlock.find('.progress-ctrl-periods li.active').removeClass('active');
                    curBlock.find('.progress-ctrl-periods li').eq(newIndex).addClass('active');

                    curBlock.find('.progress-big').data('curIndex', curIndex);
                    curBlock.find('.progress-big').data('disableAnimation', false);
                    curBlock.find('.progress-big ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-big').data('disableAnimation', true);
                    });
                }
                e.preventDefault();
            });

            curBlock.find('.progress-ctrl-periods-inner li a').click(function(e) {
                var curLi = $(this).parent();
                if (!curLi.hasClass('active')) {
                    var curIndex = curBlock.find('.progress-ctrl-periods-inner li').index($(this).parent());
                    curBlock.find('.progress-ctrl-periods-inner li.active').removeClass('active');
                    curLi.addClass('active');

                    var periodYear = $(this).data('year');
                    var periodMonth = $(this).data('month');
                    var newIndex = -1;
                    curBlock.find('.progress-ctrl-preview li').each(function() {
                        var curYear = Number($(this).data('year'));
                        var curMonth = Number($(this).data('month'));
                        if (newIndex == -1 && periodYear == curYear && periodMonth == curMonth) {
                            newIndex = curBlock.find('.progress-ctrl-preview li').index($(this));
                        }
                    });
                    curBlock.find('.progress-ctrl-preview-inner li').eq(newIndex).find('a').click();

                    if (newIndex > curBlock.find('.progress-ctrl-preview li').length - 6) {
                        newIndex = curBlock.find('.progress-ctrl-preview li').length - 6;
                    }
                    var curLeft = -newIndex * curBlock.find('.progress-ctrl-preview li:first').outerWidth();

                    curBlock.find('.progress-ctrl-preview-next').css({'display': 'block'});
                    if (curBlock.find('.progress-ctrl-preview-inner ul').width() + curLeft <= curBlock.find('.progress-ctrl-preview-inner').width()) {
                        curBlock.find('.progress-ctrl-preview-next').css({'display': 'none'});
                    }
                    curBlock.find('.progress-ctrl-preview-prev').css({'display': 'block'});
                    if (newIndex == 0) {
                        curBlock.find('.progress-ctrl-preview-prev').css({'display': 'none'});
                    }

                    curBlock.find('.progress-ctrl-preview').data('curIndex', newIndex);
                    curBlock.find('.progress-ctrl-preview').data('disableAnimation', false);
                    curBlock.find('.progress-ctrl-preview ul').animate({'left': curLeft}, function() {
                        curBlock.find('.progress-ctrl-preview').data('disableAnimation', true);
                    });
                }
                e.preventDefault();
            });

        });

        $('.section-new-select div').click(function() {
            var curBlock = $(this).parent();
            if (curBlock.hasClass('open')) {
                curBlock.removeClass('open');
            } else {
                $('.section-new-select.open').removeClass('open');
                curBlock.addClass('open');
            }
        });

        $(document).click(function(e) {
            if ($(e.target).parents().filter('.section-new-select').length == 0) {
                $('.section-new-select.open').removeClass('open');
            }
        });

        $('.storages-tabs ul li a').click(function(e) {
            var curLink = $(this);
            if (!curLink.parent().hasClass('active')) {
                $('.storages-tabs ul li.active').removeClass('active');
                curLink.parent().addClass('active');
                $('.storages-scheme img').stop(true, true).animate({'left': -curLink.data('left')});

                var curIndex = $('.storages-tabs ul li').index(curLink.parent());
                $('.storages-info-item').stop(true, true);
                $('.storages-info-item:visible').fadeOut(function() {
                    $('.storages-info-item').eq(curIndex).fadeIn();
                });
            }
            e.preventDefault();
        });

        $('.new-search-radio input:checked').parent().addClass('checked');
        $('.new-search-radio').click(function(e) {
            var curName = $(this).find('input').attr('name');
            $('.new-search-radio input[name="' + curName + '"]').parent().removeClass('checked');
            $(this).addClass('checked');
            $(this).find('input').prop('checked', true).trigger('change');
            showResultsPreview($(this));
        });

        $('#floorOnly').change(function() {
            $('#floorOnlyRadio').each(function() {
                var curName = $(this).find('input').attr('name');
                $('.new-search-radio input[name="' + curName + '"]').parent().removeClass('checked');
                $(this).addClass('checked');
                $(this).find('input').prop('checked', true).trigger('change');
            });
        });

        $('#floorFrom, #floorTo').change(function() {
            $('#floorRangeRadio').each(function() {
                var curName = $(this).find('input').attr('name');
                $('.new-search-radio input[name="' + curName + '"]').parent().removeClass('checked');
                $(this).addClass('checked');
                $(this).find('input').prop('checked', true).trigger('change');
            });
        });

        $('.new-search-select select').change(function() {
            showResultsPreview($(this).parents().filter('.new-search-select'));
        });

        if ($('.new-search-select select').length > 0) {
            $('.new-search-select select').chosen({disable_search: true});
        }

        $('.new-search-checkbox input:checked').parent().addClass('checked');
        $('.new-search-checkbox').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
            showResultsPreview($(this));
        });

        if ($('#new-search-slider-size').length > 0) {
            noUiSlider.create(document.getElementById('new-search-slider-size'), {
                start: [36, 58],
                tooltips: true,
                range: {
                    'min': 36,
                    'max': 58
                },
                format: wNumb({
                    decimals: 0,
                    postfix: ' м&sup2;'
                })
            }).on('update', function(values, handle) {
                $('#sizeRangeRadio').each(function() {
                    var curName = $(this).find('input').attr('name');
                    $('.new-search-radio input[name="' + curName + '"]').parent().removeClass('checked');
                    $(this).addClass('checked');
                    $(this).find('input').prop('checked', true).trigger('change');
                });

                var value = values[handle];
                if (handle) {
                    $('#sizeRangeTo').val(value.replace(/ м&sup2;/g, ''));
                } else {
                    $('#sizeRangeFrom').val(value.replace(/ м&sup2;/g, ''));
                }
                showResultsPreview($('#new-search-slider-size'));
            });
        }

        if ($('#new-search-slider-price').length > 0) {
            noUiSlider.create(document.getElementById('new-search-slider-price'), {
                start: [3939740, 9827740],
                tooltips: true,
                range: {
                    'min': 3939740,
                    'max': 9827740
                },
                format: wNumb({
                    decimals: 0,
                    thousand: ',',
                    postfix: '.-',
                })
            }).on('update', function(values, handle) {
                $('#priceRangeRadio').each(function() {
                    var curName = $(this).find('input').attr('name');
                    $('.new-search-radio input[name="' + curName + '"]').parent().removeClass('checked');
                    $(this).addClass('checked');
                    $(this).find('input').prop('checked', true).trigger('change');
                });

                var value = values[handle];
                if (handle) {
                    $('#priceRangeTo').val(value.replace(/.-/g, '').replace(/,/g, ''));
                } else {
                    $('#priceRangeFrom').val(value.replace(/.-/g, '').replace(/,/g, ''));
                }
                showResultsPreview($('#new-search-slider-price'));
            });
        }

        if ($('#new-search-slider-price-short').length > 0) {
            noUiSlider.create(document.getElementById('new-search-slider-price-short'), {
                start: [3939740, 9827740],
                tooltips: true,
                range: {
                    'min': 3939740,
                    'max': 9827740
                },
                format: wNumb({
                    decimals: 0,
                    thousand: ',',
                    postfix: '.-',
                })
            }).on('update', function(values, handle) {
                var value = values[handle];
                if (handle) {
                    $('#priceRangeToShort').val(value.replace(/.-/g, '').replace(/,/g, ''));
                } else {
                    $('#priceRangeFromShort').val(value.replace(/.-/g, '').replace(/,/g, ''));
                }
                showResultsPreview($('#new-search-slider-price-short'));
            });
        }

        $('.new-search-close-link a').click(function(e) {
            $('.new-search').toggleClass('closed');
            var curLink = $(this);
            var curText = curLink.html();
            curLink.html(curLink.attr('rel'));
            curLink.attr('rel', curText);
            if ($('.new-search').hasClass('closed')) {
                $('#isShort').val('1');
            } else {
                $('#isShort').val('0');
            }
            e.preventDefault();
        });

        $('.new-search-results-preview-close').click(function(e) {
            $('.new-search-results-preview').hide();
            e.preventDefault();
        });

        function showResultsPreview(block) {
            $('.new-search-results-preview').css({'left': block.offset().left + block.width() / 2, 'top': block.offset().top + block.height()}).show();
        }

        $('.add-basket-flat-btn a').click(function(e) {
            $(this).toggleClass('active');
        });

        $('.flat-btn-floor').click(function(e) {
            $(this).toggleClass('active');
            $('.flat-map').toggleClass('open');
            e.preventDefault();
        });

        $('.karta-flat-btn-bg').click(function() {
            ShowKorpusOnMap();
        });

        $('.flat-map-bg').click(function() {
            $('.flat-map').removeClass('open');
            $('.add-basket-flat-btn a').removeClass('open');
        });

        $('.new-map-item-icon').click(function(e) {
            var curItem = $(this).parent();
            if (curItem.hasClass('open')) {
                curItem.removeClass('open');
            } else {
                $('.new-map-item.open').removeClass('open');
                curItem.addClass('open');
            }
            e.preventDefault();
        });

        $('.new-map-item-popup-close').click(function(e) {
            $(this).parent().parent().removeClass('open');
            e.preventDefault();
        });

    });

    $(window).load(function() {

        $('.events-list').each(function() {
            var curList = $(this);
            curList.find('.events-item-inner').css({'min-height': 0 + 'px'});

            curList.find('.events-item-inner').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.height();
                var curTop = curBlock.offset().top;

                curList.find('.events-item-inner').each(function() {
                    var otherBlock = $(this);
                    if (otherBlock.offset().top == curTop) {
                        var newHeight = otherBlock.height();
                        if (newHeight > curHeight) {
                            curBlock.css({'min-height': newHeight + 'px'});
                        } else {
                            otherBlock.css({'min-height': curHeight + 'px'});
                        }
                    }
                });
            });
        });

    });

})(jQuery);