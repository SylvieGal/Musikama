<article id="menu" style="background-color: aqua;">
    <div id="menu gsm">
        <i class="fas fa-bars" id="logomenu"></i>
        <form action="" id="menurun">
            <label for="link"></label>
            <select onchange="location =this.value" id="link">
                <option value="introduction.html" class="page1">Présentation</option>
                <option value="managers.html" class="page2">Nos Dirigeants</option>
                <option value="conductors.html" class="page3">Nos Chefs</option>
                <option value="events.html" class="page4">Nos Evènements</option>
                <option value="join_us.html" class="page5">Nous rejoindre</option>
                <option value="member.html" class="page6">Espace-membre</option>
            </select>
        </form>

    </div>

    <h2>Menu</h2>

    <ul id="list">

        <li><a class="page1" href="introduction.html">Présentation</a></li>
        <li><a class="page2" href="managers.html">Nos Dirigeants</a></li>
        <li><a class="page3" href="conductors.html">Nos Chefs</a></li>
        <li><a class="page4" href="events.html">Nos Evènements</a></li>
        <li><a class="page5" href="join_us.html">Nous rejoindre</a></li>
        <li><a class="page6" href="member.html">Espace-membre</a></li>
    </ul>

</article>
<?php
    $menu = $_Get['menu'];
   
    return $menu;
?>