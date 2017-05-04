/*
 * HillbillyTemplate - Customize SharePoint 2013/2016/O365 classic forms
 * Version 2.0 
 * @requires jQuery v1.7 or greater 
 * @requires unslider 
 *
 * Copyright (c) 2017 Mark Rackley / PAIT Group
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
/**
 * @description Customize SharePoint 2013/2016/O365 classic forms
 * @type jQuery
 * @name HillbillyTemplate
 * @category Plugins/HillbillyTemplate
 * @author Mark Rackley / http://www.markrackley.net / mrackley@paitgroup.com
 *
 * 
 * 	Usage: 
 * 
 *    jQuery(document).ready(function($) {
 *  
 *        $().HillbillyTemplate({
 *            genericAlert: false, // true/false - show a generic error alert if SharePoint Form error happens on submission
 *            alertErrorText: "<message>" // - What message do you want to display to the users if there is a SharePoint form error on submit
 *        });
 *		
 *   });
 *  
 *  Additional Documentation for version 2:
 *  
 *   Template span for save button
 *   <span class="hillbillyFormSave"></span>
 * 
 *   Template span for cancel button
 *   <span class="hillbillyFormCancel"></span>
 *
 * 
 */

(function ($) {

  //interval used on PreSaveItem to check and notify for any error spans
  var internval;
	
  $.fn.HillbillyTemplate = function (options)
  {
	     var opt = $.extend({}, {
			genericAlert: false,
            moveSaveCancel: false,
            alertErrorText: "Form errors exist. Please fix form errors and try again"
        }, options);
                
        //loop through all the spans in the custom layout        
        $("span.hillbillyForm").each(function()
        {
            //get the display name from the custom layout
            displayName = $(this).attr("data-displayName");
            elem = $(this);
            //find the corresponding field from the default form and move it
            //into the custom layout
            $("table.ms-formtable td").each(function(){
                if (this.innerHTML.indexOf('FieldName="'+displayName+'"') != -1){
                    $(this).contents().appendTo(elem);
                }
            });
        });
       
        if($("span.hillbillyFormCancel").length)
        {
        	$("input[type='button'][value='Cancel']").hide();
        	var cancel = $("input[type='button'][value='Cancel']")[0];
	        $("span.hillbillyFormCancel").append($(cancel ));
	        $(cancel).show();
        }

        if($("span.hillbillyFormSave").length)
        {
	        $("input[type='button'][value='Save']").hide();;	        
	        var save = $("input[type='button'][value='Save']")[0];
	        $("span.hillbillyFormSave").append($(save));
	        $(save).show();
        }
        
        if(opt.genericAlert)
        {
	        $("input[type='button'][value='Save']").click(function(){
	        	interval = setInterval(function(){CheckForErrors(opt.alertErrorText)},500);
	        });
        }
	}
	
	function CheckForErrors(alertErrorText)
	{
		if($("span[role='alert']").length)
		{
			alert(alertErrorText);
			 clearInterval(interval);
		}
	}
	
})(jQuery);
