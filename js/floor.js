<!-- 漢堡選單程式 -->
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");

	hamburger.addEventListener("click", mobileMenu);

	function mobileMenu() {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	}
	const navLink = document.querySelectorAll(".nav-link");

	navLink.forEach(n => n.addEventListener("click", closeMenu));

	function closeMenu() {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}

function showPopup(imageSrc, text) {
            const modal = document.getElementById('myModal');
            const modalImage = document.getElementById('modalImage');
            const modalText = document.getElementById('modalText');
			var textdiv = document.createElement('div');		// 新增最外框div
			textdiv.className = "itext";
			
            modalImage.src = imageSrc;
            modalText.textContent = text;
			
			textdiv.appendChild(modalText);
			modal.insertBefore(textdiv,modal.lastChild);
			
            modal.style.display = 'block';

            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
					
                }
            });
        }

        function closeModal() {
            const modal = document.getElementById('myModal');
            modal.style.display = 'none';
        }