function ShowGazeta()
{
	document.getElementById("gazeta-big").style.display='block';
	document.getElementById("gazeta-small").style.display='none';

}

function HideGazeta()
{
	document.getElementById("gazeta-big").style.display='none';
	document.getElementById("gazeta-small").style.display='block';

}

function ShowCentral()
{
	document.getElementById("central-short").style.display='none';
	document.getElementById("central-full").style.display='block';
	HideUg();
	HideSpin();
	HideHsUg();
	HideHsCentral();
	HideSP();
}

function HideCentral()
{
	document.getElementById("central-short").style.display='block';
	document.getElementById("central-full").style.display='none';
}

function ShowUg()
{
	document.getElementById("ug-short").style.display='none';
	document.getElementById("ug-full").style.display='block';
	HideCentral();
	HideSpin();
	HideHsUg();
	HideHsCentral();
	HideSP();
}

function HideUg()
{
	document.getElementById("ug-short").style.display='block';
	document.getElementById("ug-full").style.display='none';
}

function ShowSpin()
{
	document.getElementById("spin").style.display='none';
	document.getElementById("spin-act").style.display='block';
	HideCentral();
	HideUg();
	HideHsUg();
	HideHsCentral();
}

function HideSpin()
{
	document.getElementById("spin").style.display='block';
	document.getElementById("spin-act").style.display='none';
}

function OpenSNG()
{
	window.open("http://www.snrgy.ru", "_blank");
}

function ShowHsCentral()
{
	document.getElementById("hs-central").style.display='none';
	document.getElementById("hs-central-full").style.display='block';
	HideCentral();
	HideUg();
	HideSpin();
	HideHsUg();
	HideSP();
}

function HideHsCentral()
{
	document.getElementById("hs-central").style.display='block';
	document.getElementById("hs-central-full").style.display='none';
}

function OpenHsCentral()
{
	window.open("http://new-vatutinki.ru/centralniy/genplan/process/", "_parent");
}

function ShowHsUg()
{
	document.getElementById("hs-ug").style.display='none';
	document.getElementById("hs-ug-full").style.display='block';
	HideCentral();
	HideUg();
	HideSpin();
	HideHsCentral();
	HideSP();
}

function HideHsUg()
{
	document.getElementById("hs-ug").style.display='block';
	document.getElementById("hs-ug-full").style.display='none';
}

function OpenHsUg()
{
	window.open("http://new-vatutinki.ru/yuzhniy/genplan/process/stage-1/", "_parent");
}

function ShowSP()
{
	document.getElementById("shema-proezda").style.display='block';
	HideCentral();
	HideUg();
	HideSpin();
	HideHsCentral();
	HideHsUg();
}

function HideSP()
{
	document.getElementById("shema-proezda").style.display='none';
}

function FrmSbm()
{
	var r1=document.getElementById("rayon1");
	var r2=document.getElementById("rayon2");

	if(r1.value!=1 && r2.value!=1)
	{
		alert("Необходимо выбрать хотябы один район");
	}
	else document.forms['frm'].submit();
}

function FrmSbmFull()
{
	var r1=document.getElementById("rayon1");
	var r2=document.getElementById("rayon2");

	var k1=document.getElementById("k1");
	var k2=document.getElementById("k2");
	var k3=document.getElementById("k3");
	var k4=document.getElementById("k4");

	var f=0;

	if(r1.value!=1 && r2.value!=1)
	{
		alert("Необходимо выбрать хотябы один район");
	}
	else
	{
		if(k1 && k1.value==1) f=1;
		if(k2 && k2.value==1) f=1;
		if(k3 && k3.value==1) f=1;
		if(k4 && k4.value==1) f=1;

		if(f==0)
		{
			alert("Необходимо выбрать хотябы один тип комнат");
		}
		else document.forms['fullsearch'].submit();
	}
}

function SetRayon(pa, o)
{
	var r=document.getElementById("rayon"+pa);

	if(r)
	{
		if(r.value==1)
		{
			r.value=2;
			o.src="local/layout/images/main/checkbox.png";
		}
		else
		{
			r.value=1;
			o.src="local/layout/images/main/checkbox_act.png";
		}
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

function SetRayonSearch(pa, o)
{
	var r=document.getElementById("rayon"+pa);

	if(r)
	{
		if(r.value==1)
		{
			r.value=2;
			o.src="local/layout/images/main/checkbox.gif";
		}
		else
		{
			r.value=1;
			o.src="local/layout/images/main/checkbox_act.gif";
		}
	}
}

function SetTypeSearch(pa, o)
{
	var r=document.getElementById("type"+pa);

	if(r)
	{
		if(r.value==1)
		{
			r.value=2;
			o.src="local/layout/images/main/checkbox.gif";
		}
		else
		{
			r.value=1;
			o.src="local/layout/images/main/checkbox_act.gif";
		}
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

function ChangeK(o)
{
	if(o.options[o.options.selectedIndex].value=='')
	{
		if(document.getElementById("k1")) document.getElementById("k1").value=1;
		if(document.getElementById("k2")) document.getElementById("k2").value=1;
		if(document.getElementById("k3")) document.getElementById("k3").value=1;
		if(document.getElementById("k4")) document.getElementById("k4").value=1;
	}
	else
	{
		if(document.getElementById("k1")) document.getElementById("k1").value=0;
		if(document.getElementById("k2")) document.getElementById("k2").value=0;
		if(document.getElementById("k3")) document.getElementById("k3").value=0;
		if(document.getElementById("k4")) document.getElementById("k4").value=0;

		document.getElementById("k"+o.options[o.options.selectedIndex].value).value=1;
	}
}