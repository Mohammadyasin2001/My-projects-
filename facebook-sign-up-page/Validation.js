$(document).ready(function() {
    $('#SF').validate({
        rules:{
            fname:{
                required:true,
               // minlength:5,
            },
            sname:{
                required:true,
            
            },
            mobile:{
                required:true,     
            },
            password:{
                required:true,
                minlength:8,
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            gender:{
                required:true,
            },
    
        },
        messages:{
            
                fname:{
                    required:"please enter the first name"
                },
            }
        
    });
    });
    