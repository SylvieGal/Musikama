$(document).ready(function() {
    $("#menu ul li a").on("click", function(event) {
        event.preventDefault()
        let href = event.target.attributes.href.value
        let old = $("article.page.active")

        // remove previous deactivated page
        $("article.page").removeClass("deactive")

        // Deactive (CSS translation) the previous page
        old.removeClass("active")
        old.addClass("deactive")
        // Activate (CSS translation) new page
        $(href).addClass("active")
    })
})