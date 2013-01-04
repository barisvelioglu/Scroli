Scroli
======

Scrolling html li elements on a horizontal line

You can scroll anyting inside the li elements. (Text, Images, etc...)

For example:

    <style type="text/css">
         .scrollable { position: relative; width:1024px; height:80px; overflow:hidden; }
         .scrollable ul { position:absolute; }
         .scrollable ul li { float:left; list-style:none; }
    </style>

    <div class="scrollable">
        <ul>
             <li>Test1</li>
             <li>Test2</li>
             <li>Test3</li>
             <li>Test4</li>
             <li>Test5</li>
        </ul>
    </div>
    
    <script type="text/javascript">
         $('.scrollable').scroli({ speed: 2000 });
    </script>
