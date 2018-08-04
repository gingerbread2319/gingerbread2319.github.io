function move1() {
    			var elem = document.getElementById("myBar1"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 95) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move2() {
    			var elem = document.getElementById("myBar2"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 70) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move3() {
    			var elem = document.getElementById("myBar3"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 85) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move4() {
    			var elem = document.getElementById("myBar4"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 80) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move5() {
    			var elem = document.getElementById("myBar5"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 60) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move6() {
    			var elem = document.getElementById("myBar6"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 75) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move7() {
    			var elem = document.getElementById("myBar7"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 60) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move8() {
    			var elem = document.getElementById("myBar8"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 70) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move9() {
    			var elem = document.getElementById("myBar9"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 85) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move10() {
    			var elem = document.getElementById("myBar10"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 95) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move11() {
    			var elem = document.getElementById("myBar11"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 80) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move12() {
    			var elem = document.getElementById("myBar12"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 75) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move13() {
    			var elem = document.getElementById("myBar13"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 70) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move14() {
    			var elem = document.getElementById("myBar14"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 60) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function move15() {
    			var elem = document.getElementById("myBar15"); 
				var width = 10;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 60) {
						clearInterval(id);
					} else {
						width++; 
						elem.style.width = width + '%'; 
						elem.innerHTML = width * 1 + '%';
					}
				}
			}
			
			function callAll() {
				move1();
				move2();
				move3();
				move4();
				move5();
				move6();
				move7();
				move8();
				move9();
				move10();
				move11();
				move12();
				move13();
				move14();
				move15();
			}
			var counter = 0;
			$(window).scroll(function() {
			    if (checkVisible($('#skills')) && counter == 0) {
			        callAll();
			        counter = 1;
			    } else {
			        
			    }
			});

			function checkVisible( elm, eval ) {
			    eval = eval || "visible";
			    var vpH = $(window).height(), // Viewport Height
			        st = $(window).scrollTop(), // Scroll Top
			        y = $(elm).offset().top,
			        elementHeight = $(elm).height();
			    
			    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
			    if (eval == "above") return ((y < (vpH + st)));
			}