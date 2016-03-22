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

(function($) {

    $(document).ready(function() {

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
                start: [Number($('#sizeRangeFrom').val()), Number($('#sizeRangeTo').val())],
                tooltips: true,
                range: {
                    'min': 36,
                    'max': 58
                },
                format: wNumb({
                    decimals: 0,
                    postfix: ' м&sup2;'
                })
            }).on('change', function(values, handle) {
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
                start: [Number($('#priceRangeFrom').val()), Number($('#priceRangeTo').val())],
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
            }).on('change', function(values, handle) {
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

        $('.flat-tbl-header-send a').click(function(e) {
            var curLink = $(this).parent();
            $('.window-send').toggle().css({'top': curLink.offset().top - $('.window-send').outerHeight() + 24, 'left': curLink.offset().left + curLink.width() / 2 - $('.window-send').outerWidth() / 2});
            $('.window-send-loading').hide();
            $('.window-send-form').show();
            $('.window-send-form-input input').val('').blur();
            $('.window-send-success').hide();
            e.preventDefault();
        });

        $('.window-send-close').click(function(e) {
            $('.window-send').hide();
            e.preventDefault();
        });

        $(document).click(function(e) {
            if ($(e.target).parents().filter('.window-send').length == 0 && !$(e.target).hasClass('window-send') && $(e.target).parents().filter('.flat-tbl-header-send').length == 0) {
                $('.window-send').hide();
            }
        });

        $('.window-send-form form').submit(function(e) {
            var curForm = $('.window-send-form form');
            $('.window-send-loading').show();
            $.ajax({
                type: 'POST',
                url: curForm.attr('action'),
                data: curForm.serialize(),
                dataType: 'html',
                cache: false
            }).done(function(html) {
                $('.window-send-loading').hide();
                $('.window-send-form').hide();
                $('.window-send-success').show();
            });
            e.preventDefault();
        });

        $('.gazeta-new-close').click(function(e) {
            $('.gazeta-new').toggleClass('closed');
            e.preventDefault();
        });

    });

})(jQuery);