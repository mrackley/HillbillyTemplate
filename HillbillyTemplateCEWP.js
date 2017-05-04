<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script> 

<link type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" > 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 

<script type="text/javascript" src="../../SiteAssets/HillbillyTemplate.js"></script> 

<style type="text/css">  
	.ms-formtable
  {display:none;}
</style>

<script type="text/javascript">

   jQuery(document).ready(function($) {
  
        $().HillbillyTemplate({
            genericAlert: true,
            moveSaveCancel: true,
            alertErrorText: "Form errors exist. Please fix form errors and try again"
        });

        $( "#accordion" ).accordion();

   });

</script>

<h1> MY COOL TASK FORM </h1>
 <span class="hillbillyFormSave"></span>
<span class="hillbillyFormCancel"></span>

<div id="accordion">

  <h3>Task Info</h3>
  <div>
    <p>
    	<table><tr><td>
         Task Name:</td><td> <span class="hillbillyForm" data-displayName="Task Name"></span>
         </td></tr><tr><td>
         Description:</td><td> <span class="hillbillyForm" data-displayName="Description"></span>
         </td></tr><tr><td>
         Status:</td><td> <span class="hillbillyForm" data-displayName="Task Status"></span>
         </td></tr><tr><td>
         Assigned To:</td><td> <span class="hillbillyForm" data-displayName="Assigned To"></span>
         </td></tr><tr><td>
         Due Date:</td><td> <span class="hillbillyForm" data-displayName="Due Date"></span>
         </td></tr></table>
    </p>
  </div>
  <h3>More Info</h3>
  <div>
    <p>
    	<table><tr><td>
         Start Date:</td><td> <span class="hillbillyForm" data-displayName="Start Date"></span>
         </td></tr><tr><td>
         Priority:</td><td> <span class="hillbillyForm" data-displayName="Priority"></span>
         </td></tr><tr><td>
         % Complete:</td><td> <span class="hillbillyForm" data-displayName="% Complete"></span>
         </td></tr><tr><td>
         Predecessors:</td><td> <span class="hillbillyForm" data-displayName="Predecessors"></span>
         </td></tr></table>
    </p>
  </div>

  </div>