

  $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 450
            });
        });
        
          $(function() {
            $( "#datepicker" ).datepicker();
        });
        
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                      return false;
                    }
                }
            });
        });
     /*   $(function() {
  		$("#contact-us").on("submit",function (e) {
		$('#reserve').click(function(){
			e.preventDefault();
			var first_name = $("#first_name").val();
			var last_name =$("#last_name").val();
			var nic =$("#nic").val():
			var email = $("#email").val();
			var town =$("#town").val();
			var phone =$("#phone").val():
 			var datepicker = $("#datepicker").val();
			var reserve_time_from =$("#reserve_time_from").val();
			var reserve_time_to =$("#reserve_time_to").val():
			var subject = $("#subject").val();
			var cost =$("#cost").val();
			$.post("reserve.php", {first_name:first_name,last_name:last_name,nic:nic,email:email,town:town,phone:phone,datepicker:datepicker,reserve_time_from:reserve_time_from,reserve_time_to:reserve_time_to,subject:subject,cost:cost},
				function(msg){
					alert(msg);
				});

		});

	}); */

         $(function(){
	      $("#includedContentAvailability").load("availability.html"); 
	    });


