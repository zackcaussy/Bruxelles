var scr_top = {

	diff: 0,
	vitesse: 0,
	inter: '',
	duree: 5, 		//duree en seconde
	btn_vue: 120,		//moment ou le bouton est affiché

	init: function () {

		clearInterval(this.inter);

		this.diff = document.documentElement.scrollTop || document.body.scrollTop;

		this.vitesse = Math.round(this.diff / (50 * this.duree));

		this.inter = setInterval(scr_top.lance_scroll, 20);
	},

	lance_scroll: function () {

		var ddl = (navigator.vendor) ? document.body : document.documentElement;

		if (scr_top.diff - scr_top.vitesse <= 0) {

			ddl.scrollTop = 0;
			clearInterval(scr_top.inter);
			return false;
		}
		ddl.scrollTop -= scr_top.vitesse;
		scr_top.diff -= scr_top.vitesse;
	},

	tombou: function () {

		var hauteur_scroll = document.documentElement.scrollTop || document.body.scrollTop;

		hauteur_scroll > scr_top.btn_vue ? document.querySelector("#btt").style.opacity = 1 : document.querySelector("#btt").style.opacity = 0;
	}
}

typeof window.addEventListener == 'undefined' ? attachEvent("onscroll", scr_top.tombou) : document.addEventListener("scroll", scr_top.tombou, false);