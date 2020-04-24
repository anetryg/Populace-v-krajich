"use strict"
        window.addEventListener("load", workFunction);
        function workFunction() {
            const DOCUMENT = document.getElementById("kraje");
            const SVG = DOCUMENT.getSVGDocument();
            let PATHS = SVG.getElementsByTagName("path");
            let pathsSVG = Array.from(PATHS);

            function mouseClick(event){
               for (let i = 0; i < pathsSVG.length; i++) {
                   let x = (Math.floor(pathsSVG[i].dataset.obyv));
                   let y = (Math.floor(event.target.dataset.obyv));
                   if ((Math.abs(x-y)) > 600000){
                        pathsSVG[i].style.fill='#fff5eb';
                   } else if(((Math.abs(x-y)) < 600000) && ((Math.abs(x-y)) > 500000)){
                        pathsSVG[i].style.fill='#fee6ce';
                   } else if(((Math.abs(x-y)) < 500000) && ((Math.abs(x-y)) > 400000)){
                        pathsSVG[i].style.fill='#fdd0a2';
                   } else if(((Math.abs(x-y)) < 400000) && ((Math.abs(x-y)) > 300000)){
                        pathsSVG[i].style.fill='#fdae6b';
                   } else if(((Math.abs(x-y)) < 300000) && ((Math.abs(x-y)) > 200000)){
                        pathsSVG[i].style.fill='#fd8d3c';
                   }else if(((Math.abs(x-y)) < 200000) && ((Math.abs(x-y)) > 100000)){
                        pathsSVG[i].style.fill='#f16913';
                   }else if(((Math.abs(x-y)) < 100000) && ((Math.abs(x-y)) > 50000)){
                        pathsSVG[i].style.fill='#d94801';
                   }else if(((Math.abs(x-y)) < 50000)){
                        pathsSVG[i].style.fill='#a63603';
                   }
               }

                event.target.style.fill='#7f2704';
                document.getElementById("pocetobyvatel").innerHTML = "Populace kraje:  " + event.target.dataset.obyv;
            }

            pathsSVG.forEach(function(elem) {
                elem.addEventListener("click", mouseClick);
            });
        }